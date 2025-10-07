
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap, Shield, ArrowRight, Layers } from "lucide-react";
import cisco from '../../assets/cisco.png';
import verizon from '../../assets/version.png';
import wells from '../../assets/wells.png';
import fidelity from '../../assets/fidelity.png';
import hcl from '../../assets/hcl.png';
import infosys from '../../assets/infosys.png';
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const TechnicalSupport = () => {
  // Refs for animations
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const serviceRefs = useRef([]);
  const clientsRef = useRef(null);
  const scrollRef = useRef(null);

  const services = [
    {
      title: "Application Support",
      desc: "For each application, we offer three layers of technical assistance. We identify the problem in the first stage, examine the primary cause in the second, and resolve bugs, improve the service, and update documentation during the third phase. Our skilled experts provide timely service and contact you immediately after the fix.",
      img: "/tech2.jpg",
      icon: <Zap className="w-8 h-8 text-white" />,
    },
    {
      title: "Product Support",
      desc: "We help organizations build stronger client connections and ensure new process initiatives do not overwhelm teams. Our solutions meet product needs efficiently, including application customization, product modification, and improvement requests, delivering optimized services to your customers.",
      img: "/tech3.jpg",
      icon: <Shield className="w-8 h-8 text-white" />,
    },
    {
      title: "Technical Helpdesk",
      desc: "Our technical experts assist with every client query, offering remote assistance, enterprise support, pre- and post-sales support, and more. With prior expertise, we resolve product-related concerns promptly, helping organizations deliver exceptional service and build trust with their customers.",
      img: "/tech4.jpg",
      icon: <Zap className="w-8 h-8 text-white" />,
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
            <span className="text-orange-600 font-semibold">Technical Support Excellence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Technical Support
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Resolve technical issues faster and keep your operations stable with Eagle Eye Tech’s Technical Support & Troubleshooting Services. From quick problem diagnosis to tiered support levels and on-site assistance, we deliver timely resolutions, reduced downtime, and a reliable user experience.
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
              Technical Support
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Eagle Eye Tech enables data sharing across different enterprise applications while reducing data redundancy. We process merging & optimizing the data and workflows between two disparate software applications with efficient processes at a low cost. Integrating applications automate your business processes, which allows them to focus on adding value to other parts of your business. Our core process automation includes ordering and fulfillment, invoicing, collections, expenses, approvals, and more.
            </p>
          </div>
          {/* Right Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/tech1.jpg"
                alt="Technical Support"
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-400/20"></div>
            </div>
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
              Eagle Eye Tech provides clients with the best software technical support services. Among our solutions are
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

export default TechnicalSupport;
