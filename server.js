import express from 'express';
import { PrismaClient } from './src/generated/prisma/index.js'; // Adjusted import path for ES Modules
import bcrypt from 'bcryptjs';
import cors from 'cors'; // Import cors
import jwt from 'jsonwebtoken'; // Added for JWT

const app = express();
const port = process.env.PORT || 3001; // Backend will run on a different port than React dev server

// Middleware
app.use(cors()); // Enable CORS for all routes and origins
app.use(express.json());

const prisma = new PrismaClient();
const JWT_SECRET = 'your-very-secret-key-for-dev-only'; // IMPORTANT: Use env var in production!

// Middleware to authenticate JWT
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (token == null) {
    return res.status(401).json({ message: 'Authentication token required.' });
  }

  jwt.verify(token, JWT_SECRET, (err, userPayload) => {
    if (err) {
      console.error('JWT Verification Error:', err.message);
      if (err.name === 'TokenExpiredError') {
        return res.status(403).json({ message: 'Token expired. Please log in again.' });
      }
      return res.status(403).json({ message: 'Invalid or malformed token.' });
    }
    req.user = userPayload; // Attaches { userId: identification, email: email }
    next();
  });
}

// Simple test route
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend API!' });
});

// Registration Route
app.post('/api/auth/register', async (req, res) => {
  const {
    identification, // Added: User-provided ID (cédula)
    firstName: req_firstName,
    lastName: req_lastName,
    secondLastName: req_secondLastName,
    fullName, // Keep for fallback
    email,
    password,
    phoneNumber
  } = req.body;

  let firstName = req_firstName;
  let lastName = req_lastName;
  let secondLastName = req_secondLastName;

  // Basic validation
  if (!identification || !email || !password) {
    return res.status(400).json({ message: 'Identification (cédula), email, and password are required.' });
  }

  if (!firstName && !lastName && fullName) {
    console.warn('Registration: Received fullName, splitting into parts. Frontend should be updated to send separate name fields.');
    const nameParts = fullName.split(' ');
    firstName = nameParts[0];
    lastName = nameParts.length > 1 ? nameParts[1] : '';
    secondLastName = nameParts.length > 2 ? nameParts.slice(2).join(' ') : '';
  }
  
  if (!firstName || !lastName) {
    return res.status(400).json({ message: 'First name, last name, identification, email, and password are required.' });
  }

  try {
    // Check if user already exists by email or identification
    const existingNeighborByEmail = await prisma.neighbor.findUnique({
      where: { email: email },
    });

    if (existingNeighborByEmail) {
      return res.status(400).json({ message: 'Email already in use.' });
    }

    const existingNeighborById = await prisma.neighbor.findUnique({
        where: { identification: parseInt(identification) }, // Ensure identification is an Int
    });

    if (existingNeighborById) {
        return res.status(400).json({ message: 'Identification (cédula) already in use.' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new neighbor
    const newNeighbor = await prisma.neighbor.create({
      data: {
        identification: parseInt(identification), // Added: Use provided identification
        first_name: firstName,
        last_name: lastName,
        second_last_name: secondLastName || null,
        email: email,
        password: hashedPassword,
        phone_number: phoneNumber ? parseInt(phoneNumber) : null,
      },
    });

    // Don't send back the password hash
    const { password: _, ...neighborWithoutPassword } = newNeighbor;
    res.status(201).json({ message: 'User registered successfully', user: neighborWithoutPassword });

  } catch (error) {
    console.error('Registration error:', error);
    if (error.code === 'P2002') { // Unique constraint failed
        // error.meta.target is an array of fields that caused the violation
        if (error.meta?.target?.includes('email')) {
            return res.status(400).json({ message: 'Email already in use (from db constraint).' });
        }
        if (error.meta?.target?.includes('identification')) {
            return res.status(400).json({ message: 'Identification (cédula) already in use (from db constraint).' });
        }
    }
    if (error instanceof prisma.PrismaClientValidationError) {
        return res.status(400).json({ message: 'Invalid data provided for registration.', details: error.message });
    }
    res.status(500).json({ message: 'Internal server error during registration.' });
  }
});

// Login Route
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  try {
    const neighbor = await prisma.neighbor.findUnique({
      where: { email: email },
    });

    if (!neighbor) {
      return res.status(401).json({ message: 'Invalid credentials. User not found.' });
    }

    const isMatch = await bcrypt.compare(password, neighbor.password || '');

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials. Password incorrect.' });
    }

    const { password: _, ...neighborWithoutPassword } = neighbor;

    // Generate JWT
    const token = jwt.sign(
      { userId: neighbor.identification, email: neighbor.email },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({ 
      message: 'Login successful', 
      user: neighborWithoutPassword,
      token: token // Send token to client
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error during login.' });
  }
});

// Get All Reports Route
app.get('/api/reports', async (req, res) => {
  try {
    const reports = await prisma.report.findMany({
      orderBy: {
        report_date: 'desc',
      },
      include: {
        neighbor: { // Include the neighbor who reported
          select: {
            identification: true, // This is the neighbor_id
            first_name: true,
            last_name: true,
            // email: true, // Optional: include if you want to display it on the card
          },
        },
        problem: { // Include problem details
          include: {
            problem_type: { // Include problem type name
              select: {
                type_name: true,
              },
            },
          },
        },
        canton: { // Include canton name
          select: { canton_name: true }
        },
        district_report_districtTodistrict: { // Include district name (using the relation name from schema)
            select: { district_name: true }
        }
      },
    });
    res.status(200).json(reports);
  } catch (error) {
    console.error('Error fetching reports:', error);
    res.status(500).json({ message: 'Internal server error while fetching reports.' });
  }
});

// Get Single Report by ID (for editing, requires ownership)
app.get('/api/reports/:reportId', authenticateToken, async (req, res) => {
  const { reportId } = req.params;
  const authenticatedUserId = req.user.userId; // ID of the logged-in user

  try {
    const report = await prisma.report.findUnique({
      where: {
        report_id: parseInt(reportId),
      },
      include: {
        problem: {
          include: {
            problem_type: true, // To get problem_type_id and problem_type_name
          },
        },
        canton: true,
        district_report_districtTodistrict: true, // Using the relation name from schema
        // We don't need to include neighbor here as we're verifying ownership
      },
    });

    if (!report) {
      return res.status(404).json({ message: 'Report not found.' });
    }

    // Verify ownership
    if (report.neighbor_id !== authenticatedUserId) {
      return res.status(403).json({ message: 'Access denied. You are not the owner of this report.' });
    }

    // Prepare the report data to be sent, similar to ReportFormPage needs
    // The frontend will likely need IDs for dropdowns (problem_type_id, problem_id, canton_id, district_id)
    // and existing text values (report_title, neighborhood, street).
    const responseReport = {
      report_id: report.report_id,
      report_title: report.report_title,
      problem_type_id: report.problem?.problem_type?.problem_type_id, // For pre-selecting problem type
      problem_id: report.problem_id,
      canton_id: report.canton_id,
      district_id: report.district, // Assuming 'district' is the foreign key field name in 'report' table
      neighborhood: report.neighborhood,
      street: report.street,
      status: report.status, // Good to have for context, though likely not editable by user
      // Include names for display if helpful, though IDs are primary for form re-population
      problem_type_name: report.problem?.problem_type?.type_name,
      problem_name: report.problem?.problem_name,
      canton_name: report.canton?.canton_name,
      district_name: report.district_report_districtTodistrict?.district_name,
    };
    
    res.status(200).json(responseReport);

  } catch (error) {
    console.error(`Error fetching report ${reportId}:`, error);
    if (error instanceof SyntaxError || error.name === 'SyntaxError' || error.message.includes('invalid input syntax for type integer')) {
      return res.status(400).json({ message: 'Invalid report ID format.' });
    }
    res.status(500).json({ message: 'Internal server error while fetching report.' });
  }
});

// Get All Problem Types Route
app.get('/api/problem-types', async (req, res) => {
  try {
    const problemTypes = await prisma.problem_type.findMany({
      orderBy: {
        type_name: 'asc',
      },
    });
    res.status(200).json(problemTypes);
  } catch (error) {
    console.error('Error fetching problem types:', error);
    res.status(500).json({ message: 'Internal server error while fetching problem types.' });
  }
});

// Get Problems (optionally filtered by problem_type_id)
app.get('/api/problems', async (req, res) => {
  const { problemTypeId } = req.query;
  try {
    let problems;
    if (problemTypeId) {
      problems = await prisma.problem.findMany({
        where: {
          problem_type_id: parseInt(problemTypeId),
        },
        orderBy: {
          problem_name: 'asc', // Corrected from description to problem_name
        },
      });
    } else {
      // Optionally, fetch all problems if no type ID is provided, or return error/empty
      problems = await prisma.problem.findMany({
        orderBy: {
          problem_name: 'asc', // Corrected from description to problem_name
        },
      }); 
    }
    res.status(200).json(problems);
  } catch (error) {
    console.error('Error fetching problems:', error);
    if (error instanceof SyntaxError || error.name === 'SyntaxError') {
        return res.status(400).json({ message: 'Invalid problemTypeId format.' });
    }
    // It's good practice to also check for Prisma specific errors here if they are distinct
    // For instance, Prisma.PrismaClientKnownRequestError for query engine errors
    if (error.code) { // A simple check if it's a Prisma-like error with a code
        console.error('Prisma error code:', error.code);
    }
    res.status(500).json({ message: 'Internal server error while fetching problems.' });
  }
});

// Get All Cantons Route
app.get('/api/cantons', async (req, res) => {
  try {
    const cantons = await prisma.canton.findMany({
      orderBy: {
        canton_name: 'asc', // Changed from name to canton_name to match schema
      },
    });
    res.status(200).json(cantons);
  } catch (error) {
    console.error('Error fetching cantons:', error);
    res.status(500).json({ message: 'Internal server error while fetching cantons.' });
  }
});

// Get Districts (optionally filtered by canton_id)
app.get('/api/districts', async (req, res) => {
  const { cantonId } = req.query;
  try {
    let districts;
    if (cantonId) {
      districts = await prisma.district.findMany({
        where: {
          // Assuming your district table has a canton_id foreign key
          // If not, this part needs adjustment based on your actual schema relationship
          // For now, let's assume a direct canton_id field exists on the district model
          // This might need to be updated after checking schema.prisma for district relations
          canton_id: parseInt(cantonId), 
        },
        orderBy: {
          district_name: 'asc',
        },
      });
    } else {
      // Fetch all districts if no cantonId is provided (optional, or return error)
      districts = await prisma.district.findMany({
        orderBy: {
          district_name: 'asc',
        },
      });
    }
    res.status(200).json(districts);
  } catch (error) {
    console.error('Error fetching districts:', error);
    if (error instanceof SyntaxError || error.name === 'SyntaxError') {
      return res.status(400).json({ message: 'Invalid cantonId format.' });
    }
    if (error.code) {
        console.error('Prisma error code fetching districts:', error.code);
    }
    res.status(500).json({ message: 'Internal server error while fetching districts.' });
  }
});

// Create New Report Route
app.post('/api/reports', authenticateToken, async (req, res) => {
  const authenticatedUserId = req.user.userId; // Get user ID from token payload

  const {
    // neighbor_id is NO LONGER taken from body
    report_title,
    problem_id,
    canton_id,
    district_id,
    neighborhood,
    street
  } = req.body;

  // Updated validation: neighbor_id is from token, not body
  if (!report_title || !problem_id || !canton_id || !district_id || !neighborhood || !street) {
    return res.status(400).json({
      message: 'Missing required fields: report_title, problem_id, canton_id, district_id, neighborhood, street.',
      received: req.body
    });
  }

  try {
    const newReport = await prisma.report.create({
      data: {
        neighbor_id: parseInt(authenticatedUserId), // Use ID from token
        report_title: report_title,
        problem_id: parseInt(problem_id),
        canton_id: parseInt(canton_id),
        district: parseInt(district_id), // Ensure this matches the actual FK field name in schema.prisma if different
        neighborhood: neighborhood,
        street: street,
        report_date: new Date(), // Set server-side
        report_time: new Date(), // Set server-side
        status: 'Waiting',       // Default status
      },
    });

    res.status(201).json({
        message: 'Report created successfully',
        report: newReport,
    });

  } catch (error) {
    console.error('Error creating report:', error);
    if (error.code === 'P2003') { // Foreign key constraint failed
        // error.meta.field_name will tell which foreign key failed e.g. "report_problem_id_fkey (index)"
        return res.status(400).json({ message: `Invalid ID for foreign key. Check if IDs for problem, canton, district, or neighbor are correct. Field: ${error.meta?.field_name}` });
    }
    if (error.code === 'P2025') { // Related record not found
        const cause = error.meta?.cause || 'Unknown related record.';
        return res.status(400).json({ message: `Related record not found. Ensure IDs exist. Details: ${cause}` });
    }
    if (error instanceof prisma.PrismaClientValidationError) {
        return res.status(400).json({ message: 'Invalid data provided for report.', details: error.message });
    }
    res.status(500).json({ message: 'Internal server error while creating report.' });
  }
});

// Get Neighbor Profile by ID
app.get('/api/neighbors/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const neighbor = await prisma.neighbor.findUnique({
      where: { identification: parseInt(id) },
      select: { // Explicitly select fields to exclude password
        identification: true,
        first_name: true,
        last_name: true,
        second_last_name: true,
        email: true,
        phone_number: true,
        // Do not include password or other sensitive fields directly
      }
    });
    if (!neighbor) {
      return res.status(404).json({ message: 'Neighbor not found.' });
    }
    res.status(200).json(neighbor);
  } catch (error) {
    console.error(`Error fetching neighbor ${id}:`, error);
    if (error instanceof SyntaxError || error.name === 'SyntaxError') {
      return res.status(400).json({ message: 'Invalid neighbor ID format.' });
    }
    res.status(500).json({ message: 'Internal server error while fetching neighbor profile.' });
  }
});

