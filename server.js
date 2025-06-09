import express from 'express';
import { PrismaClient } from './src/generated/prisma/index.js'; 
import bcrypt from 'bcryptjs';
import cors from 'cors'; 
import jwt from 'jsonwebtoken'; 

const app = express();
const port = process.env.PORT || 3001; 

app.use(cors()); 
app.use(express.json());

const prisma = new PrismaClient();
const JWT_SECRET = 'your-very-secret-key-for-dev-only'; 

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; 

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
    req.user = userPayload; 
    next();
  });
}

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend API!' });
});

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

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

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

  if (!isMuniUser) {
    if (!identification || !firstName || !lastName) {
      return res.status(400).json({ message: 'Identification (cédula), first name, and last name are required for neighbors.' });
    }
  }

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use.' });
    }
    
    if (!isMuniUser) {
        const existingProfile = await prisma.neighborProfile.findUnique({
            where: { identification: parseInt(identification) }
        });
        if(existingProfile) {
            return res.status(400).json({ message: 'Identification (cédula) already in use.' });
        }
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          email: email,
          password: hashedPassword,
          role: isMuniUser ? 'MUNICIPALITY' : 'NEIGHBOR',
        },
      });

      if (isMuniUser) {
        await tx.municipalityProfile.create({
          data: {
            userId: user.id,
            name: 'Municipalidad de Alajuela', 
            canton: 'Alajuela', 
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
      
      return user;
    });
    
    const { password: _, ...userWithoutPassword } = newUser;
    res.status(201).json({ message: 'User registered successfully', user: userWithoutPassword });

  } catch (error) {
    console.error('Registration error:', error);
    if (error.code === 'P2002') { 
      return res.status(400).json({ message: 'A user with this email or identification already exists.' });
    }
    if (error instanceof prisma.PrismaClientValidationError) {
      return res.status(400).json({ message: 'Invalid data provided for registration.', details: error.message });
    }
    res.status(500).json({ message: 'Internal server error during registration.' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        neighborProfile: true,     
        municipalityProfile: true, 
      },
    });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials. User not found.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials. Password incorrect.' });
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    const { password: _, ...userWithoutPassword } = user;
    const userForFrontend = {
      ...userWithoutPassword,
      profile: user.neighborProfile || user.municipalityProfile, 
    };
    
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
        author: { 
          include: {
            neighborProfile: { 
              select: {
                first_name: true,
                last_name: true,
              }
            },
            municipalityProfile: { 
              select: {
                name: true,
              }
            }
          }
        },
        problem: { 
          include: {
            problem_type: { 
              select: {
                type_name: true,
              },
            },
          },
        },
        canton: {
          select: { canton_name: true }
        },
        district_report_districtTodistrict: { 
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

app.get('/api/reports/:reportId', authenticateToken, async (req, res) => {
  const { reportId } = req.params;
  const authenticatedUserId = req.user.userId; 

  try {
    const report = await prisma.report.findUnique({
      where: {
        report_id: parseInt(reportId),
      },
      include: {
        problem: {
          include: {
            problem_type: true, 
          },
        },
        canton: true,
        district_report_districtTodistrict: true, 
      },
    });

    if (!report) {
      return res.status(404).json({ message: 'Report not found.' });
    }

    // Verify ownership
    if (report.author_id !== authenticatedUserId) {
      return res.status(403).json({ message: 'Access denied. You are not the owner of this report.' });
    }

 
    const responseReport = {
      report_id: report.report_id,
      report_title: report.report_title,
      problem_type_id: report.problem?.problem_type?.problem_type_id, 
      problem_id: report.problem_id,
      canton_id: report.canton_id,
      district_id: report.district, 
      neighborhood: report.neighborhood,
      street: report.street,
      status: report.status,
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
          problem_name: 'asc', 
        },
      });
    } else {
      problems = await prisma.problem.findMany({
        orderBy: {
          problem_name: 'asc',
        },
      }); 
    }
    res.status(200).json(problems);
  } catch (error) {
    console.error('Error fetching problems:', error);
    if (error instanceof SyntaxError || error.name === 'SyntaxError') {
        return res.status(400).json({ message: 'Invalid problemTypeId format.' });
    }
  
    if (error.code) { 
        console.error('Prisma error code:', error.code);
    }
    res.status(500).json({ message: 'Internal server error while fetching problems.' });
  }
});

app.get('/api/cantons', async (req, res) => {
  try {
    const cantons = await prisma.canton.findMany({
      orderBy: {
        canton_name: 'asc', 
      },
    });
    res.status(200).json(cantons);
  } catch (error) {
    console.error('Error fetching cantons:', error);
    res.status(500).json({ message: 'Internal server error while fetching cantons.' });
  }
});

app.get('/api/districts', async (req, res) => {
  const { cantonId } = req.query;
  try {
    let districts;
    if (cantonId) {
      districts = await prisma.district.findMany({
        where: {
          
          canton_id: parseInt(cantonId), 
        },
        orderBy: {
          district_name: 'asc',
        },
      });
    } else {
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

app.post('/api/reports', authenticateToken, async (req, res) => {
  const authenticatedUserId = req.user.userId; 

  const {
    report_title,
    problem_id,
    canton_id,
    district_id,
    neighborhood,
    street
  } = req.body;

  if (!report_title || !problem_id || !canton_id || !district_id || !neighborhood || !street) {
    return res.status(400).json({
      message: 'Missing required fields: report_title, problem_id, canton_id, district_id, neighborhood, street.',
      received: req.body
    });
  }

  try {
    const newReport = await prisma.report.create({
      data: {
        author_id: authenticatedUserId, 
        report_title: report_title,
        problem_id: parseInt(problem_id),
        canton_id: parseInt(canton_id),
        district: parseInt(district_id),
        neighborhood: neighborhood,
        street: street,
        report_date: new Date(), 
        report_time: new Date(), 
        status: 'Waiting',       
        updated_at: new Date(),  
      },
    });

    res.status(201).json({
        message: 'Report created successfully',
        report: newReport,
    });

  } catch (error) {
    console.error('Error creating report:', error);
    if (error.code === 'P2003') { 
        return res.status(400).json({ message: `Invalid ID for foreign key. Check if IDs for problem, canton, district, or author are correct. Field: ${error.meta?.field_name}` });
    }
    if (error.code === 'P2025') { 
        const cause = error.meta?.cause || 'Unknown related record.';
        return res.status(400).json({ message: `Related record not found. Ensure IDs exist. Details: ${cause}` });
    }
    if (error instanceof prisma.PrismaClientValidationError) {
        return res.status(400).json({ message: 'Invalid data provided for report.', details: error.message });
    }
    res.status(500).json({ message: 'Internal server error while creating report.' });
  }
});

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

app.put('/api/profile', authenticateToken, async (req, res) => {
    const userId = req.user.userId;
    const userRole = req.user.role;
    const { firstName, lastName, secondLastName, phoneNumber } = req.body; 

    if (userRole !== 'NEIGHBOR') {
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
        if (error.code === 'P2025') { 
            return res.status(404).json({ message: 'Profile not found for update.' });
        }
        res.status(500).json({ message: 'Internal server error while updating profile.' });
    }
});

app.delete('/api/profile', authenticateToken, async (req, res) => {
  const userId = req.user.userId;

  try {
    
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

    if (reportToUpdate.author_id !== authenticatedUserId) {
      return res.status(403).json({ message: 'Access denied. You are not the owner of this report and cannot update it.' });
    }

    const updatedReport = await prisma.report.update({
      where: { report_id: parseInt(reportId) },
      data: {
        report_title: report_title,
        problem_id: parseInt(problem_id),
        canton_id: parseInt(canton_id),
        district: parseInt(district_id), 
        neighborhood: neighborhood,
        street: street,
        updated_at: new Date(), 
      },
    });

    res.status(200).json({ message: 'Report updated successfully', report: updatedReport });

  } catch (error) {
    console.error(`Error updating report ${reportId}:`, error);
    if (error.code === 'P2025') {
      return res.status(404).json({ message: 'Report not found, or a related record for update is missing.' });
    }
    if (error.code === 'P2003') { 
      return res.status(400).json({ message: `Invalid ID for foreign key. Check if IDs for problem, canton, or district are correct. Field: ${error.meta?.field_name}` });
    }
    if (error instanceof SyntaxError || error.name === 'SyntaxError' || error.message.includes('invalid input syntax for type integer')) {
      return res.status(400).json({ message: 'Invalid report ID or other numeric field format.' });
    }
    res.status(500).json({ message: 'Internal server error while updating report.' });
  }
});

app.patch('/api/reports/:reportId/status', authenticateToken, async (req, res) => {
  const { reportId } = req.params;
  const { status } = req.body;
  const { role: userRole } = req.user;

  if (userRole !== 'MUNICIPALITY') {
    return res.status(403).json({ message: 'Access denied. Only municipality users can change report statuses.' });
  }

  const allowedStatuses = ['Waiting', 'In Progress', 'Resolved', 'Rejected'];
  if (!status || !allowedStatuses.includes(status)) {
    return res.status(400).json({ message: `Invalid status. Must be one of: ${allowedStatuses.join(', ')}` });
  }

  try {
    const updatedReport = await prisma.report.update({
      where: { report_id: parseInt(reportId) },
      data: { 
        status: status,
        updated_at: new Date(),
      },
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
    if (error.code === 'P2025') { 
      return res.status(404).json({ message: 'Report not found for status update.' });
    }
    res.status(500).json({ message: 'Internal server error while updating report status.' });
  }
});


app.get('/api/alerts', async (req, res) => {
  try {
    const alerts = await prisma.alert.findMany({
      orderBy: {
        updated_at: 'desc', 
      },
      include: {
        author: { 
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
    res.status(204).send(); 
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

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await prisma.$disconnect();
  process.exit(0);
}); 