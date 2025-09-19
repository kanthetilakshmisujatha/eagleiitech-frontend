import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import { FaChartLine, FaTools } from 'react-icons/fa';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const WhatWeAre = () => {
  const navigate = useNavigate();

  // Refs for Who We Are section
  const whoSectionRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const contentRefs = useRef([]);

  // Refs for What We Do section
  const whatSectionRef = useRef(null);
  const titleRef = useRef(null);
  const whatSubtitleRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    // GSAP Animations for Who We Are section
    if (headingRef.current) {
      gsap.fromTo(headingRef.current, 
        { x: -100, opacity: 0 },
        { 
          x: 0, opacity: 1, duration: 1,
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    if (subtitleRef.current) {
      gsap.fromTo(subtitleRef.current, 
        { x: -100, opacity: 0 },
        { 
          x: 0, opacity: 1, duration: 1, delay: 0.3,
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    contentRefs.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(el, 
          { x: -100, opacity: 0 },
          { 
            x: 0, opacity: 1, duration: 0.8, delay: index * 0.2,
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    });

    // GSAP Animations for What We Do section
    if (titleRef.current) {
      gsap.fromTo(titleRef.current, 
        { x: -100, opacity: 0, scale: 0.8 },
        { 
          x: 0, opacity: 1, scale: 1, duration: 1.2, ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    }

    if (whatSubtitleRef.current) {
      gsap.fromTo(whatSubtitleRef.current, 
        { y: -50, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.3,
          scrollTrigger: {
            trigger: whatSubtitleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    }

    sectionRefs.current.forEach((section, index) => {
      if (section) {
        gsap.fromTo(section, 
          { y: -100, opacity: 0 },
          { 
            y: 0, opacity: 1, duration: 1.5, ease: "elastic.out(1, 0.3)", delay: index * 0.3,
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Helpers to assign refs
  const addToContentRefs = (el) => {
    if (el && !contentRefs.current.includes(el)) {
      contentRefs.current.push(el);
    }
  };

  const addToSectionRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  // Updated data for What We Do section with new icons for the last two cards
  const sections = [
    {
      title: "Shape Your Solution",
      content: "With the Trending & Evolving demands of the clients - we tailor the solutions that meet their needs. We personalize solutions to the changing and challenging requirements of clients.",
      icon: (
        <svg className="w-12 h-12 text-[#F54A00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M9.663 3h4.673m0 0a2 2 0 100 4m0 0a2 2 0 100-4m0 0V3m0 16V9m0 0h4.673M9.663 9h4.673" />
        </svg>
      )
    },
    {
      title: "Create Your Vision",
      content: "We are committed to providing a complete real experience because we understand it is the key to determining our ultimate objective of being an internationally known corporation by offering higher quality services",
      icon: (
        <svg className="w-12 h-12 text-[#F54A00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      title: "Enhance your Company's Growth",
      content: "With the assistance of our professional team, we can ensure that your digital transformation gets momentum. Furthermore, we cherish each client and offer quick support by constantly monitoring the technical solutions we provide to them.",
      icon: <FaChartLine className="w-12 h-12 text-[#F54A00]" />
    },
    {
      title: "Focus On Providing Services & Solutions",
      content: "We measure our precision to ensure client satisfaction, and we're a professional IT solutions company that provides customer-centric, results-oriented, cost-effective, and innovative IT solutions globally.",
      icon: <FaTools className="w-12 h-12 text-[#F54A00]" />
    },
  ];

  // Handle navigation with scroll to top
  const handleNavigate = () => {
    navigate('/mission');
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  };

  return (
    <div className="w-full">
      {/* Who We Are Section */}
      <section ref={whoSectionRef} className="min-h-screen bg-white text-gray-800 flex items-center justify-center px-4 py-12 md:py-16">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative order-2 lg:order-1 w-full max-w-md mx-auto lg:ml-10">
              <div className="absolute -inset-8 lg:-inset-10 bg-orange-100 rounded-2xl transform -rotate-3 opacity-60 hidden md:block"></div>
              <div className="relative bg-white p-4 md:p-6 rounded-2xl shadow-xl transform rotate-2 border-2 border-orange-100 w-full">
                <div className="aspect-video bg-gradient-to-r from-[#F54A00] to-orange-500 rounded-lg flex items-center justify-center overflow-hidden">
                  <img src="/su.jpg" alt="Creative Illustration" className="w-full h-full object-cover rounded-lg" />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6 md:space-y-8 text-center lg:text-left">
              <h1 ref={headingRef} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#F54A00] leading-tight">WHO WE ARE!</h1>
              <h2 ref={subtitleRef} className="text-xl md:text-2xl lg:text-3xl font-semibold text-black leading-relaxed">We Are Dreamers & Innovators With<br className="hidden sm:block" />A Creative Bent</h2>
              <div className="space-y-3 md:space-y-4 text-base md:text-lg">
                <p ref={addToContentRefs} className="text-gray-600 leading-relaxed">Eagle Eye Tech objective is to serve clients with fast, best, unique, and high-quality services.</p>
                <p ref={addToContentRefs} className="text-gray-600 leading-relaxed">Our innovators boost client's brands and help them become</p>
                <p ref={addToContentRefs} className="text-gray-600 leading-relaxed">instantly recognizable by implementing invariable technology solutions in every</p>
              </div>
              <div ref={addToContentRefs} className="pt-4 flex justify-center lg:justify-start">
               <button 
  onClick={handleNavigate}
  className="px-6 md:px-8 py-3 bg-[#F54A00] hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-200 text-sm md:text-base cursor-pointer"
>
  Discover More
</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section ref={whatSectionRef} className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800 py-12 md:py-16 px-4">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h1 ref={titleRef} className="text-3xl md:text-4xl lg:text-6xl font-extrabold tracking-tight text-[#F54A00] mb-3 md:mb-4 drop-shadow-lg leading-tight">WHAT WE DO</h1>
            <h2 ref={whatSubtitleRef} className="text-lg md:text-xl lg:text-3xl font-semibold text-gray-700 max-w-3xl mx-auto drop-shadow-md mb-4 leading-relaxed">Design Develop Deliver</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">To resolve client's business needs, we architect and create scalable yet high-performing services.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-12 md:mt-20">
            {sections.map((sec, index) => (
              <div key={index} ref={addToSectionRefs} className="bg-white/90 p-6 md:p-8 rounded-3xl shadow-2xl border-2 border-orange-100/50 hover:shadow-orange-200/50 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 text-center w-full">
                <div className="section-icon mb-4 md:mb-6 flex justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-orange-100/80 rounded-full flex items-center justify-center p-2 md:p-3">
                    {sec.icon}
                  </div>
                </div>
                <h3 className="section-heading text-xl md:text-2xl font-extrabold text-[#F54A00] mb-2 md:mb-3 leading-tight">{sec.title}</h3>
                <p className="section-content text-gray-700 text-sm md:text-base leading-snug">{sec.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeAre;