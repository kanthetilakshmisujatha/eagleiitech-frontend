import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaChartLine, FaRobot, FaSearch, FaLaptopCode } from "react-icons/fa";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const OurWork = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const categoryRefs = useRef([]);
  const serviceRefs = useRef([]);

  useEffect(() => {
    // Title animation
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Subtitle animation
    gsap.fromTo(
      subtitleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 0.4,
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Category cards animation
    categoryRefs.current.forEach((category, index) => {
      if (!category) return;

      gsap.fromTo(
        category,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: index * 0.2,
          scrollTrigger: {
            trigger: category,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Service items animation
    serviceRefs.current.forEach((service, index) => {
      if (!service) return;

      gsap.fromTo(
        service,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          delay: index * 0.15,
          scrollTrigger: {
            trigger: service,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const addToCategoryRefs = (el) => {
    if (el && !categoryRefs.current.includes(el)) {
      categoryRefs.current.push(el);
    }
  };

  const addToServiceRefs = (el) => {
    if (el && !serviceRefs.current.includes(el)) {
      serviceRefs.current.push(el);
    }
  };

  const categories = [
    {
      title: "DIGITAL MARKETING",
      icon: <FaChartLine />,
      services: ["SEO Optimization", "Social Media Campaigns", "Content Marketing", "PPC Advertising"],
    },
    {
      title: "DATA SCIENCE",
      icon: <FaRobot />,
      services: ["Machine Learning", "Data Analytics", "AI Solutions", "Big Data Processing"],
    },
    {
      title: "SOFTWARE TESTING",
      icon: <FaSearch />,
      services: ["Automated Testing", "Performance Testing", "Security Testing", "QA Consulting"],
    },
    {
      title: "WEB DEVELOPMENT",
      icon: <FaLaptopCode />,
      services: ["Frontend Development", "Backend Development", "UI/UX Design", "E-commerce Solutions"],
    },
  ];

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-gray-900 py-20 px-6 overflow-hidden">
      {/* Subtle background effect */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-orange-500/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-[#F54A00]"
          >
            Our Work
          </h2>
          <p
            ref={subtitleRef}
            className="text-gray-200 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed font-light"
          >
            Eagle Eye Tech delivers innovative digital solutions to transform your business, driven by our expert team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              ref={addToCategoryRefs}
              className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-lg hover:shadow-xl hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <span className="text-5xl mr-4 transform transition-transform duration-300 hover:scale-110 text-[#F54A00]">
                    {category.icon}
                  </span>
                  <h3 className="text-2xl font-bold text-white transition-colors duration-300 hover:text-[#F54A00]">
                    {category.title}
                  </h3>
                </div>

                <ul className="space-y-4 mb-8">
                  {category.services.map((service, serviceIndex) => (
                    <li
                      key={serviceIndex}
                      ref={addToServiceRefs}
                      className="flex items-center text-gray-200 transition-colors duration-300 hover:text-[#F54A00] text-lg"
                    >
                      <span className="w-3 h-3 bg-[#F54A00] rounded-full mr-4 transition-transform duration-300 hover:scale-125"></span>
                      {service}
                    </li>
                  ))}
                </ul>

                <button className="px-8 py-3 bg-[#F54A00] text-white font-semibold rounded-full transition-all duration-300 hover:bg-[#D43F00] hover:shadow-lg hover:shadow-[#F54A00]/30 transform hover:scale-105">
                  Discover More
                </button>
              </div>
            </div>
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