// import React, { useState, useRef } from "react";
// import { Link } from "react-router-dom";
// import JoditEditor from "jodit-react";

// const BlogCreate = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     subtitle: "",
//     image: null,
//     author: "",
//     location: "",
//     category: "ARTIFICIAL INTELLIGENCE",
//     date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }).replace(/ /g, " "),
//     text: "",
//   });
//   const [imagePreview, setImagePreview] = useState(null);
//   const fileInputRef = useRef(null);
//   const editor = useRef(null);

//   const categories = [
//     "ARTIFICIAL INTELLIGENCE",
//     "MACHINE LEARNING",
//     "WEB DEVELOPMENT",
//     "MOBILE DEVELOPMENT",
//     "UI/UX DESIGN",
//   ];

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleContentChange = (content) => {
//     setFormData((prev) => ({ ...prev, text: content }));
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFormData((prev) => ({ ...prev, image: file }));
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would typically send formData to your backend API
//     // For now, log the data
//     console.log("Blog Post Data:", {
//       ...formData,
//       date: formData.date, // Keep as is
//       image: formData.image ? formData.image.name : null,
//     });
//     // Reset form if needed
//     // setFormData({ ...initialState });
//     alert("Blog post created successfully! (Check console for data)");
//   };

//   // Jodit Editor config (optional, customize as needed)
//   const config = {
//     readonly: false,
//     height: 300,
//     toolbarSticky: true,
//     showCharsCounter: false,
//     showWordsCounter: false,
//     showXCharactersCounter: false,
//     buttons: "bold,strikethrough,underline,|,ul,ol,|,font,fontsize,|,forecolor,backcolor,|,justify,|,table,|,link,video,|,source,preview",
//     colors: {
//       fore: [
//         "#000000",
//         "#e60000",
//         "#ff9900",
//         "#ffff00",
//         "#008A00",
//         "#0066cc",
//         "#9933ff",
//         "#ffffff",
//         "#facccc",
//         "#ffebcc",
//         "#ffffcc",
//         "#cce8cc",
//         "#cce5ff",
//         "#ead1ff",
//         "#fcebff",
//         "#f54a00", // Add your orange color
//       ],
//       back: [
//         "#000000",
//         "#e60000",
//         "#ff9900",
//         "#ffff00",
//         "#008A00",
//         "#0066cc",
//         "#9933ff",
//         "#ffffff",
//         "#facccc",
//         "#ffebcc",
//         "#ffffcc",
//         "#cce8cc",
//         "#cce5ff",
//         "#ead1ff",
//         "#fcebff",
//         "#f54a00",
//       ],
//     },
//   };

//   const orangeColor = "#F54A00";

//   return (
//     <div className="overflow-x-hidden">
//       <div className="py-16 px-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
//         <div className="max-w-2xl mx-auto">
//           <h2 className="text-4xl font-bold text-center mt-12" style={{ color: orangeColor }}>
//             Create New Blog Post
//           </h2>
//           <p className="text-gray-600 text-center max-w-md mx-auto mb-12">
//             Share your insights on AI, technology, and more
//           </p>
          
//           <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
//             {/* Title */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="title">
//                 Title
//               </label>
//               <input
//                 type="text"
//                 id="title"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                 placeholder="Enter blog title"
//                 required
//               />
//             </div>

//             {/* Subtitle */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="subtitle">
//                 Subtitle
//               </label>
//               <input
//                 type="text"
//                 id="subtitle"
//                 name="subtitle"
//                 value={formData.subtitle}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                 placeholder="Enter subtitle"
//                 required
//               />
//             </div>

//             {/* Image Upload */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="image">
//                 Featured Image
//               </label>
//               <div className="relative">
//                 <input
//                   type="file"
//                   id="image"
//                   ref={fileInputRef}
//                   onChange={handleImageChange}
//                   accept="image/*"
//                   className="hidden"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => fileInputRef.current.click()}
//                   className="w-full flex items-center justify-center py-3 px-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-orange-500 transition-colors duration-300 text-gray-600 hover:text-orange-600 font-medium"
//                 >
//                   <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                   </svg>
//                   {imagePreview ? "Change Image" : "Upload Image"}
//                 </button>
//               </div>
//               {imagePreview && (
//                 <div className="mt-4">
//                   <img
//                     src={imagePreview}
//                     alt="Preview"
//                     className="w-full h-48 object-cover rounded-lg shadow-md"
//                   />
//                 </div>
//               )}
//             </div>

//             {/* Category */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="category">
//                 Category
//               </label>
//               <select
//                 id="category"
//                 name="category"
//                 value={formData.category}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                 required
//               >
//                 {categories.map((cat) => (
//                   <option key={cat} value={cat}>{cat}</option>
//                 ))}
//               </select>
//             </div>

//             {/* Author */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="author">
//                 Author
//               </label>
//               <input
//                 type="text"
//                 id="author"
//                 name="author"
//                 value={formData.author}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                 placeholder="Enter author name"
//                 required
//               />
//             </div>

//             {/* Location */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="location">
//                 Location
//               </label>
//               <input
//                 type="text"
//                 id="location"
//                 name="location"
//                 value={formData.location}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                 placeholder="Enter location (e.g., MERALA)"
//                 required
//               />
//             </div>

//             {/* Date - Auto-generated but editable */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="date">
//                 Date
//               </label>
//               <input
//                 type="text"
//                 id="date"
//                 name="date"
//                 value={formData.date}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-gray-50"
//                 placeholder="e.g., 13 Sept 2025"
//               />
//             </div>

//             {/* Content with JoditEditor */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Content
//               </label>
//               <JoditEditor
//                 ref={editor}
//                 value={formData.text}
//                 config={config}
//                 onBlur={handleContentChange}
//                 onChange={handleContentChange}
//                 tabIndex={1}
//               />
//             </div>

//             {/* Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 pt-4">
//               <Link
//                 to="/blog"
//                 className="flex-1 text-center py-3 px-6 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300 font-semibold text-gray-700"
//               >
//                 Cancel
//               </Link>
//               <button
//                 type="submit"
//                 className="flex-1 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 text-center block"
//                 style={{
//                   background: `linear-gradient(to right, ${orangeColor}, ${orangeColor})`,
//                 }}
//               >
//                 Create Post
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogCreate;



// import React, { useState, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import JoditEditor from "jodit-react";
// import axios from "axios";

// const BlogCreate = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     subtitle: "",
//     imageBase64: "", // For Cloudinary
//     author: "",
//     location: "",
//     category: "ARTIFICIAL INTELLIGENCE",
//     date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }).replace(/ /g, " "),
//     text: "",
//   });
//   const [imagePreview, setImagePreview] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const fileInputRef = useRef(null);
//   const editor = useRef(null);
//   const navigate = useNavigate();

//   const categories = [
//     "ARTIFICIAL INTELLIGENCE",
//     "MACHINE LEARNING",
//     "WEB DEVELOPMENT",
//     "MOBILE DEVELOPMENT",
//     "UI/UX DESIGN",
//   ];

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleContentChange = (content) => {
//     setFormData((prev) => ({ ...prev, text: content }));
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result); // Preview
//         setFormData((prev) => ({ ...prev, imageBase64: reader.result })); // Base64 for backend
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     // JSON payload (no FormData – simpler & avoids parsing errors)
//     const submitData = {
//       title: formData.title,
//       subtitle: formData.subtitle,
//       author: formData.author,
//       location: formData.location,
//       category: formData.category,
//       date: formData.date,
//       text: formData.text,
//       imageBase64: formData.imageBase64 || "", // Empty if no image
//     };

//     try {
//       const response = await axios.post("http://localhost:5000/api/blogs", submitData, {
//         headers: { "Content-Type": "application/json" },
//       });
//       console.log("Blog created:", response.data);
//       alert("Blog post created successfully!");
//       navigate("/blog");
//     } catch (error) {
//       console.error("Error creating blog:", error.response?.data || error.message);
//       alert("Failed to create blog: " + (error.response?.data?.error || "Server error"));
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Jodit Editor config (same)
//   const config = {
//     readonly: false,
//     height: 300,
//     toolbarSticky: true,
//     showCharsCounter: false,
//     showWordsCounter: false,
//     showXCharactersCounter: false,
//     buttons: "bold,strikethrough,underline,|,ul,ol,|,font,fontsize,|,forecolor,backcolor,|,justify,|,table,|,link,video,|,source,preview",
//     colors: {
//       fore: [
//         "#000000", "#e60000", "#ff9900", "#ffff00", "#008A00", "#0066cc", "#9933ff", "#ffffff",
//         "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce5ff", "#ead1ff", "#fcebff", "#f54a00",
//       ],
//       back: [
//         "#000000", "#e60000", "#ff9900", "#ffff00", "#008A00", "#0066cc", "#9933ff", "#ffffff",
//         "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce5ff", "#ead1ff", "#fcebff", "#f54a00",
//       ],
//     },
//   };

//   const orangeColor = "#F54A00";

//   return (
//     <div className="overflow-x-hidden">
//       <div className="py-16 px-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
//         <div className="max-w-2xl mx-auto">
//           <h2 className="text-4xl font-bold text-center mt-12" style={{ color: orangeColor }}>
//             Create New Blog Post
//           </h2>
//           <p className="text-gray-600 text-center max-w-md mx-auto mb-12">
//             Share your insights on AI, technology, and more
//           </p>
          
//           <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
//             {/* Title */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="title">
//                 Title
//               </label>
//               <input
//                 type="text"
//                 id="title"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                 placeholder="Enter blog title"
//                 required
//               />
//             </div>

//             {/* Subtitle */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="subtitle">
//                 Subtitle
//               </label>
//               <input
//                 type="text"
//                 id="subtitle"
//                 name="subtitle"
//                 value={formData.subtitle}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                 placeholder="Enter subtitle"
//                 required
//               />
//             </div>

//             {/* Image Upload */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="image">
//                 Featured Image (Optional)
//               </label>
//               <div className="relative">
//                 <input
//                   type="file"
//                   id="image"
//                   ref={fileInputRef}
//                   onChange={handleImageChange}
//                   accept="image/*"
//                   className="hidden"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => fileInputRef.current.click()}
//                   className="w-full flex items-center justify-center py-3 px-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-orange-500 transition-colors duration-300 text-gray-600 hover:text-orange-600 font-medium"
//                 >
//                   <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                   </svg>
//                   {imagePreview ? "Change Image" : "Upload Image"}
//                 </button>
//               </div>
//               {imagePreview && (
//                 <div className="mt-4">
//                   <img
//                     src={imagePreview}
//                     alt="Preview"
//                     className="w-full h-48 object-cover rounded-lg shadow-md"
//                   />
//                 </div>
//               )}
//             </div>

//             {/* Category */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="category">
//                 Category
//               </label>
//               <select
//                 id="category"
//                 name="category"
//                 value={formData.category}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                 required
//               >
//                 {categories.map((cat) => (
//                   <option key={cat} value={cat}>{cat}</option>
//                 ))}
//               </select>
//             </div>

//             {/* Author */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="author">
//                 Author
//               </label>
//               <input
//                 type="text"
//                 id="author"
//                 name="author"
//                 value={formData.author}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                 placeholder="Enter author name"
//                 required
//               />
//             </div>

//             {/* Location */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="location">
//                 Location
//               </label>
//               <input
//                 type="text"
//                 id="location"
//                 name="location"
//                 value={formData.location}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                 placeholder="Enter location (e.g., MERALA)"
//                 required
//               />
//             </div>

//             {/* Date */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="date">
//                 Date
//               </label>
//               <input
//                 type="text"
//                 id="date"
//                 name="date"
//                 value={formData.date}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-gray-50"
//                 placeholder="e.g., 13 Sept 2025"
//               />
//             </div>

//             {/* Content */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Content
//               </label>
//               <JoditEditor
//                 ref={editor}
//                 value={formData.text}
//                 config={config}
//                 onBlur={handleContentChange}
//                 onChange={handleContentChange}
//                 tabIndex={1}
//               />
//             </div>

//             {/* Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 pt-4">
//               <Link
//                 to="/blog"
//                 className="flex-1 text-center py-3 px-6 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300 font-semibold text-gray-700"
//               >
//                 Cancel
//               </Link>
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="flex-1 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 text-center block disabled:opacity-50"
//                 style={{
//                   background: `linear-gradient(to right, ${orangeColor}, ${orangeColor})`,
//                 }}
//               >
//                 {loading ? "Creating..." : "Create Post"}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogCreate;




// import React, { useEffect, useState, useRef, useMemo } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import JoditEditor from "jodit-react";
// import axios from "axios";

// const BlogCreate = () => {
//   const { id } = useParams(); // For edit mode
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     title: "",
//     subtitle: "",
//     imageBase64: "",
//     imageUrl: "", // For edit preview
//     author: "",
//     location: "",
//     category: "ARTIFICIAL INTELLIGENCE",
//     date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }).replace(/ /g, " "),
//     text: "",
//   });
//   const [blogsList, setBlogsList] = useState([]); // User's created blogs list
//   const [imagePreview, setImagePreview] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [submitting, setSubmitting] = useState(false);
//   const [showForm, setShowForm] = useState(false); // Show form for create/edit
//   const [editingBlog, setEditingBlog] = useState(null); // Current editing blog
//   const [error, setError] = useState(null);
//   const [validationErrors, setValidationErrors] = useState({});
//   const fileInputRef = useRef(null);
//   const editor = useRef(null);

//   const categories = [
//     "ARTIFICIAL INTELLIGENCE",
//     "MACHINE LEARNING",
//     "WEB DEVELOPMENT",
//     "MOBILE DEVELOPMENT",
//     "UI/UX DESIGN",
//   ];

//   // Memoized validation
//   const validationErrorsMemo = useMemo(() => {
//     const errors = {};
//     if (!formData.title.trim()) errors.title = "Title is required";
//     if (!formData.subtitle.trim()) errors.subtitle = "Subtitle is required";
//     if (!formData.author.trim()) errors.author = "Author is required";
//     if (!formData.location.trim()) errors.location = "Location is required";
//     if (!formData.text.trim()) errors.text = "Content is required";
//     return errors;
//   }, [formData]);

//   const isFormValid = useMemo(() => Object.keys(validationErrorsMemo).length === 0, [validationErrorsMemo]);

//   // Fetch all user's blogs on mount
//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get("http://localhost:5000/api/blogs");
//         setBlogsList(response.data); // Assume all are user's
//       } catch (err) {
//         console.error("Error fetching blogs:", err);
//         setError("Failed to load blogs.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   // Handle edit click - load blog to form
//   const handleEditClick = (blog) => {
//     setEditingBlog(blog);
//     setFormData({
//       title: blog.title,
//       subtitle: blog.subtitle,
//       imageBase64: "",
//       imageUrl: blog.image,
//       author: blog.author,
//       location: blog.location,
//       category: blog.category,
//       date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }).replace(/ /g, " "), // Auto current date
//       text: blog.text || "",
//     });
//     setImagePreview(blog.image);
//     setShowForm(true);
//   };

//   // Handle create new
//   const handleCreateNew = () => {
//     setEditingBlog(null);
//     setFormData({
//       title: "",
//       subtitle: "",
//       imageBase64: "",
//       imageUrl: "",
//       author: "",
//       location: "",
//       category: "ARTIFICIAL INTELLIGENCE",
//       date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }).replace(/ /g, " "),
//       text: "",
//     });
//     setImagePreview(null);
//     setShowForm(true);
//   };

//   // Handle delete
//   const handleDelete = async (blogId) => {
//     if (!window.confirm("Are you sure you want to delete this blog?")) return;
//     try {
//       await axios.delete(`http://localhost:5000/api/blogs/${blogId}`);
//       setBlogsList((prev) => prev.filter((blog) => blog._id !== blogId));
//       alert("Blog deleted successfully!");
//     } catch (error) {
//       console.error("Delete error:", error);
//       alert("Failed to delete blog.");
//     }
//   };

//   const validateForm = () => {
//     const errors = {};
//     if (!formData.title.trim()) errors.title = "Title is required";
//     if (!formData.subtitle.trim()) errors.subtitle = "Subtitle is required";
//     if (!formData.author.trim()) errors.author = "Author is required";
//     if (!formData.location.trim()) errors.location = "Location is required";
//     if (!formData.text.trim()) errors.text = "Content is required";
//     setValidationErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     if (validationErrors[name]) {
//       setValidationErrors((prev) => ({ ...prev, [name]: "" }));
//     }
//   };

//   const handleContentChange = (content) => {
//     setFormData((prev) => ({ ...prev, text: content || "" })); // Ensure string
//     if (validationErrors.text) {
//       setValidationErrors((prev) => ({ ...prev, text: "" }));
//     }
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result);
//         setFormData((prev) => ({ ...prev, imageBase64: reader.result }));
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) {
//       setError("Please fix the errors below.");
//       return;
//     }

//     setSubmitting(true);
//     setError(null);

//     const submitData = {
//       title: formData.title,
//       subtitle: formData.subtitle,
//       author: formData.author,
//       location: formData.location,
//       category: formData.category,
//       date: formData.date,
//       text: formData.text,
//       imageBase64: formData.imageBase64 || "",
//     };

//     try {
//       let response;
//       if (editingBlog) {
//         // Edit
//         response = await axios.put(`http://localhost:5000/api/blogs/${editingBlog._id}`, submitData);
//         setBlogsList((prev) =>
//           prev.map((blog) => (blog._id === editingBlog._id ? response.data : blog))
//         );
//         alert("Blog updated successfully!");
//       } else {
//         // Create
//         response = await axios.post("http://localhost:5000/api/blogs", submitData);
//         setBlogsList((prev) => [response.data, ...prev]); // Add to top
//         alert("Blog post created successfully!");
//       }
//       setShowForm(false); // Back to list
//       setEditingBlog(null);
//     } catch (error) {
//       console.error("Error:", error.response?.data || error.message);
//       setError("Failed to save blog: " + (error.response?.data?.error || "Server error"));
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   const handleCancel = () => {
//     setShowForm(false);
//     setEditingBlog(null);
//     setImagePreview(null);
//     setFormData({
//       title: "",
//       subtitle: "",
//       imageBase64: "",
//       imageUrl: "",
//       author: "",
//       location: "",
//       category: "ARTIFICIAL INTELLIGENCE",
//       date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }).replace(/ /g, " "),
//       text: "",
//     });
//     setValidationErrors({});
//   };

//   // Jodit Editor config
//   const config = {
//     readonly: false,
//     height: 300,
//     toolbarSticky: true,
//     showCharsCounter: false,
//     showWordsCounter: false,
//     showXCharactersCounter: false,
//     buttons: "bold,strikethrough,underline,|,ul,ol,|,font,fontsize,|,forecolor,backcolor,|,justify,|,table,|,link,video,|,source,preview",
//     colors: {
//       fore: [
//         "#000000", "#e60000", "#ff9900", "#ffff00", "#008A00", "#0066cc", "#9933ff", "#ffffff",
//         "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce5ff", "#ead1ff", "#fcebff", "#f54a00",
//       ],
//       back: [
//         "#000000", "#e60000", "#ff9900", "#ffff00", "#008A00", "#0066cc", "#9933ff", "#ffffff",
//         "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce5ff", "#ead1ff", "#fcebff", "#f54a00",
//       ],
//     },
//   };

//   const orangeColor = "#F54A00";

//   if (loading) {
//     return (
//       <div className="overflow-x-hidden min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
//         <div className="text-center">Loading...</div>
//       </div>
//     );
//   }

//   // Helper to get preview text (full, stripped)
//   const getPreviewText = () => {
//     const text = formData.text || editingBlog?.text || "";
//     return text.replace(/<[^>]*>/g, '').trim(); // Full plain text, no truncation
//   };

//   return (
//     <div className="overflow-x-hidden min-h-screen mt-10">
//       <div className="py-16 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
//         <div className="max-w-6xl mx-auto">
//           {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-center">{error}</div>}
          
//           {showForm ? (
//             // Form View (Create/Edit)
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {/* Left Side: Preview (if editing) */}
// <div className="lg:col-span-1">
//   {editingBlog ? (
//     <div className="bg-white rounded-2xl shadow-lg p-6 h-full flex flex-col min-h-0"> {/* min-h-0 for flex */}
//       <h3 className="text-xl font-bold mb-4" style={{ color: orangeColor }}>
//         Edit Preview
//       </h3>
//       <div className="flex-shrink-0 mb-4">
//         <img
//           src={imagePreview || editingBlog.image}
//           alt={formData.title || editingBlog.title}
//           className="w-full h-48 object-cover rounded-lg"
//         />
//       </div>
//       <h4 className="text-lg font-semibold mb-2">{formData.title || editingBlog.title}</h4>
//       {/* Full Text Preview - Taller Height (More visible content, scroll if needed) */}
//       <div className="text-sm text-gray-600 mb-4 overflow-auto max-h-[500px] flex-grow p-2 border rounded"> {/* max-h-500px for taller view */}
//         {getPreviewText()}
//       </div>
//       {/* Alternative: Even Taller (e.g., 600px) - uncomment if needed */}
//       {/* <div className="text-sm text-gray-600 mb-4 overflow-auto max-h-[600px] flex-grow p-2 border rounded"> */}
//       {/*   {getPreviewText()} */}
//       {/* </div> */}
//       {/* HTML Version if needed */}
//       {/* <div 
//         className="text-sm mb-4 overflow-auto max-h-[500px] flex-grow p-2 border rounded prose prose-sm max-w-none"
//         dangerouslySetInnerHTML={{ __html: formData.text || editingBlog.text || "" }}
//       /> */}
//     </div>
//   ) : (
//     <div className="bg-gray-100 rounded-2xl p-6 h-full flex items-center justify-center">
//       <p className="text-gray-500 text-center">Create new post</p>
//     </div>
//   )}
// </div>

//               {/* Right Side: Form */}
//               <div className="lg:col-span-1">
//                 <div className="max-w-2xl mx-auto">
//                   <h2 className="text-4xl font-bold text-center mt-12 mb-4" style={{ color: orangeColor }}>
//                     {editingBlog ? "Edit Blog Post" : "Create New Blog Post"}
//                   </h2>
//                   <p className="text-gray-600 text-center max-w-md mx-auto mb-12">
//                     {editingBlog ? "Update your insights on AI, technology, and more" : "Share your insights on AI, technology, and more"}
//                   </p>
                  
//                   <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
//                     {/* Title */}
//                     <div>
//                       <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="title">
//                         Title *
//                       </label>
//                       <input
//                         type="text"
//                         id="title"
//                         name="title"
//                         value={formData.title}
//                         onChange={handleInputChange}
//                         className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
//                           validationErrorsMemo.title ? 'border-red-500' : 'border-gray-300'
//                         }`}
//                         placeholder="Enter blog title"
//                         required
//                       />
//                       {validationErrorsMemo.title && <p className="text-red-500 text-xs mt-1">{validationErrorsMemo.title}</p>}
//                     </div>

//                     {/* Subtitle */}
//                     <div>
//                       <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="subtitle">
//                         Subtitle *
//                       </label>
//                       <input
//                         type="text"
//                         id="subtitle"
//                         name="subtitle"
//                         value={formData.subtitle}
//                         onChange={handleInputChange}
//                         className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
//                           validationErrorsMemo.subtitle ? 'border-red-500' : 'border-gray-300'
//                         }`}
//                         placeholder="Enter subtitle"
//                         required
//                       />
//                       {validationErrorsMemo.subtitle && <p className="text-red-500 text-xs mt-1">{validationErrorsMemo.subtitle}</p>}
//                     </div>

//                     {/* Image Upload */}
//                     <div>
//                       <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="image">
//                         Featured Image (Optional)
//                       </label>
//                       <div className="relative">
//                         <input
//                           type="file"
//                           id="image"
//                           ref={fileInputRef}
//                           onChange={handleImageChange}
//                           accept="image/*"
//                           className="hidden"
//                         />
//                         <button
//                           type="button"
//                           onClick={() => fileInputRef.current?.click()} // Optional chaining
//                           className="w-full flex items-center justify-center py-3 px-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-orange-500 transition-colors duration-300 text-gray-600 hover:text-orange-600 font-medium"
//                           disabled={submitting}
//                         >
//                           <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                           </svg>
//                           {imagePreview ? "Change Image" : "Upload Image"}
//                         </button>
//                       </div>
//                       {imagePreview && (
//                         <div className="mt-4">
//                           <img
//                             src={imagePreview}
//                             alt="Preview"
//                             className="w-full h-48 object-cover rounded-lg shadow-md"
//                           />
//                         </div>
//                       )}
//                     </div>

//                     {/* Category */}
//                     <div>
//                       <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="category">
//                         Category *
//                       </label>
//                       <select
//                         id="category"
//                         name="category"
//                         value={formData.category}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                         required
//                       >
//                         {categories.map((cat) => (
//                           <option key={cat} value={cat}>{cat}</option>
//                         ))}
//                       </select>
//                     </div>

//                     {/* Author */}
//                     <div>
//                       <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="author">
//                         Author *
//                       </label>
//                       <input
//                         type="text"
//                         id="author"
//                         name="author"
//                         value={formData.author}
//                         onChange={handleInputChange}
//                         className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
//                           validationErrorsMemo.author ? 'border-red-500' : 'border-gray-300'
//                         }`}
//                         placeholder="Enter author name"
//                         required
//                       />
//                       {validationErrorsMemo.author && <p className="text-red-500 text-xs mt-1">{validationErrorsMemo.author}</p>}
//                     </div>

//                     {/* Location */}
//                     <div>
//                       <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="location">
//                         Location *
//                       </label>
//                       <input
//                         type="text"
//                         id="location"
//                         name="location"
//                         value={formData.location}
//                         onChange={handleInputChange}
//                         className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
//                           validationErrorsMemo.location ? 'border-red-500' : 'border-gray-300'
//                         }`}
//                         placeholder="Enter location (e.g., MERALA)"
//                         required
//                       />
//                       {validationErrorsMemo.location && <p className="text-red-500 text-xs mt-1">{validationErrorsMemo.location}</p>}
//                     </div>

//                     {/* Date */}
//                     <div>
//                       <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="date">
//                         Date
//                       </label>
//                       <input
//                         type="text"
//                         id="date"
//                         name="date"
//                         value={formData.date}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-gray-50"
//                         placeholder="e.g., 13 Sept 2025"
//                       />
//                     </div>

//                     {/* Content */}
//                     <div>
//                       <label className="block text-sm font-semibold text-gray-700 mb-2">
//                         Content *
//                       </label>
//                       <JoditEditor
//                         ref={editor}
//                         value={formData.text || ""} // Safe value
//                         config={config}
//                         onBlur={handleContentChange}
//                         onChange={handleContentChange}
//                         tabIndex={1}
//                         disabled={submitting}
//                       />
//                       {validationErrorsMemo.text && <p className="text-red-500 text-xs mt-1">{validationErrorsMemo.text}</p>}
//                     </div>

//                     {/* Buttons */}
//                     <div className="flex flex-col sm:flex-row gap-4 pt-4">
//                       <button
//                         type="button"
//                         onClick={handleCancel}
//                         className="flex-1 text-center py-3 px-6 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300 font-semibold text-gray-700"
//                       >
//                         Cancel
//                       </button>
//                       <button
//                         type="submit"
//                         disabled={submitting || !isFormValid}
//                         className="flex-1 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 text-center block disabled:opacity-50 disabled:cursor-not-allowed"
//                         style={{
//                           background: `linear-gradient(to right, ${orangeColor}, ${orangeColor})`,
//                         }}
//                       >
//                         {submitting ? (editingBlog ? "Updating..." : "Creating...") : (editingBlog ? "Update Post" : "Create Post")}
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             // List View (Default - Show all posts)
//             <div className="max-w-4xl mx-auto">
//               <div className="flex justify-between items-center mb-8">
//                 <h2 className="text-4xl font-bold" style={{ color: orangeColor }}>
//                   My Blog Posts
//                 </h2>
//                 <button
//                   onClick={handleCreateNew}
//                   className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold"
//                 >
//                   + Create New Post
//                 </button>
//               </div>
//               {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}
//               {blogsList.length === 0 ? (
//                 <div className="text-center py-16">
//                   <p className="text-gray-500 mb-4">No posts yet. Create your first post!</p>
//                   <button
//                     onClick={handleCreateNew}
//                     className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
//                   >
//                     Create First Post
//                   </button>
//                 </div>
//               ) : (
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {blogsList.map((blog) => (
//                     <div key={blog._id} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col h-full">
//                       <div className="flex-shrink-0 mb-4">
//                         <img
//                           src={blog.image}
//                           alt={blog.title}
//                           className="w-full h-40 object-cover rounded-lg"
//                         />
//                       </div>
//                       <h4 className="text-lg font-semibold mb-2 line-clamp-2">{blog.title}</h4>
//                       <p className="text-sm text-gray-600 mb-4 line-clamp-2">
//                         {(blog.text || "").replace(/<[^>]*>/g, '').substring(0, 50)}...
//                       </p>
//                       <div className="text-xs text-gray-500 mb-4">
//                         By {blog.author} • {blog.date}
//                       </div>
//                       <div className="mt-auto space-y-2">
//                         <button
//                           onClick={() => handleEditClick(blog)}
//                           className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
//                         >
//                           Edit
//                         </button>
//                         <button
//                           onClick={() => handleDelete(blog._id)}
//                           className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
//                         >
//                           Delete
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogCreate;



import React, { useEffect, useState, useRef, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import JoditEditor from "jodit-react";
import axios from "axios";

const BlogCreate = () => {
  const { id } = useParams(); // For edit mode
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    imageBase64: "",
    imageUrl: "", // For edit preview
    author: "",
    location: "",
    category: "ARTIFICIAL INTELLIGENCE",
    date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }).replace(/ /g, " "),
    text: "",
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});
  const fileInputRef = useRef(null);
  const editor = useRef(null);

  const categories = [
    "ARTIFICIAL INTELLIGENCE",
    "MACHINE LEARNING",
    "WEB DEVELOPMENT",
    "MOBILE DEVELOPMENT",
    "UI/UX DESIGN",
  ];

  // Memoized validation
  const validationErrorsMemo = useMemo(() => {
    const errors = {};
    if (!formData.title.trim()) errors.title = "Title is required";
    if (!formData.subtitle.trim()) errors.subtitle = "Subtitle is required";
    if (!formData.author.trim()) errors.author = "Author is required";
    if (!formData.location.trim()) errors.location = "Location is required";
    if (!formData.text.trim()) errors.text = "Content is required";
    return errors;
  }, [formData]);

  const isFormValid = useMemo(() => Object.keys(validationErrorsMemo).length === 0, [validationErrorsMemo]);

  // Fetch blog for edit on mount if id exists
  useEffect(() => {
    if (id) {
      const fetchBlog = async () => {
        try {
          setLoading(true);
          const response = await axios.get(`http://localhost:5000/api/blogs/${id}`);
          const blog = response.data;
          setFormData({
            title: blog.title,
            subtitle: blog.subtitle,
            imageBase64: "",
            imageUrl: blog.image,
            author: blog.author,
            location: blog.location,
            category: blog.category,
            date: blog.date,
            text: blog.text || "",
          });
          setImagePreview(blog.image);
        } catch (err) {
          console.error("Error fetching blog:", err);
          setError("Failed to load blog.");
        } finally {
          setLoading(false);
        }
      };
      fetchBlog();
    }
  }, [id]);

  const validateForm = () => {
    const errors = {};
    if (!formData.title.trim()) errors.title = "Title is required";
    if (!formData.subtitle.trim()) errors.subtitle = "Subtitle is required";
    if (!formData.author.trim()) errors.author = "Author is required";
    if (!formData.location.trim()) errors.location = "Location is required";
    if (!formData.text.trim()) errors.text = "Content is required";
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (validationErrors[name]) {
      setValidationErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleContentChange = (content) => {
    setFormData((prev) => ({ ...prev, text: content || "" })); // Ensure string
    if (validationErrors.text) {
      setValidationErrors((prev) => ({ ...prev, text: "" }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData((prev) => ({ ...prev, imageBase64: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setError("Please fix the errors below.");
      return;
    }

    setSubmitting(true);
    setError(null);

    const submitData = {
      title: formData.title,
      subtitle: formData.subtitle,
      author: formData.author,
      location: formData.location,
      category: formData.category,
      date: formData.date,
      text: formData.text,
      imageBase64: formData.imageBase64 || "",
    };

    try {
      let response;
      if (id) {
        // Edit
        response = await axios.put(`http://localhost:5000/api/blogs/${id}`, submitData);
        alert("Blog updated successfully!");
      } else {
        // Create
        response = await axios.post("http://localhost:5000/api/blogs", submitData);
        alert("Blog post created successfully!");
      }
      navigate("/admin", { state: { refetch: true } }); // Trigger refetch in dashboard
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      setError("Failed to save blog: " + (error.response?.data?.error || "Server error"));
    } finally {
      setSubmitting(false);
    }
  };

  const handleCancel = () => {
    navigate("/admin");
  };

  // Jodit Editor config
  const config = {
    readonly: false,
    height: 300,
    toolbarSticky: true,
    showCharsCounter: false,
    showWordsCounter: false,
    showXCharactersCounter: false,
    buttons: "bold,strikethrough,underline,|,ul,ol,|,font,fontsize,|,forecolor,backcolor,|,justify,|,table,|,link,video,|,source,preview",
    colors: {
      fore: [
        "#000000", "#e60000", "#ff9900", "#ffff00", "#008A00", "#0066cc", "#9933ff", "#ffffff",
        "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce5ff", "#ead1ff", "#fcebff", "#f54a00",
      ],
      back: [
        "#000000", "#e60000", "#ff9900", "#ffff00", "#008A00", "#0066cc", "#9933ff", "#ffffff",
        "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce5ff", "#ead1ff", "#fcebff", "#f54a00",
      ],
    },
  };

  const orangeColor = "#F54A00";

  if (loading) {
    return (
      <div className="overflow-x-hidden min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  // Helper to get preview text (full, stripped)
  const getPreviewText = () => {
    const text = formData.text;
    return text.replace(/<[^>]*>/g, '').trim(); // Full plain text, no truncation
  };

  return (
    <div className="overflow-x-hidden min-h-screen mt-10">
      <div className="py-16 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto">
          {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-center">{error}</div>}
          
          {/* Form View */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side: Preview (for edit) */}
            <div className="lg:col-span-1">
              {id ? (
                <div className="bg-white rounded-2xl shadow-lg p-6 h-full flex flex-col min-h-0"> {/* min-h-0 for flex */}
                  <h3 className="text-xl font-bold mb-4" style={{ color: orangeColor }}>
                    Edit Preview
                  </h3>
                  <div className="flex-shrink-0 mb-4">
                    <img
                      src={imagePreview || formData.imageUrl}
                      alt={formData.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{formData.title}</h4>
                  {/* Full Text Preview - Taller Height (More visible content, scroll if needed) */}
                  <div className="text-sm text-gray-600 mb-4 overflow-auto max-h-[500px] flex-grow p-2 border rounded"> {/* max-h-500px for taller view */}
                    {getPreviewText()}
                  </div>
                </div>
              ) : (
                <div className="bg-gray-100 rounded-2xl p-6 h-full flex items-center justify-center">
                  <p className="text-gray-500 text-center">Create new post</p>
                </div>
              )}
            </div>

            {/* Right Side: Form */}
            <div className="lg:col-span-1">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-4xl font-bold text-center mt-12 mb-4" style={{ color: orangeColor }}>
                  {id ? "Edit Blog Post" : "Create New Blog Post"}
                </h2>
                <p className="text-gray-600 text-center max-w-md mx-auto mb-12">
                  {id ? "Update your insights on AI, technology, and more" : "Share your insights on AI, technology, and more"}
                </p>
                
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
                  {/* Title */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="title">
                      Title *
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                        validationErrorsMemo.title ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter blog title"
                      required
                    />
                    {validationErrorsMemo.title && <p className="text-red-500 text-xs mt-1">{validationErrorsMemo.title}</p>}
                  </div>

                  {/* Subtitle */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="subtitle">
                      Subtitle *
                    </label>
                    <input
                      type="text"
                      id="subtitle"
                      name="subtitle"
                      value={formData.subtitle}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                        validationErrorsMemo.subtitle ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter subtitle"
                      required
                    />
                    {validationErrorsMemo.subtitle && <p className="text-red-500 text-xs mt-1">{validationErrorsMemo.subtitle}</p>}
                  </div>

                  {/* Image Upload */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="image">
                      Featured Image (Optional)
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        id="image"
                        ref={fileInputRef}
                        onChange={handleImageChange}
                        accept="image/*"
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full flex items-center justify-center py-3 px-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-orange-500 transition-colors duration-300 text-gray-600 hover:text-orange-600 font-medium"
                        disabled={submitting}
                      >
                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        {imagePreview ? "Change Image" : "Upload Image"}
                      </button>
                    </div>
                    {imagePreview && (
                      <div className="mt-4">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-full h-48 object-cover rounded-lg shadow-md"
                        />
                      </div>
                    )}
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="category">
                      Category *
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    >
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  {/* Author */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="author">
                      Author *
                    </label>
                    <input
                      type="text"
                      id="author"
                      name="author"
                      value={formData.author}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                        validationErrorsMemo.author ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter author name"
                      required
                    />
                    {validationErrorsMemo.author && <p className="text-red-500 text-xs mt-1">{validationErrorsMemo.author}</p>}
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="location">
                      Location *
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                        validationErrorsMemo.location ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter location (e.g., MERALA)"
                      required
                    />
                    {validationErrorsMemo.location && <p className="text-red-500 text-xs mt-1">{validationErrorsMemo.location}</p>}
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="date">
                      Date
                    </label>
                    <input
                      type="text"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-gray-50"
                      placeholder="e.g., 13 Sept 2025"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Content *
                    </label>
                    <JoditEditor
                      ref={editor}
                      value={formData.text || ""} // Safe value
                      config={config}
                      onBlur={handleContentChange}
                      onChange={handleContentChange}
                      tabIndex={1}
                      disabled={submitting}
                    />
                    {validationErrorsMemo.text && <p className="text-red-500 text-xs mt-1">{validationErrorsMemo.text}</p>}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="flex-1 text-center py-3 px-6 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300 font-semibold text-gray-700"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={submitting || !isFormValid}
                      className="flex-1 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 text-center block disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{
                        background: `linear-gradient(to right, ${orangeColor}, ${orangeColor})`,
                      }}
                    >
                      {submitting ? (id ? "Updating..." : "Creating...") : (id ? "Update Post" : "Create Post")}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCreate;