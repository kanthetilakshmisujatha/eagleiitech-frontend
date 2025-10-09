// import React, { useState, useRef } from "react";
// import { Link } from "react-router-dom";
// import JoditEditor from "jodit-react";

// const JobCreate = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     role: "",
//     location: "",
//     description: "",
//     type: "Full Time",
//   });
//   const editor = useRef(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleContentChange = (content) => {
//     setFormData((prev) => ({ ...prev, description: content }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would typically send formData to your backend API
//     // For now, log the data
//     console.log("Job Post Data:", formData);
//     // Reset form if needed
//     // setFormData({ title: "", role: "", location: "", description: "", type: "Full Time" });
//     alert("Job post created successfully! (Check console for data)");
//   };

//   // Jodit Editor config (optional, customize as needed)
//   const config = {
//     readonly: false,
//     height: 250,
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

//   const highlightColor = "#F54A00";

//   return (
//     <div className="min-h-screen bg-white px-6 md:px-20 py-16 mt-9">
//       <div className="max-w-2xl mx-auto">
//         <h3 className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: highlightColor }}>
//           # New Job Posting
//         </h3>
//         <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
//           Post a New{" "}
//           <span className="relative inline-block bg-no-repeat" style={{ color: highlightColor }}>
//             Job Opportunity
//           </span>
//         </h1>
//         <p className="text-gray-600 mb-12">
//           Add a new position to attract top talent at Eagle Eye Tech. Fill in the details below to get started.
//         </p>
        
//         <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl shadow-lg p-8 space-y-6">
//           {/* Title */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="title">
//               Job Title
//             </label>
//             <input
//               type="text"
//               id="title"
//               name="title"
//               value={formData.title}
//               onChange={handleInputChange}
//               className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//               placeholder="e.g., DATA ENGINEER (Multiple Openings)"
//               required
//             />
//           </div>

//           {/* Role */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="role">
//               Role (Category)
//             </label>
//             <input
//               type="text"
//               id="role"
//               name="role"
//               value={formData.role}
//               onChange={handleInputChange}
//               className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//               placeholder="e.g., Engineer"
//               required
//             />
//           </div>

//           {/* Location */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="location">
//               Location
//             </label>
//             <input
//               type="text"
//               id="location"
//               name="location"
//               value={formData.location}
//               onChange={handleInputChange}
//               className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//               placeholder="e.g., USA"
//               required
//             />
//           </div>

//           {/* Description */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">
//               Description
//             </label>
//             <JoditEditor
//               ref={editor}
//               value={formData.description}
//               config={config}
//               onBlur={handleContentChange}
//               onChange={handleContentChange}
//               tabIndex={1}
//             />
//           </div>

//           {/* Job Type */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="type">
//               Job Type
//             </label>
//             <select
//               id="type"
//               name="type"
//               value={formData.type}
//               onChange={handleInputChange}
//               className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//               required
//             >
//               <option value="Full Time">Full Time</option>
//               <option value="Part Time">Part Time</option>
//               <option value="Contract">Contract</option>
//               <option value="Remote">Remote</option>
//             </select>
//           </div>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 pt-4">
//             <Link
//               to="/careers"
//               className="flex-1 text-center py-3 px-6 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-300 font-semibold text-gray-700"
//             >
//               Cancel
//             </Link>
//             <button
//               type="submit"
//               className="flex-1 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 transform hover:-translate-y-1 text-center block"
//               style={{
//                 backgroundColor: highlightColor,
//               }}
//             >
//               Post Job
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default JobCreate;






// import React, { useState, useRef } from "react";
// import { Link } from "react-router-dom";
// import JoditEditor from "jodit-react";
// import axios from "axios"; // Assume axios is installed for API calls

// const JobCreate = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     role: "",
//     location: "",
//     description: "",
//     type: "Full Time",
//   });
//   const [recentJobs, setRecentJobs] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const editor = useRef(null);

//   // Fetch recent jobs on mount
//   React.useEffect(() => {
//     fetchRecentJobs();
//   }, []);

//   const fetchRecentJobs = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/jobs");
//       setRecentJobs(response.data.slice(0, 3)); // Show top 3 recent
//     } catch (error) {
//       console.error("Failed to fetch recent jobs:", error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleContentChange = (content) => {
//     setFormData((prev) => ({ ...prev, description: content }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       // Send to backend
//       await axios.post("http://localhost:5000/api/jobs", formData);
//       alert("Job post created successfully!");
//       setFormData({ title: "", role: "", location: "", description: "", type: "Full Time" });
//       fetchRecentJobs(); // Refresh recent jobs
//     } catch (error) {
//       console.error("Failed to create job:", error);
//       alert("Failed to create job.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Jodit Editor config (optional, customize as needed)
//   const config = {
//     readonly: false,
//     height: 250,
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

//   const highlightColor = "#F54A00";

//   return (
//     <div className="min-h-screen bg-white px-6 md:px-20 py-16 mt-9">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
//         {/* Main Form */}
//         <div className="md:col-span-2">
//           <h3 className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: highlightColor }}>
//             # New Job Posting
//           </h3>
//           <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
//             Post a New{" "}
//             <span className="relative inline-block bg-no-repeat" style={{ color: highlightColor }}>
//               Job Opportunity
//             </span>
//           </h1>
//           <p className="text-gray-600 mb-12">
//             Add a new position to attract top talent at Eagle Eye Tech. Fill in the details below to get started.
//           </p>
          
//           <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl shadow-lg p-8 space-y-6">
//             {/* Title */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="title">
//                 Job Title
//               </label>
//               <input
//                 type="text"
//                 id="title"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                 placeholder="e.g., DATA ENGINEER (Multiple Openings)"
//                 required
//               />
//             </div>

//             {/* Role */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="role">
//                 Role (Category)
//               </label>
//               <input
//                 type="text"
//                 id="role"
//                 name="role"
//                 value={formData.role}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                 placeholder="e.g., Engineer"
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
//                 className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                 placeholder="e.g., USA"
//                 required
//               />
//             </div>

//             {/* Description */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Description
//               </label>
//               <JoditEditor
//                 ref={editor}
//                 value={formData.description}
//                 config={config}
//                 onBlur={handleContentChange}
//                 onChange={handleContentChange}
//                 tabIndex={1}
//               />
//             </div>

//             {/* Job Type */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="type">
//                 Job Type
//               </label>
//               <select
//                 id="type"
//                 name="type"
//                 value={formData.type}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                 required
//               >
//                 <option value="Full Time">Full Time</option>
//                 <option value="Part Time">Part Time</option>
//                 <option value="Contract">Contract</option>
//                 <option value="Remote">Remote</option>
//               </select>
//             </div>

//             {/* Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 pt-4">
//               <Link
//                 to="/careers"
//                 className="flex-1 text-center py-3 px-6 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-300 font-semibold text-gray-700"
//               >
//                 Cancel
//               </Link>
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="flex-1 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 transform hover:-translate-y-1 text-center block disabled:opacity-50"
//                 style={{
//                   backgroundColor: highlightColor,
//                 }}
//               >
//                 {loading ? "Creating..." : "Post Job"}
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Recent Jobs Sidebar */}
//         <div className="md:col-span-1">
//           <h3 className="text-lg font-bold mb-4" style={{ color: highlightColor }}>
//             Recent Jobs
//           </h3>
//           <div className="space-y-4">
//             {recentJobs.map((job) => (
//               <div key={job._id} className="bg-gray-50 p-4 rounded-lg border-l-4" style={{ borderLeftColor: highlightColor }}>
//                 <h4 className="font-semibold text-sm mb-1">{job.title}</h4>
//                 <p className="text-xs text-gray-600 mb-1">{job.role} - {job.location}</p>
//                 <p className="text-xs text-gray-500">{job.type}</p>
//                 <div className="flex gap-2 mt-2">
//                   <Link
//                     to={`/job-edit/${job._id}`}
//                     className="text-xs text-blue-600 hover:underline"
//                   >
//                     Edit
//                   </Link>
//                   <button
//                     onClick={async () => {
//                       if (window.confirm("Delete this job?")) {
//                         try {
//                           await axios.delete(`http://localhost:5000/api/jobs/${job._id}`);
//                           fetchRecentJobs();
//                           alert("Job deleted!");
//                         } catch (error) {
//                           alert("Failed to delete job.");
//                         }
//                       }
//                     }}
//                     className="text-xs text-red-600 hover:underline"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobCreate;


import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import JoditEditor from "jodit-react";
import axios from "axios";

const JobCreate = () => {
  const { id } = useParams(); // For edit mode
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    role: "",
    location: "",
    description: "",
    type: "Full Time",
  });
  const [recentJobs, setRecentJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const editor = useRef(null);

  // Fetch recent jobs on mount
  useEffect(() => {
    fetchRecentJobs();
    if (id) {
      fetchJob(id);
    }
  }, [id]);

  const fetchRecentJobs = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/jobs");
      setRecentJobs(response.data.slice(0, 3)); // Show top 3 recent
    } catch (error) {
      console.error("Failed to fetch recent jobs:", error);
    }
  };

  const fetchJob = async (jobId) => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:5000/api/jobs/${jobId}`);
      setFormData(response.data);
    } catch (error) {
      console.error("Failed to fetch job:", error);
      setError("Failed to load job.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContentChange = (content) => {
    setFormData((prev) => ({ ...prev, description: content }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      let response;
      if (id) {
        // Edit
        response = await axios.put(`http://localhost:5000/api/jobs/${id}`, formData);
        alert("Job updated successfully!");
      } else {
        // Create
        response = await axios.post("http://localhost:5000/api/jobs", formData);
        alert("Job post created successfully!");
      }
      navigate("/admin", { state: { refetch: true } }); // Trigger refetch in dashboard
    } catch (error) {
      console.error("Failed to save job:", error);
      setError("Failed to save job: " + (error.response?.data?.error || "Server error"));
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
    height: 250,
    toolbarSticky: true,
    showCharsCounter: false,
    showWordsCounter: false,
    showXCharactersCounter: false,
    buttons: "bold,strikethrough,underline,|,ul,ol,|,font,fontsize,|,forecolor,backcolor,|,justify,|,table,|,link,video,|,source,preview",
    colors: {
      fore: [
        "#000000",
        "#e60000",
        "#ff9900",
        "#ffff00",
        "#008A00",
        "#0066cc",
        "#9933ff",
        "#ffffff",
        "#facccc",
        "#ffebcc",
        "#ffffcc",
        "#cce8cc",
        "#cce5ff",
        "#ead1ff",
        "#fcebff",
        "#f54a00", // Add your orange color
      ],
      back: [
        "#000000",
        "#e60000",
        "#ff9900",
        "#ffff00",
        "#008A00",
        "#0066cc",
        "#9933ff",
        "#ffffff",
        "#facccc",
        "#ffebcc",
        "#ffffcc",
        "#cce8cc",
        "#cce5ff",
        "#ead1ff",
        "#fcebff",
        "#f54a00",
      ],
    },
  };

  const highlightColor = "#F54A00";

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white px-6 md:px-20 py-16 mt-9">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Main Form */}
        <div className="md:col-span-2">
          <h3 className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: highlightColor }}>
            # {id ? "Edit Job Posting" : "New Job Posting"}
          </h3>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            {id ? "Update" : "Post a New"}{" "}
            <span className="relative inline-block bg-no-repeat" style={{ color: highlightColor }}>
              Job Opportunity
            </span>
          </h1>
          <p className="text-gray-600 mb-12">
            {id ? "Update the job details below." : "Add a new position to attract top talent at Eagle Eye Tech. Fill in the details below to get started."}
          </p>
          
          {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}
          
          <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl shadow-lg p-8 space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="title">
                Job Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="e.g., DATA ENGINEER (Multiple Openings)"
                required
              />
            </div>

            {/* Role */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="role">
                Role (Category)
              </label>
              <input
                type="text"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="e.g., Engineer"
                required
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="location">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="e.g., USA"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Description
              </label>
              <JoditEditor
                ref={editor}
                value={formData.description}
                config={config}
                onBlur={handleContentChange}
                onChange={handleContentChange}
                tabIndex={1}
              />
            </div>

            {/* Job Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="type">
                Job Type
              </label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              >
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Contract">Contract</option>
                <option value="Remote">Remote</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="button"
                onClick={handleCancel}
                className="flex-1 text-center py-3 px-6 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-300 font-semibold text-gray-700"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 transform hover:-translate-y-1 text-center block disabled:opacity-50"
                style={{
                  backgroundColor: highlightColor,
                }}
              >
                {submitting ? (id ? "Updating..." : "Creating...") : (id ? "Update Job" : "Post Job")}
              </button>
            </div>
          </form>
        </div>

        {/* Recent Jobs Sidebar */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-bold mb-4" style={{ color: highlightColor }}>
            Recent Jobs
          </h3>
          <div className="space-y-4">
            {recentJobs.map((job) => (
              <div key={job._id} className="bg-gray-50 p-4 rounded-lg border-l-4" style={{ borderLeftColor: highlightColor }}>
                <h4 className="font-semibold text-sm mb-1">{job.title}</h4>
                <p className="text-xs text-gray-600 mb-1">{job.role} - {job.location}</p>
                <p className="text-xs text-gray-500">{job.type}</p>
                <div className="flex gap-2 mt-2">
                  <Link
                    to={`/admin/job-edit/${job._id}`}
                    className="text-xs text-blue-600 hover:underline"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={async () => {
                      if (window.confirm("Delete this job?")) {
                        try {
                          await axios.delete(`http://localhost:5000/api/jobs/${job._id}`);
                          fetchRecentJobs(); // Refetch sidebar
                          alert("Job deleted!");
                        } catch (error) {
                          alert("Failed to delete job.");
                        }
                      }
                    }}
                    className="text-xs text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCreate;