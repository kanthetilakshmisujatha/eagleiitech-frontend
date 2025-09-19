import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef([]);
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Animate title on scroll
    gsap.fromTo(titleRef.current, 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Animate subtitle on scroll
    gsap.fromTo(subtitleRef.current, 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Animate cards on scroll with stagger
    gsap.fromTo(cardsRef.current, 
      { 
        y: 100, 
        opacity: 0,
        scale: 0.9
      },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Hover animation for cards
    cardsRef.current.forEach(card => {
      if (!card) return;
      
      const image = card.querySelector('.service-image');
      const circle = card.querySelector('.card-circle');
      const title = card.querySelector('.service-title');
      const button = card.querySelector('.read-more-btn');
      
      card.addEventListener('mouseenter', () => {
        gsap.to(circle, {
          scale: 1.1,
          opacity: 0.7,
          duration: 0.5,
          ease: "power2.out"
        });
        
        gsap.to(image, {
          scale: 1.05,
          duration: 0.5,
          ease: "power2.out"
        });
        
        gsap.to(title, {
          color: '#F54A00',
          duration: 0.3,
          ease: "power2.out"
        });
        
        gsap.to(button, {
          x: 5,
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(circle, {
          scale: 1,
          opacity: 0.5,
          duration: 0.5,
          ease: "power2.out"
        });
        
        gsap.to(image, {
          scale: 1,
          duration: 0.5,
          ease: "power2.out"
        });
        
        gsap.to(title, {
          color: '#1f2937',
          duration: 0.3,
          ease: "power2.out"
        });
        
        gsap.to(button, {
          x: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + services.length) % services.length);
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % services.length);
  };

  const goToService = (index) => {
    setCurrentIndex(index);
  };

  const services = [
    {
      title: "UI/UX Design",
      description: "We always believe in building great visually appealing & easily interacting websites & mobile applications.",
      image: "/uiux.jpg",
      link: "#"
    },
    {
      title: "Application Support",
      description: "Eagle Eye Tech offers reliable & detailed support to both new & existing application projects.",
      image: "/Application.jpg",
      link: "#"
    },
    {
      title: "Data Science",
      description: "Our data science services enable businesses to yield precise & useful information data for business growth.",
      image: "/ds.jpg",
      link: "#"
    },
    {
      title: "Staffing",
      description: "Eagle Eye Tech has been connecting fresh talent with companies from a round the world.",
      image: "/sattf.png",
      link: "#"
    },
    {
      title: "Development Services",
      description: "Eagle Eye Tech has been providing unique technical solutions for over a decade",
      image: " /digital service.png",
      link: "#"
    },
    {
      title: "Digital Marketing",
      description: "Going beyond boundaries.our marketing strategies reach the right audience,leveraging tje ROI of a business.",
      image: "/digital marketing.webp",
      link: "#"
    }
  ];

  // Get the 3 services to display based on current index
  const getVisibleServices = () => {
    const visibleServices = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % services.length;
      visibleServices.push(services[index]);
    }
    return visibleServices;
  };

  return (
    <section ref={sectionRef} className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16 md:py-24 px-4 text-center overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-sm md:text-base font-semibold text-[#F54A00] uppercase tracking-wide mb-3 md:mb-4">
            #OUR SERVICES
          </h2>
          <h1 
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-5 leading-tight"
          >
            We Are Just Getting Started
          </h1>
          <p 
            ref={subtitleRef}
            className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
          >
            We always believe in building great solutions. Explore our services, which we will aid along with our qualified professionals.
          </p>
        </div>
        
        <div ref={containerRef} className="relative overflow-hidden py-8">
          {/* Navigation arrows - Updated with red color */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-md z-20 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 text-[#F54A00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-md z-20 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 text-[#F54A00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {getVisibleServices().map((service, index) => (
              <div
                key={index}
                ref={addToCardsRef}
                className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
              >
                <div className="card-circle absolute w-64 h-64 bg-gradient-to-r from-[#F54A00]/20 to-orange-400/20 rounded-full -top-32 -left-32 opacity-50 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <div className="overflow-hidden rounded-xl mb-5">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="service-image w-full h-48 md:h-52 object-cover rounded-xl transition-transform duration-500"
                    />
                  </div>
                  
                  <h3 className="service-title text-xl md:text-2xl font-bold text-gray-800 mb-3 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm md:text-base mb-5 leading-relaxed min-h-[72px]">
                    {service.description}
                  </p>
                  
                  <div className="flex justify-center">
                    <a 
                      href={service.link} 
                      className="read-more-btn inline-flex items-center text-[#F54A00] font-semibold hover:text-orange-600 transition-all duration-300 group-hover:underline cursor-pointer"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation indicators */}
        <div className="flex justify-center mt-12 space-x-2">
          {services.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToService(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentIndex === idx ? "bg-[#F54A00]" : "bg-gray-300 hover:bg-orange-400"
              }`}
              aria-label={`Go to service ${idx + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;