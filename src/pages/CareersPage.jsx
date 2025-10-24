// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Link } from "react-router-dom";
// import heroImage from "/eet image.png"; // Ensure this path is correct

// gsap.registerPlugin(ScrollTrigger);

// const jobs = [
//   { title: "DATA ENGINEER (Multiple Openings)", role: "Engineer", location: "USA" },
//   { title: "Azure Cloud Engineer", role: "Engineer", location: "USA" },
//   { title: "DevOps Engineers (DVOP-3)", role: "Developer", location: "Eagle Eye Tech" },
//   { title: "SYSTEMS ENGINEERS (SYSE-23)", role: "Engineer", location: "USA" },
//   { title: "SOFTWARE ENGINEER (SE-23)", role: "Software Engineer", location: "USA" },
//   { title: "Snowflake", role: "Manager", location: "USA" },
//   { title: "Salesforce Developer", role: "Developer", location: "Remote" },
// ];

// const highlightColor = "#F54A00";

// const CareersPage = () => {
//   const sectionRef = useRef(null);
//   const headerRef = useRef(null);
//   const openPositionsRef = useRef(null);
//   const filterButtonsRef = useRef([]);
//   const jobCardRefs = useRef([]);

//   const addToFilterButtonsRefs = (el) => {
//     if (el && !filterButtonsRef.current.includes(el)) {
//       filterButtonsRef.current.push(el);
//     }
//   };

//   const addToJobCardRefs = (el) => {
//     if (el && !jobCardRefs.current.includes(el)) {
//       jobCardRefs.current.push(el);
//     }
//   };

//   useEffect(() => {
//     gsap.fromTo(headerRef.current, 
//       { y: 100, opacity: 0, scale: 0.8 },
//       { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: headerRef.current, start: "top 80%", toggleActions: "play none none reverse" } }
//     );

//     gsap.fromTo(openPositionsRef.current, 
//       { y: 50, opacity: 0 },
//       { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.4, scrollTrigger: { trigger: openPositionsRef.current, start: "top 80%", toggleActions: "play none none reverse" } }
//     );

//     filterButtonsRef.current.forEach((button, index) => {
//       if (!button) return;
//       gsap.fromTo(button, { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)", delay: index * 0.15, scrollTrigger: { trigger: button, start: "top 80%", toggleActions: "play none none reverse" } });
//     });

//     jobCardRefs.current.forEach((card, index) => {
//       if (!card) return;
//       gsap.fromTo(card, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: index * 0.2, scrollTrigger: { trigger: card, start: "top 75%", toggleActions: "play none none reverse" } });
//     });

//     return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//   }, []);

//   return (
//     <div ref={sectionRef} className="min-h-screen bg-white px-6 md:px-20 py-16 mt-9">
//       <div ref={headerRef} className="grid md:grid-cols-2 gap-10 items-center">
//         <div>
//           <h3 className="text-sm font-semibold uppercase tracking-widest" style={{ color: highlightColor }}>
//             # Careers
//           </h3>
//           <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-2">
//             Why Choose Eagle Eye Tech:{" "}
//             <span className="relative inline-block bg-no-repeat">Career</span>{" "}
//             That Defines Tomorrow
//           </h1>
//           <p className="mt-4 text-gray-600">
//             Embark on a journey with Eagle Eye Tech, where innovative minds thrive and careers are developed and transformed.
//           </p>
//         </div>
//         <div className="flex justify-center">
//           <img src={heroImage} alt="Career Hero" className="w-72 md:w-96 drop-shadow-xl" />
//         </div>
//       </div>

//       <div ref={openPositionsRef} className="mt-16">
//         <h2 className="text-2xl font-bold" style={{ color: highlightColor }}>Open Positions</h2>
//         <p className="text-gray-600 mt-2">
//           Dive into a world of opportunities at Eagle Eye Tech. Whether you're just starting out, freshly graduated, or a seasoned professional, find a role that aligns with your aspirations.
//         </p>
//         <p className="mt-2">
//           Don't see a position that suits you? Reach out to us at{" "}
//           <span className="font-medium" style={{ color: highlightColor }}>hr@eagleietech.com</span>
//         </p>
//       </div>

//       <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium">
//         <button ref={addToFilterButtonsRefs} className="px-4 py-2 border rounded-md hover:bg-orange-50 transition-colors" style={{ borderColor: highlightColor }}>
//           All Job Category
//         </button>
//         <button ref={addToFilterButtonsRefs} className="px-4 py-2 border rounded-md hover:bg-orange-50 transition-colors" style={{ borderColor: highlightColor }}>
//           All Job Type
//         </button>
//         <button ref={addToFilterButtonsRefs} className="px-4 py-2 border rounded-md hover:bg-orange-50 transition-colors" style={{ borderColor: highlightColor }}>
//           All Job Location
//         </button>
//       </div>

//       <div className="mt-10 space-y-4">
//         {jobs.map((job, index) => (
//           <div
//             key={index}
//             ref={addToJobCardRefs}
//             className="border p-5 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 flex justify-between items-center"
//             style={{ borderColor: highlightColor }}
//           >
//             <div>
//               <h3 className="font-bold text-lg">{job.title}</h3>
//               <p className="text-sm text-gray-500">
//                 {job.role} | {job.location}
//               </p>
//             </div>
//             <Link
//               to={`/blog/job-application/${encodeURIComponent(job.title)}`}
//               className="font-semibold hover:underline"
//               style={{ color: highlightColor }}
//             >
//               More Details →
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CareersPage;





// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Link } from "react-router-dom";
// import { FaChevronDown } from "react-icons/fa"; // Import dropdown icon
// import heroImage from "/eet image.png"; // Ensure this path is correct

// gsap.registerPlugin(ScrollTrigger);

// const jobs = [
//   { title: "DATA ENGINEER (Multiple Openings)", role: "Engineer", location: "USA" },
//   { title: "Azure Cloud Engineer", role: "Engineer", location: "USA" },
//   { title: "DevOps Engineers (DVOP-3)", role: "Developer", location: "Eagle Eye Tech" },
//   { title: "SYSTEMS ENGINEERS (SYSE-23)", role: "Engineer", location: "USA" },
//   { title: "SOFTWARE ENGINEER (SE-23)", role: "Software Engineer", location: "USA" },
//   { title: "Snowflake", role: "Manager", location: "USA" },
//   { title: "Salesforce Developer", role: "Developer", location: "Remote" },
// ];

// const highlightColor = "#F54A00";

// const CareersPage = () => {
//   const sectionRef = useRef(null);
//   const headerRef = useRef(null);
//   const openPositionsRef = useRef(null);
//   const filterButtonsRef = useRef([]);
//   const jobCardRefs = useRef([]);

//   const addToFilterButtonsRefs = (el) => {
//     if (el && !filterButtonsRef.current.includes(el)) {
//       filterButtonsRef.current.push(el);
//     }
//   };

//   const addToJobCardRefs = (el) => {
//     if (el && !jobCardRefs.current.includes(el)) {
//       jobCardRefs.current.push(el);
//     }
//   };

//   useEffect(() => {
//     gsap.fromTo(
//       headerRef.current,
//       { y: 100, opacity: 0, scale: 0.8 },
//       {
//         y: 0,
//         opacity: 1,
//         scale: 1,
//         duration: 1.2,
//         ease: "power3.out",
//         scrollTrigger: { trigger: headerRef.current, start: "top 80%", toggleActions: "play none none reverse" },
//       }
//     );

//     gsap.fromTo(
//       openPositionsRef.current,
//       { y: 50, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1,
//         ease: "power2.out",
//         delay: 0.4,
//         scrollTrigger: { trigger: openPositionsRef.current, start: "top 80%", toggleActions: "play none none reverse" },
//       }
//     );

