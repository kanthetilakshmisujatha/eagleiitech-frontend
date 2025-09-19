import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useParams, Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const BlogPage = () => {
  const { id } = useParams();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const sidebarRef = useRef(null);
  const commentRef = useRef(null);
  const [blog, setBlog] = useState(null);
  const [commentData, setCommentData] = useState({
    name: "",
    email: "",
    website: "",
    comment: "",
  });

  const highlightColor = "#F54A00"; // Highlight color

  useEffect(() => {
    // Scroll to top when the component mounts or id changes
    window.scrollTo({ top: 0, behavior: "smooth" });

    const blogData = blogs.find((b) => b.id === parseInt(id));
    setBlog(blogData);

    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(contentRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.3,
      });

      gsap.from(sidebarRef.current, {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.5,
      });

      gsap.from(commentRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.7,
        scrollTrigger: {
          trigger: commentRef.current,
          start: "top 85%",
          toggleActions: "play none none reset",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [id]);

  const handleCommentChange = (e) => {
    const { name, value } = e.target;
    setCommentData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    console.log("Comment submitted:", commentData);
    alert("Thank you for your comment! It will be reviewed before publishing.");
    setCommentData({
      name: "",
      email: "",
      website: "",
      comment: "",
    });
  };

  const blogs = [
    {
      id: 1,
      title: "MAKE MONEY WITH AI",
      subtitle: "Why: To Make Money Online Using AI In 2025",
      image: "https://eagleiitech.com/wp-content/uploads/2025/09/maxresdefault-12.jpg",
      author: "SUNEEL",
      location: "MERALA",
      category: "ARTIFICIAL INTELLIGENCE",
      date: "13 Sept 2025",
      content: `
        <div>
          <h3>Introduction to AI Opportunities</h3>
          <p>Artificial Intelligence (AI) has evolved from a futuristic concept into a daily necessity. From voice assistants like Siri and Alexa to recommendation engines on YouTube, Netflix, and Amazon, AI is quietly shaping how we live and work.</p>
          <p>In 2025, AI is more than just convenience—it’s a powerful opportunity. With advanced AI tools, individuals and businesses can generate new income streams.</p>
          <h3>Ways to Make Money with AI</h3>
          <h4>Content Creation</h4>
          <p>One accessible method is through content creation. Tools like:</p>
          <ul>
            <li style="text-decoration: underline; color: ${highlightColor};">ChatGPT</li>
            <li style="text-decoration: underline; color: ${highlightColor};">Jasper</li>
            <li style="text-decoration: underline; color: ${highlightColor};">Other AI writing assistants</li>
          </ul>
          <p>These can help produce blog posts, articles, or social media content at scale. Pair this with platforms like Medium or Substack for monetization. AI-powered graphic design tools such as Canva’s AI features or DALL·E can enhance your content with stunning visuals.</p>
          <h4>AI-Driven E-Commerce</h4>
          <p>Another lucrative option is AI-driven e-commerce. AI can:</p>
          <ul>
            <li style="text-decoration: underline; color: ${highlightColor};">Analyze market trends</li>
            <li style="text-decoration: underline; color: ${highlightColor};">Optimize product listings</li>
            <li style="text-decoration: underline; color: ${highlightColor};">Create personalized marketing campaigns</li>
          </ul>
          <p>This boosts sales on platforms like Amazon or Shopify. AI chatbots can handle customer inquiries 24/7, reducing costs and improving satisfaction.</p>
          <h4>Technical Skills and Development</h4>
          <p>For those with technical expertise, consider:</p>
          <ul>
            <li style="text-decoration: underline; color: ${highlightColor};">Developing AI applications</li>
            <li style="text-decoration: underline; color: ${highlightColor};">Integrating AI into existing software</li>
          </ul>
          <p>Freelancing on Upwork or Fiverr for AI projects, or building custom solutions, can yield high rates. The demand for AI trainers—who teach AI models using data—is also a growing niche.</p>
          <h3>Key to Success in 2025</h3>
          <p>Success with AI requires:</p>
          <ul>
            <li style="text-decoration: underline; color: ${highlightColor};">Staying updated with the latest tools and trends</li>
            <li style="text-decoration: underline; color: ${highlightColor};">Experimenting with monetization strategies</li>
            <li style="text-decoration: underline; color: ${highlightColor};">Consistently delivering value</li>
          </ul>
          <p>Whether you're a beginner or an expert, AI can transform your financial future.</p>
        </div>
      `,
    },
    {
      id: 2,
      title: "AI Technologies Every Developer Should Know In 2025",
      subtitle: "Essential skills for the modern developer",
      image: "https://eagleiitech.com/wp-content/uploads/2025/09/0x0-2-1536x864.webp",
      author: "THIRDFAITH",
      location: "MERALA",
      category: "ARTIFICIAL INTELLIGENCE",
      date: "12 Sept 2025",
      content: `
        <div>
          <h3>Why AI Skills Matter</h3>
          <p>Artificial Intelligence (AI) is no longer a futuristic concept—it’s here, shaping industries, businesses, and daily life. From Netflix recommendations to self-driving cars, AI drives modern innovation.</p>
          <p>For developers, mastering AI technologies is essential in 2025. These skills are among the most in-demand globally and can set you apart in the job market.</p>
          <h3>Essential AI Technologies</h3>
          <h4>TensorFlow and PyTorch</h4>
          <p><strong>TensorFlow</strong> is a key open-source framework for machine learning. Its ecosystem, including TensorFlow Lite, supports building and deploying AI models for mobile and edge devices.</p>
          <p><strong>PyTorch</strong> offers dynamic computation graphs, making it ideal for research and prototyping. Together, they form the foundation of AI development.</p>
          <h4>Natural Language Processing (NLP)</h4>
          <p>NLP is crucial for developers. Libraries like Hugging Face’s Transformers enable:</p>
          <ul>
            <li style="text-decoration: underline; color: ${highlightColor};">Text generation</li>
            <li style="text-decoration: underline; color: ${highlightColor};">Translation</li>
            <li style="text-decoration: underline; color: ${highlightColor};">Sentiment analysis</li>
          </ul>
          <p>As chatbots and virtual assistants grow, NLP skills are indispensable.</p>
          <h4>Computer Vision</h4>
          <p>Computer Vision is vital, with tools like OpenCV and MediaPipe for:</p>
          <ul>
            <li style="text-decoration: underline; color: ${highlightColor};">Image recognition</li>
            <li style="text-decoration: underline; color: ${highlightColor};">Facial detection</li>
            <li style="text-decoration: underline; color: ${highlightColor};">Augmented reality</li>
          </ul>
          <p>The rise of edge AI requires optimizing these models for smartphones and IoT devices.</p>
          <h4>AutoML</h4>
          <p><strong>AutoML</strong> tools like Google AutoML or H2O.ai automate the machine learning pipeline, making AI accessible to those with limited expertise.</p>
          <h3>Building Scalable Solutions</h3>
          <p>In 2025, combining these technologies with cloud platforms like AWS, Azure, or Google Cloud is key to creating scalable AI solutions.</p>
        </div>
      `,
    },
    {
      id: 3,
      title: "The Rise Of Tesla – From Startup To EV Giant",
      subtitle: "A journey of innovation and disruption",
      image: "https://eagleiitech.com/wp-content/uploads/2025/09/maxresdefault-11.jpg",
      author: "VISHU",
      location: "CALIFORNIA",
      category: "MACHINE LEARNING",
      date: "11 Sept 2025",
      content: `
        <div>
          <h3>Tesla’s Beginnings</h3>
          <p>Tesla is synonymous with electric vehicles today. From a small Silicon Valley startup, it has become one of the world’s most valuable car companies.</p>
          <p>Founded in 2003 by Martin Eberhard and Marc Tarpenning, Tesla gained prominence under Elon Musk’s leadership after his early investment. The Roadster’s 2008 launch proved electric vehicles could be high-performance.</p>
          <h3>Key Milestones</h3>
          <p>The Model S, launched in 2012, established Tesla as a serious player with luxury and range rivaling gas-powered cars.</p>
          <p>Tesla’s success stems from innovative technology, including:</p>
          <ul>
            <li style="text-decoration: underline; color: ${highlightColor};">Battery technology</li>
            <li style="text-decoration: underline; color: ${highlightColor};">Autonomous driving software</li>
            <li style="text-decoration: underline; color: ${highlightColor};">Over-the-air updates</li>
          </ul>
          <p>Machine learning powers Tesla’s Autopilot and Full Self-Driving features, relying on neural networks trained on vast data.</p>
          <h3>Challenges and Triumphs</h3>
          <p>Tesla faced near bankruptcy, criticism from traditional automakers, and production challenges. Yet, its market capitalization exceeded $1 trillion in 2025.</p>
          <p>Expansion into energy storage with Powerwall and solar products solidifies Tesla’s leadership in sustainable technology.</p>
        </div>
      `,
    },
    {
      id: 4,
      title: "Tech Updates on September 18, 2025",
      subtitle: "Latest Innovations as of Today",
      image: "https://eagleiitech.com/wp-content/uploads/2025/09/tech-update.jpg",
      author: "AI EXPERT",
      location: "BANGALORE",
      category: "TECHNOLOGY",
      date: "18 Sept 2025",
      content: `
        <div>
          <h3>Overview of Today’s Tech Scene</h3>
          <p>As of 12:06 PM IST on Thursday, September 18, 2025, the tech world is buzzing with new developments. This update covers the latest innovations and trends.</p>
          <h3>Key Highlights</h3>
          <h4>AI Breakthroughs</h4>
          <p>Recent advancements in AI include:</p>
          <ul>
            <li style="text-decoration: underline; color: ${highlightColor};">Improved natural language models for real-time translation</li>
            <li style="text-decoration: underline; color: ${highlightColor};">Enhanced computer vision for autonomous drones</li>
          </ul>
          <p>These breakthroughs are set to transform industries by year-end.</p>
          <h4>Hardware Innovations</h4>
          <p>New hardware releases include:</p>
          <ul>
            <li style="text-decoration: underline; color: ${highlightColor};">A next-gen processor from Intel, boosting AI performance</li>
            <li style="text-decoration: underline; color: ${highlightColor};">A lightweight VR headset from Meta, enhancing virtual experiences</li>
          </ul>
          <p>These devices are now available for pre-order.</p>
          <h3>Impact on Developers</h3>
          <p>Developers can leverage these updates to:</p>
          <ul>
            <li style="text-decoration: underline; color: ${highlightColor};">Build smarter applications</li>
            <li style="text-decoration: underline; color: ${highlightColor};">Optimize existing systems for better efficiency</li>
          </ul>
          <p>Stay tuned for more details as the day progresses!</p>
        </div>
      `,
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
    "Machine_Learning",
    "Mobile Apps",
    "On Demand IT",
    "software-testing",
    "UI-UX",
    "Uncategorized",
    "TECHNOLOGY",
  ];

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

  if (!blog) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 sm:py-12 px-4 sm:px-6 md:px-8 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Back Button */}
            <Link to="/blog" className="inline-flex items-center mb-4 sm:mb-6 text-sm sm:text-base" style={{ color: highlightColor }}>
              <svg className="w-4 sm:w-5 h-4 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Blogs
            </Link>

            {/* Title Section */}
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">
              <h1 ref={titleRef} className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 pt-4 sm:pt-6">
                {blog.title}
              </h1>

              {/* Author Info */}
              <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                <div className="flex items-center">
                  <div
                    className="w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center font-bold mr-3 text-sm sm:text-base"
                    style={{ backgroundColor: highlightColor, color: "white" }}
                  >
                    {blog.author.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{blog.author}</h3>
                    <p className="text-xs sm:text-sm text-gray-600">{blog.location}</p>
                    <p className="text-xs sm:text-sm" style={{ color: highlightColor }}>{blog.category}</p>
                  </div>
                </div>
                <span className="sm:ml-auto text-xs sm:text-sm text-gray-500 mt-2 sm:mt-0">{blog.date}</span>
              </div>

              {/* Blog Image */}
              <div className="mb-4 sm:mb-6 rounded-xl overflow-hidden">
                <img src={blog.image} alt={blog.title} className="w-full h-auto object-cover" />
              </div>

              {/* Blog Content */}
              <div ref={contentRef} className="prose max-w-none text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>

            {/* Comment Section */}
            <div ref={commentRef} className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 pt-4 sm:pt-6">Write A Reply Or Comment</h2>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">Your email address will not be published. Required fields are marked *</p>

              <form onSubmit={handleCommentSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">* Enter Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={commentData.name}
                      onChange={handleCommentChange}
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">* Enter Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={commentData.email}
                      onChange={handleCommentChange}
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="website" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Enter URL</label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={commentData.website}
                      onChange={handleCommentChange}
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm sm:text-base"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="comment" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Enter Your Comment</label>
                  <textarea
                    id="comment"
                    name="comment"
                    rows="5"
                    value={commentData.comment}
                    onChange={handleCommentChange}
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm sm:text-base"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300 font-semibold cursor-pointer text-sm sm:text-base"
                  style={{ backgroundColor: highlightColor }}
                >
                  Post Comment
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
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200 pt-4 sm:pt-6">Categories</h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="flex items-center py-2 px-2 sm:px-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-200"
                  >
                    <span className="mr-2 sm:mr-3 text-sm sm:text-base" style={{ color: highlightColor }}>
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

export default BlogPage;