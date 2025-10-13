


// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const cloudinary = require('cloudinary').v2;
// const multer = require('multer');
// const nodemailer = require('nodemailer');
// const path = require('path');
// const fs = require('fs');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json({ limit: '50mb' })); // High limit for base64
// app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// // Serve static files for uploads (resumes)
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Create uploads folder if not exists
// const uploadsDir = path.join(__dirname, 'uploads');
// if (!fs.existsSync(uploadsDir)) {
//   fs.mkdirSync(uploadsDir, { recursive: true });
// }

// // Cloudinary Config
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// // Test Cloudinary on startup
// cloudinary.api.ping((error, result) => {
//   if (error) {
//     console.error('Cloudinary config error:', error);
//   } else {
//     console.log('Cloudinary connected:', result);
//   }
// });

// // MongoDB Connection
// mongoose.connect(process.env.MONGODB_URI)
//   .then(() => console.log('MongoDB connected successfully!'))
//   .catch(err => {
//     console.error('MongoDB connection error:', err);
//     process.exit(1);
//   });

// // Blog Schema
// const blogSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   subtitle: { type: String, required: true },
//   image: { type: String, required: false, default: 'https://via.placeholder.com/400x300?text=No+Image' },
//   author: { type: String, required: true },
//   location: { type: String, required: true },
//   category: { type: String, required: true },
//   date: { type: String, required: true },
//   text: { type: String, required: true },
// }, { timestamps: true });

// const Blog = mongoose.model('Blog', blogSchema);

// // Job Schema
// const jobSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   role: { type: String, required: true },
//   location: { type: String, required: true },
//   description: { type: String, required: true },
//   type: { type: String, required: true, default: 'Full Time' },
// }, { timestamps: true });

// const Job = mongoose.model('Job', jobSchema);

// // Application Schema (to save applications to DB)
// const applicationSchema = new mongoose.Schema({
//   fullName: { type: String, required: true },
//   email: { type: String, required: true },
//   phone: { type: String, required: true },
//   coverLetter: { type: String, required: true },
//   jobTitle: { type: String, required: true },
//   cvPath: { type: String }, // Local path or Cloudinary URL
// }, { timestamps: true });

// const Application = mongoose.model('Application', applicationSchema);

// // Comments Schema
// const commentSchema = new mongoose.Schema({
//   blogId: { 
//     type: mongoose.Schema.Types.ObjectId, 
//     ref: 'Blog', 
//     required: true 
//   },
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   website: { type: String, default: '' },
//   comment: { type: String, required: true },
//   status: { 
//     type: String, 
//     enum: ['pending', 'approved', 'trash'], 
//     default: 'pending' 
//   },
// }, { timestamps: true });

// const Comment = mongoose.model('Comment', commentSchema);

// // Multer config for resume uploads (Increased limit to 20MB)
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + '-' + file.originalname);
//   }
// });
// const upload = multer({ 
//   storage,
//   limits: { fileSize: 20 * 1024 * 1024 }, // Increased to 20MB
//   fileFilter: (req, file, cb) => {
//     if (file.mimetype === 'application/pdf' || 
//         file.mimetype === 'application/msword' || 
//         file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
//       cb(null, true);
//     } else {
//       cb(new Error('Only PDF, DOC, DOCX allowed'), false);
//     }
//   }
// });

// // Nodemailer transporter (Fixed: createTransport)
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// // Test Nodemailer on startup
// transporter.verify((error, success) => {
//   if (error) {
//     console.error('Nodemailer config error:', error);
//   } else {
//     console.log('Nodemailer ready');
//   }
// });

// // Blog Routes
// app.get('/api/blogs', async (req, res) => {
//   try {
//     const blogs = await Blog.find().sort({ createdAt: -1 });
//     res.json(blogs);
//   } catch (error) {
//     console.error('GET /api/blogs error:', error);
//     res.status(500).json({ error: 'Failed to fetch blogs' });
//   }
// });

// app.post('/api/blogs', async (req, res) => {
//   try {
//     console.log('Received JSON payload:', req.body); // Debug log
//     const { title, subtitle, author, location, category, date, text, imageBase64 } = req.body;
    
//     if (!title || !subtitle || !author || !location || !category || !text) {
//       return res.status(400).json({ error: 'Missing required fields' });
//     }

//     let imageUrl = 'https://via.placeholder.com/400x300?text=No+Image';

//     if (imageBase64 && imageBase64.startsWith('data:image')) {
//       // Extract base64 data properly
//       const base64Data = imageBase64.replace(/^data:image\/[a-zA-Z0-9]+;base64,/, '');
//       const mimeMatch = imageBase64.match(/^data:image\/([a-zA-Z0-9]+);base64,/);
//       const mimeType = mimeMatch ? `image/${mimeMatch[1]}` : 'image/jpeg';

//       console.log('Uploading to Cloudinary...');
//       const uploadResult = await cloudinary.uploader.upload(
//         `data:${mimeType};base64,${base64Data}`,
//         {
//           folder: 'eagleiitech_blogs',
//           transformation: [
//             { width: 800, height: 600, crop: 'fill' },
//             { quality: 'auto' }
//           ]
//         }
//       );
//       imageUrl = uploadResult.secure_url;
//       console.log('Upload success:', imageUrl);
//     }

//     const newBlog = new Blog({
//       title,
//       subtitle,
//       image: imageUrl,
//       author,
//       location,
//       category,
//       date,
//       text,
//     });

//     const savedBlog = await newBlog.save();
//     console.log('Saved to DB:', savedBlog._id);
//     res.status(201).json(savedBlog);
//   } catch (error) {
//     console.error('Full error:', error);
//     res.status(500).json({ error: error.message });
//   }
// });

// // GET single blog by ID
// app.get('/api/blogs/:id', async (req, res) => {
//   try {
//     const blog = await Blog.findById(req.params.id);
//     if (!blog) {
//       return res.status(404).json({ error: 'Blog not found' });
//     }
//     res.json(blog);
//   } catch (error) {
//     console.error('GET /api/blogs/:id error:', error);
//     res.status(500).json({ error: 'Failed to fetch blog' });
//   }
// });

// // PUT update blog
// app.put('/api/blogs/:id', async (req, res) => {
//   try {
//     const { title, subtitle, author, location, category, date, text, imageBase64 } = req.body;
    
//     let imageUrl = req.body.imageUrl || 'https://via.placeholder.com/400x300?text=No+Image'; // Keep existing if no new

//     if (imageBase64 && imageBase64.startsWith('data:image')) {
//       const base64Data = imageBase64.replace(/^data:image\/[a-zA-Z0-9]+;base64,/, '');
//       const mimeMatch = imageBase64.match(/^data:image\/([a-zA-Z0-9]+);base64,/);
//       const mimeType = mimeMatch ? `image/${mimeMatch[1]}` : 'image/jpeg';

//       const uploadResult = await cloudinary.uploader.upload(
//         `data:${mimeType};base64,${base64Data}`,
//         {
//           folder: 'eagleiitech_blogs',
//           transformation: [
//             { width: 800, height: 600, crop: 'fill' },
//             { quality: 'auto' }
//           ]
//         }
//       );
//       imageUrl = uploadResult.secure_url;
//     }

//     const updatedBlog = await Blog.findByIdAndUpdate(
//       req.params.id,
//       { title, subtitle, image: imageUrl, author, location, category, date, text },
//       { new: true, runValidators: true }
//     );

//     if (!updatedBlog) {
//       return res.status(404).json({ error: 'Blog not found' });
//     }

//     res.json(updatedBlog);
//   } catch (error) {
//     console.error('PUT /api/blogs/:id error:', error);
//     res.status(500).json({ error: 'Failed to update blog' });
//   }
// });

// // DELETE blog
// app.delete('/api/blogs/:id', async (req, res) => {
//   try {
//     const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
//     if (!deletedBlog) {
//       return res.status(404).json({ error: 'Blog not found' });
//     }
//     res.json({ message: 'Blog deleted successfully', deletedBlog });
//   } catch (error) {
//     console.error('DELETE /api/blogs/:id error:', error);
//     res.status(500).json({ error: 'Failed to delete blog' });
//   }
// });

// // Job Routes
// app.get('/api/jobs', async (req, res) => {
//   try {
//     const jobs = await Job.find().sort({ createdAt: -1 });
//     res.json(jobs);
//   } catch (error) {
//     console.error('GET /api/jobs error:', error);
//     res.status(500).json({ error: 'Failed to fetch jobs' });
//   }
// });

// app.post('/api/jobs', async (req, res) => {
//   try {
//     const { title, role, location, description, type } = req.body;
    
//     if (!title || !role || !location || !description) {
//       return res.status(400).json({ error: 'Missing required fields' });
//     }

//     const newJob = new Job({
//       title,
//       role,
//       location,
//       description,
//       type,
//     });

//     const savedJob = await newJob.save();
//     res.status(201).json(savedJob);
//   } catch (error) {
//     console.error('POST /api/jobs error:', error);
//     res.status(500).json({ error: error.message });
//   }
// });

// // GET single job by ID
// app.get('/api/jobs/:id', async (req, res) => {
//   try {
//     const job = await Job.findById(req.params.id);
//     if (!job) {
//       return res.status(404).json({ error: 'Job not found' });
//     }
//     res.json(job);
//   } catch (error) {
//     console.error('GET /api/jobs/:id error:', error);
//     res.status(500).json({ error: 'Failed to fetch job' });
//   }
// });

// // PUT update job
// app.put('/api/jobs/:id', async (req, res) => {
//   try {
//     const { title, role, location, description, type } = req.body;

//     const updatedJob = await Job.findByIdAndUpdate(
//       req.params.id,
//       { title, role, location, description, type },
//       { new: true, runValidators: true }
//     );

//     if (!updatedJob) {
//       return res.status(404).json({ error: 'Job not found' });
//     }

//     res.json(updatedJob);
//   } catch (error) {
//     console.error('PUT /api/jobs/:id error:', error);
//     res.status(500).json({ error: 'Failed to update job' });
//   }
// });

// // DELETE job
// app.delete('/api/jobs/:id', async (req, res) => {
//   try {
//     const deletedJob = await Job.findByIdAndDelete(req.params.id);
//     if (!deletedJob) {
//       return res.status(404).json({ error: 'Job not found' });
//     }
//     res.json({ message: 'Job deleted successfully', deletedJob });
//   } catch (error) {
//     console.error('DELETE /api/jobs/:id error:', error);
//     res.status(500).json({ error: 'Failed to delete job' });
//   }
// });

// // Applications Routes
// app.get('/api/applications', async (req, res) => {
//   try {
//     const applications = await Application.find().sort({ createdAt: -1 });
//     res.json(applications);
//   } catch (error) {
//     console.error('GET /api/applications error:', error);
//     res.status(500).json({ error: 'Failed to fetch applications' });
//   }
// });

// // Job Applications Route with File Upload & Email
// app.post('/api/applications', upload.single('cvResume'), async (req, res) => {
//   try {
//     console.log('POST /api/applications hit with body:', req.body); // Debug log
//     console.log('File received:', req.file ? req.file.originalname : 'No file'); // Debug log

//     const { fullName, email, phone, coverLetter, jobTitle } = req.body;
//     const cvPath = req.file ? req.file.path : null;

//     if (!fullName || !email || !phone || !coverLetter || !jobTitle) {
//       return res.status(400).json({ error: 'All fields are required' });
//     }

//     // Email options
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: 'hr@eagleittech.com', // Admin email
//       subject: `New Job Application: ${jobTitle}`,
//       html: `
//         <h2>New Job Application Received!</h2>
//         <p><strong>Full Name:</strong> ${fullName}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Job Title:</strong> ${jobTitle}</p>
//         <p><strong>Cover Letter:</strong><br>${coverLetter.replace(/\n/g, '<br>')}</p>
//         ${cvPath ? `<p><strong>Resume:</strong> Attached below</p>` : '<p>No resume attached</p>'}
//       `,
//       attachments: cvPath ? [
//         {
//           filename: req.file.originalname,
//           path: cvPath,
//           contentType: req.file.mimetype,
//         }
//       ] : [],
//     };

//     // Send email
//     await transporter.sendMail(mailOptions);

//     // Save to DB
//     const newApplication = new Application({
//       fullName,
//       email,
//       phone,
//       coverLetter,
//       jobTitle,
//       cvPath,
//     });
//     await newApplication.save();

//     res.status(200).json({ message: 'Application submitted successfully!' });
//   } catch (error) {
//     console.error('Error submitting application:', error);
//     // Handle Multer errors specifically
//     if (error instanceof multer.MulterError) {
//       if (error.code === 'LIMIT_FILE_SIZE') {
//         return res.status(400).json({ error: 'File too large. Maximum size is 20MB.' });
//       }
//       return res.status(400).json({ error: `File upload error: ${error.message}` });
//     }
//     res.status(500).json({ error: 'Failed to submit application' });
//   }
// });

// // Comments Routes
// // POST new comment (pending status)
// app.post('/api/comments', async (req, res) => {
//   try {
//     const { blogId, name, email, website, comment } = req.body;
    
//     if (!blogId || !name || !email || !comment) {
//       return res.status(400).json({ error: 'Missing required fields' });
//     }

//     // Verify blog exists
//     const blog = await Blog.findById(blogId);
//     if (!blog) {
//       return res.status(404).json({ error: 'Blog not found' });
//     }

//     const newComment = new Comment({
//       blogId,
//       name,
//       email,
//       website: website || '',
//       comment,
//       status: 'pending',
//     });

//     const savedComment = await newComment.save();
//     console.log('Comment saved:', savedComment._id);
//     res.status(201).json(savedComment);
//   } catch (error) {
//     console.error('POST /api/comments error:', error);
//     res.status(500).json({ error: 'Failed to create comment' });
//   }
// });

// // GET all comments with optional status filter (for admin dashboard)
// app.get('/api/comments', async (req, res) => {
//   try {
//     const { status } = req.query;

//     const query = {};
//     if (status) {
//       query.status = status;
//     }

//     const comments = await Comment.find(query)
//       .populate('blogId', 'title') // Optional: populate blog title
//       .sort({ createdAt: -1 });

//     res.json(comments);
//   } catch (error) {
//     console.error('GET /api/comments error:', error);
//     res.status(500).json({ error: 'Failed to fetch comments' });
//   }
// });

// // GET comments by blogId with status filter
// app.get('/api/comments/blog/:blogId', async (req, res) => {
//   try {
//     const { blogId } = req.params;
//     const { status } = req.query;

//     const query = { blogId };
//     if (status) {
//       query.status = status;
//     }

//     const comments = await Comment.find(query)
//       .populate('blogId', 'title') // Optional: populate blog title
//       .sort({ createdAt: -1 });

//     res.json(comments);
//   } catch (error) {
//     console.error('GET /api/comments/blog/:blogId error:', error);
//     res.status(500).json({ error: 'Failed to fetch comments' });
//   }
// });

// // PUT approve comment
// app.put('/api/comments/:id/approve', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const comment = await Comment.findByIdAndUpdate(
//       id,
//       { status: 'approved' },
//       { new: true }
//     );

//     if (!comment) {
//       return res.status(404).json({ error: 'Comment not found' });
//     }

//     console.log('Comment approved:', id);
//     res.json({ message: 'Comment approved', comment });
//   } catch (error) {
//     console.error('PUT /api/comments/:id/approve error:', error);
//     res.status(500).json({ error: 'Failed to approve comment' });
//   }
// });

// // PUT reject comment (to trash)
// app.put('/api/comments/:id/reject', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const comment = await Comment.findByIdAndUpdate(
//       id,
//       { status: 'trash' },
//       { new: true }
//     );

//     if (!comment) {
//       return res.status(404).json({ error: 'Comment not found' });
//     }

//     console.log('Comment rejected to trash:', id);
//     res.json({ message: 'Comment rejected', comment });
//   } catch (error) {
//     console.error('PUT /api/comments/:id/reject error:', error);
//     res.status(500).json({ error: 'Failed to reject comment' });
//   }
// });

// // PUT restore from trash (Updated: Set to 'pending' instead of 'approved')
// app.put('/api/comments/:id/restore', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const comment = await Comment.findByIdAndUpdate(
//       id,
//       { status: 'pending' }, // Changed to 'pending' for re-moderation
//       { new: true }
//     );

//     if (!comment) {
//       return res.status(404).json({ error: 'Comment not found' });
//     }

//     console.log('Comment restored to pending:', id);
//     res.json({ message: 'Comment restored', comment });
//   } catch (error) {
//     console.error('PUT /api/comments/:id/restore error:', error);
//     res.status(500).json({ error: 'Failed to restore comment' });
//   }
// });

// // Health check
// app.get('/api/health', (req, res) => res.json({ status: 'OK', db: mongoose.connection.readyState === 1 }));

// app.listen(PORT, () => {
//   console.log(`Server on http://localhost:${PORT}`);
// });



const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');
const helmet = require('helmet'); // Security headers
const rateLimit = require('express-rate-limit'); // Rate limiting
const compression = require('compression'); // Gzip compression
const morgan = require('morgan'); // HTTP request logging
const winston = require('winston'); // Advanced logging
const Joi = require('joi'); // Input validation
const sanitizeHtml = require('sanitize-html'); // XSS prevention
const cookieParser = require('cookie-parser'); // Added for httpOnly cookies
const { Redis } = require('@upstash/redis'); // Redis client for Upstash

require('dotenv').config();

// Advanced Logging Setup with Winston (MOVED UP: Before Redis)
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
    new winston.transports.Console({
      format: winston.format.simple()
    })
  ],
});

// Upstash Redis Client (Production-ready: Fallback to in-memory if env vars missing)
let redis;
try {
  redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });
  // Test connection on startup
  (async () => {
    await redis.set('test_key', 'test_value', { ex: 10 });
    await redis.del('test_key');
    logger.info('Upstash Redis connected successfully');
  })();
} catch (error) {
  logger.warn('Upstash Redis connection failed, falling back to no-cache mode:', error);
  redis = {
    get: async () => null,
    set: async () => {},
    del: async () => {},
  };
}

// Rest of the code unchanged... (Graceful shutdown, app, morgan, etc.)
// ... (all other parts same as before)

// Graceful shutdown setup
process.on('SIGTERM', shutDown);
process.on('SIGINT', shutDown);

let server;

async function shutDown() {
  console.log('Received shutdown signal. Gracefully shutting down...');
  if (server) {
    server.close(() => {
      console.log('HTTP server closed.');
    });
  }
  await mongoose.connection.close();
  console.log('MongoDB connection closed.');
  process.exit(0);
}

const app = express();
const PORT = process.env.PORT || 5000;

// // Advanced Logging Setup with Winston
// const logger = winston.createLogger({
//   level: 'info',
//   format: winston.format.combine(
//     winston.format.timestamp(),
//     winston.format.errors({ stack: true }),
//     winston.format.json()
//   ),
//   transports: [
//     new winston.transports.File({ filename: 'error.log', level: 'error' }),
//     new winston.transports.File({ filename: 'combined.log' }),
//     new winston.transports.Console({
//       format: winston.format.simple()
//     })
//   ],
// });

// Morgan for HTTP logging
app.use(morgan('combined', { stream: { write: msg => logger.info(msg.trim()) } }));

