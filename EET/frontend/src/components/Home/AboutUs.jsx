import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const contentRef = useRef(null);
  const pointRefs = useRef([]);

  useEffect(() => {
    // Animation for the main title
    gsap.fromTo(titleRef.current, 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Animation for the subtitle
    gsap.fromTo(subtitleRef.current, 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Animation for the content
    gsap.fromTo(contentRef.current, 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1,
        delay: 0.6,
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Animation for each point with tracking effect
    pointRefs.current.forEach((point, index) => {
      if (!point) return;
      
      const pointNumber = point.querySelector('.point-number');
      const pointContent = point.querySelector('.point-content');
      
      // Create the tracking line animation
      gsap.fromTo(pointNumber,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: point,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
      
      // Animate the content
      gsap.fromTo(pointContent,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.3,
          scrollTrigger: {
            trigger: point,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
      
      // Add a marker animation that follows the scroll
      ScrollTrigger.create({
        trigger: point,
        start: 'top center',
        end: 'bottom center',
        onToggle: (self) => {
          if (self.isActive) {
            gsap.to(pointNumber, {
              backgroundColor: '#F54A00',
              color: 'white',
              duration: 0.5
            });
          } else {
            gsap.to(pointNumber, {
              backgroundColor: '#f3f4f6',
              color: '#F54A00',
              duration: 0.5
            });
          }
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addToPointRefs = (el) => {
    if (el && !pointRefs.current.includes(el)) {
      pointRefs.current.push(el);
    }
  };

  const points = [
    {
      title: "Scalability But Also Flexibility",
      content: "We deploy qualified teams with far more aggregate experience than our competitors."
    },
    {
      title: "Depth Of Expertise",
      content: "Many of our professionals come from various platforms: we have great expertise and the great subject knowledge required to offer you the best solution possible."
    },
    {
      title: "Consultation & Services",
      content: "Identifying the root cause, we prefer to dig more by doing recommended pre-research to address the challenges & the services will be tailored to enrich the solution offered."
    },
    {
      title: "We Succeed Because You Succeed",
      content: "We would go to any extent to ensure our clients success. We are always optimistic about connecting with you."
    }
  ];

  return (
    <section ref={sectionRef} className="min-h-screen bg-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 
            ref={titleRef}
            className="text-sm md:text-base font-semibold text-[#F54A00] uppercase tracking-wide mb-3"
          >
            # ABOUT US
          </h2>
          <h1 
            ref={subtitleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Why Partner With Us?
          </h1>
          <p 
            ref={contentRef}
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Eagle Eye Tech is a vibrant digital transformation firm with a strong ability to access a wide range of enhanced technologies. We believe in long-time partnerships that benefits both organizations, as we believe in win-win situations.
          </p>
        </div>

        <div className="relative">
          {/* Vertical connecting line for desktop */}
          <div className="hidden md:block absolute left-8 md:left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-[#F54A00] to-[#D43F00] opacity-30 ml-1"></div>
          
          {/* Vertical connecting line for mobile */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#F54A00] to-[#D43F00] opacity-30"></div>
          
          <div className="space-y-12 md:space-y-16 pl-10 md:pl-24">
            {points.map((point, index) => (
              <div 
                key={index}
                ref={addToPointRefs}
                className="relative flex items-start"
              >
                {/* Point number */}
                <div className="absolute -left-10 md:-left-18 top-2 flex items-center justify-center">
                  <div className="point-number w-12 h-12 rounded-full bg-gray-100 border-2 border-[#F54A00] flex items-center justify-center text-[#F54A00] font-bold text-lg z-10 shadow-md">
                    {index + 1}
                  </div>
                </div>
                
                {/* Content */}
                <div className="point-content bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex-1 ml-2 md:ml-0">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {point.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

