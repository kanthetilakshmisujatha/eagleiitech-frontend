// import React, { useEffect, useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { FaTachometerAlt, FaBlog, FaComments, FaBriefcase, FaEnvelope, FaSignOutAlt } from "react-icons/fa";
// import axios from "axios"; // npm install axios
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const AdminDashboard = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [activeMenu, setActiveMenu] = useState("dashboard");
//   const [stats, setStats] = useState({ blogs: 0, comments: 0, jobs: 0, applications: 0 });
//   const [blogs, setBlogs] = useState([]);
//   const [comments, setComments] = useState([]);
//   const [jobs, setJobs] = useState([]);
//   const [applications, setApplications] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const highlightColor = "#F54A00"; // Same as Contact theme
//   const API_BASE_URL = "http://localhost:5000/api";

//   // Sidebar menu items
//   const menuItems = [
//     { id: "dashboard", icon: FaTachometerAlt, label: "Dashboard" },
//     { id: "blogs", icon: FaBlog, label: "Blogs" },
//     { id: "comments", icon: FaComments, label: "Comments" },
//     { id: "jobposts", icon: FaBriefcase, label: "Job Posts" },
//     { id: "contacts", icon: FaEnvelope, label: "Contacts" },
//   ];

//   useEffect(() => {
//     // Initialize GSAP for subtle animations
//     gsap.from(".sidebar", {
//       x: -200,
//       duration: 1,
//       ease: "power3.out",
//     });

//     gsap.from(".main-content", {
//       opacity: 0,
//       y: 30,
//       duration: 1,
//       delay: 0.5,
//       ease: "power2.out",
//     });

//     // Fetch data based on active menu
//     fetchData();
//   }, [activeMenu]);

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       switch (activeMenu) {
//         case "dashboard":
//           // Fetch stats
//           const [blogsRes, commentsRes, jobsRes, appsRes] = await Promise.all([
//             axios.get(`${API_BASE_URL}/blogs`),
//             axios.get(`${API_BASE_URL}/comments`),
//             axios.get(`${API_BASE_URL}/jobs`),
//             axios.get(`${API_BASE_URL}/applications`), // Assume /api/applications GET route added in backend
//           ]);
//           setStats({
//             blogs: blogsRes.data.length,
//             comments: commentsRes.data.filter(c => c.status === 'pending').length,
//             jobs: jobsRes.data.length,
//             applications: appsRes.data.length,
//           });
//           break;
//         case "blogs":
//           const blogRes = await axios.get(`${API_BASE_URL}/blogs`);
//           setBlogs(blogRes.data);
//           break;
//         case "comments":
//           const [pendingRes, trashRes] = await Promise.all([
//             axios.get(`${API_BASE_URL}/comments?status=pending`),
//             axios.get(`${API_BASE_URL}/comments?status=trash`), // Assume query support
//           ]);
//           setComments([...pendingRes.data, ...trashRes.data]);
//           break;
//         case "jobposts":
//           const jobRes = await axios.get(`${API_BASE_URL}/jobs`);
//           setJobs(jobRes.data);
//           break;
//         case "contacts":
//           const appRes = await axios.get(`${API_BASE_URL}/applications`);
//           setApplications(appRes.data);
//           break;
//         default:
//           break;
//       }
//     } catch (err) {
//       console.error("Error fetching data:", err);
//       setError("Failed to load data. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleMenuClick = (menuId) => {
//     setActiveMenu(menuId);
//   };

//   const handleLogout = () => {
//     // Add logout logic (e.g., clear token, navigate to /)
//     navigate("/");
//   };

//   const handleAction = async (type, id, action) => {
//     try {
//       if (type === "comment") {
//         const endpoint = action === "approve" ? "approve" : action === "reject" ? "reject" : "restore";
//         await axios.put(`${API_BASE_URL}/comments/${id}/${endpoint}`);
//         fetchData(); // Refetch
//       } else if (type === "delete") {
//         await axios.delete(`${API_BASE_URL}/${activeMenu.slice(0, -1)}/${id}`); // e.g., /blogs/:id
//         fetchData();
//       }
//       // Add edit/update similarly
//     } catch (err) {
//       alert("Action failed. Please try again.");
//     }
//   };

//   if (loading) {
//     return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
//   }

//   if (error) {
//     return <div className="flex items-center justify-center min-h-screen text-red-500">{error}</div>;
//   }

//   return (
//     <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden mt-20">
//       {/* Left Sidebar */}
//       <div className="sidebar w-64 bg-white shadow-lg flex flex-col">
//         <div className="p-6 border-b border-gray-200">
//           <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
//           <p className="text-sm text-gray-600">EagleiiTech</p>
//         </div>
//         <nav className="flex-1 py-4">
//           {menuItems.map((item) => (
//             <button
//               key={item.id}
//               onClick={() => handleMenuClick(item.id)}
//               className={`w-full flex items-center px-6 py-3 text-left transition-colors ${
//                 activeMenu === item.id
//                   ? "bg-orange-50 text-orange-600 border-r-2 border-orange-500"
//                   : "text-gray-700 hover:bg-gray-50"
//               }`}
//               style={{ color: activeMenu === item.id ? highlightColor : "inherit" }}
//             >
//               <item.icon className="mr-3 text-xl" />
//               {item.label}
//             </button>
//           ))}
//         </nav>
//         <button
//           onClick={handleLogout}
//           className="flex items-center px-6 py-3 text-left text-gray-700 hover:bg-gray-50 mt-auto"
//         >
//           <FaSignOutAlt className="mr-3" />
//           Logout
//         </button>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col overflow-hidden main-content">
//         <header className="bg-white shadow-sm p-4 flex justify-between items-center">
//           <h2 className="text-xl font-semibold text-gray-900 capitalize">
//             {activeMenu.replace(/([A-Z])/g, " $1").trim()}
//           </h2>
//           <div className="text-sm text-gray-500">Welcome, Admin</div>
//         </header>

//         <main className="flex-1 overflow-y-auto p-6">
//           {activeMenu === "dashboard" && (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               <div className="bg-white rounded-xl shadow-md p-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-sm font-medium text-gray-600">Total Blogs</p>
//                     <p className="text-3xl font-bold text-gray-900">{stats.blogs}</p>
//                   </div>
//                   <FaBlog className="text-4xl text-blue-500" />
//                 </div>
//               </div>
//               <div className="bg-white rounded-xl shadow-md p-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-sm font-medium text-gray-600">Pending Comments</p>
//                     <p className="text-3xl font-bold text-gray-900">{stats.comments}</p>
//                   </div>
//                   <FaComments className="text-4xl text-yellow-500" />
//                 </div>
//               </div>
//               <div className="bg-white rounded-xl shadow-md p-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-sm font-medium text-gray-600">Job Posts</p>
//                     <p className="text-3xl font-bold text-gray-900">{stats.jobs}</p>
//                   </div>
//                   <FaBriefcase className="text-4xl text-green-500" />
//                 </div>
//               </div>
//               <div className="bg-white rounded-xl shadow-md p-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-sm font-medium text-gray-600">Applications</p>
//                     <p className="text-3xl font-bold text-gray-900">{stats.applications}</p>
//                   </div>
//                   <FaEnvelope className="text-4xl text-red-500" />
//                 </div>
//               </div>
//             </div>
//           )}

//           {activeMenu === "blogs" && (
//             <div className="space-y-4">
//               <div className="flex justify-between items-center">
//                 <h3 className="text-lg font-semibold">Blogs List</h3>
//                 <button
//                   onClick={() => navigate("/admin/blogs/new")} // Assume add route
//                   className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
//                   style={{ backgroundColor: highlightColor }}
//                 >
//                   Add New
//                 </button>
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="min-w-full bg-white rounded-lg shadow-md">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Author</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
//                       <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-gray-200">
//                     {blogs.map((blog) => (
//                       <tr key={blog._id}>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{blog.title}</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{blog.author}</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{blog.date}</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
//                           <button className="text-blue-600 hover:text-blue-900">Edit</button>
//                           <button
//                             onClick={() => handleAction("delete", blog._id)}
//                             className="text-red-600 hover:text-red-900"
//                           >
//                             Delete
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           )}