// Security Middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"] // Allow Cloudinary images
    }
  }
}));

// Rate Limiting (Production level: Limit requests to prevent DDoS)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api/', limiter);

// Compression for responses
app.use(compression());
app.use(cookieParser());

app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? process.env.CLIENT_URL || 'https://yourdomain.com'
    : ['http://localhost:3000', 'http://localhost:5173'],  // Allow Vite (5173) & CRA (3000) in dev
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
}));

// Body parsing (MUST be before routes for JSON bodies)
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Mount auth routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Serve static files securely (only in production, with security checks)
if (process.env.NODE_ENV === 'production') {
  app.use('/uploads', express.static(path.join(__dirname, 'uploads'), {
    maxAge: '1d',
    etag: false // Disable ETag for security
  }));
}

// Create uploads folder if not exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Cloudinary Config (Secure: No secrets in code)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Test Cloudinary on startup (Log to Winston)
cloudinary.api.ping((error, result) => {
  if (error) {
    logger.error('Cloudinary config error:', error);
  } else {
    logger.info('Cloudinary connected:', result);
  }
});

// MongoDB Connection with retry logic
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Keep alive
    });
    logger.info('MongoDB connected successfully!');
  } catch (err) {
    logger.error('MongoDB connection error:', err);
    process.exit(1);
  }
};
connectDB();

// Schemas (Unchanged, but added indexes for performance)
const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  image: { type: String, required: false, default: 'https://via.placeholder.com/400x300?text=No+Image' },
  author: { type: String, required: true },
  location: { type: String, required: true },
  category: { type: String, required: true },
  date: { type: String, required: true },
  text: { type: String, required: true },
}, { timestamps: true });
blogSchema.index({ category: 1, createdAt: -1 }); // Performance index

const Blog = mongoose.model('Blog', blogSchema);

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  role: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true, default: 'Full Time' },
}, { timestamps: true });
jobSchema.index({ role: 1, location: 1 });

const Job = mongoose.model('Job', jobSchema);

const applicationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  coverLetter: { type: String, required: true },
  jobTitle: { type: String, required: true },
  cvPath: { type: String },
}, { timestamps: true });

const Application = mongoose.model('Application', applicationSchema);

const commentSchema = new mongoose.Schema({
  blogId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Blog', 
    required: true 
  },
  name: { type: String, required: true },
  email: { type: String, required: true },
  website: { type: String, default: '' },
  comment: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['pending', 'approved', 'trash'], 
    default: 'pending' 
  },
}, { timestamps: true });
commentSchema.index({ blogId: 1, status: 1 });

const Comment = mongoose.model('Comment', commentSchema);

// Advanced Multer for secure file uploads (Virus scan placeholder: Integrate ClamAV in prod)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname)); // Secure random filename
  }
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'application/pdf' || 
      file.mimetype === 'application/msword' || 
      file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
    cb(null, true);
  } else {
    cb(new Error('Only PDF, DOC, DOCX allowed'), false);
  }
};
const upload = multer({ 
  storage,
  limits: { fileSize: 20 * 1024 * 1024 },
  fileFilter
});

// Secure Nodemailer (Use OAuth2 in prod for Gmail) - FIXED: createTransport (not Transporter)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Test Nodemailer
transporter.verify((error, success) => {
  if (error) {
    logger.error('Nodemailer config error:', error);
  } else {
    logger.info('Nodemailer ready');
  }
});

// Validation Schemas with Joi
const blogValidation = Joi.object({
  title: Joi.string().min(3).max(200).required(),
  subtitle: Joi.string().min(3).max(100).required(),
  author: Joi.string().min(2).max(50).required(),
  location: Joi.string().min(2).max(50).required(),
  category: Joi.string().valid('ARTIFICIAL INTELLIGENCE', 'MACHINE LEARNING', 'WEB DEVELOPMENT', 'MOBILE DEVELOPMENT', 'UI/UX DESIGN').required(),
  date: Joi.string().required(),
  text: Joi.string().min(10).required(),
  imageBase64: Joi.string().allow('').optional(),
});

const jobValidation = Joi.object({
  title: Joi.string().min(3).max(200).required(),
  role: Joi.string().min(2).max(50).required(),
  location: Joi.string().min(2).max(50).required(),
  description: Joi.string().min(10).required(),
  type: Joi.string().valid('Full Time', 'Part Time', 'Contract', 'Remote').required(),
});

const applicationValidation = Joi.object({
  fullName: Joi.string().min(2).max(100).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(10).max(20).required(),
  coverLetter: Joi.string().min(10).required(),
  jobTitle: Joi.string().min(3).required(),
});

// Helper: Sanitize HTML to prevent XSS
const sanitizeInput = (input) => {
  if (typeof input === 'string') {
    return sanitizeHtml(input, {
      allowedTags: ['b', 'i', 'em', 'strong', 'a', 'ul', 'ol', 'li', 'p', 'br'],
      allowedAttributes: { a: ['href'] }
    });
  }
  return input;
};

// Global Error Handler
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Cache Helpers (Production: TTL 5 min for lists, invalidate on mutations)
const getCachedData = async (cacheKey, fetchFn) => {
  try {
    let data = await redis.get(cacheKey);
    if (data) {
      return JSON.parse(data);
    }
    data = await fetchFn();
    await redis.set(cacheKey, JSON.stringify(data), { ex: 300 }); // 5 min TTL
    return data;
  } catch (redisError) {
    logger.warn('Redis error, falling back to DB:', redisError);
    return await fetchFn(); // Fallback to DB
  }
};

const invalidateCache = async (cacheKey) => {
  try {
    await redis.del(cacheKey);
  } catch (error) {
    logger.warn('Redis invalidate error:', error);
  }
};

// Blog Routes with Validation & Sanitization + Redis Caching
app.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await getCachedData('blogs_cache', async () => {
      return await Blog.find().sort({ createdAt: -1 }).limit(50); // Limit for perf
    });
    res.json(blogs);
  } catch (error) {
    logger.error('GET /api/blogs error:', error);
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
});

app.post('/api/blogs', async (req, res) => {
  try {
    // Validate
    const { error } = blogValidation.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    // Sanitize
    const sanitizedBody = {
      ...req.body,
      title: sanitizeInput(req.body.title),
      subtitle: sanitizeInput(req.body.subtitle),
      text: sanitizeInput(req.body.text),
    };

    const { title, subtitle, author, location, category, date, text, imageBase64 } = sanitizedBody;
    
    let imageUrl = 'https://via.placeholder.com/400x300?text=No+Image';

    if (imageBase64 && imageBase64.startsWith('data:image')) {
      const base64Data = imageBase64.replace(/^data:image\/[a-zA-Z0-9]+;base64,/, '');
      const mimeMatch = imageBase64.match(/^data:image\/([a-zA-Z0-9]+);base64,/);
      const mimeType = mimeMatch ? `image/${mimeMatch[1]}` : 'image/jpeg';

      const uploadResult = await cloudinary.uploader.upload(
        `data:${mimeType};base64,${base64Data}`,
        {
          folder: 'eagleiitech_blogs',
          transformation: [
            { width: 800, height: 600, crop: 'fill' },
            { quality: 'auto' }
          ],
          overwrite: true // Overwrite if exists
        }
      );
      imageUrl = uploadResult.secure_url;
      logger.info('Upload success:', imageUrl);
    }

    const newBlog = new Blog({
      title,
      subtitle,
      image: imageUrl,
      author,
      location,
      category,
      date,
      text,
    });

    const savedBlog = await newBlog.save();
    await invalidateCache('blogs_cache'); // Invalidate cache on create
    logger.info('Blog saved:', savedBlog._id);
    res.status(201).json(savedBlog);
  } catch (error) {
    logger.error('POST /api/blogs error:', error);
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/blogs/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.json(blog);
  } catch (error) {
    logger.error('GET /api/blogs/:id error:', error);
    res.status(500).json({ error: 'Failed to fetch blog' });
  }
});

app.put('/api/blogs/:id', async (req, res) => {
  try {
    const { error } = blogValidation.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const sanitizedBody = {
      ...req.body,
      title: sanitizeInput(req.body.title),
      subtitle: sanitizeInput(req.body.subtitle),
      text: sanitizeInput(req.body.text),
    };

    const { title, subtitle, author, location, category, date, text, imageBase64 } = sanitizedBody;
    
    let imageUrl = req.body.imageUrl || 'https://via.placeholder.com/400x300?text=No+Image';

    if (imageBase64 && imageBase64.startsWith('data:image')) {
      const base64Data = imageBase64.replace(/^data:image\/[a-zA-Z0-9]+;base64,/, '');
      const mimeMatch = imageBase64.match(/^data:image\/([a-zA-Z0-9]+);base64,/);
      const mimeType = mimeMatch ? `image/${mimeMatch[1]}` : 'image/jpeg';

      const uploadResult = await cloudinary.uploader.upload(
        `data:${mimeType};base64,${base64Data}`,
        {
          folder: 'eagleiitech_blogs',
          transformation: [
            { width: 800, height: 600, crop: 'fill' },
            { quality: 'auto' }
          ],
          overwrite: true
        }
      );
      imageUrl = uploadResult.secure_url;
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { title, subtitle, image: imageUrl, author, location, category, date, text },
      { new: true, runValidators: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    await invalidateCache('blogs_cache'); // Invalidate on update
    res.json(updatedBlog);
  } catch (error) {
    logger.error('PUT /api/blogs/:id error:', error);
    res.status(500).json({ error: 'Failed to update blog' });
  }
});

app.delete('/api/blogs/:id', async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    // Optional: Delete image from Cloudinary (extract public_id if needed)
    await invalidateCache('blogs_cache'); // Invalidate on delete
    logger.info('Blog deleted:', req.params.id);
    res.json({ message: 'Blog deleted successfully', deletedBlog });
  } catch (error) {
    logger.error('DELETE /api/blogs/:id error:', error);
    res.status(500).json({ error: 'Failed to delete blog' });
  }
});

