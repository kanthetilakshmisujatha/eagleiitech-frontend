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
    gsap.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Animation for the subtitle
    gsap.fromTo(
      subtitleRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Animation for the content
    gsap.fromTo(
      contentRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Animation for each point with enhanced effects
    pointRefs.current.forEach((point, index) => {
      if (!point) return;

      const pointNumber = point.querySelector('.point-number');
      const pointContent = point.querySelector('.point-content');

      // Animate the point number with a glowing effect
      gsap.fromTo(
        pointNumber,
        { scale: 0, opacity: 0, boxShadow: '0 0 0 rgba(245, 74, 0, 0)' },
        {
          scale: 1,
          opacity: 1,
          boxShadow: '0 0 15px rgba(245, 74, 0, 0.5)',
          duration: 0.8,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: point,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Animate the content with a slight scale effect
      gsap.fromTo(
        pointContent,
        { x: -50, opacity: 0, scale: 0.95 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: point,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
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
              boxShadow: '0 0 20px rgba(245, 74, 0, 0.7)',
              duration: 0.5,
            });
          } else {
            gsap.to(pointNumber, {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: '#F54A00',
              boxShadow: '0 0 10px rgba(245, 74, 0, 0.3)',
              duration: 0.5,
            });
          }
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const addToPointRefs = (el) => {
    if (el && !pointRefs.current.includes(el)) {
      pointRefs.current.push(el);
    }
  };

  const points = [
    {
      title: 'Scalability But Also Flexibility',
      content:
        'We deploy qualified teams with far more aggregate experience than our competitors.',
    },
    {
      title: 'Depth Of Expertise',
      content:
        'Many of our professionals come from various platforms: we have great expertise and the great subject knowledge required to offer you the best solution possible.',
    },
    {
      title: 'Consultation & Services',
      content:
        'Identifying the root cause, we prefer to dig more by doing recommended pre-research to address the challenges & the services will be tailored to enrich the solution offered.',
    },
    {
      title: 'We Succeed Because You Succeed',
      content:
        'We would go to any extent to ensure our clients success. We are always optimistic about connecting with you.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2
            ref={titleRef}
            className="text-sm md:text-base font-semibold text-[#F54A00] uppercase tracking-widest mb-3"
          >
            # ABOUT US
          </h2>
          <h1
            ref={subtitleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight"
          >
            Why Partner With Us?
          </h1>
          <p
            ref={contentRef}
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Eagle Eye Tech is a vibrant digital transformation firm with a strong ability to access a wide range of enhanced technologies. We believe in long-time partnerships that benefit both organizations, as we believe in win-win situations.
          </p>
        </div>

        <div className="relative">
          {/* Vertical connecting line for desktop */}
          <div className="hidden md:block absolute left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-[#F54A00] to-[#D43F00] opacity-50"></div>

          {/* Vertical connecting line for mobile */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#F54A00] to-[#D43F00] opacity-50"></div>

          <div className="space-y-12 md:space-y-16 pl-12 md:pl-24">
            {points.map((point, index) => (
              <div
                key={index}
                ref={addToPointRefs}
                className="relative flex items-start group"
              >
                {/* Point number */}
                <div className="absolute -left-12 md:-left-20 top-2 flex items-center justify-center">
                  <div className="point-number w-12 h-12 md:w-14 md:h-14 rounded-full bg-[rgba(255,255,255,0.1)] backdrop-blur-md border-2 border-[#F54A00] flex items-center justify-center text-[#F54A00] font-extrabold text-lg md:text-xl z-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(245,74,0,0.6)]">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div
                  className="point-content bg-[rgba(255,255,255,0.1)] backdrop-blur-lg p-6 md:p-8 rounded-2xl shadow-xl border border-[rgba(245,74,0,0.2)] flex-1 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(245,74,0,0.15)] hover:-translate-y-1"
                >
                  <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base md:text-lg font-medium">
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