//           {activeMenu === "comments" && (
//             <div className="space-y-4">
//               <h3 className="text-lg font-semibold">Comments Management</h3>
//               <div className="grid gap-4">
//                 {comments.map((comment) => (
//                   <div key={comment._id} className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center">
//                     <div>
//                       <p className="font-medium">{comment.name}: {comment.comment.substring(0, 100)}...</p>
//                       <p className="text-sm text-gray-500">Status: {comment.status}</p>
//                     </div>
//                     <div className="space-x-2">
//                       {comment.status === "pending" && (
//                         <>
//                           <button
//                             onClick={() => handleAction("comment", comment._id, "approve")}
//                             className="bg-green-500 text-white px-3 py-1 rounded text-sm"
//                           >
//                             Approve
//                           </button>
//                           <button
//                             onClick={() => handleAction("comment", comment._id, "reject")}
//                             className="bg-red-500 text-white px-3 py-1 rounded text-sm"
//                           >
//                             Reject
//                           </button>
//                         </>
//                       )}
//                       {comment.status === "trash" && (
//                         <button
//                           onClick={() => handleAction("comment", comment._id, "restore")}
//                           className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
//                         >
//                           Restore
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {activeMenu === "jobposts" && (
//             <div className="space-y-4">
//               <div className="flex justify-between items-center">
//                 <h3 className="text-lg font-semibold">Job Posts</h3>
//                 <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600" style={{ backgroundColor: highlightColor }}>
//                   Add New
//                 </button>
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="min-w-full bg-white rounded-lg shadow-md">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
//                       <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-gray-200">
//                     {jobs.map((job) => (
//                       <tr key={job._id}>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{job.title}</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.role}</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.location}</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
//                           <button className="text-blue-600 hover:text-blue-900">Edit</button>
//                           <button
//                             onClick={() => handleAction("delete", job._id)}
//                             className="text-red-600 hover:text-red-900"
//                           >
//                             Delete
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           )}

