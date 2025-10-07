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

const PostImplementation = () => {
  // Refs for animations
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const serviceRefs = useRef([]);
  const clientsRef = useRef(null);
  const scrollRef = useRef(null);
 const clients = [
    { name: "Cisco", logo: cisco },
    { name: "Verizon", logo: verizon },
    { name: "Wells Fargo", logo: wells },
    { name: "Fidelity", logo: fidelity },
    { name: "HCL", logo: hcl },
    { name: "Infosys", logo: infosys },
  ];
  const services = [
    {
      title: "Customer Support",
      desc: "Our service provides clients with rapid troubleshooting to satisfy them and deliver solutions on time. Our support is multi-tiered and includes help services, on-site support, and an exceptional client experience.",
      img: "/p2.jpg",
      icon: <Zap className="w-6 h-6 text-white" />,
    },
    {
      title: "Managed & Advisory Services",
      desc: "We provide consultancy services to companies, IT officers, and operational officers to accelerate output via process optimization. To bring additional benefits to our clients, we also deliver hosting and business process services.",
      img: "/p3.jpg",
      icon: <Shield className="w-6 h-6 text-white" />,
    },
    {
      title: "High & Easy Recruitment Process",
      desc: "We handle staffing thoroughly, and when it comes to hiring, we continuously engage in seeking the finest individuals to meet organizational needs efficiently.",
      img: "/p4.jpg",
      icon: <Zap className="w-6 h-6 text-white" />,
    },
    {
      title: "Performance Monitoring & Optimization",
      desc: "We continuously track system performance, identify bottlenecks, and implement improvements to ensure maximum efficiency, scalability, and reliability of your solutions after go-live.",
      img: "/p5.jpg",
      icon: <Shield className="w-6 h-6 text-white" />,
    },
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
          { x: index % 2 === 0 ? -100 : 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            delay: index * 0.1,
            ease: "back.out(1.4)",
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
            <span className="text-orange-600 font-semibold">Post-Implementation Excellence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Post Implementation Support
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Unlock the full potential of your technology investments with Eagle Eye Tech’s Post-Implementation Services. From system optimization to ongoing support and training, we empower your organization to achieve scalability, efficiency, and long-term success with reliable, high-performance solutions.
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
              Post Implementation Support
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Post-implementation is the procedure that begins right after project accomplishment. The purpose of post-implementation is to determine whether project outcomes meet the requirement or not. Following the completion of the project, we perform a Post Implementation evaluation. We checklist the tasks tailored to assess the project objectives were accomplished or not, how successfully we have managed the project, knowledge gained for the future, and actions needed to maximize the advantages from project outputs.
            </p>
          </div>
          {/* Right Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/p1.jpg"
                alt="Post Implementation Support"
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
              Eagle Eye Tech provides clients with the best post-software implementation services. Among our solutions are
            </p>
          </div>
          <div className="relative">
            <div className="border-l-4 border-orange-200 absolute left-1/2 transform -translate-x-1/2 h-full hidden md:block"></div>
            <div className="space-y-16">
              {services.map((srv, index) => (
                <div
                  ref={addToServiceRefs}
                  key={index}
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1">
                    <img
                      src={srv.img}
                      alt={srv.title}
                      className="rounded-2xl shadow-xl w-full h-64 object-cover"
                    />
                  </div>
                  <div
                    className={`flex-1 mt-6 md:mt-0 ${
                      index % 2 === 0 ? "md:pl-16" : "md:pr-16"
                    }`}
                  >
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-3 rounded-2xl w-12 h-12 flex items-center justify-center mb-4">
                      {srv.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-orange-700 mb-3">
                      {srv.title}
                    </h3>
                    <p className="text-gray-600">{srv.desc}</p>
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

export default PostImplementation;