// Update Neighbor Profile by ID
app.put('/api/neighbors/:id', async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, secondLastName, phoneNumber } = req.body;

  // Basic validation
  if (!firstName || !lastName) {
    return res.status(400).json({ message: 'First name and last name are required.' });
  }

  try {
    const updatedNeighbor = await prisma.neighbor.update({
      where: { identification: parseInt(id) },
      data: {
        first_name: firstName,
        last_name: lastName,
        second_last_name: secondLastName || null,
        phone_number: phoneNumber ? parseInt(phoneNumber) : null,
      },
      select: { // Return updated data, excluding password
        identification: true,
        first_name: true,
        last_name: true,
        second_last_name: true,
        email: true,
        phone_number: true,
      }
    });
    res.status(200).json({ message: 'Profile updated successfully', user: updatedNeighbor });
  } catch (error) {
    console.error(`Error updating neighbor ${id}:`, error);
    if (error.code === 'P2025') { // Record to update not found
      return res.status(404).json({ message: 'Neighbor not found for update.' });
    }
    if (error instanceof prisma.PrismaClientValidationError) {
      return res.status(400).json({ message: 'Invalid data provided for update.', details: error.message });
    }
    res.status(500).json({ message: 'Internal server error while updating profile.' });
  }
});

// Delete Neighbor Account by ID
app.delete('/api/neighbors/:id', async (req, res) => {
  const { id } = req.params;
  const neighborId = parseInt(id);

  if (isNaN(neighborId)) {
    return res.status(400).json({ message: 'Invalid neighbor ID format.' });
  }

  try {
    // Use a transaction to ensure atomicity
    await prisma.$transaction(async (tx) => {
      // Step 1: Disassociate reports from the neighbor (set neighbor_id to null)
      await tx.report.updateMany({
        where: { neighbor_id: neighborId },
        data: { neighbor_id: null },
      });

      // Step 2: Delete the neighbor
      const deletedNeighbor = await tx.neighbor.delete({
        where: { identification: neighborId },
      });
      // Note: deletedNeighbor will contain the data of the deleted record if needed for logging
    });

    res.status(200).json({ message: 'Account deleted successfully.' });

  } catch (error) {
    console.error(`Error deleting neighbor ${neighborId}:`, error);
    if (error.code === 'P2025') { // Record to delete not found
      // This might occur if the user was already deleted in a rapid double-click scenario, for example.
      // Or if reports update failed and transaction rolled back, then neighbor delete fails.
      return res.status(404).json({ message: 'Neighbor not found for deletion, or associated data handling failed.' });
    }
    res.status(500).json({ message: 'Internal server error while deleting account.' });
  }
});

// Update Report by ID (requires ownership)
app.put('/api/reports/:reportId', authenticateToken, async (req, res) => {
  const { reportId } = req.params;
  const authenticatedUserId = req.user.userId;
  const { 
    report_title,
    problem_id, 
    canton_id, 
    district_id, 
    neighborhood, 
    street 
  } = req.body;

  // Validate incoming data
  if (!report_title || !problem_id || !canton_id || !district_id || !neighborhood || !street) {
    return res.status(400).json({
      message: 'Missing required fields: report_title, problem_id, canton_id, district_id, neighborhood, street.',
      received: req.body
    });
  }

  try {
    const reportToUpdate = await prisma.report.findUnique({
      where: { report_id: parseInt(reportId) },
    });

    if (!reportToUpdate) {
      return res.status(404).json({ message: 'Report not found for update.' });
    }

    // Verify ownership
    if (reportToUpdate.neighbor_id !== authenticatedUserId) {
      return res.status(403).json({ message: 'Access denied. You are not the owner of this report and cannot update it.' });
    }

    // Update the report
    const updatedReport = await prisma.report.update({
      where: { report_id: parseInt(reportId) },
      data: {
        report_title: report_title,
        problem_id: parseInt(problem_id),
        canton_id: parseInt(canton_id),
        district: parseInt(district_id), // Ensure this matches the field name in your schema.prisma for report.district_id
        neighborhood: neighborhood,
        street: street,
        updated_at: new Date(), // Update the timestamp
        // status should likely not be updated by the user here, but by an admin or separate process
      },
    });

    res.status(200).json({ message: 'Report updated successfully', report: updatedReport });

  } catch (error) {
    console.error(`Error updating report ${reportId}:`, error);
    if (error.code === 'P2025') { // Record to update not found (could happen if deleted between fetch and update)
      return res.status(404).json({ message: 'Report not found, or a related record for update is missing.' });
    }
    if (error.code === 'P2003') { // Foreign key constraint failed
      return res.status(400).json({ message: `Invalid ID for foreign key. Check if IDs for problem, canton, or district are correct. Field: ${error.meta?.field_name}` });
    }
    if (error instanceof SyntaxError || error.name === 'SyntaxError' || error.message.includes('invalid input syntax for type integer')) {
      return res.status(400).json({ message: 'Invalid report ID or other numeric field format.' });
    }
    res.status(500).json({ message: 'Internal server error while updating report.' });
  }
});

app.listen(port, () => {
  console.log(`Backend server listening on http://localhost:${port}`);
});

// Graceful shutdown for Prisma Client
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await prisma.$disconnect();
  process.exit(0);
}); 