//     filterButtonsRef.current.forEach((button, index) => {
//       if (!button) return;
//       gsap.fromTo(
//         button,
//         { x: -30, opacity: 0 },
//         {
//           x: 0,
//           opacity: 1,
//           duration: 0.8,
//           ease: "back.out(1.7)",
//           delay: index * 0.15,
//           scrollTrigger: { trigger: button, start: "top 80%", toggleActions: "play none none reverse" },
//         }
//       );
//     });

//     jobCardRefs.current.forEach((card, index) => {
//       if (!card) return;
//       gsap.fromTo(
//         card,
//         { y: 100, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1,
//           ease: "power3.out",
//           delay: index * 0.2,
//           scrollTrigger: { trigger: card, start: "top 75%", toggleActions: "play none none reverse" },
//         }
//       );
//     });

//     return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//   }, []);

//   return (
//     <div ref={sectionRef} className="min-h-screen bg-white px-6 md:px-20 py-16 mt-9">
//       <div ref={headerRef} className="grid md:grid-cols-2 gap-10 items-center">
//         <div>
//           <h3 className="text-sm font-semibold uppercase tracking-widest" style={{ color: highlightColor }}>
//             # Careers
//           </h3>
//           <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-2">
//             Why Choose Eagle Eye Tech:{" "}
//             <span className="relative inline-block bg-no-repeat">Career</span>{" "}
//             That Defines Tomorrow
//           </h1>
//           <p className="mt-4 text-gray-600">
//             Embark on a journey with Eagle Eye Tech, where innovative minds thrive and careers are developed and transformed.
//           </p>
//         </div>
//         <div className="flex justify-center">
//           <img src={heroImage} alt="Career Hero" className="w-72 md:w-96 drop-shadow-xl" />
//         </div>
//       </div>

//       <div ref={openPositionsRef} className="mt-16">
//         <h2 className="text-2xl font-bold" style={{ color: highlightColor }}>
//           Open Positions
//         </h2>
//         <p className="text-gray-600 mt-2">
//           Dive into a world of opportunities at Eagle Eye Tech. Whether you're just starting out, freshly graduated, or a seasoned professional, find a role that aligns with your aspirations.
//         </p>
//         <p className="mt-2">
//           Don't see a position that suits you? Reach out to us at{" "}
//           <span className="font-medium" style={{ color: highlightColor }}>
//             hr@eagleietech.com
//           </span>
//         </p>
//       </div>

//       <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium">
//         <button
//           ref={addToFilterButtonsRefs}
//           className="px-4 py-2 border rounded-md hover:bg-orange-50 transition-colors flex items-center gap-2"
//           style={{ borderColor: highlightColor }}
//         >
//           All Job Category
//           <FaChevronDown className="text-xs" style={{ color: highlightColor }} />
//         </button>
//         <button
//           ref={addToFilterButtonsRefs}
//           className="px-4 py-2 border rounded-md hover:bg-orange-50 transition-colors flex items-center gap-2"
//           style={{ borderColor: highlightColor }}
//         >
//           All Job Type
//           <FaChevronDown className="text-xs" style={{ color: highlightColor }} />
//         </button>
//         <button
//           ref={addToFilterButtonsRefs}
//           className="px-4 py-2 border rounded-md hover:bg-orange-50 transition-colors flex items-center gap-2"
//           style={{ borderColor: highlightColor }}
//         >
//           All Job Location
//           <FaChevronDown className="text-xs" style={{ color: highlightColor }} />
//         </button>
//       </div>

//       <div className="mt-10 space-y-6">
//         {jobs.map((job, index) => (
//           <div
//             key={index}
//             ref={addToJobCardRefs}
//             className="relative bg-white border-l-4 border-orange-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-orange-50/50 hover:to-white"
//           >
//             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//               <div>
//                 <h3 className="font-bold text-xl text-gray-800">{job.title}</h3>
//                 <div className="flex gap-3 mt-3">
//                   <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-orange-500 rounded-full">
//                     {job.role}
//                   </span>
//                   <span className="inline-block px-3 py-1 text-xs font-semibold text-gray-600 bg-gray-100 rounded-full">
//                     {job.location}
//                   </span>
//                 </div>
//               </div>
//               <Link
//                 to={`/blog/job-application/${encodeURIComponent(job.title)}`}
//                 className="inline-block px-4 py-2 text-sm font-semibold text-white bg-orange-500 rounded-md hover:bg-orange-600 hover:scale-105 transition-all duration-200"
//               >
//                 More Details
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CareersPage;


