// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Link } from "react-router-dom";

// gsap.registerPlugin(ScrollTrigger);

// const Blog = () => {
//   const sectionRef = useRef(null);
//   const cardRefs = useRef([]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       cardRefs.current.forEach((card, index) => {
//         gsap.from(card, {
//           x: index % 2 === 0 ? -200 : 200,
//           opacity: 0,
//           rotationY: 20,
//           duration: 1.2,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: card,
//             start: "top 80%",
//             toggleActions: "play none none reset",
//           },
//         });
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   const blogs = [
//     {
//       id: 1,
//       title: "MAKE MONEY WITH AI",
//       subtitle: "Why: To Make Money Online Using AI In 2025",
//       image: "https://eagleiitech.com/wp-content/uploads/2025/09/maxresdefault-12.jpg",
//       author: "SUNEEL",
//       location: "MERALA",
//       category: "ARTIFICIAL INTELLIGENCE",
//       date: "13 Sept 2025",
//       text: "Artificial Intelligence (AI) has evolved from being a futuristic concept into a daily necessity. From voice assistants like Siri and Alexa to recommendation engines on YouTube, Netflix, and Amazon, AI is quietly shaping the way we live and work. But in 2025, AI isn't just about convenience—it's about opportunity. With the rise of advanced AI tools, […]",
//     },
//     {
//       id: 2,
//       title: "AI Technologies Every Developer Should Know In 2025",
//       subtitle: "Essential skills for the modern developer",
//       image: "https://eagleiitech.com/wp-content/uploads/2025/09/0x0-2-1536x864.webp",
//       author: "THIRDFAITH",
//       location: "MERALA",
//       category: "ARTIFICIAL INTELLIGENCE",
//       date: "12 Sept 2025",
//       text: "Artificial Intelligence (AI) is no longer a futuristic concept—it's here, shaping industries, businesses, and even our daily lives. From personalized recommendations on Netflix to self-driving cars, AI has become the backbone of modern innovation. For developers, staying updated with AI technologies is no longer optional—it's essential. In 2025, AI skills are among the most in-demand across […]",
//     },
//     {
//       id: 3,
//       title: "The Rise Of Tesla – From Startup To EV Giant",
//       subtitle: "A journey of innovation and disruption",
//       image: "https://eagleiitech.com/wp-content/uploads/2025/09/maxresdefault-11.jpg",
//       author: "VISHU",
//       location: "CALIFORNIA",
//       category: "MACHINE LEARNING",
//       date: "11 Sept 2025",
//       text: "When you think of electric vehicles today, the first name that comes to mind is Tesla. From being a small Silicon Valley startup to becoming one of the most valuable car companies in the world, Tesla has disrupted the automotive industry like no other. But Tesla's rise wasn't easy. It faced near bankruptcy, criticism from traditional automakers, and production challenges that threatened its existence.",
//     },
//   ];

//   const orangeColor = "#F54A00"; // Hex color for all orange styles

//   return (
//     <div ref={sectionRef} className="py-16 px-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-4" style={{ color: orangeColor }}>Latest Insights</h2>
//         <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
//           Discover the latest trends and innovations in AI, technology, and sustainable energy
//         </p>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {blogs.map((blog) => (
//             <div
//               key={blog.id}
//               ref={(el) => (cardRefs.current[blog.id - 1] = el)}
//               className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 flex flex-col"
//             >
//               {/* Image */}
//               <div className="overflow-hidden rounded-t-2xl h-48">
//                 <img
//                   src={blog.image}
//                   alt={blog.title}
//                   className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
//                 />
//               </div>

//               {/* Card Content */}
//               <div className="p-6 flex flex-col flex-grow">
//                 {/* Category */}
//                 <div className="mb-3">
//                   <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: orangeColor }}>
//                     {blog.category}
//                   </span>
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-xl font-bold mb-2 text-gray-900">
//                   {blog.title}
//                 </h3>
                
//                 {/* Subtitle */}
//                 <h4 className="text-md font-semibold mb-3 text-gray-700">
//                   {blog.subtitle}
//                 </h4>

//                 {/* Text */}
//                 <p className="text-gray-600 text-sm mb-4 flex-grow">
//                   {blog.text}
//                 </p>

//                 {/* Meta Info */}
//                 <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
//                   <div className="flex items-center">
//                     <div className="mr-3">
//                       <div className="font-semibold text-gray-900">{blog.author}</div>
//                       <div className="text-xs text-gray-500">{blog.location}</div>
//                     </div>
//                   </div>
//                   <span className="text-sm text-gray-500">{blog.date}</span>
//                 </div>

//                 {/* Button */}
//                 <Link 
//                   to={`/blog/${blog.id}`}
//                   className="mt-6 w-full text-white font-semibold py-2 rounded-lg transition-all duration-300 transform hover:-translate-y-1 text-center block"
//                   style={{
//                     background: `linear-gradient(to right, ${orangeColor}, ${orangeColor})`,
//                   }}
//                 >
//                   Read More
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blog;








// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Link } from "react-router-dom";

// gsap.registerPlugin(ScrollTrigger);

// const Blog = () => {
//   const sectionRef = useRef(null);
//   const cardRefs = useRef([]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       cardRefs.current.forEach((card, index) => {
//         gsap.from(card, {
//           x: index % 2 === 0 ? -200 : 200,
//           opacity: 0,
//           rotationY: 20,
//           duration: 1.2,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: card,
//             start: "top 80%",
//             toggleActions: "play none none reset",
//           },
//         });
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   const blogs = [
//     {
//       id: 1,
//       title: "MAKE MONEY WITH AI",
//       subtitle: "Why: To Make Money Online Using AI In 2025",
//       image: "https://eagleiitech.com/wp-content/uploads/2025/09/maxresdefault-12.jpg",
//       author: "SUNEEL",
//       location: "MERALA",
//       category: "ARTIFICIAL INTELLIGENCE",
//       date: "13 Sept 2025",
//       text: "Artificial Intelligence (AI) has evolved from being a futuristic concept into a daily necessity. From voice assistants like Siri and Alexa to recommendation engines on YouTube, Netflix, and Amazon, AI is quietly shaping the way we live and work. But in 2025, AI isn't just about convenience—it's about opportunity. With the rise of advanced AI tools, […]",
//     },
//     {
//       id: 2,
//       title: "AI Technologies Every Developer Should Know In 2025",
//       subtitle: "Essential skills for the modern developer",
//       image: "https://eagleiitech.com/wp-content/uploads/2025/09/0x0-2-1536x864.webp",
//       author: "THIRDFAITH",
//       location: "MERALA",
//       category: "ARTIFICIAL INTELLIGENCE",
//       date: "12 Sept 2025",
//       text: "Artificial Intelligence (AI) is no longer a futuristic concept—it's here, shaping industries, businesses, and even our daily lives. From personalized recommendations on Netflix to self-driving cars, AI has become the backbone of modern innovation. For developers, staying updated with AI technologies is no longer optional—it's essential. In 2025, AI skills are among the most in-demand across […]",
//     },
//     {
//       id: 3,
//       title: "The Rise Of Tesla – From Startup To EV Giant",
//       subtitle: "A journey of innovation and disruption",
//       image: "https://eagleiitech.com/wp-content/uploads/2025/09/maxresdefault-11.jpg",
//       author: "VISHU",
//       location: "CALIFORNIA",
//       category: "MACHINE LEARNING",
//       date: "11 Sept 2025",
//       text: "When you think of electric vehicles today, the first name that comes to mind is Tesla. From being a small Silicon Valley startup to becoming one of the most valuable car companies in the world, Tesla has disrupted the automotive industry like no other. But Tesla's rise wasn't easy. It faced near bankruptcy, criticism from traditional automakers, and production challenges that threatened its existence.",
//     },
//   ];

//   const orangeColor = "#F54A00"; // Hex color for all orange styles

//   return (
//     <div className="overflow-x-hidden">
//       <div ref={sectionRef} className="py-16 px-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-4xl font-bold text-center mt-12" style={{ color: orangeColor }}>Latest Insights</h2>
//           <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
//             Discover the latest trends and innovations in AI, technology, and sustainable energy
//           </p>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {blogs.map((blog) => {
//               // Split date into day and month (assuming format "DD MMMM YYYY")
//               const dateParts = blog.date.split(" "); // Split into ["13", "Sept", "2025"]
//               const day = dateParts[0]; // "13"
//               const month = dateParts[1]; // "Sept"
//               return (
//                 <div
//                   key={blog.id}
//                   ref={(el) => (cardRefs.current[blog.id - 1] = el)}
//                   className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 flex flex-col"
//                 >
//                   {/* Image with Date Box */}
//                   <div className="overflow-hidden rounded-t-2xl h-48 relative">
//                     <img
//                       src={blog.image}
//                       alt={blog.title}
//                       className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
//                     />
//                     <div
//                       className="absolute top-2 right-2 bg-orange-500 text-white px-3 py-2 rounded-sm flex items-center justify-center"
//                       style={{ backgroundColor: orangeColor, width: "60px", height: "60px" }} // Square box with fixed size
//                     >
//                       <span className="text-2xl font-bold">{day}</span>
//                       <span className="text-xs ml-1">{month.toLowerCase()}</span>
//                     </div>
//                   </div>

//                   {/* Card Content */}
//                   <div className="p-6 flex flex-col flex-grow">
//                     {/* Category */}
//                     <div className="mb-3">
//                       <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: orangeColor }}>
//                         {blog.category}
//                       </span>
//                     </div>

//                     {/* Title */}
//                     <h3 className="text-xl font-bold mb-2 text-gray-900">
//                       {blog.title}
//                     </h3>
                    
//                     {/* Subtitle */}
//                     <h4 className="text-md font-semibold mb-3 text-gray-700">
//                       {blog.subtitle}
//                     </h4>

//                     {/* Text */}
//                     <p className="text-gray-600 text-sm mb-4 flex-grow">
//                       {blog.text}
//                     </p>

//                     {/* Meta Info */}
//                     <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
//                       <div className="flex items-center">
//                         <div className="mr-3">
//                           <div className="font-semibold text-gray-900">{blog.author}</div>
//                           <div className="text-xs text-gray-500">{blog.location}</div>
//                         </div>
//                       </div>
//                       <span className="text-sm text-gray-500">{blog.date}</span>
//                     </div>

//                     {/* Button */}
//                     <Link 
//                       to={`/blog/${blog.id}`}
//                       className="mt-6 w-full text-white font-semibold py-2 rounded-lg transition-all duration-300 transform hover:-translate-y-1 text-center block"
//                       style={{
//                         background: `linear-gradient(to right, ${orangeColor}, ${orangeColor})`,
//                       }}
//                     >
//                       Read More
//                     </Link>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blog;


import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import axios from "axios"; // npm install axios

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const [blogs, setBlogs] = useState([]); // Dynamic state
  const [loading, setLoading] = useState(true);

  // Helper function to strip HTML tags and truncate text
  const truncateText = (htmlText, wordLimit = 50) => {
    // Strip HTML tags to get plain text
    const plainText = htmlText.replace(/<[^>]*>/g, '');
    // Split into words and truncate
    const words = plainText.split(/\s+/);
    const truncated = words.slice(0, wordLimit).join(' ');
    return truncated + (words.length > wordLimit ? '...' : '');
  };

  useEffect(() => {
    // Fetch blogs from backend API
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/blogs");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    if (loading) return; // Wait for data

    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, index) => {
        gsap.from(card, {
          x: index % 2 === 0 ? -200 : 200,
          opacity: 0,
          rotationY: 20,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [blogs]); // Re-run animation when blogs update

  const orangeColor = "#F54A00";

  if (loading) {
    return <div className="text-center py-16">Loading blogs...</div>;
  }

  return (
    <div className="overflow-x-hidden">
      <div ref={sectionRef} className="py-16 px-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mt-12" style={{ color: orangeColor }}>Latest Insights</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Discover the latest trends and innovations in AI, technology, and sustainable energy
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => {
              // Split date into day and month (assuming format "DD MMM YYYY")
              const dateParts = blog.date.split(" "); // ["13", "Sept", "2025"]
              const day = dateParts[0]; // "13"
              const month = dateParts[1]; // "Sept"
              return (
                <div
                  key={blog._id} // Use MongoDB _id
                  ref={(el) => (cardRefs.current[index] = el)} // Fix ref index with map index
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 flex flex-col"
                >
                  {/* Image with Date Box */}
                  <div className="overflow-hidden rounded-t-2xl h-48 relative">
                    <img
                      src={blog.image} // From DB (Cloudinary URL)
                      alt={blog.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    <div
                      className="absolute top-2 right-2 bg-orange-500 text-white px-3 py-2 rounded-sm flex items-center justify-center"
                      style={{ backgroundColor: orangeColor, width: "60px", height: "60px" }}
                    >
                      <span className="text-2xl font-bold">{day}</span>
                      <span className="text-xs ml-1">{month.toLowerCase()}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Category */}
                    <div className="mb-3">
                      <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: orangeColor }}>
                        {blog.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      {blog.title}
                    </h3>
                    
                    {/* Subtitle */}
                    <h4 className="text-md font-semibold mb-3 text-gray-700">
                      {blog.subtitle}
                    </h4>

                    {/* Truncated Text Preview */}
                    <p className="text-gray-600 text-sm mb-4 flex-grow">
                      {truncateText(blog.text, 50)} {/* Truncate to ~50 words + ... */}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center">
                        <div className="mr-3">
                          <div className="font-semibold text-gray-900">{blog.author}</div>
                          <div className="text-xs text-gray-500">{blog.location}</div>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{blog.date}</span>
                    </div>

                    {/* Button */}
                    <Link 
                      to={`/blog/${blog._id}`} // Use _id
                      className="mt-6 w-full text-white font-semibold py-2 rounded-lg transition-all duration-300 transform hover:-translate-y-1 text-center block"
                      style={{
                        background: `linear-gradient(to right, ${orangeColor}, ${orangeColor})`,
                      }}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;