//           {activeMenu === "contacts" && (
//             <div className="space-y-4">
//               <h3 className="text-lg font-semibold">Contact Applications</h3>
//               <div className="overflow-x-auto">
//                 <table className="min-w-full bg-white rounded-lg shadow-md">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Job Title</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-gray-200">
//                     {applications.map((app) => (
//                       <tr key={app._id}>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{app.fullName}</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.email}</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.jobTitle}</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                           {new Date(app.createdAt).toLocaleDateString()}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;




// import React, { useEffect, useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { FaTachometerAlt, FaBlog, FaComments, FaBriefcase, FaEnvelope, FaSignOutAlt, FaTrash, FaCheckCircle } from "react-icons/fa";
// import axios from "axios";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const AdminDashboard = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [activeMenu, setActiveMenu] = useState("dashboard");
//   const [stats, setStats] = useState({ blogs: 0, comments: 0, jobs: 0, applications: 0 });
//   const [blogs, setBlogs] = useState([]);
//   const [comments, setComments] = useState([]); // Pending comments
//   const [approvedComments, setApprovedComments] = useState([]); // Approved comments
//   const [trashComments, setTrashComments] = useState([]); // Trashed comments
//   const [jobs, setJobs] = useState([]);
//   const [applications, setApplications] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const highlightColor = "#F54A00";
//   const API_BASE_URL = "http://localhost:5000/api";

//   // Map menu IDs to API paths for consistency
//   const apiPathMap = {
//     blogs: "blogs",
//     jobposts: "jobs",
//     contacts: "applications",
//   };

//   // Sidebar menu items - Added "Approved" and kept "Trash"
//   const menuItems = [
//     { id: "dashboard", icon: FaTachometerAlt, label: "Dashboard" },
//     { id: "blogs", icon: FaBlog, label: "Blogs" },
//     { id: "comments", icon: FaComments, label: "Comments" }, // Pending
//     { id: "approved", icon: FaCheckCircle, label: "Approved" }, // New: Approved comments
//     { id: "trash", icon: FaTrash, label: "Trash" },
//     { id: "jobposts", icon: FaBriefcase, label: "Job Posts" },
//     { id: "contacts", icon: FaEnvelope, label: "Contacts" },
//   ];

//   useEffect(() => {
//     // GSAP animations
//     gsap.from(".sidebar", { x: -200, duration: 1, ease: "power3.out" });
//     gsap.from(".main-content", { opacity: 0, y: 30, duration: 1, delay: 0.5, ease: "power2.out" });

//     // Refetch if returning from create/edit (check pathname and state)
//     if (location.pathname === "/admin" && location.state?.refetch) {
//       fetchData();
//     } else {
//       fetchData();
//     }
//   }, [activeMenu, location.state]);

//   const fetchData = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       switch (activeMenu) {
//         case "dashboard":
//           const [blogsRes, commentsRes, jobsRes, appsRes] = await Promise.all([
//             axios.get(`${API_BASE_URL}/blogs`),
//             axios.get(`${API_BASE_URL}/comments?status=pending`), // Only pending for stats
//             axios.get(`${API_BASE_URL}/jobs`),
//             axios.get(`${API_BASE_URL}/applications`),
//           ]);
//           setStats({
//             blogs: blogsRes.data.length,
//             comments: commentsRes.data.length, // Pending count
//             jobs: jobsRes.data.length,
//             applications: appsRes.data.length,
//           });
//           break;
//         case "blogs":
//           const blogRes = await axios.get(`${API_BASE_URL}/blogs`);
//           setBlogs(blogRes.data);
//           break;
//         case "comments":
//           // Fetch only pending comments
//           const pendingRes = await axios.get(`${API_BASE_URL}/comments?status=pending`);
//           setComments(pendingRes.data);
//           break;
//         case "approved":
//           // Fetch only approved comments
//           const approvedRes = await axios.get(`${API_BASE_URL}/comments?status=approved`);
//           setApprovedComments(approvedRes.data);
//           break;
//         case "trash":
//           // Fetch only trash comments
//           const trashRes = await axios.get(`${API_BASE_URL}/comments?status=trash`);
//           setTrashComments(trashRes.data);
//           break;
//         case "jobposts":
//           const jobRes = await axios.get(`${API_BASE_URL}/jobs`);
//           setJobs(jobRes.data);
//           break;
//         case "contacts":
//           const appRes = await axios.get(`${API_BASE_URL}/applications`);
//           setApplications(appRes.data);
//           break;
//         default:
//           break;
//       }
//     } catch (err) {
//       console.error("Error fetching data:", err);
//       setError("Failed to load data. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleMenuClick = (menuId) => {
//     setActiveMenu(menuId);
//   };

//   const handleLogout = () => {
//     navigate("/");
//   };

