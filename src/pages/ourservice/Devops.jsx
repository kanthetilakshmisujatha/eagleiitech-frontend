import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cloud, ArrowUpRight, Box, Shield, Bell, Lock, ArrowRight, Layers } from "lucide-react";
import cisco from '../../assets/cisco.png';
import verizon from '../../assets/version.png';
import wells from '../../assets/wells.png';
import fidelity from '../../assets/fidelity.png';
import hcl from '../../assets/hcl.png';
import infosys from '../../assets/infosys.png';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Devops = () => {
  const clients = [
    { name: 'Cisco', logo: cisco },
    { name: 'Verizon', logo: verizon },
    { name: 'Wells Fargo', logo: wells },
    { name: 'Fidelity', logo: fidelity },
    { name: 'HCL', logo: hcl },
    { name: 'Infosys', logo: infosys },
  ];

  const services = [
    {
      title: "Cloud Setup & Management",
      desc: "At Eagle Eye Tech, we pride ourselves on helping customers set up and manage their IT assets with flexibility, speed, and security as the driving performance factors. We oversee the organization and administration of public and private cloud environments, providing access to cloud resources whenever necessary. Our cloud setup includes infrastructure, resources, and services to maximize and secure your computing needs.",
      icon: <Cloud className="w-6 h-6 text-white" />,
    },
    {
      title: "Migration",
      desc: "The world of application development as well as ongoing maintenance continues to evolve with new hosting environments. Through the lift-and-shift model, Eagle Eye Tech can move applications to a virtual or cloud environment that closely resembles legacy infrastructure. Beyond cost savings, the cloud enables auto-scaling and pay-per-consumption, helping drive efficiency and revenue.",
      icon: <ArrowUpRight className="w-6 h-6 text-white" />,
    },
    {
      title: "Container Deployments",
      desc: "Containers are vital for keeping applications running and scaling to meet customer needs. They are highly suitable for microservices architectures, where applications are split into smaller, self-sufficient components. Our experts can start, create, replicate, or destroy containers within seconds, enabling your business to meet the fast-paced demands of modern IT with speed and reliability.",
      icon: <Box className="w-6 h-6 text-white" />,
    },
    {
      title: "Disaster Recovery",
      desc: "Virtually all businesses are vulnerable to disasters that affect IT operations. At Eagle Eye Tech, we provide rapid recovery of your critical systems with secure remote access. Cloud disaster recovery eliminates the need for traditional infrastructure and reduces downtime significantly. This ensures faster recovery times at a fraction of the cost, keeping your business resilient and operational.",
      icon: <Shield className="w-6 h-6 text-white" />,
    },
    {
      title: "Alerting & Monitoring Applications",
      desc: "You can’t track application success without real-time performance data. We monitor CPU load, memory utilization, processes, and disk usage, all tied to an alert system that notifies your team of critical events. Real-time reporting allows administrators to proactively resolve issues, ensuring better uptime and performance for your applications and servers.",
      icon: <Bell className="w-6 h-6 text-white" />,
    },
    {
      title: "DevSecOps",
      desc: "We employ DevSecOps strategies to integrate security into every phase of development and operations. By using the ‘security as code’ model, we provide continuous monitoring and automation that ensures your systems remain protected, compliant, and efficient end-to-end.",
      icon: <Lock className="w-6 h-6 text-white" />,
    },
  ];

  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const clientsRef = useRef(null);
  const scrollRef = useRef(null);
  const timelineRefs = useRef([]);

  useEffect(() => {
    // Hero animation
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Services Section animations
    gsap.fromTo(
      titleRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      subtitleRef.current,
      { y: -40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    timelineRefs.current.forEach((el, i) => {
      if (el) {
        gsap.fromTo(
          el,
          { x: i % 2 === 0 ? -100 : 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            delay: i * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    // Clients animation
    gsap.fromTo(
      clientsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
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
        duration: 25,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
        },
      });
    }

    // Cleanup ScrollTrigger
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

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
            <span className="text-orange-600 font-semibold">DevOps Excellence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            DevOps & Cloud Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            With proven IT expertise and technological advancements, Eagle Eye
            Tech delivers comprehensive DevOps strategies and reliable cloud
            services to boost performance and scalability.
          </p>
          <button className="group bg-gradient-to-r from-orange-500 to-amber-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center mx-auto">
            Get Started
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative bg-gradient-to-b from-white via-orange-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
              <Shield className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Our Services</span>
            </div>
            <h1
              ref={titleRef}
              className="text-4xl md:text-5xl font-bold mb-6 text-orange-600"
            >
              Our DevOps Services
            </h1>
            <h2
              ref={subtitleRef}
              className="text-xl md:text-2xl font-semibold text-gray-700 mb-16"
            >
              Automate • Optimize • Secure
            </h2>
          </div>

          <div className="relative border-l-4 border-dotted border-orange-400 ml-10">
            {services.map((service, index) => (
              <div
                key={index}
                ref={addToTimelineRefs}
                className="mb-12 ml-8 relative pl-16"
              >
                <div
                  className="absolute -left-16 top-0 w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg text-white transition-transform duration-300 hover:scale-110"
                >
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {service.desc}
                </p>
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

export default Devops;