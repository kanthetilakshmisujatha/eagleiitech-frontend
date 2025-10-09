// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const cloudinary = require('cloudinary').v2;
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json({ limit: '50mb' })); // High limit for base64
// app.use(express.urlencoded({ extended: true, limit: '50mb' }));

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

// // Routes
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


// app.get('/api/health', (req, res) => res.json({ status: 'OK', db: mongoose.connection.readyState === 1 }));

// app.listen(PORT, () => {
//   console.log(`Server on http://localhost:${PORT}`);
// });



// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const cloudinary = require('cloudinary').v2;
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json({ limit: '50mb' })); // High limit for base64
// app.use(express.urlencoded({ extended: true, limit: '50mb' }));

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

// app.get('/api/health', (req, res) => res.json({ status: 'OK', db: mongoose.connection.readyState === 1 }));

// app.listen(PORT, () => {
//   console.log(`Server on http://localhost:${PORT}`);
// });

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
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' })); // High limit for base64
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Serve static files for uploads (resumes)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Create uploads folder if not exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Cloudinary Config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Test Cloudinary on startup
cloudinary.api.ping((error, result) => {
  if (error) {
    console.error('Cloudinary config error:', error);
  } else {
    console.log('Cloudinary connected:', result);
  }
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully!'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Blog Schema
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

const Blog = mongoose.model('Blog', blogSchema);

// Job Schema
const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  role: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true, default: 'Full Time' },
}, { timestamps: true });

const Job = mongoose.model('Job', jobSchema);

// Application Schema (to save applications to DB)
const applicationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  coverLetter: { type: String, required: true },
  jobTitle: { type: String, required: true },
  cvPath: { type: String }, // Local path or Cloudinary URL
}, { timestamps: true });

const Application = mongoose.model('Application', applicationSchema);

// Comments Schema
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

const Comment = mongoose.model('Comment', commentSchema);

// Multer config for resume uploads (Increased limit to 20MB)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ 
  storage,
  limits: { fileSize: 20 * 1024 * 1024 }, // Increased to 20MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf' || 
        file.mimetype === 'application/msword' || 
        file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF, DOC, DOCX allowed'), false);
    }
  }
});

// Nodemailer transporter (Fixed: createTransport)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Test Nodemailer on startup
transporter.verify((error, success) => {
  if (error) {
    console.error('Nodemailer config error:', error);
  } else {
    console.log('Nodemailer ready');
  }
});

// Blog Routes
app.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    console.error('GET /api/blogs error:', error);
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
});

app.post('/api/blogs', async (req, res) => {
  try {
    console.log('Received JSON payload:', req.body); // Debug log
    const { title, subtitle, author, location, category, date, text, imageBase64 } = req.body;
    
    if (!title || !subtitle || !author || !location || !category || !text) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    let imageUrl = 'https://via.placeholder.com/400x300?text=No+Image';

    if (imageBase64 && imageBase64.startsWith('data:image')) {
      // Extract base64 data properly
      const base64Data = imageBase64.replace(/^data:image\/[a-zA-Z0-9]+;base64,/, '');
      const mimeMatch = imageBase64.match(/^data:image\/([a-zA-Z0-9]+);base64,/);
      const mimeType = mimeMatch ? `image/${mimeMatch[1]}` : 'image/jpeg';

      console.log('Uploading to Cloudinary...');
      const uploadResult = await cloudinary.uploader.upload(
        `data:${mimeType};base64,${base64Data}`,
        {
          folder: 'eagleiitech_blogs',
          transformation: [
            { width: 800, height: 600, crop: 'fill' },
            { quality: 'auto' }
          ]
        }
      );
      imageUrl = uploadResult.secure_url;
      console.log('Upload success:', imageUrl);
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
    console.log('Saved to DB:', savedBlog._id);
    res.status(201).json(savedBlog);
  } catch (error) {
    console.error('Full error:', error);
    res.status(500).json({ error: error.message });
  }
});

// GET single blog by ID
app.get('/api/blogs/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.json(blog);
  } catch (error) {
    console.error('GET /api/blogs/:id error:', error);
    res.status(500).json({ error: 'Failed to fetch blog' });
  }
});

// PUT update blog
app.put('/api/blogs/:id', async (req, res) => {
  try {
    const { title, subtitle, author, location, category, date, text, imageBase64 } = req.body;
    
    let imageUrl = req.body.imageUrl || 'https://via.placeholder.com/400x300?text=No+Image'; // Keep existing if no new

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
          ]
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

    res.json(updatedBlog);
  } catch (error) {
    console.error('PUT /api/blogs/:id error:', error);
    res.status(500).json({ error: 'Failed to update blog' });
  }
});

// DELETE blog
app.delete('/api/blogs/:id', async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.json({ message: 'Blog deleted successfully', deletedBlog });
  } catch (error) {
    console.error('DELETE /api/blogs/:id error:', error);
    res.status(500).json({ error: 'Failed to delete blog' });
  }
});

// Job Routes
app.get('/api/jobs', async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.json(jobs);
  } catch (error) {
    console.error('GET /api/jobs error:', error);
    res.status(500).json({ error: 'Failed to fetch jobs' });
  }
});

app.post('/api/jobs', async (req, res) => {
  try {
    const { title, role, location, description, type } = req.body;
    
    if (!title || !role || !location || !description) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const newJob = new Job({
      title,
      role,
      location,
      description,
      type,
    });

    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (error) {
    console.error('POST /api/jobs error:', error);
    res.status(500).json({ error: error.message });
  }
});

// GET single job by ID
app.get('/api/jobs/:id', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }
    res.json(job);
  } catch (error) {
    console.error('GET /api/jobs/:id error:', error);
    res.status(500).json({ error: 'Failed to fetch job' });
  }
});

// PUT update job
app.put('/api/jobs/:id', async (req, res) => {
  try {
    const { title, role, location, description, type } = req.body;

    const updatedJob = await Job.findByIdAndUpdate(
      req.params.id,
      { title, role, location, description, type },
      { new: true, runValidators: true }
    );

    if (!updatedJob) {
      return res.status(404).json({ error: 'Job not found' });
    }

    res.json(updatedJob);
  } catch (error) {
    console.error('PUT /api/jobs/:id error:', error);
    res.status(500).json({ error: 'Failed to update job' });
  }
});

// DELETE job
app.delete('/api/jobs/:id', async (req, res) => {
  try {
    const deletedJob = await Job.findByIdAndDelete(req.params.id);
    if (!deletedJob) {
      return res.status(404).json({ error: 'Job not found' });
    }
    res.json({ message: 'Job deleted successfully', deletedJob });
  } catch (error) {
    console.error('DELETE /api/jobs/:id error:', error);
    res.status(500).json({ error: 'Failed to delete job' });
  }
});

// Applications Routes
app.get('/api/applications', async (req, res) => {
  try {
    const applications = await Application.find().sort({ createdAt: -1 });
    res.json(applications);
  } catch (error) {
    console.error('GET /api/applications error:', error);
    res.status(500).json({ error: 'Failed to fetch applications' });
  }
});

// Job Applications Route with File Upload & Email
app.post('/api/applications', upload.single('cvResume'), async (req, res) => {
  try {
    console.log('POST /api/applications hit with body:', req.body); // Debug log
    console.log('File received:', req.file ? req.file.originalname : 'No file'); // Debug log

    const { fullName, email, phone, coverLetter, jobTitle } = req.body;
    const cvPath = req.file ? req.file.path : null;

    if (!fullName || !email || !phone || !coverLetter || !jobTitle) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'hr@eagleittech.com', // Admin email
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

    // Send email
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

    res.status(200).json({ message: 'Application submitted successfully!' });
  } catch (error) {
    console.error('Error submitting application:', error);
    // Handle Multer errors specifically
    if (error instanceof multer.MulterError) {
      if (error.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({ error: 'File too large. Maximum size is 20MB.' });
      }
      return res.status(400).json({ error: `File upload error: ${error.message}` });
    }
    res.status(500).json({ error: 'Failed to submit application' });
  }
});

// Comments Routes
// POST new comment (pending status)
app.post('/api/comments', async (req, res) => {
  try {
    const { blogId, name, email, website, comment } = req.body;
    
    if (!blogId || !name || !email || !comment) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Verify blog exists
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    const newComment = new Comment({
      blogId,
      name,
      email,
      website: website || '',
      comment,
      status: 'pending',
    });

    const savedComment = await newComment.save();
    console.log('Comment saved:', savedComment._id);
    res.status(201).json(savedComment);
  } catch (error) {
    console.error('POST /api/comments error:', error);
    res.status(500).json({ error: 'Failed to create comment' });
  }
});

// GET all comments with optional status filter (for admin dashboard)
app.get('/api/comments', async (req, res) => {
  try {
    const { status } = req.query;

    const query = {};
    if (status) {
      query.status = status;
    }

    const comments = await Comment.find(query)
      .populate('blogId', 'title') // Optional: populate blog title
      .sort({ createdAt: -1 });

    res.json(comments);
  } catch (error) {
    console.error('GET /api/comments error:', error);
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
});

// GET comments by blogId with status filter
app.get('/api/comments/blog/:blogId', async (req, res) => {
  try {
    const { blogId } = req.params;
    const { status } = req.query;

    const query = { blogId };
    if (status) {
      query.status = status;
    }

    const comments = await Comment.find(query)
      .populate('blogId', 'title') // Optional: populate blog title
      .sort({ createdAt: -1 });

    res.json(comments);
  } catch (error) {
    console.error('GET /api/comments/blog/:blogId error:', error);
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
});

// PUT approve comment
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

    console.log('Comment approved:', id);
    res.json({ message: 'Comment approved', comment });
  } catch (error) {
    console.error('PUT /api/comments/:id/approve error:', error);
    res.status(500).json({ error: 'Failed to approve comment' });
  }
});

// PUT reject comment (to trash)
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

    console.log('Comment rejected to trash:', id);
    res.json({ message: 'Comment rejected', comment });
  } catch (error) {
    console.error('PUT /api/comments/:id/reject error:', error);
    res.status(500).json({ error: 'Failed to reject comment' });
  }
});

// PUT restore from trash (Updated: Set to 'pending' instead of 'approved')
app.put('/api/comments/:id/restore', async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findByIdAndUpdate(
      id,
      { status: 'pending' }, // Changed to 'pending' for re-moderation
      { new: true }
    );

    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }

    console.log('Comment restored to pending:', id);
    res.json({ message: 'Comment restored', comment });
  } catch (error) {
    console.error('PUT /api/comments/:id/restore error:', error);
    res.status(500).json({ error: 'Failed to restore comment' });
  }
});

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'OK', db: mongoose.connection.readyState === 1 }));

app.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`);
});