// Job Routes (Similar enhancements + Redis Caching)
app.get('/api/jobs', async (req, res) => {
  try {
    const jobs = await getCachedData('jobs_cache', async () => {
      return await Job.find().sort({ createdAt: -1 }).limit(50);
    });
    res.json(jobs);
  } catch (error) {
    logger.error('GET /api/jobs error:', error);
    res.status(500).json({ error: 'Failed to fetch jobs' });
  }
});

app.post('/api/jobs', async (req, res) => {
  try {
    const { error } = jobValidation.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const sanitizedBody = {
      ...req.body,
      title: sanitizeInput(req.body.title),
      description: sanitizeInput(req.body.description),
    };

    const { title, role, location, description, type } = sanitizedBody;
    
    const newJob = new Job({
      title,
      role,
      location,
      description,
      type,
    });

    const savedJob = await newJob.save();
    await invalidateCache('jobs_cache'); // Invalidate on create
    logger.info('Job saved:', savedJob._id);
    res.status(201).json(savedJob);
  } catch (error) {
    logger.error('POST /api/jobs error:', error);
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/jobs/:id', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }
    res.json(job);
  } catch (error) {
    logger.error('GET /api/jobs/:id error:', error);
    res.status(500).json({ error: 'Failed to fetch job' });
  }
});

app.put('/api/jobs/:id', async (req, res) => {
  try {
    const { error } = jobValidation.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const sanitizedBody = {
      ...req.body,
      title: sanitizeInput(req.body.title),
      description: sanitizeInput(req.body.description),
    };

    const updatedJob = await Job.findByIdAndUpdate(
      req.params.id,
      sanitizedBody,
      { new: true, runValidators: true }
    );

    if (!updatedJob) {
      return res.status(404).json({ error: 'Job not found' });
    }

    await invalidateCache('jobs_cache'); // Invalidate on update
    res.json(updatedJob);
  } catch (error) {
    logger.error('PUT /api/jobs/:id error:', error);
    res.status(500).json({ error: 'Failed to update job' });
  }
});

app.delete('/api/jobs/:id', async (req, res) => {
  try {
    const deletedJob = await Job.findByIdAndDelete(req.params.id);
    if (!deletedJob) {
      return res.status(404).json({ error: 'Job not found' });
    }
    await invalidateCache('jobs_cache'); // Invalidate on delete
    logger.info('Job deleted:', req.params.id);
    res.json({ message: 'Job deleted successfully', deletedJob });
  } catch (error) {
    logger.error('DELETE /api/jobs/:id error:', error);
    res.status(500).json({ error: 'Failed to delete job' });
  }
});

// Applications Routes with Secure Upload + Redis Caching
app.get('/api/applications', async (req, res) => {
  try {
    const applications = await getCachedData('applications_cache', async () => {
      return await Application.find().sort({ createdAt: -1 }).limit(100);
    });
    res.json(applications);
  } catch (error) {
    logger.error('GET /api/applications error:', error);
    res.status(500).json({ error: 'Failed to fetch applications' });
  }
});

app.post('/api/applications', upload.single('cvResume'), async (req, res) => {
  try {
    const { error } = applicationValidation.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    // Sanitize
    const sanitizedBody = {
      fullName: sanitizeInput(req.body.fullName),
      email: req.body.email,
      phone: req.body.phone,
      coverLetter: sanitizeInput(req.body.coverLetter),
      jobTitle: sanitizeInput(req.body.jobTitle),
    };

    const { fullName, email, phone, coverLetter, jobTitle } = sanitizedBody;
    const cvPath = req.file ? req.file.path : null;

    // Secure email (Validate email exists, but skip for now)
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'hr@eagleiitech.com',
      subject: `New Job Application: ${jobTitle}`,
      html: `
        <h2>New Job Application Received!</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Cover Letter:</strong><br>${coverLetter.replace(/\n/g, '<br>')}</p>
        ${cvPath ? `<p><strong>Resume:</strong> Attached below</p>` : '<p>No resume attached</p>'}
      `,
      attachments: cvPath ? [
        {
          filename: req.file.originalname,
          path: cvPath,
          contentType: req.file.mimetype,
        }
      ] : [],
    };

    await transporter.sendMail(mailOptions);

    // Save to DB
    const newApplication = new Application({
      fullName,
      email,
      phone,
      coverLetter,
      jobTitle,
      cvPath,
    });
    await newApplication.save();
    await invalidateCache('applications_cache'); // Invalidate on create

    logger.info('Application submitted:', { email, jobTitle });
    res.status(200).json({ message: 'Application submitted successfully!' });
  } catch (error) {
    logger.error('Error submitting application:', error);
    if (error instanceof multer.MulterError) {
      if (error.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({ error: 'File too large. Maximum size is 20MB.' });
      }
      return res.status(400).json({ error: `File upload error: ${error.message}` });
    }
    res.status(500).json({ error: 'Failed to submit application' });
  }
});

// Comments Routes (Enhanced similarly + Basic Caching for Pending)
app.post('/api/comments', async (req, res) => {
  try {
    const { error } = Joi.object({
      blogId: Joi.string().required(),
      name: Joi.string().min(2).max(50).required(),
      email: Joi.string().email().required(),
      website: Joi.string().uri().allow('').optional(),
      comment: Joi.string().min(5).max(1000).required(),
    }).validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const { blogId, name, email, website, comment } = req.body;
    
    // Sanitize
    const sanitized = {
      blogId,
      name: sanitizeInput(name),
      email,
      website: website ? new URL(website).href : '', // Validate URL
      comment: sanitizeInput(comment),
    };

    const blog = await Blog.findById(sanitized.blogId);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    const newComment = new Comment({
      ...sanitized,
      status: 'pending',
    });

    const savedComment = await newComment.save();
    await invalidateCache('comments_pending_cache'); // Invalidate pending cache
    logger.info('Comment saved:', savedComment._id);
    res.status(201).json(savedComment);
  } catch (error) {
    logger.error('POST /api/comments error:', error);
    res.status(500).json({ error: 'Failed to create comment' });
  }
});

app.get('/api/comments', async (req, res) => {
  try {
    const { status } = req.query;
    const query = {};
    if (status) {
      query.status = status;
    }
    const cacheKey = status ? `comments_${status}_cache` : 'comments_all_cache';
    const comments = await getCachedData(cacheKey, async () => {
      return await Comment.find(query)
        .populate('blogId', 'title')
        .sort({ createdAt: -1 })
        .limit(100);
    });
    res.json(comments);
  } catch (error) {
    logger.error('GET /api/comments error:', error);
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
});

app.get('/api/comments/blog/:blogId', async (req, res) => {
  try {
    const { blogId } = req.params;
    const { status } = req.query;
    const query = { blogId };
    if (status) {
      query.status = status;
    }
    const cacheKey = `comments_blog_${blogId}_${status || 'all'}_cache`;
    const comments = await getCachedData(cacheKey, async () => {
      return await Comment.find(query)
        .populate('blogId', 'title')
        .sort({ createdAt: -1 })
        .limit(50);
    });
    res.json(comments);
  } catch (error) {
    logger.error('GET /api/comments/blog/:blogId error:', error);
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
});

app.put('/api/comments/:id/approve', async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findByIdAndUpdate(
      id,
      { status: 'approved' },
      { new: true }
    );
    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }
    await invalidateCache('comments_pending_cache'); // Invalidate pending
    await invalidateCache('comments_approved_cache'); // Invalidate approved
    logger.info('Comment approved:', id);
    res.json({ message: 'Comment approved', comment });
  } catch (error) {
    logger.error('PUT /api/comments/:id/approve error:', error);
    res.status(500).json({ error: 'Failed to approve comment' });
  }
});

app.put('/api/comments/:id/reject', async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findByIdAndUpdate(
      id,
      { status: 'trash' },
      { new: true }
    );
    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }
    await invalidateCache('comments_pending_cache'); // Invalidate pending
    await invalidateCache('comments_trash_cache'); // Invalidate trash
    logger.info('Comment rejected:', id);
    res.json({ message: 'Comment rejected', comment });
  } catch (error) {
    logger.error('PUT /api/comments/:id/reject error:', error);
    res.status(500).json({ error: 'Failed to reject comment' });
  }
});

app.put('/api/comments/:id/restore', async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findByIdAndUpdate(
      id,
      { status: 'pending' },
      { new: true }
    );
    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }
    await invalidateCache('comments_trash_cache'); // Invalidate trash
    await invalidateCache('comments_pending_cache'); // Invalidate pending
    logger.info('Comment restored:', id);
    res.json({ message: 'Comment restored', comment });
  } catch (error) {
    logger.error('PUT /api/comments/:id/restore error:', error);
    res.status(500).json({ error: 'Failed to restore comment' });
  }
});

// Health check (Includes Redis status)
app.get('/api/health', async (req, res) => {
  let redisStatus = false;
  try {
    await redis.ping();
    redisStatus = true;
  } catch (e) {
    redisStatus = false;
  }
  res.json({ 
    status: 'OK', 
    db: mongoose.connection.readyState === 1,
    redis: redisStatus,
    timestamp: new Date().toISOString()
  });
});

// 404 Handler - FIXED: Removed '*' to avoid path-to-regexp error
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start Server with Graceful Handling
server = app.listen(PORT, () => {
  logger.info(`Server running on http://localhost:${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
});

// Export for testing
module.exports = app;