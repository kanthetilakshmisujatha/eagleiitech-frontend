// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { FaChartLine, FaRobot, FaSearch, FaLaptopCode } from "react-icons/fa";

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const OurWork = () => {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const subtitleRef = useRef(null);
//   const categoryRefs = useRef([]);
//   const serviceRefs = useRef([]);

//   useEffect(() => {
//     // Title animation
//     gsap.fromTo(
//       titleRef.current,
//       { y: 100, opacity: 0, scale: 0.8 },
//       {
//         y: 0,
//         opacity: 1,
//         scale: 1,
//         duration: 1.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: titleRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );

//     // Subtitle animation
//     gsap.fromTo(
//       subtitleRef.current,
//       { y: 50, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1,
//         ease: "power2.out",
//         delay: 0.4,
//         scrollTrigger: {
//           trigger: subtitleRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );

//     // Category cards animation
//     categoryRefs.current.forEach((category, index) => {
//       if (!category) return;

//       gsap.fromTo(
//         category,
//         { y: 100, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1,
//           ease: "power3.out",
//           delay: index * 0.2,
//           scrollTrigger: {
//             trigger: category,
//             start: "top 75%",
//             toggleActions: "play none none reverse",
//           },
//         }
//       );
//     });

//     // Service items animation
//     serviceRefs.current.forEach((service, index) => {
//       if (!service) return;

//       gsap.fromTo(
//         service,
//         { x: -30, opacity: 0 },
//         {
//           x: 0,
//           opacity: 1,
//           duration: 0.8,
//           ease: "back.out(1.7)",
//           delay: index * 0.15,
//           scrollTrigger: {
//             trigger: service,
//             start: "top 80%",
//             toggleActions: "play none none reverse",
//           },
//         }
//       );
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   const addToCategoryRefs = (el) => {
//     if (el && !categoryRefs.current.includes(el)) {
//       categoryRefs.current.push(el);
//     }
//   };

//   const addToServiceRefs = (el) => {
//     if (el && !serviceRefs.current.includes(el)) {
//       serviceRefs.current.push(el);
//     }
//   };

//   const categories = [
//     {
//       title: "DIGITAL MARKETING",
//       icon: <FaChartLine />,
//       services: ["SEO Optimization", "Social Media Campaigns", "Content Marketing", "PPC Advertising"],
//     },
//     {
//       title: "DATA SCIENCE",
//       icon: <FaRobot />,
//       services: ["Machine Learning", "Data Analytics", "AI Solutions", "Big Data Processing"],
//     },
//     {
//       title: "SOFTWARE TESTING",
//       icon: <FaSearch />,
//       services: ["Automated Testing", "Performance Testing", "Security Testing", "QA Consulting"],
//     },
//     {
//       title: "WEB DEVELOPMENT",
//       icon: <FaLaptopCode />,
//       services: ["Frontend Development", "Backend Development", "UI/UX Design", "E-commerce Solutions"],
//     },
//   ];

//   return (
//     <section ref={sectionRef} className="relative min-h-screen bg-gray-900 py-20 px-6 overflow-hidden">
//       {/* Subtle background effect */}
//       <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-orange-500/10 to-transparent"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-20">
//           <h2
//             ref={titleRef}
//             className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-[#F54A00]"
//           >
//             Our Work
//           </h2>
//           <p
//             ref={subtitleRef}
//             className="text-gray-200 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed font-light"
//           >
//             Eagle Eye Tech delivers innovative digital solutions to transform your business, driven by our expert team.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {categories.map((category, index) => (
//             <div
//               key={index}
//               ref={addToCategoryRefs}
//               className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-lg hover:shadow-xl hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1"
//             >
//               <div className="relative z-10">
//                 <div className="flex items-center mb-8">
//                   <span className="text-5xl mr-4 transform transition-transform duration-300 hover:scale-110 text-[#F54A00]">
//                     {category.icon}
//                   </span>
//                   <h3 className="text-2xl font-bold text-white transition-colors duration-300 hover:text-[#F54A00]">
//                     {category.title}
//                   </h3>
//                 </div>

//                 <ul className="space-y-4 mb-8">
//                   {category.services.map((service, serviceIndex) => (
//                     <li
//                       key={serviceIndex}
//                       ref={addToServiceRefs}
//                       className="flex items-center text-gray-200 transition-colors duration-300 hover:text-[#F54A00] text-lg"
//                     >
//                       <span className="w-3 h-3 bg-[#F54A00] rounded-full mr-4 transition-transform duration-300 hover:scale-125"></span>
//                       {service}
//                     </li>
//                   ))}
//                 </ul>

//                 <button className="px-8 py-3 bg-[#F54A00] text-white font-semibold rounded-full transition-all duration-300 hover:bg-[#D43F00] hover:shadow-lg hover:shadow-[#F54A00]/30 transform hover:scale-105">
//                   Discover More
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-20 text-center">
//           <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-light">
//             Our tailored digital solutions empower your business to excel in the modern digital landscape.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurWork;
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { FaBullhorn, FaRobot, FaSearch, FaUsers, FaTools, FaPaintBrush } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const OurWork = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const containerRef = useRef(null);
  const carouselRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const indicatorsRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const animationRef = useRef(null);

  // GSAP animations for title, subtitle, arrows, and indicators
  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: titleRef.current, start: "top 80%", toggleActions: "play none none reverse" },
      }
    );
    gsap.fromTo(
      subtitleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 0.3,
        scrollTrigger: { trigger: subtitleRef.current, start: "top 80%", toggleActions: "play none none reverse" },
      }
    );
    gsap.fromTo(
      prevButtonRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 80%", toggleActions: "play none none reverse" },
      }
    );
    gsap.fromTo(
      nextButtonRef.current,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 80%", toggleActions: "play none none reverse" },
      }
    );
    gsap.fromTo(
      indicatorsRef.current?.children,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: indicatorsRef.current, start: "top 90%", toggleActions: "play none none reverse" },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Auto-scrolling and infinite scroll animation
  const categories = [
    {
      title: "DIGITAL MARKETING",
      icon: <FaBullhorn />,
      services: ["Search Engine Marketing", "Social Media Marketing", "Social Engine Marketing", "Online Reputation", "Strategy"],
      link: "/searchengine",
    },
    {
      title: "DATA SCIENCE",
      icon: <FaRobot />,
      services: ["AI Chatbots", "Technologies", "Competencies"],
      link: "/deeplearning",
    },
    {
      title: "SOFTWARE TESTING",
      icon: <FaSearch />,
      services: ["Mobile App Testing", "Manual", "Automation"],
      link: "/Software-Testing",
    },
    {
      title: "STAFFING",
      icon: <FaUsers />,
      services: ["Staff Augmentation", "Staffing Services", "Permanent Staffing Services", "Contract Staffing Services", "Contract To Hire"],
      link: "/staffaugmentation",
    },
    {
      title: "APPLICATION SUPPORT",
      icon: <FaTools />,
      services: ["Implementation Services", "Post Implementation", "Trouble Shooting Support", "Technical Support"],
      link: "/implementation",
    },
    {
      title: "UI/UX",
      icon: <FaPaintBrush />,
      services: ["Dynamic website", "Mobile Optimized Website", "Responsive Web Design", "Mobile Web Applications", "Web Design/Development and Hosting"],
      link: "/dynamic",
    },
  ];

  // Duplicate categories for infinite scroll
  const extendedCategories = [...categories, ...categories, ...categories]; // 3 sets for smooth looping
  const cardWidth = 350; // Approximate card width in pixels
  const gap = 40; // Matches gap-10 (2.5rem * 16px = 40px)

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const totalWidth = (cardWidth + gap) * categories.length; // Width of one set of cards
    animationRef.current = gsap.to(carousel, {
      x: -totalWidth,
      duration: 25, // Matches ContractStaffing client scroll speed
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });

    // Update currentIndex based on scroll position
    const updateIndex = () => {
      const currentX = gsap.getProperty(carousel, "x");
      const index = Math.round((-currentX / (cardWidth + gap)) % categories.length);
      setCurrentIndex(index < 0 ? categories.length + index : index);
    };

    gsap.ticker.add(updateIndex);

    // Pause on hover
    const container = containerRef.current;
    const handleMouseEnter = () => animationRef.current.pause();
    const handleMouseLeave = () => animationRef.current.resume();

    container?.addEventListener("mouseenter", handleMouseEnter);
    container?.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup
    return () => {
      gsap.ticker.remove(updateIndex);
      animationRef.current.kill();
      container?.removeEventListener("mouseenter", handleMouseEnter);
      container?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Handle arrow navigation
  const handlePrev = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    animationRef.current.pause();
    const currentX = gsap.getProperty(carousel, "x");
    const newX = currentX + (cardWidth + gap); // Move right by one card
    gsap.to(carousel, {
      x: newX,
      duration: 1.5, // Slow movement
      ease: "power1.inOut",
      onComplete: () => {
        const totalWidth = (cardWidth + gap) * categories.length;
        if (newX > 0) {
          gsap.set(carousel, { x: newX - totalWidth });
        }
        animationRef.current.resume();
      },
    });
  };

  const handleNext = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    animationRef.current.pause();
    const currentX = gsap.getProperty(carousel, "x");
    const newX = currentX - (cardWidth + gap); // Move left by one card
    gsap.to(carousel, {
      x: newX,
      duration: 1.5, // Slow movement
      ease: "power1.inOut",
      onComplete: () => {
        const totalWidth = (cardWidth + gap) * categories.length;
        if (newX < -totalWidth * 2) {
          gsap.set(carousel, { x: newX + totalWidth });
        }
        animationRef.current.resume();
      },
    });
  };

  const goToPage = (index) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    animationRef.current.pause();
    const totalWidth = (cardWidth + gap) * categories.length;
    const xPosition = -((index % categories.length) + categories.length) * (cardWidth + gap); // Start in middle set
    gsap.to(carousel, {
      x: xPosition,
      duration: 1.5,
      ease: "power1.inOut",
      onComplete: () => {
        setCurrentIndex(index % categories.length);
        animationRef.current.resume();
      },
    });
  };

  return (
    <section className="relative min-h-screen bg-gray-900 py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-[#F54A00]">
            Our Work
          </h2>
          <p ref={subtitleRef} className="text-gray-200 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
            Eagle Eye Tech delivers innovative digital solutions to transform your business, driven by our expert team.
          </p>
        </div>

        <div ref={containerRef} className="relative">
          {/* Navigation Arrows */}
          <button
            ref={prevButtonRef}
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#F54A00] to-[#FF6B6B] rounded-full p-3 shadow-lg z-20 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            ref={nextButtonRef}
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#F54A00] to-[#FF6B6B] rounded-full p-3 shadow-lg z-20 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel */}
          <div className="overflow-hidden relative">
            <div
              ref={carouselRef}
              className="flex space-x-10"
              style={{ display: "flex", whiteSpace: "nowrap" }}
            >
              {extendedCategories.map((category, index) => (
                <div
                  key={index}
                  className="flex-none w-[300px] md:w-[350px] bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl pt-16 pb-8 px-8 shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative w-20 h-20 mx-auto -mt-14 mb-4">
                    <div className="absolute inset-0 bg-[#F54A00]/20 backdrop-blur-md rounded-full flex items-center justify-center text-[#F54A00] text-4xl shadow-lg">
                      {category.icon}
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                    <ul className="space-y-2 mb-6">
                      {category.services.map((service, sIndex) => (
                        <li key={sIndex} className="text-gray-100 hover:text-[#F54A00] transition-colors duration-300">
                          • {service}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={category.link}
                      className="px-6 py-3 bg-[#F54A00] text-white font-semibold rounded-full hover:bg-white hover:text-[#F54A00] hover:shadow-lg transition-all duration-300 inline-block"
                    >
                      Discover More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
          </div>
        </div>

        {/* Navigation Indicators */}
        <div ref={indicatorsRef} className="flex justify-center mt-12 space-x-2">
          {categories.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToPage(idx)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentIndex === idx ? "bg-[#F54A00] scale-125" : "bg-gray-500 hover:bg-orange-500"
              }`}
              aria-label={`Go to card ${idx + 1}`}
            ></button>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-light">
            Our tailored digital solutions empower your business to excel in the modern digital landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurWork;