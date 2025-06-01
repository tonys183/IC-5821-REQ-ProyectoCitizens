import express from 'express';
import { PrismaClient } from './src/generated/prisma/index.js'; // Adjusted import path for ES Modules
import bcrypt from 'bcryptjs';
import cors from 'cors'; // Import cors

const app = express();
const port = process.env.PORT || 3001; // Backend will run on a different port than React dev server

// Middleware
app.use(cors()); // Enable CORS for all routes and origins
app.use(express.json());

const prisma = new PrismaClient();

// Simple test route
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend API!' });
});

// Registration Route
app.post('/api/auth/register', async (req, res) => {
  const { fullName, email, password, phoneNumber } = req.body;

  // Basic validation
  if (!fullName || !email || !password) {
    return res.status(400).json({ message: 'Full name, email, and password are required.' });
  }

  try {
    // Check if user already exists
    const existingNeighbor = await prisma.neighbor.findUnique({
      where: { email: email }, // Assuming email is unique in your neighbor model based on typical usage
    });

    if (existingNeighbor) {
      return res.status(400).json({ message: 'Email already in use.' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new neighbor
    // Note: Your neighbor model has first_name, last_name, second_last_name.
    // We'll split fullName for simplicity here. Adjust as needed.
    const nameParts = fullName.split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.length > 1 ? nameParts[1] : '';
    const secondLastName = nameParts.length > 2 ? nameParts.slice(2).join(' ') : '';

    const newNeighbor = await prisma.neighbor.create({
      data: {
        first_name: firstName,
        last_name: lastName,
        second_last_name: secondLastName,
        email: email,
        password: hashedPassword,
        phone_number: phoneNumber ? parseInt(phoneNumber) : null, // Ensure phone_number is an Int or null
      },
    });

    // Don't send back the password hash
    const { password: _, ...neighborWithoutPassword } = newNeighbor;
    res.status(201).json({ message: 'User registered successfully', user: neighborWithoutPassword });

  } catch (error) {
    console.error('Registration error:', error);
    // Check for Prisma-specific errors if needed, e.g., unique constraint violation if not caught above
    if (error.code === 'P2002' && error.meta?.target?.includes('email')) {
        return res.status(400).json({ message: 'Email already in use (from db constraint).' });
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

    const isMatch = await bcrypt.compare(password, neighbor.password || ''); // Ensure neighbor.password is not null

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials. Password incorrect.' });
    }

    // Passwords match. Login successful.
    // For now, just send back user info (without password).
    // In a real app, you'd typically generate and send a JWT (JSON Web Token) here.
    const { password: _, ...neighborWithoutPassword } = neighbor;
    res.status(200).json({ 
      message: 'Login successful', 
      user: neighborWithoutPassword,
      // token: generatedToken // Placeholder for JWT
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
        report_date: 'desc', // CORRECTED: Changed from creation_date to report_date
      },
      include: {
        neighbor: { // Include the neighbor who reported
          select: {
            first_name: true,
            last_name: true,
            email: true, // Include email for display if names are not full
          },
        },
        problem: { // Include problem details
          include: {
            problem_type: { // Include problem type name
              select: {
                type_name: true, // CORRECTED: Changed from name to type_name
              },
            },
          },
        },
        // If you need other relations like 'municipality' in the future, include them here
      },
    });
    res.status(200).json(reports);
  } catch (error) {
    console.error('Error fetching reports:', error);
    res.status(500).json({ message: 'Internal server error while fetching reports.' });
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
          description: 'asc', // Or however you want to order them
        },
      });
    } else {
      // Optionally, fetch all problems if no type ID is provided, or return error/empty
      problems = await prisma.problem.findMany({
        orderBy: {
          description: 'asc',
        },
      }); 
    }
    res.status(200).json(problems);
  } catch (error) {
    console.error('Error fetching problems:', error);
    if (error instanceof SyntaxError || error.name === 'SyntaxError') {
        return res.status(400).json({ message: 'Invalid problemTypeId format.' });
    }
    res.status(500).json({ message: 'Internal server error while fetching problems.' });
  }
});

// Get All Cantons Route
app.get('/api/cantons', async (req, res) => {
  try {
    const cantons = await prisma.canton.findMany({
      orderBy: {
        name: 'asc',
      },
    });
    res.status(200).json(cantons);
  } catch (error) {
    console.error('Error fetching cantons:', error);
    res.status(500).json({ message: 'Internal server error while fetching cantons.' });
  }
});

// Create New Report Route
app.post('/api/reports', async (req, res) => {
  const {
    problem_id,     // EXPECTING problem_id of an existing problem
    canton_name,    
    district_name,  
    street,         
    neighbor_id,    
  } = req.body;

  // Updated validation to expect problem_id
  if (!problem_id || !canton_name || !district_name || !street || !neighbor_id) {
    return res.status(400).json({ 
      message: 'Missing required fields: problem_id, canton_name, district_name, street, neighbor_id.',
      received: req.body
    });
  }

  try {
    // 1. Find Canton ID based on canton_name
    const canton = await prisma.canton.findUnique({
      where: { name: canton_name }, 
    });

    if (!canton) {
      return res.status(400).json({ message: `Cantón "${canton_name}" no encontrado.` });
    }
    const canton_id_found = canton.canton_id;

    // 2. Create the report, linking to the existing problem_id
    const newReport = await prisma.report.create({
      data: {
        neighbor_id: parseInt(neighbor_id),
        problem_id: parseInt(problem_id), // Use the provided problem_id
        canton_id: canton_id_found, 
        district: district_name, 
        street: street,
        report_date: new Date(), 
        report_time: new Date(), 
        status: 'NUEVO', 
      },
    });

    // Optionally, fetch the problem details to return with the response for confirmation
    const reportedProblem = await prisma.problem.findUnique({
        where: { problem_id: parseInt(problem_id) },
        include: { problem_type: true }
    });

    res.status(201).json({ 
        message: 'Report created successfully', 
        report: newReport, 
        problemDetails: reportedProblem 
    });

  } catch (error) {
    console.error('Error creating report:', error);
    if (error.code === 'P2003') { 
        return res.status(400).json({ message: `Invalid ID for foreign key: ${error.meta?.field_name}. Check if Canton or Problem ID is correct.` });
    }
    if (error.code === 'P2025') { 
        const target = error.meta?.target || error.meta?.cause;
        return res.status(400).json({ message: `Related record not found for connection. Ensure the problem_id exists. Details: ${target}` });
    }
    res.status(500).json({ message: 'Internal server error while creating report.' });
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