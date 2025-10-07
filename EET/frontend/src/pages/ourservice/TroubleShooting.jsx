
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap, Shield, ArrowRight, Layers, List, Brain, Settings, Rocket, TrendingUp, Handshake, Search, Wrench } from "lucide-react";
import cisco from '../../assets/cisco.png';
import verizon from '../../assets/version.png';
import wells from '../../assets/wells.png';
import fidelity from '../../assets/fidelity.png';
import hcl from '../../assets/hcl.png';
import infosys from '../../assets/infosys.png';
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const TroubleShooting = () => {
  // Refs for animations
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const stepRefs = useRef([]);
  const serviceRefs = useRef([]);
  const clientsRef = useRef(null);
  const scrollRef = useRef(null);

  const getStepIcon = (index) => {
    const icons = [
      <List className="w-8 h-8 text-white" />,
      <Brain className="w-8 h-8 text-white" />,
      <Settings className="w-8 h-8 text-white" />,
      <Rocket className="w-8 h-8 text-white" />,
      <TrendingUp className="w-8 h-8 text-white" />,
      <Handshake className="w-8 h-8 text-white" />,
      <Search className="w-8 h-8 text-white" />,
      <Wrench className="w-8 h-8 text-white" />,
    ];
    return icons[index] || <Shield className="w-8 h-8 text-white" />;
  };

  const steps = [
    {
      title: "Define the Problem",
      description:
        "Identify and clearly articulate the issue to ensure accurate troubleshooting from the start.",
    },
    {
      title: "Disaggregate",
      description:
        "Break down the problem into smaller, manageable components to analyze effectively.",
    },
    {
      title: "Prioritize",
      description:
        "Focus on the most critical issues first to minimize impact and downtime.",
    },
    {
      title: "Workplan",
      description:
        "Create a structured approach with clear steps and responsibilities to address the issue.",
    },
    {
      title: "Communicate",
      description:
        "Maintain transparent communication with stakeholders throughout the troubleshooting process.",
    },
    {
      title: "Synthesize",
      description:
        "Combine findings from different analyses to form a complete picture of the problem.",
    },
    {
      title: "Analyze",
      description:
        "Examine data, logs, and system behavior to identify root causes and potential solutions.",
    },
    {
      title: "Workplan Execution",
      description:
        "Implement the planned actions, monitor progress, and adjust if needed for effective resolution.",
    },
  ];

  const services = [
    {
      title: "Scalable Solutions",
      desc: "We offer consistent, scalable, and cost-effective troubleshooting services to both large and small organizations. Our flexible services cover both on-site and remote staff support. We assure you that our team resolves the majority of problems within an hour.",
      img: "/tob2.png",
      icon: <Zap className="w-8 h-8 text-white" />,
    },
    {
      title: "Advanced Tools",
      desc: "We have advanced tools that effectively diagnose and troubleshoot issues at the root. From monitoring systems to personal computers, mobile devices, and network infrastructure, our experts can solve even the most complex technical challenges.",
      img: "/trob3.jpg",
      icon: <Shield className="w-8 h-8 text-white" />,
    },
    {
      title: "24/7 Multi-Tier Support",
      desc: "Our dedicated support team is available around the clock with multi-tiered assistance. Whether through helpdesk, on-site visits, or remote sessions, we provide quick resolutions with minimal downtime.",
      img: "/trob4.png",
      icon: <Zap className="w-8 h-8 text-white" />,
    },
    {
      title: "Proactive Monitoring & Maintenance",
      desc: "We don’t just solve problems—we prevent them. Our proactive monitoring and maintenance services identify potential risks before they cause disruptions, ensuring smooth and reliable operations.",
      img: "/trob5.jpg",
      icon: <Shield className="w-8 h-8 text-white" />,
    },
  ];
  const clients = [
    { name: 'Cisco', logo: cisco },
    { name: 'Verizon', logo: verizon },
    { name: 'Wells Fargo', logo: wells },
    { name: 'Fidelity', logo: fidelity },
    { name: 'HCL', logo: hcl },
    { name: 'Infosys', logo: infosys },
  ];

  // GSAP Animations
  useEffect(() => {
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

    // Steps animations
    stepRefs.current.forEach((step, index) => {
      if (step) {
        gsap.fromTo(
          step,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.4,
            delay: index * 0.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    // Services animations
    serviceRefs.current.forEach((service, index) => {
      if (service) {
        gsap.fromTo(
          service,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: service,
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
        duration: 0.6,
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
      gsap.killTweensOf(scrollRef.current);
    };
  }, []);

  const addToStepRefs = (el) => {
    if (el && !stepRefs.current.includes(el)) {
      stepRefs.current.push(el);
    }
  };

  const addToServiceRefs = (el) => {
    if (el && !serviceRefs.current.includes(el)) {
      serviceRefs.current.push(el);
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
            <span className="text-orange-600 font-semibold">Troubleshooting Excellence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Troubleshooting Support
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Resolve issues faster and keep your business running smoothly with Eagle Eye Tech’s Troubleshooting & Support Services. From rapid problem diagnosis to multi-tier assistance and on-site support, we ensure your organization receives timely solutions, minimized downtime, and an exceptional client experience.
          </p>
          <button className="group bg-gradient-to-r from-orange-500 to-amber-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center mx-auto">
            Get Started
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Intro Section */}
      <section ref={introRef} className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Side - Content */}
          <div className="w-full md:w-1/2 text-gray-800">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
              <Zap className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
              Troubleshooting Support
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Troubleshooting is the process of analyzing the cause of a problem and executing the best available solution to resolve it. When systems are inter-connected with many technologies & if anything goes wrong, then it is nearly impossible to identify the reason. To resolve any issues regarding the software and hardware, you need the best troubleshooting support. Eagle Eye Tech specializes in providing excellent troubleshooting solutions for firms.
            </p>
          </div>
          {/* Right Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/trob1.png"
                alt="Troubleshooting Support"
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-400/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
              <Shield className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Our Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
              Our Troubleshooting Process
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our disciplined, step-by-step approach ensures efficient and effective issue resolution with measurable results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative group" ref={addToStepRefs}>
                {/* Step Card */}
                <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-orange-100">
                  <div className="p-6">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {idx + 1}
                    </div>
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                      {getStepIcon(idx)}
                    </div>
                    <h3 className="text-xl font-bold text-orange-700 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-400 to-amber-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
                </div>
                {/* Connector line for desktop (only for first 6 steps) */}
                {idx < 7 && (
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
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
              <Shield className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
              Services We Offer
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From scalable solutions to proactive monitoring, we ensure your troubleshooting needs are met with excellence.
            </p>
          </div>
          <div className="space-y-16">
            {services.map((srv, index) => (
              <div
                ref={addToServiceRefs}
                key={index}
                className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-orange-100 group"
              >
                <div
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } p-8`}
                >
                  <div className="flex-1 relative">
                    <img
                      src={srv.img}
                      alt={srv.title}
                      className="rounded-2xl shadow-lg w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-amber-400/10 rounded-2xl"></div>
                  </div>
                  <div
                    className={`flex-1 mt-6 md:mt-0 ${
                      index % 2 === 0 ? "md:pl-8" : "md:pr-8"
                    }`}
                  >
                    <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                      {srv.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-orange-700 mb-3">
                      {srv.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{srv.desc}</p>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-400 to-amber-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
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
                 <div ref={scrollRef} className="flex space-x-12">
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

export default TroubleShooting;
