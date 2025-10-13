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


import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaTachometerAlt, FaBlog, FaComments, FaBriefcase, FaEnvelope, FaSignOutAlt, FaTrash, FaCheckCircle, FaUser, FaBars, FaTimes, FaExclamationTriangle } from "react-icons/fa";
import axios from "axios";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AdminDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const sidebarRef = useRef(null);
  const mainContentRef = useRef(null);
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [stats, setStats] = useState({ blogs: 0, comments: 0, jobs: 0, applications: 0 });
  const [blogs, setBlogs] = useState([]);
  const [comments, setComments] = useState([]);
  const [approvedComments, setApprovedComments] = useState([]);
  const [trashComments, setTrashComments] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [networkError, setNetworkError] = useState(false);
  const [user, setUser] = useState({ 
    name: "",  
    email: "", 
    role: "Admin",  
    profilePic: "https://placehold.co/50x50?text=Admin&font=roboto"
  });
  const [isFetching, setIsFetching] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const highlightColor = "#F54A00";
  const API_BASE_URL = "http://localhost:5000/api";

  // Handle window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
    timeout: 5000,
  });

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.code === 'ERR_NETWORK' || error.message === 'Network Error') {
        setNetworkError(true);
        setError('Backend server not running on port 5000. Please start it and refresh.');
      } else if (error.response?.status === 401) {
        localStorage.removeItem('accessToken');
        navigate('/login');
      }
      return Promise.reject(error);
    }
  );

  const apiPathMap = {
    blogs: "blogs",
    jobposts: "jobs",
    contacts: "applications",
  };

  const menuItems = [
    
    { id: "dashboard", icon: FaTachometerAlt, label: "Dashboard" },
    { id: "blogs", icon: FaBlog, label: "Blogs" },
    { id: "comments", icon: FaComments, label: "Comments" },
    { id: "approved", icon: FaCheckCircle, label: "Approved" },
    { id: "trash", icon: FaTrash, label: "Trash" },
    { id: "jobposts", icon: FaBriefcase, label: "Job Posts" },
    { id: "contacts", icon: FaEnvelope, label: "Contacts" },
    { id: "profile", icon: FaUser, label: "Profile" },
  ];

  // Initial GSAP animations on mount
  useLayoutEffect(() => {
    if (sidebarRef.current) {
      gsap.from(sidebarRef.current, { x: -200, duration: 1, ease: "power3.out" });
    }
    if (mainContentRef.current) {
      gsap.from(mainContentRef.current, { opacity: 0, y: 30, duration: 1, delay: 0.5, ease: "power2.out" });
    }
  }, []);

  // Mobile sidebar animation
  useEffect(() => {
    if (sidebarRef.current) {
      if (isMobile) {
        gsap.to(sidebarRef.current, { 
          x: isSidebarOpen ? 0 : -300, 
          duration: 0.3, 
          ease: "power2.out" 
        });
      } else {
        gsap.to(sidebarRef.current, { 
          x: 0, 
          duration: 0.3, 
          ease: "power2.out" 
        });
      }
    }
  }, [isSidebarOpen, isMobile]);

  const fetchUserProfile = async () => {
    if (isFetching) return;
    setIsFetching(true);
    const token = localStorage.getItem('accessToken');
    if (!token) {
      navigate('/login');
      setIsFetching(false);
      return;
    }

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    try {
      const res = await api.get('/auth/profile');
      setUser({
        name: res.data.user?.name || 'Admin',
        email: res.data.user?.email || 'admin@eagleiitech.com',
        role: "Admin",
        profilePic: res.data.user?.profilePic || 'https://placehold.co/50x50?text=Admin&font=roboto',
        bio: res.data.user?.bio || ''
      });
      setNetworkError(false);
    } catch (err) {
      if (err.code !== 'ERR_NETWORK') {
        console.error('Fetch user profile error:', err);
      }
      if (err.response?.status === 401) {
        localStorage.removeItem('accessToken');
        navigate('/login');
      }
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, [location.state?.refetch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (location.pathname === "/admin") {
        fetchData();
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [activeMenu, location.state]);

  const handleMenuClick = (menuId) => {
    setActiveMenu(menuId);
    setError(null);
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const fetchData = async () => {
    if (isFetching || networkError) return;
    setIsFetching(true);
    setLoading(true);
    setError(null);
    try {
      switch (activeMenu) {
        case "dashboard":
          const [blogsRes, commentsRes, jobsRes, appsRes] = await Promise.allSettled([
            api.get("/blogs"),
            api.get("/comments?status=pending"),
            api.get("/jobs"),
            api.get("/applications"),
          ]);
          
          const blogsData = blogsRes.status === 'fulfilled' ? blogsRes.value.data : [];
          const commentsData = commentsRes.status === 'fulfilled' ? commentsRes.value.data : [];
          const jobsData = jobsRes.status === 'fulfilled' ? jobsRes.value.data : [];
          const appsData = appsRes.status === 'fulfilled' ? appsRes.value.data : [];
          
          setStats({
            blogs: blogsData.length,
            comments: commentsData.length,
            jobs: jobsData.length,
            applications: appsData.length,
          });
          break;
        case "blogs":
          const blogRes = await api.get("/blogs");
          setBlogs(blogRes.data);
          break;
        case "comments":
          const pendingRes = await api.get("/comments?status=pending");
          setComments(pendingRes.data);
          break;
        case "approved":
          const approvedRes = await api.get("/comments?status=approved");
          setApprovedComments(approvedRes.data);
          break;
        case "trash":
          const trashRes = await api.get("/comments?status=trash");
          setTrashComments(trashRes.data);
          break;
        case "jobposts":
          const jobRes = await api.get("/jobs");
          setJobs(jobRes.data);
          break;
        case "contacts":
          const appRes = await api.get("/applications");
          setApplications(appRes.data);
          break;
        case "profile":
          await fetchUserProfile();
          break;
        default:
          break;
      }
      setNetworkError(false);
    } catch (err) {
      if (err.code !== 'ERR_NETWORK') {
        console.error("Error fetching data:", err);
      }
      setError(networkError ? "Backend server offline. Start server on port 5000." : "Failed to load data. Please try again.");
    } finally {
      setLoading(false);
      setIsFetching(false);
    }
  };

  const handleLogout = async () => {
    try {
      await api.post('/auth/logout');
    } catch (err) {
      console.error('Logout API error:', err);
    } finally {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('user');
      localStorage.removeItem('intendedPath');
      navigate('/login');
    }
    setIsSidebarOpen(false);
  };

  const handleAction = async (type, id, action) => {
    try {
      if (type === "comment") {
        let endpoint;
        if (action === "approve") endpoint = "approve";
        else if (action === "reject") endpoint = "reject";
        else if (action === "restore") endpoint = "restore";
        await api.put(`/comments/${id}/${endpoint}`);
      } else if (type === "delete") {
        const apiPath = apiPathMap[activeMenu];
        if (!apiPath) throw new Error("Invalid menu");
        await api.delete(`/${apiPath}/${id}`);
      }
      fetchData();
    } catch (err) {
      console.error("Action failed:", err);
      setError("Action failed. Please try again.");
    }
  };

  const handleAddNew = (section) => {
    const state = { refetch: true };
    if (section === "blogs") {
      navigate("/admin/blog-create", { state });
    } else if (section === "jobposts") {
      navigate("/admin/job-create", { state });
    }
    setIsSidebarOpen(false);
  };

  const handleEdit = (section, id) => {
    const state = { refetch: true };
    if (section === "blogs") {
      navigate(`/admin/blog-edit/${id}`, { state });
    } else if (section === "jobposts") {
      navigate(`/admin/job-edit/${id}`, { state });
    }
    setIsSidebarOpen(false);
  };

  const handleEditProfile = () => {
    navigate("/admin/profile-edit", { state: { refetch: true } });
    setIsSidebarOpen(false);
  };

  const handleChangePassword = () => {
    navigate("/admin/change-password");
    setIsSidebarOpen(false);
  };

  if (networkError) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-red-50 p-4">
        <div className="text-center p-6 bg-white rounded-lg shadow-lg max-w-md w-full">
          <FaExclamationTriangle className="mx-auto text-5xl text-red-500 mb-4" />
          <h2 className="text-xl font-bold text-gray-900 mb-2">Server Connection Error</h2>
          <p className="text-gray-600 mb-4 text-sm">Backend server not running on localhost:5000. Start it with `node server.js` and refresh.</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 w-full sm:w-auto"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (loading && activeMenu !== "profile") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-yellow-50 p-4">
        <div className="text-center p-6 bg-white rounded-lg shadow-lg max-w-md w-full">
          <FaExclamationTriangle className="mx-auto text-5xl text-yellow-500 mb-4" />
          <h2 className="text-xl font-bold text-gray-900 mb-2">Error Loading Data</h2>
          <p className="text-gray-600 mb-4 text-sm">{error}</p>
          <button
            onClick={fetchData}
            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 w-full sm:w-auto"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Mobile Overlay */}
      {isSidebarOpen && isMobile && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40" 
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div 
        ref={sidebarRef}
        className={`
          sidebar fixed md:relative z-50 h-full w-64 bg-white shadow-lg flex flex-col transform transition-transform duration-300 ease-in-out
          ${isMobile ? 'fixed' : 'static'}
        `}
        style={{ 
          zIndex: 50,
          transform: isMobile ? (isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)') : 'translateX(0)'
        }}
      >
        {/* Profile Section */}
        <div className="p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50" onClick={() => handleMenuClick("profile")}>
          <div className="flex items-center space-x-3">
            <img 
              src={user.profilePic} 
              alt="Profile" 
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover" 
              onError={(e) => {
                e.target.src = 'https://placehold.co/50x50?text=Admin&font=roboto';
              }}
            />
            <div className="flex-1 min-w-0">
              <h1 className="text-base sm:text-lg font-bold text-gray-900 truncate">{user.name || 'Admin'}</h1>
              <p className="text-xs sm:text-sm text-gray-600 truncate">{user.role}</p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 py-4 pb-2 overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleMenuClick(item.id)}
              className={`w-full flex items-center px-4 sm:px-6 py-3 text-left transition-colors ${
                activeMenu === item.id
                  ? "bg-orange-50 text-orange-600 border-r-2 border-orange-500"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
              style={{ color: activeMenu === item.id ? highlightColor : "inherit" }}
            >
              <item.icon className="mr-3 text-lg" />
              <span className="text-sm sm:text-base">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="p-4">
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-4 sm:px-6 py-3 text-left transition-colors bg-orange-50 text-orange-600 border-r-2 border-orange-500 hover:bg-orange-100 rounded"
            style={{ color: highlightColor }}
          >
            <FaSignOutAlt className="mr-3" />
            <span className="text-sm sm:text-base">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div ref={mainContentRef} className="flex-1 flex flex-col overflow-hidden main-content transition-all duration-300 min-w-0">
        {/* Header with Hamburger Menu */}
        <header className="bg-white shadow-sm p-3 sm:p-4 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <button 
              onClick={toggleSidebar}
              className="md:hidden text-gray-600 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label="Toggle menu"
            >
              {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
            
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 capitalize">
              {activeMenu.replace(/([A-Z])/g, " $1").trim()}
            </h2>
          </div>
          
          <div className="text-xs sm:text-sm text-gray-500 hidden xs:block">
            Welcome, <span className="font-medium text-gray-700">{user.name || 'Admin'}</span>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6 bg-gray-50">
          {activeMenu === "profile" && (
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
                <h3 className="text-lg font-semibold mb-4">Profile Information</h3>
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <img 
                    src={user.profilePic} 
                    alt="Profile" 
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover" 
                    onError={(e) => {
                      e.target.src = 'https://placehold.co/50x50?text=Admin&font=roboto';
                    }}
                  />
                  <div className="text-center sm:text-left flex-1">
                    <p className="text-xl sm:text-2xl font-bold text-gray-900">{user.name || 'Admin'}</p>
                    <p className="text-sm text-gray-600 mt-1">Role: {user.role}</p>
                    <p className="text-sm text-gray-500 mt-1 break-all">Email: {user.email || 'admin@eagleiitech.com'}</p>
                    {user.bio && <p className="text-sm text-gray-600 mt-2">Bio: {user.bio}</p>}
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={handleEditProfile}
                  className="bg-orange-500 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors flex-1 sm:flex-none text-center"
                  style={{ backgroundColor: highlightColor }}
                >
                  Edit Profile
                </button>
                <button
                  onClick={handleChangePassword}
                  className="bg-blue-500 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors flex-1 sm:flex-none text-center"
                >
                  Change Password
                </button>
              </div>
            </div>
          )}

          {/* Dashboard Stats */}
          {activeMenu === "dashboard" && (
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-gray-600">Total Blogs</p>
                    <p className="text-2xl sm:text-3xl font-bold text-gray-900">{stats.blogs}</p>
                  </div>
                  <FaBlog className="text-3xl sm:text-4xl text-blue-500" />
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-gray-600">Pending Comments</p>
                    <p className="text-2xl sm:text-3xl font-bold text-gray-900">{stats.comments}</p>
                  </div>
                  <FaComments className="text-3xl sm:text-4xl text-yellow-500" />
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-gray-600">Job Posts</p>
                    <p className="text-2xl sm:text-3xl font-bold text-gray-900">{stats.jobs}</p>
                  </div>
                  <FaBriefcase className="text-3xl sm:text-4xl text-green-500" />
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-gray-600">Applications</p>
                    <p className="text-2xl sm:text-3xl font-bold text-gray-900">{stats.applications}</p>
                  </div>
                  <FaEnvelope className="text-3xl sm:text-4xl text-red-500" />
                </div>
              </div>
            </div>
          )}

          {/* Blogs List */}
          {activeMenu === "blogs" && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0">
                <h3 className="text-lg font-semibold">Blogs List</h3>
                <button
                  onClick={() => handleAddNew("blogs")}
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors w-full sm:w-auto text-center"
                  style={{ backgroundColor: highlightColor }}
                >
                  Add New
                </button>
              </div>
              <div className="overflow-x-auto bg-white rounded-lg shadow-md">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">Author</th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Date</th>
                      <th className="px-3 sm:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {loading ? (
                      <tr><td colSpan="4" className="px-3 sm:px-6 py-4 text-center">Loading blogs...</td></tr>
                    ) : blogs.length === 0 ? (
                      <tr><td colSpan="4" className="px-3 sm:px-6 py-4 text-center">No blogs yet.</td></tr>
                    ) : (
                      blogs.map((blog) => (
                        <tr key={blog._id} className="hover:bg-gray-50">
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 max-w-[150px] truncate">
                            {blog.title}
                          </td>
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden sm:table-cell">
                            {blog.author}
                          </td>
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell">
                            {blog.date}
                          </td>
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                            <button 
                              onClick={() => handleEdit("blogs", blog._id)}
                              className="text-blue-600 hover:text-blue-900 text-xs sm:text-sm"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleAction("delete", blog._id)}
                              className="text-red-600 hover:text-red-900 text-xs sm:text-sm"
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

          {/* Comments Management (Pending) */}
          {activeMenu === "comments" && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Comments Management (Pending)</h3>
              <div className="grid gap-3 sm:gap-4">
                {loading ? (
                  <div className="text-center py-8">Loading comments...</div>
                ) : comments.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">No pending comments.</div>
                ) : (
                  comments.map((comment) => (
                    <div key={comment._id} className="bg-white rounded-lg shadow-md p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0">
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 break-words">
                          {comment.name}: {comment.comment.substring(0, 100)}...
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500 mt-1">Status: {comment.status}</p>
                      </div>
                      <div className="flex space-x-2 w-full sm:w-auto justify-end">
                        {comment.status === "pending" && (
                          <>
                            <button
                              onClick={() => handleAction("comment", comment._id, "approve")}
                              className="bg-green-500 text-white px-3 py-1 rounded text-xs sm:text-sm flex-1 sm:flex-none text-center"
                            >
                              Approve
                            </button>
                            <button
                              onClick={() => handleAction("comment", comment._id, "reject")}
                              className="bg-red-500 text-white px-3 py-1 rounded text-xs sm:text-sm flex-1 sm:flex-none text-center"
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

          {/* Approved Comments */}
          {activeMenu === "approved" && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Approved Comments</h3>
              <div className="grid gap-3 sm:gap-4">
                {loading ? (
                  <div className="text-center py-8">Loading approved comments...</div>
                ) : approvedComments.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">No approved comments.</div>
                ) : (
                  approvedComments.map((comment) => (
                    <div key={comment._id} className="bg-white rounded-lg shadow-md p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0">
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 break-words">
                          {comment.name}: {comment.comment.substring(0, 100)}...
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500 mt-1">Status: {comment.status}</p>
                      </div>
                      <div className="flex space-x-2 w-full sm:w-auto justify-end">
                        {comment.status === "approved" && (
                          <button
                            onClick={() => handleAction("comment", comment._id, "reject")}
                            className="bg-red-500 text-white px-3 py-1 rounded text-xs sm:text-sm w-full sm:w-auto text-center"
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

          {/* Trash Comments */}
          {activeMenu === "trash" && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Trash (Trashed Comments)</h3>
              <div className="grid gap-3 sm:gap-4">
                {loading ? (
                  <div className="text-center py-8">Loading trashed comments...</div>
                ) : trashComments.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">No trashed comments.</div>
                ) : (
                  trashComments.map((comment) => (
                    <div key={comment._id} className="bg-white rounded-lg shadow-md p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0">
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 break-words">
                          {comment.name}: {comment.comment.substring(0, 100)}...
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500 mt-1">Status: {comment.status}</p>
                      </div>
                      <div className="flex space-x-2 w-full sm:w-auto justify-end">
                        {comment.status === "trash" && (
                          <button
                            onClick={() => handleAction("comment", comment._id, "restore")}
                            className="bg-blue-500 text-white px-3 py-1 rounded text-xs sm:text-sm w-full sm:w-auto text-center"
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

          {/* Job Posts */}
          {activeMenu === "jobposts" && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0">
                <h3 className="text-lg font-semibold">Job Posts</h3>
                <button 
                  onClick={() => handleAddNew("jobposts")}
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors w-full sm:w-auto text-center" 
                  style={{ backgroundColor: highlightColor }}
                >
                  Add New
                </button>
              </div>
              <div className="overflow-x-auto bg-white rounded-lg shadow-md">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">Role</th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Location</th>
                      <th className="px-3 sm:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {loading ? (
                      <tr><td colSpan="4" className="px-3 sm:px-6 py-4 text-center">Loading jobs...</td></tr>
                    ) : jobs.length === 0 ? (
                      <tr><td colSpan="4" className="px-3 sm:px-6 py-4 text-center">No jobs yet.</td></tr>
                    ) : (
                      jobs.map((job) => (
                        <tr key={job._id} className="hover:bg-gray-50">
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 max-w-[150px] truncate">
                            {job.title}
                          </td>
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden sm:table-cell">
                            {job.role}
                          </td>
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell">
                            {job.location}
                          </td>
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                            <button 
                              onClick={() => handleEdit("jobposts", job._id)}
                              className="text-blue-600 hover:text-blue-900 text-xs sm:text-sm"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleAction("delete", job._id)}
                              className="text-red-600 hover:text-red-900 text-xs sm:text-sm"
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

          {/* Contacts/Applications */}
          {activeMenu === "contacts" && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Applications</h3>
              <div className="overflow-x-auto bg-white rounded-lg shadow-md">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">Email</th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Job Title</th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {loading ? (
                      <tr><td colSpan="4" className="px-3 sm:px-6 py-4 text-center">Loading applications...</td></tr>
                    ) : applications.length === 0 ? (
                      <tr><td colSpan="4" className="px-3 sm:px-6 py-4 text-center">No applications yet.</td></tr>
                    ) : (
                      applications.map((app) => (
                        <tr key={app._id} className="hover:bg-gray-50">
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {app.fullName}
                          </td>
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden sm:table-cell break-all">
                            {app.email}
                          </td>
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell">
                            {app.jobTitle}
                          </td>
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
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