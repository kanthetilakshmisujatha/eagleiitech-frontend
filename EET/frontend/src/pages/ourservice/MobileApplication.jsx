import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Zap, Shield, Smartphone, RefreshCw, DollarSign, Globe, Users, Target, Rocket, MessageSquare, Heart, Monitor, ArrowUp } from "lucide-react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const MobileApplication = () => {
  // Refs for animations
  const heroRef = useRef(null);
  const whyChooseRef = useRef(null);
  const appTypesRef = useRef(null);
  const benefitsRef = useRef(null);
  const servicesRef = useRef(null);
  const finalThoughtRef = useRef(null);
  const cardRefs = useRef([]);

  const whyChooseItems = [
    {
      text: "Staff augmentation to enhance your team with high-skill experts.",
      icon: <Users className="w-7 h-7 text-white" />,
    },
    {
      text: "Experience-led & outcome-oriented approach.",
      icon: <Target className="w-7 h-7 text-white" />,
    },
    {
      text: "Proven, rapid, agile & trusted delivery methods.",
      icon: <Rocket className="w-7 h-7 text-white" />,
    },
    {
      text: "Cross-platform solutions for iOS, Android, and Windows.",
      icon: <Smartphone className="w-7 h-7 text-white" />,
    },
    {
      text: "Full transparency, collaboration & communication.",
      icon: <MessageSquare className="w-7 h-7 text-white" />,
    },
    {
      text: "Customer satisfaction is our number one priority.",
      icon: <Heart className="w-7 h-7 text-white" />,
    },
  ];

  const benefits = [
    {
      text: "Immediacy – instantly available on all devices.",
      icon: <Zap className="w-7 h-7 text-white" />,
    },
    {
      text: "Cannot be deleted during their life cycle.",
      icon: <Shield className="w-7 h-7 text-white" />,
    },
    {
      text: "Compatible across multiple platforms.",
      icon: <Smartphone className="w-7 h-7 text-white" />,
    },
    {
      text: "Instant upgradability & easy maintenance.",
      icon: <RefreshCw className="w-7 h-7 text-white" />,
    },
    {
      text: "Lower cost and faster time-to-market.",
      icon: <DollarSign className="w-7 h-7 text-white" />,
    },
    {
      text: "Easily discoverable & shareable online.",
      icon: <Globe className="w-7 h-7 text-white" />,
    },
    {
      text: "Broader reach & larger audience potential.",
      icon: <Users className="w-7 h-7 text-white" />,
    },
  ];

  // GSAP Animations
  useEffect(() => {
    // Store event handlers for card icon hover
    const handleMouseEnter = (card, isTiltCard = false) => {
      gsap.to(card, {
        y: isTiltCard ? -4 : -2,
        scale: isTiltCard ? 1.03 : 1.1,
        rotateX: isTiltCard ? 2 : 0,
        rotateY: isTiltCard ? 2 : 0,
        boxShadow: isTiltCard ? "0 10px 20px rgba(255, 167, 38, 0.2)" : "0 4px 8px rgba(255, 167, 38, 0.3)",
        duration: 0.3,
        ease: "power2.out",
      });
    };
    const handleMouseLeave = (card, isTiltCard = false) => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        rotateX: 0,
        rotateY: 0,
        boxShadow: isTiltCard ? "0 4px 10px rgba(0, 0, 0, 0.1)" : "0 4px 6px rgba(0, 0, 0, 0.1)",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Hero animation
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Why Choose section animation
    gsap.fromTo(
      whyChooseRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: whyChooseRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Native vs Web vs Hybrid section animation
    gsap.fromTo(
      appTypesRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: appTypesRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Benefits section animation
    gsap.fromTo(
      benefitsRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Services section animation
    gsap.fromTo(
      servicesRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Final Thought section animation
    gsap.fromTo(
      finalThoughtRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: finalThoughtRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Card slide-in and hover animations
    const listeners = new Map();
    cardRefs.current.forEach((card, index) => {
      if (card) {
        // Slide-in animation
        gsap.fromTo(
          card,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            delay: index * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
        // Hover animation
        const isTiltCard = card.classList.contains("tilt-card");
        const target = isTiltCard ? card : card.querySelector(".card-icon");
        if (target) {
          const mouseEnter = () => handleMouseEnter(target, isTiltCard);
          const mouseLeave = () => handleMouseLeave(target, isTiltCard);
          card.addEventListener("mouseenter", mouseEnter);
          card.addEventListener("mouseleave", mouseLeave);
          listeners.set(card, { mouseEnter, mouseLeave });
        }
      }
    });

    // Cleanup ScrollTrigger and GSAP animations
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf(cardRefs.current);
      cardRefs.current.forEach((card) => {
        if (card && listeners.has(card)) {
          const { mouseEnter, mouseLeave } = listeners.get(card);
          card.removeEventListener("mouseenter", mouseEnter);
          card.removeEventListener("mouseleave", mouseLeave);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-orange-50 overflow-hidden mt-20">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full bg-gradient-to-r from-orange-400/10 to-amber-400/10 text-white py-16 px-6 md:px-12"
      >
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-orange-200">
            <Monitor className="w-5 h-5 text-orange-500 mr-2" />
            <span className="text-orange-600 font-semibold">Mobile App Excellence</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Mobile Web Applications
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-700">
            EAGLE EYE TECH provides full life cycle services such as design, integration & management. Our professionals prepare everything from concept to continuous support — whether it's customer-focused or enterprise solutions.
          </p>
          <button className="group bg-gradient-to-r from-orange-500 to-amber-600 text-white font-semibold py-3 px-8 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center mx-auto">
            Get Started
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <svg className="absolute bottom-0 left-0 w-full h-16 text-orange-50" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,0 C360,80 1080,80 1440,0 L1440,100 L0,100 Z" />
        </svg>
      </section>

    {/* Why Choose Section - Horizontal Layout Cards */}
<section
  ref={whyChooseRef}
  className="w-full bg-gradient-to-br from-orange-50 to-amber-50 py-16 px-6 md:px-12"
>
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
    {/* Image Side */}
    <div className="w-full md:w-1/2 flex justify-center">
      <div className="relative w-full md:w-[90%] lg:w-[95%]">
        <div className="absolute -inset-4 bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl rotate-3"></div>
        <img
          src="/moblie1.jpg"
          alt="Why Choose Eagle Eye Tech"
          className="relative w-full h-auto md:h-[480px] lg:h-[520px] object-cover rounded-xl shadow-lg z-10 transform hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-400/20 rounded-xl"></div>
      </div>
    </div>

    {/* Content Side */}
    <div className="w-full md:w-1/2">
      <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
        <Monitor className="w-5 h-5 text-orange-600 mr-2" />
        <span className="text-orange-600 font-semibold">Why Choose Us</span>
      </div>
      <h2 className="text-3xl font-semibold text-orange-600 mb-8">
        Why Choose EAGLE EYE TECH?
      </h2>
      <div className="space-y-4">
        {whyChooseItems.map((item, idx) => (
          <div
            key={idx}
            ref={(el) => (cardRefs.current[idx] = el)}
            className="group relative bg-white/95 backdrop-blur-sm rounded-2xl p-4 border-l-4 border-orange-500 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-3 rounded-xl card-icon">
                {item.icon}
              </div>
              <p className="text-gray-700 text-lg font-medium flex-1">
                {item.text}
              </p>
            </div>
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-orange-100/30 to-transparent rounded-2xl"></div>
          </div>
        ))}
      </div>
    </div>
  </div>

  <svg
    className="w-full h-16 text-orange-50"
    viewBox="0 0 1440 100"
    preserveAspectRatio="none"
  >
    <path
      fill="currentColor"
      d="M0,100 C360,20 1080,20 1440,100 L1440,0 L0,0 Z"
    />
  </svg>
</section>


      {/* Native vs Web vs Hybrid - Hexagonal Cards */}
      <section ref={appTypesRef} className="w-full bg-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl -rotate-3"></div>
              <img
                src="/moblie5.png"
                alt="Native vs Web vs Hybrid Apps"
                className="relative w-full max-w-md md:max-w-full object-contain rounded-xl shadow-lg z-10 transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-400/20 rounded-xl"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
              <Smartphone className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">App Types</span>
            </div>
            <h2 className="text-3xl font-semibold text-orange-600 mb-8">
              Native App vs Mobile Web App vs Hybrid App
            </h2>
            <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
              When it comes to the type of mobile app to design, there is no one-size-fits-all solution. Each has its own strengths and trade-offs.
            </p>
            <div className="grid md:grid-cols-3 gap-6 justify-center">
              {[
                {
                  title: "Native",
                  desc: "Built for a specific platform, offering full access to device features but usually more expensive and time-consuming.",
                  icon: <Smartphone className="w-6 h-6 text-orange-600" />,
                },
                {
                  title: "Web",
                  desc: "Faster and less expensive. Works across devices with web-based technologies but limited access to device features.",
                  icon: <Globe className="w-6 h-6 text-orange-600" />,
                },
                {
                  title: "Hybrid",
                  desc: "Combines web and native. Built with web tech and wrapped in a native shell for partial device access.",
                  icon: <Zap className="w-6 h-6 text-orange-600" />,
                },
              ].map((app, idx) => (
                <div
                  key={idx}
                  ref={(el) => (cardRefs.current[whyChooseItems.length + idx] = el)}
                  className="group relative bg-white rounded-3xl p-6 shadow-lg border-2 border-orange-200 hover:border-orange-400 hover:-translate-y-2 transition-all duration-300 max-w-xs mx-auto"
                  style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-amber-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                       style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' }}></div>
                  <div className="relative text-center">
                    <div className="flex justify-center mb-4">
                      <div className="bg-gradient-to-r from-orange-100 to-amber-100 p-4 rounded-full border-2 border-orange-300">
                        {app.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-orange-600 mb-3">
                      {app.title}
                    </h3>
                    <p className="text-gray-700 text-base leading-relaxed">{app.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <svg className="w-full h-16 text-white" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,0 C360,80 1080,80 1440,0 L1440,100 L0,100 Z" />
        </svg>
      </section>

      {/* Benefits Section - Circular Cards */}
      <section ref={benefitsRef} className="w-full bg-gradient-to-br from-orange-50 to-amber-50 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl rotate-3"></div>
              <img
                src="/moblie2.png"
                alt="Benefits of Mobile Web Applications"
                className="relative w-full max-w-md md:max-w-full object-contain rounded-xl shadow-lg z-10 transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-400/20 rounded-xl"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
              <ArrowUp className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Our Benefits</span>
            </div>
            <h2 className="text-3xl font-semibold text-orange-600 mb-8">
              Benefits of Mobile Web Applications
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-center">
              {benefits.map((item, idx) => (
                <div
                  key={idx}
                  ref={(el) => (cardRefs.current[whyChooseItems.length + benefits.length + idx] = el)}
                  className="group relative bg-white rounded-full w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 border-4 border-orange-200 shadow-lg hover:border-orange-400 hover:shadow-xl hover:scale-110 transition-all duration-300 mx-auto"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50/60 to-amber-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                  <div className="relative h-full flex flex-col items-center justify-center p-2 text-center">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-2 rounded-full mb-2 card-icon">
                      <div className="scale-75">
                        {item.icon}
                      </div>
                    </div>
                    <p className="text-gray-700 text-xs sm:text-sm font-medium leading-tight">{item.text}</p>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <svg className="w-full h-16 text-orange-50" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,100 C360,20 1080,20 1440,100 L1440,0 L0,0 Z" />
        </svg>
      </section>

{/* Services Section - Modern Glass Cards */}
<section ref={servicesRef} className="w-full bg-white py-16 px-6 md:px-12">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
    {/* Image */}
    <div className="w-full md:w-1/2 flex justify-center">
      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl -rotate-3"></div>
        <img
          src="/moblie3.jpg"
          alt="Mobile Web Application Services"
          className="relative w-full max-w-md md:max-w-full object-contain rounded-xl shadow-lg z-10 transform hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-400/20 rounded-xl"></div>
      </div>
    </div>

    {/* Cards */}
    <div className="w-full md:w-1/2">
      <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
        <Monitor className="w-5 h-5 text-orange-600 mr-2" />
        <span className="text-orange-600 font-semibold">Our Services</span>
      </div>
      <h2 className="text-3xl font-semibold text-orange-600 mb-8">Our Services</h2>

      <div className="grid sm:grid-cols-2 gap-8">
        {[
          {
            title: "Extensive Planning",
            desc: "Identify needs, explore features, and ensure compatibility with various devices and resolutions.",
            icon: <Target className="w-6 h-6 text-white" />,
          },
          {
            title: "Performance Enhancement",
            desc: "Optimize images, queries, and code. Use CDNs for faster and smoother app performance.",
            icon: <Zap className="w-6 h-6 text-white" />,
          },
          {
            title: "Framework Selection",
            desc: "Leverage responsive frameworks like Bootstrap, Foundation, or lightweight JS frameworks.",
            icon: <Monitor className="w-6 h-6 text-white" />,
          },
          {
            title: "Debugging & Testing",
            desc: "Use Chrome DevTools, Firefox Firebug, or Opera Dragonfly for reliable app debugging.",
            icon: <Shield className="w-6 h-6 text-white" />,
          },
        ].map((srv, idx) => (
          <div
            key={idx}
            ref={(el) =>
              (cardRefs.current[
                whyChooseItems.length + benefits.length + 3 + idx
              ] = el)
            }
            className="group relative rounded-3xl bg-white/10 backdrop-blur-lg border border-orange-200 shadow-lg p-6 hover:shadow-orange-400/30 hover:-translate-y-3 transition-all duration-500"
          >
            {/* Neon icon */}
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 shadow-lg ring-4 ring-white/30 group-hover:scale-110 transition-all duration-500">
              {srv.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-orange-600 mb-2 text-center">
              {srv.title}
            </h3>

            {/* Description */}
            <p className="text-gray-700 text-center text-sm leading-relaxed">
              {srv.desc}
            </p>

            {/* Hover arrow */}
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition">
              <ArrowRight className="w-5 h-5 text-orange-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  <svg
    className="w-full h-16 text-white"
    viewBox="0 0 1440 100"
    preserveAspectRatio="none"
  >
    <path
      fill="currentColor"
      d="M0,0 C360,80 1080,80 1440,0 L1440,100 L0,100 Z"
    />
  </svg>
</section>


      {/* Final Thought */}
      <section ref={finalThoughtRef} className="w-full bg-gradient-to-br from-orange-50 to-amber-50 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl rotate-3"></div>
              <img
                src="/moblie4.jpg"
                alt="Final Thought on Mobile Web Applications"
                className="relative w-full max-w-md md:max-w-full object-contain rounded-xl shadow-lg z-10 transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-400/20 rounded-xl"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
              <Zap className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Final Thought</span>
            </div>
            <div className="group relative bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-3xl shadow-lg p-6 sm:p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <h2 className="text-3xl font-semibold mb-4 relative z-10">Final Thought</h2>
              <p className="text-base sm:text-lg leading-relaxed relative z-10">
                The demand for effective, user-friendly, high-performance mobile applications is skyrocketing. Mobile web apps offer the most efficient, cost-effective approach — delivering speed, reach
              </p>
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500 delay-200"></div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 640px) {
          .card-icon {
            margin-right: 0.5rem;
          }
        }
        .group {
          will-change: transform, box-shadow;
        }
        .hover\\:shadow-3xl:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
};

export default MobileApplication;