import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaQuoteLeft, FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const animationTimeline = useRef(null);
  const isPaused = useRef(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsContainerRef.current.children;
      const cardWidth = cards[0].offsetWidth + 32;
      const totalWidth = cardWidth * cards.length / 2; // Only half since we duplicated

      // Set initial position
      gsap.set(cardsContainerRef.current, { x: 0 });

      // Create the animation timeline
      animationTimeline.current = gsap.timeline({
        repeat: -1,
        defaults: {
          ease: "linear",
        },
      });

      // Animate the cards
      animationTimeline.current.to(cardsContainerRef.current, {
        x: -totalWidth,
        duration: 60,
        modifiers: {
          x: gsap.utils.unitize((x) => {
            const xVal = parseFloat(x);
            return (xVal % totalWidth) + (xVal < -totalWidth ? totalWidth : 0);
          }),
        },
      });

      // Individual card animations
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          scale: 0.9,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Pause animation when not in view
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        onEnter: () => !isPaused.current && animationTimeline.current.play(),
        onLeave: () => animationTimeline.current.pause(),
        onEnterBack: () => !isPaused.current && animationTimeline.current.play(),
        onLeaveBack: () => animationTimeline.current.pause(),
      });

      // Control animation based on cursor movement and click
      const handleMouseMove = () => {
        if (animationTimeline.current && animationTimeline.current.isActive()) {
          animationTimeline.current.pause();
        }
      };

      const handleMouseLeave = () => {
        if (animationTimeline.current && !animationTimeline.current.isActive() && !isPaused.current) {
          animationTimeline.current.play();
        }
      };

      const handleCardClick = () => {
        if (animationTimeline.current) {
          isPaused.current = !isPaused.current;
          if (isPaused.current) {
            animationTimeline.current.pause();
          } else {
            animationTimeline.current.play();
          }
        }
      };

      containerRef.current.addEventListener("mousemove", handleMouseMove);
      containerRef.current.addEventListener("mouseleave", handleMouseLeave);
      cardsContainerRef.current.addEventListener("click", handleCardClick);

      // Cleanup event listeners
      return () => {
        if (containerRef.current) {
          containerRef.current.removeEventListener("mousemove", handleMouseMove);
          containerRef.current.removeEventListener("mouseleave", handleMouseLeave);
        }
        if (cardsContainerRef.current) {
          cardsContainerRef.current.removeEventListener("click", handleCardClick);
        }
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const testimonials = [
    {
      text: "Eagle Eye Tech revolutionized our marketing with brilliant strategies—outstanding results!",
      author: "Arjun M.",
      role: "CMO",
      rating: 5,
    },
    {
      text: "Their data insights transformed our decisions—fast, accurate, and supportive!",
      author: "Neha R.",
      role: "Data Lead",
      rating: 4.5,
    },
    {
      text: "Flawless testing ensured a perfect launch—Eagle Eye Tech is a game-changer!",
      author: "Vikram S.",
      role: "Tech Director",
      rating: 5,
    },
    {
      text: "Innovative web solutions that boosted our online presence—highly recommend!",
      author: "Priya K.",
      role: "Web Manager",
      rating: 4.8,
    },
    {
      text: "Exceptional support in digital transformation—exceeded all expectations!",
      author: "Rahul T.",
      role: "CEO",
      rating: 5,
    },
    {
      text: "Their AI strategies gave us a competitive edge—brillient team work!",
      author: "Sneha P.",
      role: "AI Specialist",
      rating: 4.7,
    },
  ];

  // Duplicate testimonials for seamless looping
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const handlePrev = () => {
    if (cardsContainerRef.current) {
      const cards = cardsContainerRef.current.children;
      const cardWidth = cards[0].offsetWidth + 32;
      const totalTestimonials = testimonials.length;
      
      setCurrentIndex(prev => {
        const newIndex = (prev - 1 + totalTestimonials) % totalTestimonials;
        
        // Calculate the target position
        const targetX = -newIndex * cardWidth;
        
        // If we're going from first to last, we need to jump to the duplicated set
        if (prev === 0 && newIndex === totalTestimonials - 1) {
          gsap.fromTo(cardsContainerRef.current, 
            { x: targetX - totalTestimonials * cardWidth },
            { x: targetX, duration: 0.5, ease: "power2.out" }
          );
        } else {
          gsap.to(cardsContainerRef.current, {
            x: targetX,
            duration: 0.5,
            ease: "power2.out",
          });
        }
        
        return newIndex;
      });
    }
  };

  const handleNext = () => {
    if (cardsContainerRef.current) {
      const cards = cardsContainerRef.current.children;
      const cardWidth = cards[0].offsetWidth + 32;
      const totalTestimonials = testimonials.length;
      
      setCurrentIndex(prev => {
        const newIndex = (prev + 1) % totalTestimonials;
        
        // Calculate the target position
        const targetX = -newIndex * cardWidth;
        
        // If we're going from last to first, we need to jump to the beginning
        if (prev === totalTestimonials - 1 && newIndex === 0) {
          gsap.fromTo(cardsContainerRef.current, 
            { x: targetX - totalTestimonials * cardWidth },
            { x: targetX, duration: 0.5, ease: "power2.out" }
          );
        } else {
          gsap.to(cardsContainerRef.current, {
            x: targetX,
            duration: 0.5,
            ease: "power2.out",
          });
        }
        
        return newIndex;
      });
    }
  };

  const goToTestimonial = (index) => {
    if (cardsContainerRef.current) {
      const cards = cardsContainerRef.current.children;
      const cardWidth = cards[0].offsetWidth + 32;
      
      setCurrentIndex(index);
      gsap.to(cardsContainerRef.current, {
        x: -index * cardWidth,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-b from-white to-gray-50 py-20 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-orange-600 relative inline-block">
            What Our Clients Say
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-orange-500 transform scale-x-75"></span>
          </h2>
          <p className="text-lg text-gray-700 mt-6 max-w-3xl mx-auto">
            Explore the success stories of our clients who have transformed their businesses with our expertise.
          </p>
        </div>

        <div ref={containerRef} className="relative overflow-hidden py-8">
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-md z-20"
          >
            <FaArrowLeft className="text-orange-600" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-md z-20"
          >
            <FaArrowRight className="text-orange-600" />
          </button>
          <div
            ref={cardsContainerRef}
            className="flex gap-8 cursor-pointer"
          >
            {duplicatedTestimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-80 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-80 flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-bl-full transition-all duration-500 group-hover:bg-orange-100"></div>

                <div className="absolute -top-1 -left-0.5 text-orange-500 opacity-20">
                  <FaQuoteLeft size={40} />
                </div>

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <p className="text-lg leading-relaxed text-gray-800 mb-6">
                    {testimonial.text}
                  </p>

                  <div>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-4 shadow-md">
                        <span className="text-white font-semibold">
                          {testimonial.author[0]}
                        </span>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{testimonial.author}</p>
                        <p className="text-sm text-orange-500">{testimonial.role}</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={
                            i < Math.floor(testimonial.rating)
                              ? "text-orange-500"
                              : "text-gray-300"
                          }
                        />
                      ))}
                      <span className="ml-2 text-orange-600 font-medium">
                        {testimonial.rating}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-orange-200 transition-all duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation indicators */}
        <div className="flex justify-center mt-12 space-x-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToTestimonial(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentIndex === idx ? "bg-orange-600" : "bg-gray-300 hover:bg-orange-400"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;