//   const handleAction = async (type, id, action) => {
//     try {
//       if (type === "comment") {
//         let endpoint;
//         if (action === "approve") {
//           endpoint = "approve"; // To 'approved'
//         } else if (action === "reject") {
//           endpoint = "reject"; // To 'trash'
//         } else if (action === "restore") {
//           endpoint = "restore"; // To 'pending'
//         }
//         await axios.put(`${API_BASE_URL}/comments/${id}/${endpoint}`);
//       } else if (type === "delete") {
//         const apiPath = apiPathMap[activeMenu];
//         if (!apiPath) throw new Error("Invalid menu");
//         await axios.delete(`${API_BASE_URL}/${apiPath}/${id}`);
//       }
//       fetchData(); // Refetch after action
//     } catch (err) {
//       console.error("Action failed:", err);
//       alert("Action failed. Please try again.");
//     }
//   };

//   const handleAddNew = (section) => {
//     const state = { refetch: true }; // Flag to refetch on return
//     if (section === "blogs") {
//       navigate("/admin/blog-create", { state });
//     } else if (section === "jobposts") {
//       navigate("/admin/job-create", { state });
//     }
//   };

//   const handleEdit = (section, id) => {
//     const state = { refetch: true };
//     if (section === "blogs") {
//       navigate(`/admin/blog-edit/${id}`, { state });
//     } else if (section === "jobposts") {
//       navigate(`/admin/job-edit/${id}`, { state });
//     }
//   };

//   if (loading) {
//     return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
//   }

//   if (error) {
//     return <div className="flex items-center justify-center min-h-screen text-red-500">{error}</div>;
//   }

//   return (
//     <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden mt-20">
//       {/* Left Sidebar */}
//       <div className="sidebar w-64 bg-white shadow-lg flex flex-col">
//         <div className="p-6 border-b border-gray-200">
//           <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
//           <p className="text-sm text-gray-600">EagleiiTech</p>
//         </div>
//         <nav className="flex-1 py-4">
//           {menuItems.map((item) => (
//             <button
//               key={item.id}
//               onClick={() => handleMenuClick(item.id)}
//               className={`w-full flex items-center px-6 py-3 text-left transition-colors ${
//                 activeMenu === item.id
//                   ? "bg-orange-50 text-orange-600 border-r-2 border-orange-500"
//                   : "text-gray-700 hover:bg-gray-50"
//               }`}
//               style={{ color: activeMenu === item.id ? highlightColor : "inherit" }}
//             >
//               <item.icon className="mr-3 text-xl" />
//               {item.label}
//             </button>
//           ))}
//         </nav>
//         <button
//           onClick={handleLogout}
//           className="flex items-center px-6 py-3 text-left text-gray-700 hover:bg-gray-50 mt-auto"
//         >
//           <FaSignOutAlt className="mr-3" />
//           Logout
//         </button>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col overflow-hidden main-content">
//         <header className="bg-white shadow-sm p-4 flex justify-between items-center">
//           <h2 className="text-xl font-semibold text-gray-900 capitalize">
//             {activeMenu.replace(/([A-Z])/g, " $1").trim()}
//           </h2>
//           <div className="text-sm text-gray-500">Welcome, Admin</div>
//         </header>

//         <main className="flex-1 overflow-y-auto p-6">
//           {activeMenu === "dashboard" && (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               <div className="bg-white rounded-xl shadow-md p-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-sm font-medium text-gray-600">Total Blogs</p>
//                     <p className="text-3xl font-bold text-gray-900">{stats.blogs}</p>
//                   </div>
//                   <FaBlog className="text-4xl text-blue-500" />
//                 </div>
//               </div>
//               <div className="bg-white rounded-xl shadow-md p-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-sm font-medium text-gray-600">Pending Comments</p>
//                     <p className="text-3xl font-bold text-gray-900">{stats.comments}</p>
//                   </div>
//                   <FaComments className="text-4xl text-yellow-500" />
//                 </div>
//               </div>
//               <div className="bg-white rounded-xl shadow-md p-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-sm font-medium text-gray-600">Job Posts</p>
//                     <p className="text-3xl font-bold text-gray-900">{stats.jobs}</p>
//                   </div>
//                   <FaBriefcase className="text-4xl text-green-500" />
//                 </div>
//               </div>
//               <div className="bg-white rounded-xl shadow-md p-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-sm font-medium text-gray-600">Applications</p>
//                     <p className="text-3xl font-bold text-gray-900">{stats.applications}</p>
//                   </div>
//                   <FaEnvelope className="text-4xl text-red-500" />
//                 </div>
//               </div>
//             </div>
//           )}

//           {activeMenu === "blogs" && (
//             <div className="space-y-4">
//               <div className="flex justify-between items-center">
//                 <h3 className="text-lg font-semibold">Blogs List</h3>
//                 <button
//                   onClick={() => handleAddNew("blogs")}
//                   className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
//                   style={{ backgroundColor: highlightColor }}
//                 >
//                   Add New
//                 </button>
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="min-w-full bg-white rounded-lg shadow-md">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Author</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
//                       <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-gray-200">
//                     {loading ? (
//                       <tr><td colSpan="4" className="px-6 py-4 text-center">Loading blogs...</td></tr>
//                     ) : blogs.length === 0 ? (
//                       <tr><td colSpan="4" className="px-6 py-4 text-center">No blogs yet.</td></tr>
//                     ) : (
//                       blogs.map((blog) => (
//                         <tr key={blog._id}>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{blog.title}</td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{blog.author}</td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{blog.date}</td>
//                           <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
//                             <button 
//                               onClick={() => handleEdit("blogs", blog._id)}
//                               className="text-blue-600 hover:text-blue-900"
//                             >
//                               Edit
//                             </button>
//                             <button
//                               onClick={() => handleAction("delete", blog._id)}
//                               className="text-red-600 hover:text-red-900"
//                             >
//                               Delete
//                             </button>
//                           </td>
//                         </tr>
//                       ))
//                     )}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           )}

//           {activeMenu === "comments" && (
//             <div className="space-y-4">
//               <h3 className="text-lg font-semibold">Comments Management (Pending)</h3>
//               <div className="grid gap-4">
//                 {loading ? (
//                   <p>Loading comments...</p>
//                 ) : comments.length === 0 ? (
//                   <p>No pending comments.</p>
//                 ) : (
//                   comments.map((comment) => (
//                     <div key={comment._id} className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center">
//                       <div>
//                         <p className="font-medium">{comment.name}: {comment.comment.substring(0, 100)}...</p>
//                         <p className="text-sm text-gray-500">Status: {comment.status}</p>
//                       </div>
//                       <div className="space-x-2">
//                         {comment.status === "pending" && (
//                           <>
//                             <button
//                               onClick={() => handleAction("comment", comment._id, "approve")}
//                               className="bg-green-500 text-white px-3 py-1 rounded text-sm"
//                             >
//                               Approve
//                             </button>
//                             <button
//                               onClick={() => handleAction("comment", comment._id, "reject")}
//                               className="bg-red-500 text-white px-3 py-1 rounded text-sm"
//                             >
//                               Reject
//                             </button>
//                           </>
//                         )}
//                       </div>
//                     </div>
//                   ))
//                 )}
//               </div>
//             </div>
//           )}

//           {activeMenu === "approved" && (
//             <div className="space-y-4">
//               <h3 className="text-lg font-semibold">Approved Comments</h3>
//               <div className="grid gap-4">
//                 {loading ? (
//                   <p>Loading approved comments...</p>
//                 ) : approvedComments.length === 0 ? (
//                   <p>No approved comments.</p>
//                 ) : (
//                   approvedComments.map((comment) => (
//                     <div key={comment._id} className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center">
//                       <div>
//                         <p className="font-medium">{comment.name}: {comment.comment.substring(0, 100)}...</p>
//                         <p className="text-sm text-gray-500">Status: {comment.status}</p>
//                       </div>
//                       <div className="space-x-2">
//                         {comment.status === "approved" && (
//                           <button
//                             onClick={() => handleAction("comment", comment._id, "reject")}
//                             className="bg-red-500 text-white px-3 py-1 rounded text-sm"
//                           >
//                             Reject
//                           </button>
//                         )}
//                       </div>
//                     </div>
//                   ))
//                 )}
//               </div>
//             </div>
//           )}

//           {activeMenu === "trash" && (
//             <div className="space-y-4">
//               <h3 className="text-lg font-semibold">Trash (Trashed Comments)</h3>
//               <div className="grid gap-4">
//                 {loading ? (
//                   <p>Loading trashed comments...</p>
//                 ) : trashComments.length === 0 ? (
//                   <p>No trashed comments.</p>
//                 ) : (
//                   trashComments.map((comment) => (
//                     <div key={comment._id} className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center">
//                       <div>
//                         <p className="font-medium">{comment.name}: {comment.comment.substring(0, 100)}...</p>
//                         <p className="text-sm text-gray-500">Status: {comment.status}</p>
//                       </div>
//                       <div className="space-x-2">
//                         {comment.status === "trash" && (
//                           <button
//                             onClick={() => handleAction("comment", comment._id, "restore")}
//                             className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
//                           >
//                             Restore
//                           </button>
//                         )}
//                       </div>
//                     </div>
//                   ))
//                 )}
//               </div>
//             </div>
//           )}

//           {activeMenu === "jobposts" && (
//             <div className="space-y-4">
//               <div className="flex justify-between items-center">
//                 <h3 className="text-lg font-semibold">Job Posts</h3>
//                 <button 
//                   onClick={() => handleAddNew("jobposts")}
//                   className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600" 
//                   style={{ backgroundColor: highlightColor }}
//                 >
//                   Add New
//                 </button>
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="min-w-full bg-white rounded-lg shadow-md">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
//                       <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-gray-200">
//                     {loading ? (
//                       <tr><td colSpan="4" className="px-6 py-4 text-center">Loading jobs...</td></tr>
//                     ) : jobs.length === 0 ? (
//                       <tr><td colSpan="4" className="px-6 py-4 text-center">No jobs yet.</td></tr>
//                     ) : (
//                       jobs.map((job) => (
//                         <tr key={job._id}>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{job.title}</td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.role}</td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.location}</td>
//                           <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
//                             <button 
//                               onClick={() => handleEdit("jobposts", job._id)}
//                               className="text-blue-600 hover:text-blue-900"
//                             >
//                               Edit
//                             </button>
//                             <button
//                               onClick={() => handleAction("delete", job._id)}
//                               className="text-red-600 hover:text-red-900"
//                             >
//                               Delete
//                             </button>
//                           </td>
//                         </tr>
//                       ))
//                     )}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           )}

