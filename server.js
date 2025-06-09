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

// Registration Route (Refactored for User/Profile model)
app.post('/api/auth/register', async (req, res) => {
  const {
    identification,
    firstName,
    lastName,
    secondLastName,
    email,
    password,
    phoneNumber
  } = req.body;

  const MUNI_DOMAIN = '@munialajuela.go.cr';
  const isMuniUser = email && email.endsWith(MUNI_DOMAIN);

  // --- Basic Validation ---
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  // --- Password Strength Validation ---
  if (password.length < 8) {
    return res.status(400).json({ message: "La contraseña debe tener al menos 8 caracteres." });
  }
  if (!/[a-z]/.test(password)) {
    return res.status(400).json({ message: "La contraseña debe contener al menos una letra minúscula." });
  }
  if (!/[A-Z]/.test(password)) {
    return res.status(400).json({ message: "La contraseña debe contener al menos una letra mayúscula." });
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return res.status(400).json({ message: "La contraseña debe contener al menos un carácter especial." });
  }

  // Role-specific validation
  if (!isMuniUser) {
    if (!identification || !firstName || !lastName) {
      return res.status(400).json({ message: 'Identification (cédula), first name, and last name are required for neighbors.' });
    }
  }

  try {
    // Check if user with this email already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use.' });
    }
    
    // Check if identification is already in use (only for neighbors)
    if (!isMuniUser) {
        const existingProfile = await prisma.neighborProfile.findUnique({
            where: { identification: parseInt(identification) }
        });
        if(existingProfile) {
            return res.status(400).json({ message: 'Identification (cédula) already in use.' });
        }
    }

    // --- Create User and Profile in a Transaction ---
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await prisma.$transaction(async (tx) => {
      // Step 1: Create the core User
      const user = await tx.user.create({
        data: {
          email: email,
          password: hashedPassword,
          role: isMuniUser ? 'MUNICIPALITY' : 'NEIGHBOR',
        },
      });

      // Step 2: Create the role-specific profile and link it
      if (isMuniUser) {
        await tx.municipalityProfile.create({
          data: {
            userId: user.id,
            name: 'Municipalidad de Alajuela', // This could be derived or set from a config
            canton: 'Alajuela', // Example value
          },
        });
      } else {
        await tx.neighborProfile.create({
          data: {
            userId: user.id,
            identification: parseInt(identification),
            first_name: firstName,
            last_name: lastName,
            second_last_name: secondLastName || null,
            phone_number: phoneNumber ? parseInt(phoneNumber) : null,
          },
        });
      }
      
      // Return the created user for the response
      return user;
    });
    
    // Exclude password from the returned user object
    const { password: _, ...userWithoutPassword } = newUser;
    res.status(201).json({ message: 'User registered successfully', user: userWithoutPassword });

  } catch (error) {
    console.error('Registration error:', error);
    // Handle specific Prisma errors
    if (error.code === 'P2002') { // Unique constraint violation
      return res.status(400).json({ message: 'A user with this email or identification already exists.' });
    }
    if (error instanceof prisma.PrismaClientValidationError) {
      return res.status(400).json({ message: 'Invalid data provided for registration.', details: error.message });
    }
    // Generic error for anything else
    res.status(500).json({ message: 'Internal server error during registration.' });
  }
});

// Login Route (Refactored for User/Profile model)
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  try {
    // Step 1: Find the user by email
    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        neighborProfile: true,     // Include neighbor profile
        municipalityProfile: true, // Include municipality profile
      },
    });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials. User not found.' });
    }

    // Step 2: Verify the password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials. Password incorrect.' });
    }

    // Step 3: Generate JWT
    // The payload now includes the user's primary ID and their role
    const token = jwt.sign(
      { userId: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Step 4: Prepare the user object for the frontend
    // We combine the core user info with their specific profile
    const { password: _, ...userWithoutPassword } = user;
    const userForFrontend = {
      ...userWithoutPassword,
      // The profile data is nested under its type for clarity on the frontend
      profile: user.neighborProfile || user.municipalityProfile, 
    };
    
    // Cleanup to avoid sending both profiles
    delete userForFrontend.neighborProfile;
    delete userForFrontend.municipalityProfile;


    res.status(200).json({ 
      message: 'Login successful', 
      user: userForFrontend,
      token: token
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error during login.' });
  }
});

// Get All Reports Route (Refactored for User/Author model)
app.get('/api/reports', async (req, res) => {
  const { cantonId, status } = req.query;

  const whereClause = {};

  if (cantonId && !isNaN(parseInt(cantonId))) {
    whereClause.canton_id = parseInt(cantonId);
  }

  if (status && status !== 'ALL') {
    whereClause.status = status;
  }

  try {
    const reports = await prisma.report.findMany({
      where: whereClause,
      orderBy: {
        updated_at: 'desc',
      },
      include: {
        author: { // Changed from neighbor
          include: {
            neighborProfile: { // We want the name from the profile
              select: {
                first_name: true,
                last_name: true,
              }
            },
            municipalityProfile: { // Or the name from this profile
              select: {
                name: true,
              }
            }
          }
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
        // We don't need to include author here as we're verifying ownership
      },
    });

    if (!report) {
      return res.status(404).json({ message: 'Report not found.' });
    }

    // Verify ownership
    if (report.author_id !== authenticatedUserId) {
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
    // author_id is NO LONGER taken from body
    report_title,
    problem_id,
    canton_id,
    district_id,
    neighborhood,
    street
  } = req.body;

  // Updated validation: author_id is from token, not body
  if (!report_title || !problem_id || !canton_id || !district_id || !neighborhood || !street) {
    return res.status(400).json({
      message: 'Missing required fields: report_title, problem_id, canton_id, district_id, neighborhood, street.',
      received: req.body
    });
  }

  try {
    const newReport = await prisma.report.create({
      data: {
        author_id: authenticatedUserId, // Changed from neighbor_id and removed parseInt
        report_title: report_title,
        problem_id: parseInt(problem_id),
        canton_id: parseInt(canton_id),
        district: parseInt(district_id), // Ensure this matches the actual FK field name in schema.prisma if different
        neighborhood: neighborhood,
        street: street,
        report_date: new Date(), // Set server-side
        report_time: new Date(), // Set server-side
        status: 'Waiting',       // Default status
        updated_at: new Date(),  // Ensure updated_at is set on creation
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
        return res.status(400).json({ message: `Invalid ID for foreign key. Check if IDs for problem, canton, district, or author are correct. Field: ${error.meta?.field_name}` });
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

// Get Current User's Profile
app.get('/api/profile', authenticateToken, async (req, res) => {
  const userId = req.user.userId;

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        neighborProfile: true,
        municipalityProfile: true,
      },
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    
    // Combine user and profile info for a clean response
    const { password, ...userWithoutPassword } = user;
    const userForFrontend = {
      ...userWithoutPassword,
      profile: user.neighborProfile || user.municipalityProfile,
    };
    delete userForFrontend.neighborProfile;
    delete userForFrontend.municipalityProfile;

    res.status(200).json(userForFrontend);
  } catch (error) {
    console.error(`Error fetching profile for user ${userId}:`, error);
    res.status(500).json({ message: 'Internal server error while fetching profile.' });
  }
});

// Update Current User's Profile
app.put('/api/profile', authenticateToken, async (req, res) => {
    const userId = req.user.userId;
    const userRole = req.user.role;
    const { firstName, lastName, secondLastName, phoneNumber } = req.body; // Add other fields for muni if they can edit them

    // Since only neighbors have these fields, we check the role
    if (userRole !== 'NEIGHBOR') {
        // For now, municipality profiles can't be updated. This can be expanded later.
        return res.status(403).json({ message: 'Profile updates are only enabled for neighbor accounts.' });
    }

    if (!firstName || !lastName) {
        return res.status(400).json({ message: 'First name and last name are required.' });
    }

    try {
        const updatedProfile = await prisma.neighborProfile.update({
            where: { userId: userId },
            data: {
                first_name: firstName,
                last_name: lastName,
                second_last_name: secondLastName || null,
                phone_number: phoneNumber ? parseInt(phoneNumber) : null,
            },
        });

        res.status(200).json({ message: 'Profile updated successfully', profile: updatedProfile });
    } catch (error) {
        console.error(`Error updating profile for user ${userId}:`, error);
        if (error.code === 'P2025') { // Record to update not found
            return res.status(404).json({ message: 'Profile not found for update.' });
        }
        res.status(500).json({ message: 'Internal server error while updating profile.' });
    }
});

// Delete Current User's Account
app.delete('/api/profile', authenticateToken, async (req, res) => {
  const userId = req.user.userId;

  try {
    // Prisma's 'Cascade' onDelete will handle deleting the associated profile.
    // We already set reports to have their author_id set to NULL on delete.
    await prisma.user.delete({
      where: { id: userId },
    });

    res.status(200).json({ message: 'Account deleted successfully.' });
  } catch (error) {
    console.error(`Error deleting user ${userId}:`, error);
    if (error.code === 'P2025') {
      return res.status(404).json({ message: 'User not found for deletion.' });
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
    if (reportToUpdate.author_id !== authenticatedUserId) {
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

// Update Report Status (Municipality Only)
app.patch('/api/reports/:reportId/status', authenticateToken, async (req, res) => {
  const { reportId } = req.params;
  const { status } = req.body;
  const { role: userRole } = req.user;

  // 1. Authorization: Check if the user is a municipality user
  if (userRole !== 'MUNICIPALITY') {
    return res.status(403).json({ message: 'Access denied. Only municipality users can change report statuses.' });
  }

  // 2. Validation: Check if the status is a valid choice
  const allowedStatuses = ['Waiting', 'In Progress', 'Resolved', 'Rejected'];
  if (!status || !allowedStatuses.includes(status)) {
    return res.status(400).json({ message: `Invalid status. Must be one of: ${allowedStatuses.join(', ')}` });
  }

  try {
    // 3. Update the report status
    const updatedReport = await prisma.report.update({
      where: { report_id: parseInt(reportId) },
      data: { 
        status: status,
        updated_at: new Date(),
      },
      // Include author and other details to return the full report object for the frontend
      include: {
        author: {
          include: {
            neighborProfile: true,
            municipalityProfile: true,
          }
        },
        problem: { include: { problem_type: true } },
        canton: true,
        district_report_districtTodistrict: true,
      }
    });

    res.status(200).json({ message: 'Report status updated successfully', report: updatedReport });

  } catch (error) {
    console.error(`Error updating status for report ${reportId}:`, error);
    if (error.code === 'P2025') { // Record to update not found
      return res.status(404).json({ message: 'Report not found for status update.' });
    }
    res.status(500).json({ message: 'Internal server error while updating report status.' });
  }
});

// --- ALERTS API ENDPOINTS ---

// GET all alerts (public)
app.get('/api/alerts', async (req, res) => {
  try {
    const alerts = await prisma.alert.findMany({
      orderBy: {
        updated_at: 'desc', // Most recently updated first
      },
      include: {
        author: { // Include author to show who published it
          include: {
            municipalityProfile: {
              select: { name: true }
            }
          }
        }
      }
    });
    res.status(200).json(alerts);
  } catch (error) {
    console.error('Error fetching alerts:', error);
    res.status(500).json({ message: 'Internal server error while fetching alerts.' });
  }
});

// POST a new alert (municipality only)
app.post('/api/alerts', authenticateToken, async (req, res) => {
  const { title, content } = req.body;
  const { userId, role } = req.user;

  if (role !== 'MUNICIPALITY') {
    return res.status(403).json({ message: 'Access denied. Only municipality users can create alerts.' });
  }

  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required.' });
  }

  try {
    const newAlert = await prisma.alert.create({
      data: {
        title,
        content,
        authorId: userId,
      },
    });
    res.status(201).json(newAlert);
  } catch (error) {
    console.error('Error creating alert:', error);
    res.status(500).json({ message: 'Internal server error while creating alert.' });
  }
});

// PUT (update) an alert (municipality only)
app.put('/api/alerts/:alertId', authenticateToken, async (req, res) => {
  const { alertId } = req.params;
  const { title, content } = req.body;
  const { role } = req.user;

  if (role !== 'MUNICIPALITY') {
    return res.status(403).json({ message: 'Access denied. Only municipality users can update alerts.' });
  }

  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required for update.' });
  }

  try {
    const updatedAlert = await prisma.alert.update({
      where: { id: parseInt(alertId) },
      data: {
        title,
        content,
        // updated_at is handled automatically by Prisma
      },
    });
    res.status(200).json(updatedAlert);
  } catch (error) {
    console.error(`Error updating alert ${alertId}:`, error);
    if (error.code === 'P2025') {
      return res.status(404).json({ message: 'Alert not found.' });
    }
    res.status(500).json({ message: 'Internal server error while updating alert.' });
  }
});

// DELETE an alert (municipality only)
app.delete('/api/alerts/:alertId', authenticateToken, async (req, res) => {
  const { alertId } = req.params;
  const { role } = req.user;

  if (role !== 'MUNICIPALITY') {
    return res.status(403).json({ message: 'Access denied. Only municipality users can delete alerts.' });
  }

  try {
    await prisma.alert.delete({
      where: { id: parseInt(alertId) },
    });
    res.status(204).send(); // No content
  } catch (error) {
    console.error(`Error deleting alert ${alertId}:`, error);
    if (error.code === 'P2025') {
      return res.status(404).json({ message: 'Alert not found.' });
    }
    res.status(500).json({ message: 'Internal server error while deleting alert.' });
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