import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa"; // Import dropdown icon
import heroImage from "/eet image.png"; // Ensure this path is correct
import axios from "axios"; // Assume axios is installed

gsap.registerPlugin(ScrollTrigger);

const highlightColor = "#F54A00";

const CareersPage = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filters, setFilters] = useState({
    category: "All",
    type: "All",
    location: "All",
  });
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [loading, setLoading] = useState(true);

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const openPositionsRef = useRef(null);
  const filterButtonsRef = useRef([]);
  const jobCardRefs = useRef([]);

  // Fetch jobs on mount
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/jobs");
      setJobs(response.data);
      setFilteredJobs(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch jobs:", error);
      setLoading(false);
    }
  };

  // Dynamic filters
  useEffect(() => {
    let filtered = [...jobs];

    if (filters.category !== "All") {
      filtered = filtered.filter((job) => job.role === filters.category);
    }
    if (filters.type !== "All") {
      filtered = filtered.filter((job) => job.type === filters.type);
    }
    if (filters.location !== "All") {
      filtered = filtered.filter((job) => job.location === filters.location);
    }

    setFilteredJobs(filtered);
  }, [filters, jobs]);

  // Get unique values for filters
  const getUniqueCategories = () => {
    return [...new Set(jobs.map((job) => job.role))];
  };

  const getUniqueTypes = () => {
    return [...new Set(jobs.map((job) => job.type))];
  };

  const getUniqueLocations = () => {
    return [...new Set(jobs.map((job) => job.location))];
  };

  const addToFilterButtonsRefs = (el) => {
    if (el && !filterButtonsRef.current.includes(el)) {
      filterButtonsRef.current.push(el);
    }
  };

  const addToJobCardRefs = (el) => {
    if (el && !jobCardRefs.current.includes(el)) {
      jobCardRefs.current.push(el);
    }
  };

  // GSAP animations
  useEffect(() => {
    if (loading) return;

    gsap.fromTo(
      headerRef.current,
      { y: 100, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: headerRef.current, start: "top 80%", toggleActions: "play none none reverse" },
      }
    );

    gsap.fromTo(
      openPositionsRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 0.4,
        scrollTrigger: { trigger: openPositionsRef.current, start: "top 80%", toggleActions: "play none none reverse" },
      }
    );

    filterButtonsRef.current.forEach((button, index) => {
      if (!button) return;
      gsap.fromTo(
        button,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          delay: index * 0.15,
          scrollTrigger: { trigger: button, start: "top 80%", toggleActions: "play none none reverse" },
        }
      );
    });

    jobCardRefs.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: index * 0.2,
          scrollTrigger: { trigger: card, start: "top 75%", toggleActions: "play none none reverse" },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, [loading, filteredJobs]);

  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  if (loading) {
    return <div className="min-h-screen bg-white flex items-center justify-center">Loading jobs...</div>;
  }

  return (
    <div ref={sectionRef} className="min-h-screen bg-white px-6 md:px-20 py-16 mt-9">
      <div ref={headerRef} className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest" style={{ color: highlightColor }}>
            # Careers
          </h3>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-2">
            Why Choose Eagle Eye Tech:{" "}
            <span className="relative inline-block bg-no-repeat">Career</span>{" "}
            That Defines Tomorrow
          </h1>
          <p className="mt-4 text-gray-600">
            Embark on a journey with Eagle Eye Tech, where innovative minds thrive and careers are developed and transformed.
          </p>
        </div>
        <div className="flex justify-center">
          <img src={heroImage} alt="Career Hero" className="w-72 md:w-96 drop-shadow-xl" />
        </div>
      </div>

      <div ref={openPositionsRef} className="mt-16">
        <h2 className="text-2xl font-bold" style={{ color: highlightColor }}>
          Open Positions
        </h2>
        <p className="text-gray-600 mt-2">
          Dive into a world of opportunities at Eagle Eye Tech. Whether you're just starting out, freshly graduated, or a seasoned professional, find a role that aligns with your aspirations.
        </p>
        <p className="mt-2">
          Don't see a position that suits you? Reach out to us at{" "}
          <span className="font-medium" style={{ color: highlightColor }}>
            hr@eagleietech.com
          </span>
        </p>
      </div>

      {/* Filter Buttons with Dropdowns */}
      <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium relative">
        {/* Category Filter */}
        <div className="relative" ref={addToFilterButtonsRefs}>
          <button
            className="px-4 py-2 border rounded-md hover:bg-orange-50 transition-colors flex items-center gap-2"
            style={{ borderColor: highlightColor }}
            onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
          >
            {filters.category === "All" ? "All Job Category" : filters.category}
            <FaChevronDown className="text-xs" style={{ color: highlightColor }} />
          </button>
          {showCategoryDropdown && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10 w-48">
              <button
                onClick={() => {
                  updateFilter("category", "All");
                  setShowCategoryDropdown(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-t-md"
              >
                All
              </button>
              {getUniqueCategories().map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    updateFilter("category", cat);
                    setShowCategoryDropdown(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Type Filter */}
        <div className="relative" ref={addToFilterButtonsRefs}>
          <button
            className="px-4 py-2 border rounded-md hover:bg-orange-50 transition-colors flex items-center gap-2"
            style={{ borderColor: highlightColor }}
            onClick={() => setShowTypeDropdown(!showTypeDropdown)}
          >
            {filters.type === "All" ? "All Job Type" : filters.type}
            <FaChevronDown className="text-xs" style={{ color: highlightColor }} />
          </button>
          {showTypeDropdown && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10 w-48">
              <button
                onClick={() => {
                  updateFilter("type", "All");
                  setShowTypeDropdown(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-t-md"
              >
                All
              </button>
              {getUniqueTypes().map((typ) => (
                <button
                  key={typ}
                  onClick={() => {
                    updateFilter("type", typ);
                    setShowTypeDropdown(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  {typ}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Location Filter */}
        <div className="relative" ref={addToFilterButtonsRefs}>
          <button
            className="px-4 py-2 border rounded-md hover:bg-orange-50 transition-colors flex items-center gap-2"
            style={{ borderColor: highlightColor }}
            onClick={() => setShowLocationDropdown(!showLocationDropdown)}
          >
            {filters.location === "All" ? "All Job Location" : filters.location}
            <FaChevronDown className="text-xs" style={{ color: highlightColor }} />
          </button>
          {showLocationDropdown && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10 w-48">
              <button
                onClick={() => {
                  updateFilter("location", "All");
                  setShowLocationDropdown(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-t-md"
              >
                All
              </button>
              {getUniqueLocations().map((loc) => (
                <button
                  key={loc}
                  onClick={() => {
                    updateFilter("location", loc);
                    setShowLocationDropdown(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  {loc}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-10 space-y-6">
        {filteredJobs.map((job, index) => (
          <div
            key={job._id}
            ref={addToJobCardRefs}
            className="relative bg-white border-l-4 border-orange-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-orange-50/50 hover:to-white"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="font-bold text-xl text-gray-800">{job.title}</h3>
                <div className="flex gap-3 mt-3">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-orange-500 rounded-full">
                    {job.role}
                  </span>
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-gray-600 bg-gray-100 rounded-full">
                    {job.location}
                  </span>
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-gray-600 bg-gray-100 rounded-full">
                    {job.type}
                  </span>
                </div>
              </div>
              <Link
                to={`/blog/job-application/${encodeURIComponent(job.title)}`}
                className="inline-block px-4 py-2 text-sm font-semibold text-white bg-orange-500 rounded-md hover:bg-orange-600 hover:scale-105 transition-all duration-200"
              >
                More Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareersPage;