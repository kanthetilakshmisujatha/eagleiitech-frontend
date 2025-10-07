import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, CheckCircle, Search, Zap, Monitor, Users, ArrowUp, Shield } from "lucide-react";
import cisco from "../../assets/cisco.png";
import verizon from "../../assets/version.png";
import wells from "../../assets/wells.png";
import fidelity from "../../assets/fidelity.png";
import hcl from "../../assets/hcl.png";
import infosys from "../../assets/infosys.png";
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const MobileOptimized = () => {
  // Refs for animations
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const whyNecessaryRef = useRef(null);
  const approachRef = useRef(null);
  const benefitsRef = useRef(null);
  const servicesRef = useRef(null);
  const clientsRef = useRef(null);
  const scrollRef = useRef(null);
  const benefitCardRefs = useRef([]);

const clients = [
    { name: "Cisco", logo: cisco },
    { name: "Verizon", logo: verizon },
    { name: "Wells Fargo", logo: wells },
    { name: "Fidelity", logo: fidelity },
    { name: "HCL", logo: hcl },
    { name: "Infosys", logo: infosys },
  ];

  const benefits = [
    {
      text: "Less expensive – update once for all devices",
      icon: <CheckCircle className="w-7 h-7 text-white" />,
    },
    {
      text: "Improved search engine visibility",
      icon: <Search className="w-7 h-7 text-white" />,
    },
    {
      text: "Faster loading and better user engagement",
      icon: <Zap className="w-7 h-7 text-white" />,
    },
    {
      text: "Flexible designs for all screen sizes",
      icon: <Monitor className="w-7 h-7 text-white" />,
    },
    {
      text: "Consistent content delivery",
      icon: <Users className="w-7 h-7 text-white" />,
    },
    {
      text: "Lower bounce rates and higher conversions",
      icon: <ArrowUp className="w-7 h-7 text-white" />,
    },
  ];

  // GSAP Animations
  useEffect(() => {
    // Store event handlers for Benefits icon hover
    const handleMouseEnter = (icon) => {
      gsap.to(icon, { y: -4, scale: 1.1, duration: 0.3, ease: "power2.out" });
    };
    const handleMouseLeave = (icon) => {
      gsap.to(icon, { y: 0, scale: 1, duration: 0.3, ease: "power2.out" });
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

    // Intro section animation
    gsap.fromTo(
      introRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Why Necessary section animation
    gsap.fromTo(
      whyNecessaryRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: whyNecessaryRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Unique Approach section animation
    gsap.fromTo(
      approachRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: approachRef.current,
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

    // Benefits cards slide-in and icon hover
    const listeners = new Map();
    benefitCardRefs.current.forEach((card, index) => {
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
        // Icon hover animation
        const icon = card.querySelector(".benefit-icon");
        if (icon) {
          const mouseEnter = () => handleMouseEnter(icon);
          const mouseLeave = () => handleMouseLeave(icon);
          card.addEventListener("mouseenter", mouseEnter);
          card.addEventListener("mouseleave", mouseLeave);
          listeners.set(card, { mouseEnter, mouseLeave });
        }
      }
    });

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

    // Clients section animation
    gsap.fromTo(
      clientsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: clientsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Infinite scroll for client logos
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      const totalWidth = scrollElement.scrollWidth / 2;
      gsap.to(scrollElement, {
        x: -totalWidth,
        duration: 20,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
        },
        scrollTrigger: {
          trigger: clientsRef.current,
          start: "top 80%",
          toggleActions: "play pause resume pause",
        },
      });
    }

    // Cleanup ScrollTrigger and GSAP animations
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf([scrollRef.current, ...benefitCardRefs.current]);
      benefitCardRefs.current.forEach((card) => {
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
            <span className="text-orange-600 font-semibold">Mobile Optimization Excellence</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Mobile Optimized Website
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-700">
            Ensure your website delivers an exceptional experience on all devices with our expert mobile optimization services.
          </p>
          <button className="group bg-gradient-to-r from-orange-500 to-amber-600 text-white font-semibold py-3 px-8 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center mx-auto">
            Get Started
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Introduction Section */}
      <section ref={introRef} className="w-full bg-gradient-to-br from-orange-50 to-amber-50 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl rotate-3"></div>
              <img
                src="/m1.jpg"
                alt="Mobile Optimized Website Illustration"
                className="relative w-full max-w-md md:max-w-full object-contain rounded-xl shadow-lg z-10 transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-400/20 rounded-xl"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-1/2 text-gray-800">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
              <Monitor className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-600">
              Mobile Optimized Website
            </h2>
            <p className="mb-6 leading-relaxed text-lg">
              People increasingly prefer mobile over desktop internet usage. As a result, a mobile-optimized website is essential to ensure the best user experience across devices. Eagle Eye Tech provides mobile-optimized solutions by analyzing current trends and competitors.
            </p>
            <p className="leading-relaxed text-lg">
              Mobile Optimization tailors your site’s content for mobile devices. It adapts smoothly to smaller displays, adjusts text sizes for readability, and ensures fast-loading content for users on the go.
            </p>
          </div>
        </div>
      </section>

      {/* Why Necessary Section */}
      <section ref={whyNecessaryRef} className="w-full bg-gradient-to-br from-orange-50 to-amber-50 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
          {/* Right Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl -rotate-3"></div>
              <img
                src="/m2.jpg"
                alt="Why Mobile Optimization is Necessary"
                className="relative w-full max-w-md md:max-w-full object-contain rounded-xl shadow-lg z-10 transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-400/20 rounded-xl"></div>
            </div>
          </div>

          {/* Left Side - Content */}
          <div className="w-full md:w-1/2 text-gray-800">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
              <Search className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Why It Matters</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-600">
              Is Mobile Optimization Necessary?
            </h2>
            <p className="mb-6 leading-relaxed text-lg">
              Google reports that smartphone searches now outnumber desktop searches. Mobile devices account for over 57% of all web traffic. Email studies show between 15% and 70% of emails are opened on mobile devices depending on the demographic.
            </p>
            <p className="leading-relaxed text-lg">
              Simply put, mobile optimization is no longer optional. Businesses must prioritize delivering fast, user-friendly mobile experiences to remain competitive.
            </p>
          </div>
        </div>
      </section>

      {/* Unique Approach Section */}
      <section ref={approachRef} className="w-full bg-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl rotate-3"></div>
              <img
                src="/m3.jpg"
                alt="Unique Approach to Mobile Optimization"
                className="relative w-full max-w-md md:max-w-full object-contain rounded-xl shadow-lg z-10 transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-400/20 rounded-xl"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-1/2 text-gray-800">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
              <Zap className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Our Approach</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-orange-600">
              Our Unique Mobile Optimization Approach
            </h2>
            <ul className="space-y-4">
              {[
                "Optimize videos for mobile viewing",
                "Enable smooth scrolling instead of multiple page clicks",
                "Ensure high-quality, well-cropped images",
                "Design large, easy-to-tap buttons",
                "Use responsive templates including emails",
                "Shorten paragraphs for better readability",
                "Highlight mobile-specific content like directions",
                "Implement Accelerated Mobile Pages (AMP)",
              ].map((point, index) => (
                <li
                  key={index}
                  className="flex items-start p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg hover:bg-orange-100 transition-colors duration-300 group"
                >
                  <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-1 rounded-full mr-3 mt-1 flex-shrink-0 transition-transform duration-300 benefit-icon group-hover:scale-110">
                    <CheckCircle className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-lg">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="w-full bg-gradient-to-br from-orange-50 to-amber-50 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
          {/* Right Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl -rotate-3"></div>
              <img
                src="/m4.jpg"
                alt="Benefits of Mobile Optimization"
                className="relative w-full max-w-md md:max-w-full object-contain rounded-xl shadow-lg z-10 transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-400/20 rounded-xl"></div>
            </div>
          </div>

          {/* Left Side - Content */}
          <div className="w-full md:w-1/2 text-gray-800">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
              <ArrowUp className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Our Benefits</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-orange-600">
              Benefits of Mobile Optimization
            </h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  ref={(el) => (benefitCardRefs.current[index] = el)}
                  className="flex items-start p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group hover:bg-orange-50"
                >
                  <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-1 rounded-full mr-3 mt-1 flex-shrink-0 border border-orange-300 shadow-md transition-transform duration-300 benefit-icon group-hover:scale-110">
                    {benefit.icon}
                  </div>
                  <span className="text-lg">{benefit.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="w-full bg-gradient-to-br from-orange-50 to-amber-50 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl rotate-3"></div>
              <img
                src="/m5.jpg"
                alt="Mobile Optimization Services"
                className="relative w-full max-w-md md:max-w-full object-contain rounded-xl shadow-lg z-10 transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-400/20 rounded-xl"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-1/2 text-gray-800">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
              <Monitor className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Our Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-600">
              Services We Offer
            </h2>
            <div className="mb-8 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 group hover:bg-orange-50">
              <h3 className="text-2xl font-bold mb-4 text-orange-800 group-hover:underline group-hover:decoration-orange-500">
                Mobile Website Design
              </h3>
              <p className="leading-relaxed text-lg">
                We design fully responsive websites that adapt seamlessly to mobile devices, ensuring user-friendly navigation and consistent performance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 group hover:bg-orange-50">
              <h3 className="text-2xl font-bold mb-4 text-orange-800 group-hover:underline group-hover:decoration-orange-500">
                Mobile SEO Optimization
              </h3>
              <p className="leading-relaxed text-lg">
                Our SEO experts optimize your mobile site for higher search rankings, faster load speeds, and increased visibility on Google, Bing, and other search engines.
              </p>
            </div>
          </div>
        </div>
      </section>

  
      {/* Clients Section */}
      <section ref={clientsRef} className="py-20 bg-white px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-6 py-3 mb-6">
              <Shield className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Trusted Partners</span>
            </div>
            <h2 className="text-3xl font-bold text-orange-600 mb-4">Our Clients</h2>
            <p className="text-gray-600 text-lg">Trusted by industry leaders worldwide</p>
          </div>
          <div className="relative overflow-hidden py-8">
            <div
              ref={scrollRef}
              className="flex space-x-12"
              style={{ display: "flex", whiteSpace: "nowrap" }}
            >
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 h-24 flex items-center justify-center"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-20 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileOptimized;