import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap, Shield, Rocket, Check, ArrowRight, Layers } from "lucide-react";
import cisco from "../../assets/cisco.png";
import verizon from "../../assets/version.png";
import wells from "../../assets/wells.png";
import fidelity from "../../assets/fidelity.png";
import hcl from "../../assets/hcl.png";
import infosys from "../../assets/infosys.png";
import { FaDatabase, FaCogs, FaCloud } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ImplementationServices = () => {
  // Refs for animations
  const heroRef = useRef(null);
  const sectionRefs = useRef([]);
  const cardRefs = useRef([]);
  const timelineRefs = useRef([]);
  const clientsRef = useRef(null);
  const scrollRef = useRef(null);

  // Data for benefits, steps, services, and clients
  const benefits = [
    "Assessment Services",
    "Design Services",
    "Upgrade Services",
    "Migration Services",
    "Professional Services",
    "Applications, Database, and Middleware Services",
    "Infrastructure & Cloud",
    "Hybrid Cloud Platforms",
  ];

  const steps = [
    {
      title: "Requirement Analysis",
      description: "We begin by thoroughly understanding your business needs and objectives.",
      icon: <Zap className="w-6 h-6 text-white" />,
    },
    {
      title: "Solution Design",
      description: "Our experts create a tailored solution architecture for your specific requirements.",
      icon: <Shield className="w-6 h-6 text-white" />,
    },
    {
      title: "Development & Configuration",
      description: "We build and customize the solution according to the approved design specifications.",
      icon: <Rocket className="w-6 h-6 text-white" />,
    },
    {
      title: "Testing & Quality Assurance",
      description: "Rigorous testing ensures everything works perfectly before deployment.",
      icon: <Check className="w-6 h-6 text-white" />,
    },
    {
      title: "Deployment & Integration",
      description: "Seamless implementation with your existing systems and processes.",
      icon: <Zap className="w-6 h-6 text-white" />,
    },
    {
      title: "Training & Support",
      description: "Comprehensive training and ongoing support to ensure long-term success.",
      icon: <Shield className="w-6 h-6 text-white" />,
    },
  ];

  const services = [
    {
      title: "Data Migration",
      desc: "We migrate historical data from legacy systems and archives into our ERP. Our professionals ensure seamless data transfer without spreadsheets or manual work.",
      img: "/i1.jpeg",
      icon: <FaDatabase className="w-6 h-6 text-white" />,
    },
    {
      title: "Employee Training",
      desc: "We provide training for employees, both in-house and remote. Our experts ensure staff adapt quickly to new systems with ongoing training sessions.",
      img: "/i2.jpg",
      icon: <MdSupportAgent className="w-6 h-6 text-white" />,
    },
    {
      title: "Customization",
      desc: "We offer customized solutions and help clients implement tailored practices that meet their unique business requirements.",
      img: "/i3.jpg",
      icon: <FaCogs className="w-6 h-6 text-white" />,
    },
    {
      title: "Installation & Configuration",
      desc: "Our experts install and configure cloud-based services tailored to client requirements, ensuring scalability, security, and smooth deployment.",
      img: "/i4.jpg",
      icon: <FaCloud className="w-6 h-6 text-white" />,
    },
  ];

  const clients = [
    { name: "Cisco", logo: cisco },
    { name: "Verizon", logo: verizon },
    { name: "Wells Fargo", logo: wells },
    { name: "Fidelity", logo: fidelity },
    { name: "HCL", logo: hcl },
    { name: "Infosys", logo: infosys },
  ];

  useEffect(() => {
    // Hero animation
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6, // Reduced from 0.8 for faster animation
        ease: "power2.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Section animations
    sectionRefs.current.forEach((section, index) => {
      if (section) {
        gsap.fromTo(
          section,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5, // Reduced from 0.6 for faster animation
            delay: index * 0.05, // Reduced delay for faster stagger
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    // Card animations
    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.4, // Reduced from 0.5
            delay: index * 0.05,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    // Timeline animations for Services section
    timelineRefs.current.forEach((el, i) => {
      if (el) {
        gsap.fromTo(
          el,
          { x: i % 2 === 0 ? -100 : 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6, // Reduced from 0.8
            ease: "back.out(1.4)",
            delay: i * 0.1,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    // Clients animation (fade-in for section)
    gsap.fromTo(
      clientsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6, // Faster fade-in
        scrollTrigger: {
          trigger: clientsRef.current,
          start: "top 85%",
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
        duration: 20, // Faster than Devops' 25 for a snappier feel
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
        },
        scrollTrigger: {
          trigger: clientsRef.current,
          start: "top 80%",
          toggleActions: "play pause resume pause", // Pause when out of view
        },
      });
    }

    // Cleanup ScrollTrigger and GSAP animations
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf(scrollRef.current);
    };
  }, []);

  const addToSectionRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const addToCardRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  const addToTimelineRefs = (el) => {
    if (el && !timelineRefs.current.includes(el)) {
      timelineRefs.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-orange-50 overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-amber-400/10"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-orange-200">
            <Layers className="w-5 h-5 text-orange-500 mr-2" />
            <span className="text-orange-600 font-semibold">Implementation Excellence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Implementation Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Eagle Eye Tech delivers end-to-end implementation services that ensure
            your software solutions work seamlessly, scale effectively, and deliver
            real results.
          </p>
          <button className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center mx-auto">
            Get Started
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Intro Section */}
      <section ref={addToSectionRefs} className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
                <Zap className="w-5 h-5 text-orange-600 mr-2" />
                <span className="text-orange-600 font-semibold">Why Choose Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
                Why Choose Eagle Eye Tech?
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Implementation services rely on a disciplined, all-inclusive strategy
                from design to testing to yield the best results. Our unique
                combination of application, infrastructure, and data expertise ensures
                smooth deployments that accelerate business growth.
              </p>
              <div className="space-y-4">
                {[
                  "Best-in-class expertise",
                  "Advanced Tools",
                  "Proven Methodology",
                  "Co-delivery Model",
                  "Out-of-the-box Approach",
                  "Best Practices for Scalability & Security",
                ].map((point, index) => (
                  <div
                    key={index}
                    ref={addToCardRefs}
                    className="flex items-start p-6 bg-gradient-to-r from-white to-orange-50 rounded-2xl hover:shadow-lg transition-all duration-300 border-l-4 border-orange-400 group"
                  >
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-2 rounded-full mr-4 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div ref={addToCardRefs} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/impliment1.png"
                  alt="Implementation Services"
                  className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-400/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={addToSectionRefs} className="py-20 bg-gradient-to-br from-orange-50 to-amber-50 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
              <Rocket className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Key Benefits</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
              Benefits of Our Implementation Services
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Unlock the full potential of your business with solutions tailored to
              meet modern challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                ref={addToCardRefs}
                className="flex items-start p-6 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-orange-100 group"
              >
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-2 rounded-full mr-4 mt-1 group-hover:scale-110 transition-transform">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700 font-medium leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section ref={addToSectionRefs} className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
              <Shield className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Our Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our disciplined, step-by-step approach ensures smooth and efficient
              deployments with measurable results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} ref={addToCardRefs} className="relative group">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                  {idx + 1}
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-orange-100 h-full transform group-hover:-translate-y-2">
                  <div className="mb-6 bg-gradient-to-r from-orange-500 to-amber-500 p-3 rounded-2xl w-12 h-12 flex items-center justify-center">{step.icon}</div>
                  <h3 className="font-bold text-gray-800 text-lg mb-3">{step.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{step.description}</p>
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-1 bg-orange-400 group-hover:bg-orange-500 transition-colors duration-300">
                    <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-orange-500 rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={addToSectionRefs} className="flex-1 md:px-12 mt-6 md:mt-0 md:pl-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-orange-600 mb-12 text-center">Implementation Service Offerings</h2>
          <div className="relative">
            <div className="border-l-4 border-orange-200 absolute left-1/2 transform -translate-x-1/2 h-full hidden md:block"></div>
            <div className="space-y-16">
              {services.map((service, index) => (
                <div
                  ref={addToTimelineRefs}
                  key={index}
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="rounded-2xl shadow-xl"
                    />
                  </div>
                  <div
                    className={`flex-1 mt-6 md:mt-0 ${
                      index % 2 === 0 ? "md:pl-16" : "md:pr-16"
                    }`}
                  >
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-3 rounded-2xl w-12 h-12 flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-orange-700 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.desc}</p>
                  </div>
                </div>
              ))}
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

export default ImplementationServices;
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import {
//   FaCloud,
//   FaDatabase,
//   FaUsers,
//   FaCogs,
//   FaChartLine,
//   FaMobileAlt,
// } from "react-icons/fa";
// import { MdOutlineSecurity, MdSupportAgent } from "react-icons/md";
// import { AiOutlineRocket } from "react-icons/ai";
// import cisco from "../../assets/cisco.png";
// import verizon from '../../assets/version.png';
// import wells from "../../assets/wells.png";
// import fidelity from "../../assets/fidelity.png";
// import hcl from "../../assets/hcl.png";
// import infosys from "../../assets/infosys.png";

// gsap.registerPlugin(ScrollTrigger);

// const ImplementationServices = () => {
//   const heroRef = useRef(null);
//   const sectionRefs = useRef([]);
//   const cardRefs = useRef([]);
//   const timelineRefs = useRef([]);
//   const clientsRef = useRef(null);
//   const scrollRef = useRef(null);

//   const benefits = [
//     { title: "Cloud & Infrastructure", icon: <FaCloud className="w-8 h-8 text-white" /> },
//     { title: "Database Management", icon: <FaDatabase className="w-8 h-8 text-white" /> },
//     { title: "User-Centric Solutions", icon: <FaUsers className="w-8 h-8 text-white" /> },
//     { title: "Customization & Scaling", icon: <FaCogs className="w-8 h-8 text-white" /> },
//     { title: "Data Security", icon: <MdOutlineSecurity className="w-8 h-8 text-white" /> },
//     { title: "Analytics & Insights", icon: <FaChartLine className="w-8 h-8 text-white" /> },
//     { title: "Mobile Integration", icon: <FaMobileAlt className="w-8 h-8 text-white" /> },
//     { title: "24/7 Support", icon: <MdSupportAgent className="w-8 h-8 text-white" /> },
//   ];

//   const steps = [
//     {
//       title: "Requirement Analysis",
//       description: "We thoroughly understand your business needs and objectives.",
//       icon: <AiOutlineRocket className="w-6 h-6 text-white" />,
//     },
//     {
//       title: "Solution Design",
//       description: "Tailored solution architecture for your specific requirements.",
//       icon: <FaCogs className="w-6 h-6 text-white" />,
//     },
//     {
//       title: "Development & Configuration",
//       description: "We build and customize the solution according to design specs.",
//       icon: <FaDatabase className="w-6 h-6 text-white" />,
//     },
//     {
//       title: "Testing & QA",
//       description: "Rigorous testing ensures everything works perfectly before deployment.",
//       icon: <MdOutlineSecurity className="w-6 h-6 text-white" />,
//     },
//     {
//       title: "Deployment & Integration",
//       description: "Seamless implementation with your existing systems.",
//       icon: <FaCloud className="w-6 h-6 text-white" />,
//     },
//     {
//       title: "Training & Support",
//       description: "Comprehensive training and ongoing support for long-term success.",
//       icon: <MdSupportAgent className="w-6 h-6 text-white" />,
//     },
//   ];

//   const services = [
//     {
//       title: "Data Migration",
//       desc: "We migrate historical data from legacy systems and archives into our ERP. Our professionals ensure seamless data transfer without spreadsheets or manual work.",
//       img: "/i1.jpeg",
//       icon: <FaDatabase className="w-6 h-6 text-white" />,
//     },
//     {
//       title: "Employee Training",
//       desc: "We provide training for employees, both in-house and remote. Our experts ensure staff adapt quickly to new systems with ongoing training sessions..",
//       img: "/i2.jpg",
//       icon: <MdSupportAgent className="w-6 h-6 text-white" />,
//     },
//     {
//       title: "Customization",
//       desc: "We offer customized solutions and help clients implement tailored practices that meet their unique business requirements.",
//       img: "/i3.jpg",
//       icon: <FaCogs className="w-6 h-6 text-white" />,
//     },
//     {
//       title: "Installation & Configuration",
//       desc: "Our experts install and configure cloud-based services tailored to client requirements, ensuring scalability, security, and smooth deployment.",
//       img: "/i4.jpg",
//       icon: <FaCloud className="w-6 h-6 text-white" />,
//     },
//   ];

//   const clients = [
//     { name: "Cisco", logo: cisco },
//     { name: "Verizon", logo: verizon },
//     { name: "Wells Fargo", logo: wells },
//     { name: "Fidelity", logo: fidelity },
//     { name: "HCL", logo: hcl },
//     { name: "Infosys", logo: infosys },
//   ];

//   useEffect(() => {
//     gsap.fromTo(
//       heroRef.current,
//       { opacity: 0, y: 100 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: heroRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );

//     sectionRefs.current.forEach((section, index) => {
//       if (section) {
//         gsap.fromTo(
//           section,
//           { opacity: 0, y: 80 },
//           {
//             opacity: 1,
//             y: 0,
//             duration: 1,
//             delay: index * 0.2,
//             scrollTrigger: {
//               trigger: section,
//               start: "top 85%",
//               toggleActions: "play none none reverse",
//             },
//           }
//         );
//       }
//     });

//     cardRefs.current.forEach((card, index) => {
//       if (card) {
//         gsap.fromTo(
//           card,
//           { opacity: 0, y: 60, scale: 0.9 },
//           {
//             opacity: 1,
//             y: 0,
//             scale: 1,
//             duration: 0.8,
//             delay: index * 0.1,
//             scrollTrigger: {
//               trigger: card,
//               start: "top 90%",
//               toggleActions: "play none none reverse",
//             },
//           }
//         );
//       }
//     });

//     timelineRefs.current.forEach((el, i) => {
//       if (el) {
//         gsap.fromTo(
//           el,
//           { x: i % 2 === 0 ? -100 : 100, opacity: 0 },
//           {
//             x: 0,
//             opacity: 1,
//             duration: 1.2,
//             ease: "back.out(1.7)",
//             delay: i * 0.2,
//             scrollTrigger: {
//               trigger: el,
//               start: "top 85%",
//               toggleActions: "play none none reverse",
//             },
//           }
//         );
//       }
//     });

//     if (scrollRef.current) {
//       gsap.to(scrollRef.current, {
//         xPercent: -50,
//         repeat: -1,
//         duration: 20,
//         ease: "linear",
//       });
//     }

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   const addToSectionRefs = (el) => {
//     if (el && !sectionRefs.current.includes(el)) sectionRefs.current.push(el);
//   };
//   const addToCardRefs = (el) => {
//     if (el && !cardRefs.current.includes(el)) cardRefs.current.push(el);
//   };
//   const addToTimelineRefs = (el) => {
//     if (el && !timelineRefs.current.includes(el)) timelineRefs.current.push(el);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-white to-orange-50 overflow-hidden">
//       {/* Hero Section */}
//       <section
//         ref={heroRef}
//         className="relative min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16"
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-amber-400/10"></div>
//         <div className="relative max-w-6xl mx-auto text-center">
//           <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
//             Implementation Services
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
//             Eagle Eye Tech delivers end-to-end implementation services that ensure your software
//             solutions work seamlessly and deliver real results.
//           </p>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section ref={addToSectionRefs} className="py-20 bg-white px-4 md:px-8 lg:px-16">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold text-orange-600 mb-8 text-center">Our Implementation Services Cover</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {benefits.map((benefit, index) => (
//               <div
//                 ref={addToCardRefs}
//                 key={index}
//                 className="bg-gradient-to-br from-orange-500 to-amber-500 text-white p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-500"
//               >
//                 <div className="mb-4 flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl">
//                   {benefit.icon}
//                 </div>
//                 <h3 className="text-lg font-semibold">{benefit.title}</h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Steps Section */}
//       <section ref={addToSectionRefs} className="py-20 bg-orange-50 px-4 md:px-8 lg:px-16">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold text-orange-600 mb-12 text-center">Our 6-Step Implementation Process</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {steps.map((step, index) => (
//               <div
//                 ref={addToCardRefs}
//                 key={index}
//                 className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-orange-100"
//               >
//                 <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-3 rounded-2xl w-12 h-12 flex items-center justify-center mb-4">
//                   {step.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-orange-700 mb-3">{step.title}</h3>
//                 <p className="text-gray-600">{step.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section ref={addToSectionRefs} className="flex-1 md:px-12 mt-6 md:mt-0 md:pl-16">

//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold text-orange-600 mb-12 text-center">Implementation Service Offerings</h2>
//           <div className="relative">
//             <div className="border-l-4 border-orange-200 absolute left-1/2 transform -translate-x-1/2 h-full hidden md:block"></div>
//             <div className="space-y-16">
//              {services.map((service, index) => (
//   <div
//     ref={addToTimelineRefs}
//     key={index}
//     className={`flex flex-col md:flex-row items-center ${
//       index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
//     }`}
//   >
//     <div className="flex-1">
//       <img
//         src={service.img}
//         alt={service.title}
//         className="rounded-2xl shadow-xl"
//       />
//     </div>
//     <div
//       className={`flex-1 mt-6 md:mt-0 ${
//         index % 2 === 0 ? "md:pl-16" : "md:pr-16"
//       }`}
//     >
//       <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-3 rounded-2xl w-12 h-12 flex items-center justify-center mb-4">
//         {service.icon}
//       </div>
//       <h3 className="text-2xl font-bold text-orange-700 mb-3">
//         {service.title}
//       </h3>
//       <p className="text-gray-600">{service.desc}</p>
//     </div>
//   </div>
// ))}

//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Clients Section */}
//       <section ref={clientsRef} className="py-20 bg-white px-4 md:px-8 lg:px-16">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-3xl font-bold text-orange-600 mb-8">Our Clients</h2>
//           <div className="relative overflow-hidden py-8">
//             <div ref={scrollRef} className="flex space-x-12 w-max">
//               {[...clients, ...clients].map((client, index) => (
//                 <div key={index} className="flex-shrink-0 w-48 h-24 flex items-center justify-center">
//                   <img src={client.logo} alt={client.name} className="max-h-20 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ImplementationServices;