//           {activeMenu === "contacts" && (
//             <div className="space-y-4">
//               <h3 className="text-lg font-semibold">Contact Applications</h3>
//               <div className="overflow-x-auto">
//                 <table className="min-w-full bg-white rounded-lg shadow-md">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Job Title</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-gray-200">
//                     {loading ? (
//                       <tr><td colSpan="4" className="px-6 py-4 text-center">Loading applications...</td></tr>
//                     ) : applications.length === 0 ? (
//                       <tr><td colSpan="4" className="px-6 py-4 text-center">No applications yet.</td></tr>
//                     ) : (
//                       applications.map((app) => (
//                         <tr key={app._id}>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{app.fullName}</td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.email}</td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.jobTitle}</td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                             {new Date(app.createdAt).toLocaleDateString()}
//                           </td>
//                         </tr>
//                       ))
//                     )}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaTachometerAlt, FaBlog, FaComments, FaBriefcase, FaEnvelope, FaSignOutAlt, FaTrash, FaCheckCircle, FaUser } from "react-icons/fa";
import axios from "axios";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AdminDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [stats, setStats] = useState({ blogs: 0, comments: 0, jobs: 0, applications: 0 });
  const [blogs, setBlogs] = useState([]);
  const [comments, setComments] = useState([]); // Pending comments
  const [approvedComments, setApprovedComments] = useState([]); // Approved comments
  const [trashComments, setTrashComments] = useState([]); // Trashed comments
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState({ username: "Admin", role: "Admin", profilePic: "https://via.placeholder.com/50?text=Admin" }); // Hardcoded for demo; fetch from API if needed

  const highlightColor = "#F54A00";
  const API_BASE_URL = "http://localhost:5000/api";

  // Map menu IDs to API paths for consistency
  const apiPathMap = {
    blogs: "blogs",
    jobposts: "jobs",
    contacts: "applications",
  };

  // Sidebar menu items - Added "Profile"
  const menuItems = [
    { id: "profile", icon: FaUser, label: "Profile" },
    { id: "dashboard", icon: FaTachometerAlt, label: "Dashboard" },
    { id: "blogs", icon: FaBlog, label: "Blogs" },
    { id: "comments", icon: FaComments, label: "Comments" }, // Pending
    { id: "approved", icon: FaCheckCircle, label: "Approved" }, // New: Approved comments
    { id: "trash", icon: FaTrash, label: "Trash" },
    { id: "jobposts", icon: FaBriefcase, label: "Job Posts" },
    { id: "contacts", icon: FaEnvelope, label: "Contacts" },
  ];

  useEffect(() => {
    // GSAP animations
    gsap.from(".sidebar", { x: -200, duration: 1, ease: "power3.out" });
    gsap.from(".main-content", { opacity: 0, y: 30, duration: 1, delay: 0.5, ease: "power2.out" });

    // Refetch if returning from create/edit (check pathname and state)
    if (location.pathname === "/admin" && location.state?.refetch) {
      fetchData();
    } else {
      fetchData();
    }
  }, [activeMenu, location.state]);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      switch (activeMenu) {
        case "dashboard":
          const [blogsRes, commentsRes, jobsRes, appsRes] = await Promise.all([
            axios.get(`${API_BASE_URL}/blogs`),
            axios.get(`${API_BASE_URL}/comments?status=pending`), // Only pending for stats
            axios.get(`${API_BASE_URL}/jobs`),
            axios.get(`${API_BASE_URL}/applications`),
          ]);
          setStats({
            blogs: blogsRes.data.length,
            comments: commentsRes.data.length, // Pending count
            jobs: jobsRes.data.length,
            applications: appsRes.data.length,
          });
          break;
        case "blogs":
          const blogRes = await axios.get(`${API_BASE_URL}/blogs`);
          setBlogs(blogRes.data);
          break;
        case "comments":
          // Fetch only pending comments
          const pendingRes = await axios.get(`${API_BASE_URL}/comments?status=pending`);
          setComments(pendingRes.data);
          break;
        case "approved":
          // Fetch only approved comments
          const approvedRes = await axios.get(`${API_BASE_URL}/comments?status=approved`);
          setApprovedComments(approvedRes.data);
          break;
        case "trash":
          // Fetch only trash comments
          const trashRes = await axios.get(`${API_BASE_URL}/comments?status=trash`);
          setTrashComments(trashRes.data);
          break;
        case "jobposts":
          const jobRes = await axios.get(`${API_BASE_URL}/jobs`);
          setJobs(jobRes.data);
          break;
        case "contacts":
          const appRes = await axios.get(`${API_BASE_URL}/applications`);
          setApplications(appRes.data);
          break;
        case "profile":
          // No fetch needed for profile (static/hardcoded)
          break;
        default:
          break;
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to load data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleMenuClick = (menuId) => {
    setActiveMenu(menuId);
  };

  const handleLogout = () => {
    // Add logout logic if needed (e.g., clear token)
    navigate("/");
  };

  const handleAction = async (type, id, action) => {
    try {
      if (type === "comment") {
        let endpoint;
        if (action === "approve") {
          endpoint = "approve"; // To 'approved'
        } else if (action === "reject") {
          endpoint = "reject"; // To 'trash'
        } else if (action === "restore") {
          endpoint = "restore"; // To 'pending'
        }
        await axios.put(`${API_BASE_URL}/comments/${id}/${endpoint}`);
      } else if (type === "delete") {
        const apiPath = apiPathMap[activeMenu];
        if (!apiPath) throw new Error("Invalid menu");
        await axios.delete(`${API_BASE_URL}/${apiPath}/${id}`);
      }
      fetchData(); // Refetch after action
    } catch (err) {
      console.error("Action failed:", err);
      alert("Action failed. Please try again.");
    }
  };

  const handleAddNew = (section) => {
    const state = { refetch: true }; // Flag to refetch on return
    if (section === "blogs") {
      navigate("/admin/blog-create", { state });
    } else if (section === "jobposts") {
      navigate("/admin/job-create", { state });
    }
  };

  const handleEdit = (section, id) => {
    const state = { refetch: true };
    if (section === "blogs") {
      navigate(`/admin/blog-edit/${id}`, { state });
    } else if (section === "jobposts") {
      navigate(`/admin/job-edit/${id}`, { state });
    }
  };

  const handleEditProfile = () => {
    navigate("/admin/profile-edit");
  };

  const handleChangePassword = () => {
    navigate("/admin/change-password");
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center min-h-screen text-red-500">{error}</div>;
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden mt-20">
      {/* Left Sidebar */}
      <div className="sidebar w-64 bg-white shadow-lg flex flex-col">
        {/* Profile Section */}
        <div className="p-6 border-b border-gray-200 cursor-pointer hover:bg-gray-50" onClick={() => handleMenuClick("profile")}>
          <div className="flex items-center space-x-3">
            <img src={user.profilePic} alt="Profile" className="w-12 h-12 rounded-full" />
            <div>
              <h1 className="text-lg font-bold text-gray-900">{user.username}</h1>
              <p className="text-sm text-gray-600">{user.role}</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 py-4 pb-2"> {/* Reduced bottom padding to move logout up */}
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleMenuClick(item.id)}
              className={`w-full flex items-center px-6 py-3 text-left transition-colors ${
                activeMenu === item.id
                  ? "bg-orange-50 text-orange-600 border-r-2 border-orange-500"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
              style={{ color: activeMenu === item.id ? highlightColor : "inherit" }}
            >
              <item.icon className="mr-3 text-xl" />
              {item.label}
            </button>
          ))}
        </nav>
        <div className="px-6 py-3 mb-30"> {/* Added mb-4 for margin bottom and wrapper for spacing */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-6 py-3 text-left transition-colors bg-orange-50 text-orange-600 border-r-2 border-orange-500 hover:bg-orange-100"
            style={{ color: highlightColor }}
          >
            <FaSignOutAlt className="mr-3" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden main-content">
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900 capitalize">
            {activeMenu.replace(/([A-Z])/g, " $1").trim()}
          </h2>
          <div className="text-sm text-gray-500">Welcome, {user.username}</div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          {activeMenu === "profile" && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">Profile Information</h3>
                <div className="flex items-center space-x-6">
                  <img src={user.profilePic} alt="Profile" className="w-24 h-24 rounded-full" />
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{user.username}</p>
                    <p className="text-sm text-gray-600">Role: {user.role}</p>
                    <p className="text-sm text-gray-500">Email: admin@eagleiitech.com</p> {/* Hardcoded; fetch if needed */}
                  </div>
                </div>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={handleEditProfile}
                  className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600"
                  style={{ backgroundColor: highlightColor }}
                >
                  Edit Profile
                </button>
                <button
                  onClick={handleChangePassword}
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
                >
                  Change Password
                </button>
              </div>
            </div>
          )}

          {activeMenu === "dashboard" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Blogs</p>
                    <p className="text-3xl font-bold text-gray-900">{stats.blogs}</p>
                  </div>
                  <FaBlog className="text-4xl text-blue-500" />
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Pending Comments</p>
                    <p className="text-3xl font-bold text-gray-900">{stats.comments}</p>
                  </div>
                  <FaComments className="text-4xl text-yellow-500" />
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Job Posts</p>
                    <p className="text-3xl font-bold text-gray-900">{stats.jobs}</p>
                  </div>
                  <FaBriefcase className="text-4xl text-green-500" />
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Applications</p>
                    <p className="text-3xl font-bold text-gray-900">{stats.applications}</p>
                  </div>
                  <FaEnvelope className="text-4xl text-red-500" />
                </div>
              </div>
            </div>
          )}

          {activeMenu === "blogs" && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Blogs List</h3>
                <button
                  onClick={() => handleAddNew("blogs")}
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
                  style={{ backgroundColor: highlightColor }}
                >
                  Add New
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-md">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Author</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {loading ? (
                      <tr><td colSpan="4" className="px-6 py-4 text-center">Loading blogs...</td></tr>
                    ) : blogs.length === 0 ? (
                      <tr><td colSpan="4" className="px-6 py-4 text-center">No blogs yet.</td></tr>
                    ) : (
                      blogs.map((blog) => (
                        <tr key={blog._id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{blog.title}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{blog.author}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{blog.date}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                            <button 
                              onClick={() => handleEdit("blogs", blog._id)}
                              className="text-blue-600 hover:text-blue-900"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleAction("delete", blog._id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeMenu === "comments" && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Comments Management (Pending)</h3>
              <div className="grid gap-4">
                {loading ? (
                  <p>Loading comments...</p>
                ) : comments.length === 0 ? (
                  <p>No pending comments.</p>
                ) : (
                  comments.map((comment) => (
                    <div key={comment._id} className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center">
                      <div>
                        <p className="font-medium">{comment.name}: {comment.comment.substring(0, 100)}...</p>
                        <p className="text-sm text-gray-500">Status: {comment.status}</p>
                      </div>
                      <div className="space-x-2">
                        {comment.status === "pending" && (
                          <>
                            <button
                              onClick={() => handleAction("comment", comment._id, "approve")}
                              className="bg-green-500 text-white px-3 py-1 rounded text-sm"
                            >
                              Approve
                            </button>
                            <button
                              onClick={() => handleAction("comment", comment._id, "reject")}
                              className="bg-red-500 text-white px-3 py-1 rounded text-sm"
                            >
                              Reject
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {activeMenu === "approved" && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Approved Comments</h3>
              <div className="grid gap-4">
                {loading ? (
                  <p>Loading approved comments...</p>
                ) : approvedComments.length === 0 ? (
                  <p>No approved comments.</p>
                ) : (
                  approvedComments.map((comment) => (
                    <div key={comment._id} className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center">
                      <div>
                        <p className="font-medium">{comment.name}: {comment.comment.substring(0, 100)}...</p>
                        <p className="text-sm text-gray-500">Status: {comment.status}</p>
                      </div>
                      <div className="space-x-2">
                        {comment.status === "approved" && (
                          <button
                            onClick={() => handleAction("comment", comment._id, "reject")}
                            className="bg-red-500 text-white px-3 py-1 rounded text-sm"
                          >
                            Reject
                          </button>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {activeMenu === "trash" && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Trash (Trashed Comments)</h3>
              <div className="grid gap-4">
                {loading ? (
                  <p>Loading trashed comments...</p>
                ) : trashComments.length === 0 ? (
                  <p>No trashed comments.</p>
                ) : (
                  trashComments.map((comment) => (
                    <div key={comment._id} className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center">
                      <div>
                        <p className="font-medium">{comment.name}: {comment.comment.substring(0, 100)}...</p>
                        <p className="text-sm text-gray-500">Status: {comment.status}</p>
                      </div>
                      <div className="space-x-2">
                        {comment.status === "trash" && (
                          <button
                            onClick={() => handleAction("comment", comment._id, "restore")}
                            className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
                          >
                            Restore
                          </button>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {activeMenu === "jobposts" && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Job Posts</h3>
                <button 
                  onClick={() => handleAddNew("jobposts")}
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600" 
                  style={{ backgroundColor: highlightColor }}
                >
                  Add New
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-md">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {loading ? (
                      <tr><td colSpan="4" className="px-6 py-4 text-center">Loading jobs...</td></tr>
                    ) : jobs.length === 0 ? (
                      <tr><td colSpan="4" className="px-6 py-4 text-center">No jobs yet.</td></tr>
                    ) : (
                      jobs.map((job) => (
                        <tr key={job._id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{job.title}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.role}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.location}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                            <button 
                              onClick={() => handleEdit("jobposts", job._id)}
                              className="text-blue-600 hover:text-blue-900"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleAction("delete", job._id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeMenu === "contacts" && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Applications</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-md">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Job Title</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {loading ? (
                      <tr><td colSpan="4" className="px-6 py-4 text-center">Loading applications...</td></tr>
                    ) : applications.length === 0 ? (
                      <tr><td colSpan="4" className="px-6 py-4 text-center">No applications yet.</td></tr>
                    ) : (
                      applications.map((app) => (
                        <tr key={app._id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{app.fullName}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.email}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.jobTitle}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(app.createdAt).toLocaleDateString()}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;