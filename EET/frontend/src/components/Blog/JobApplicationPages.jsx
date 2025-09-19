
import React, { useState, useEffect, useRef } from "react";
import { FaUserShield } from "react-icons/fa";

const JobApplicationPages = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
    cvResume: null,
  });

  const formRef = useRef(null);
  const sidebarRef = useRef(null);

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Application submitted! We will review your details.");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      coverLetter: "",
      cvResume: null,
    });
  };

  const recentPosts = [
    {
      title: "Ways To Make Money Online Using AI In 2025",
      date: "AUGUST 20, 2025",
      image: "https://eagleiitech.com/wp-content/uploads/2025/09/maxresdefault-12.jpg",
    },
    {
      title: "AI Technologies Every Developer Should Know In 2025",
      date: "AUGUST 10, 2025",
      image: "https://eagleiitech.com/wp-content/uploads/2025/09/0x0-2-1536x864.webp",
    },
    {
      title: "The Rise Of Tesla – From Startup To EV Giant",
      date: "JULY 20, 2025",
      image: "https://eagleiitech.com/wp-content/uploads/2025/09/maxresdefault-11.jpg",
    },
  ];

  const categories = [
    "Applications-Integration",
    "Artificial Intelligence",
    "Blockchain",
    "Cyber Security",
    "Data Science",
    "Digital Marketing",
    "IDS",
    "Machine Learning",
    "Mobile Apps",
    "On Demand IT",
    "software-testing",
    "UI-UX",
    "Uncategorized",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 sm:py-12 px-4 sm:px-6 md:px-8 overflow-x-hidden mt-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div ref={formRef} className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
              <div className="mb-4 sm:mb-6">
                <div className="flex items-center mb-2">
                  <FaUserShield className="mr-2 text-lg sm:text-xl" style={{ color: '#F54A00' }} />
                  <h3 className="text-lg sm:text-xl font-semibold" style={{ color: '#F54A00' }}>ADMIN</h3>
                </div>
                <p className="mt-2 text-gray-600 text-sm sm:text-base">
                  <strong>Location:</strong> Eagle Eye Technologies
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  <strong>Address:</strong> 1000 Bearcat Way Suite 105 Unit 5 Morrisville NC 27560
                </p>
                <p className="mt-2 text-gray-600 text-sm sm:text-base">
                  Travel & relocate to various unanticipated client locations throughout the US may be required.
                </p>
                <p className="mt-2 text-gray-600 text-sm sm:text-base">
                  <strong>Requirements:</strong> Masters Degree.
                </p>
                <p className="mt-2 text-gray-600 text-sm sm:text-base">
                  <strong>Job Description:</strong> Evaluate, understand and interpret data received from various sources. Write specifications to capture required information from data assets. Build and maintain scalable data pipelines, prototypes, algorithms and data assets. Analyse complex raw data to improve data models and generate reports. Evaluate business needs and interpret data trends and patterns. Enhance data quality and ensure data is accurate. Provide access to the data sets and reports. Define systems and processes to monitor data quality and security. Design data framework and integrate with the systems.
                </p>
                <p className="mt-2 text-gray-600 text-sm sm:text-base">
                  Interested candidates please send your cv to{" "}
                  <a href="mailto:hr@eagleittech.com" className="text-orange-500 underline">
                    hr@eagleittech.com
                  </a>
                </p>
                <p className="mt-2 text-gray-600 text-sm sm:text-base">
                  <strong>Job Category:</strong> engineer
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  <strong>Job Type:</strong> Full Time
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  <strong>Job Location:</strong> USA
                </p>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 pt-4 sm:pt-6" style={{ color: '#F54A00' }}>
                Apply For This Position
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200 text-sm sm:text-base"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200 text-sm sm:text-base"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200 text-sm sm:text-base"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Cover Letter *</label>
                  <textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200 text-sm sm:text-base"
                    rows="4"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Upload CV/Resume *</label>
                  <div className="mt-1 flex justify-center px-4 sm:px-6 pt-4 sm:pt-5 pb-5 sm:pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                    <div className="space-y-1 text-center">
                      <div className="flex text-xs sm:text-sm text-gray-600">
                        <label
                          htmlFor="cvResume"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-orange-600 hover:text-orange-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-orange-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="cvResume"
                            name="cvResume"
                            type="file"
                            onChange={handleChange}
                            accept=".pdf,.doc,.docx"
                            className="sr-only"
                            required
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
                    </div>
                  </div>
                  {formData.cvResume && (
                    <p className="text-sm text-gray-600 mt-3 flex items-center">
                      <svg
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {formData.cvResume.name}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full text-white py-2 sm:py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200 font-medium text-sm sm:text-lg"
                  style={{ backgroundColor: '#F54A00' }}
                  onMouseOver={(e) => (e.target.style.backgroundColor = '#E04400')}
                  onMouseOut={(e) => (e.target.style.backgroundColor = '#F54A00')}
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div ref={sidebarRef} className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 sticky top-16">
              {/* Recent Posts */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold mb-4 pt-4 sm:pt-6">Recent Posts</h3>
                {recentPosts.map((post, index) => (
                  <div key={index} className="flex items-center gap-3 sm:gap-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-16 sm:w-20 h-16 sm:h-20 object-cover rounded-lg"
                    />
                    <div className="flex flex-col">
                      <h4 className="text-gray-900 font-semibold text-sm sm:text-base">{post.title}</h4>
                      <span className="text-gray-500 text-xs sm:text-sm">{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="w-full h-px bg-gray-200 my-4 sm:my-6"></div>

              {/* Categories */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200 pt-4 sm:pt-6">
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="flex items-center py-2 px-2 sm:px-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-200"
                  >
                    <span className="mr-2 sm:mr-3 text-sm sm:text-base" style={{ color: '#F54A00' }}>
                      &#10003;
                    </span>
                    <span className="text-gray-700 text-sm sm:text-base">{category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationPages;
