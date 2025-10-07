
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cloud, ArrowUpRight, Box, Shield, Bell, Lock, ArrowRight, Layers, DollarSign } from "lucide-react";
import cisco from '../../assets/cisco.png';
import verizon from '../../assets/version.png';
import wells from '../../assets/wells.png';
import fidelity from '../../assets/fidelity.png';
import hcl from '../../assets/hcl.png';
import infosys from '../../assets/infosys.png';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ContractToHire = () => {
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
      title: "Evaluate the performance of the selected candidate by screening the right, qualified candidate",
      desc: "Our rigorous screening process ensures you evaluate candidates based on their skills and fit, guaranteeing top talent for your team.",
      icon: <Cloud className="w-6 h-6 text-white" />,
    },
    {
      title: "Identify your talent needs and feel confident in the hiring process",
      desc: "We work closely with you to understand your staffing requirements, providing a seamless and confident hiring experience.",
      icon: <ArrowUpRight className="w-6 h-6 text-white" />,
    },
    {
      title: "Hire on a contract basis by providing the allotted amount of time to decide on hiring",
      desc: "Test candidates in real-world projects with flexible contract terms, allowing you to make informed permanent hiring decisions.",
      icon: <Box className="w-6 h-6 text-white" />,
    },
    {
      title: "Once hired, access talent with a tweak workforce for your company while remaining employed by Eagle Eye Tech",
      desc: "Transition top performers to your payroll while we manage initial employment, ensuring a smooth integration into your workforce.",
      icon: <Shield className="w-6 h-6 text-white" />,
    },
    {
      title: "Alerting & Monitoring Applications",
      desc: "You can’t track application success without real-time performance data. We monitor CPU load, memory utilization, processes, and disk usage, all tied to an alert system that notifies your team of critical events. Real-time reporting allows administrators to proactively resolve issues, ensuring better uptime and performance for your applications and servers.",
      icon: <Bell className="w-6 h-6 text-white" />,
    },
    {
      title: "We will source the professional Individual to your company's payroll within the time frame",
      desc: "Our efficient sourcing ensures professionals are ready to join your team permanently within your specified timeline.",
      icon: <Lock className="w-6 h-6 text-white" />,
    },
  ];

  const pros = [
    { text: "Avoids risk of unwanted hiring", icon: Shield },
    { text: "It's not only the prospective employee you save money on, but it's also the training cost you can avoid", icon: DollarSign },
    { text: "Other expenses such as pay, benefits, insurance & equipment are also minimized", icon: Layers },
    { text: "Greater workforce adaptability", icon: ArrowUpRight },
  ];

  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const clientsRef = useRef(null);
  const scrollRef = useRef(null);
  const timelineRefs = useRef([]);
  const introRef = useRef(null);
  const prosRef = useRef([]);

  const addToTimelineRefs = (el) => {
    if (el && !timelineRefs.current.includes(el)) {
      timelineRefs.current.push(el);
    }
  };

  const addToProsRefs = (el) => {
    if (el && !prosRef.current.includes(el)) {
      prosRef.current.push(el);
    }
  };

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

    // Intro animation
    gsap.fromTo(
      introRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 85%",
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

    // Timeline items animation
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

    // Pros list animation
    prosRef.current.forEach((el, i) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: i * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-orange-50 overflow-hidden font-sans">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-amber-400/10"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-orange-200">
            <Layers className="w-5 h-5 text-orange-500 mr-2" />
            <span className="text-orange-600 font-semibold">Contract-to-Hire Excellence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Flexible Contract-to-Hire Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Eagle Eye Tech offers contract-to-hire staffing to evaluate top talent before permanent hiring, ensuring a perfect fit for your organization with flexibility and expertise.
          </p>
          <button className="group bg-gradient-to-r from-orange-500 to-amber-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center mx-auto">
            Start Hiring
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Intro Section */}
      <section ref={introRef} className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 text-gray-800">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
              CONTRACT TO HIRE
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Various organizations hire new employees on a contract basis so they can see how well the candidate suits the company’s environment. Eagle Eye Tech technically hires contract-to-hire professional individuals.
            </p>
            <p>
              We allow clients to hire a professional individual on a contract basis with flexible payment terms & after the term period, the client can hire the person into their organization permanently. Many organizations can help you hire employees, but if you want to get unique solutions from the expertise, then Eagle Eye Tech is whom you should turn to.
            </p>
            <h3 className="text-2xl font-bold text-orange-600 mt-6 mb-4">Client & Candidate Satisfaction On Priority</h3>
            <p>
              The contract-to-hire model is a cornerstone of our expertise, benefiting both clients and candidates. If you have the right skills and talents, a contract-to-hire position may be a great fit. Our services give clients the ability to monitor work performance before making a formal offer of employment.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/contracthire1.jpg"
                alt="Contract-to-Hire Staffing"
                className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-700"
                onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Found"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-400/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative bg-gradient-to-b from-white via-orange-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12" ref={titleRef}>
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
              <Shield className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Our Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">
              Contract-to-Hire Process
            </h2>
            <p ref={subtitleRef} className="text-gray-600 text-lg max-w-3xl mx-auto">
              If you’re interested in our staffing solution, we’ll help the process move as easily as possible by focusing on the following aspects.
            </p>
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
                <p className="text-gray-600 text-lg">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">
              Pros Of Using Contract To Hire
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {pros.map((pro, index) => (
                <div
                  key={index}
                  ref={addToProsRefs}
                  className="flex items-start gap-4 border-b border-orange-200 pb-4 hover:bg-orange-50/50 transition-all duration-300"
                >
                  <div className="bg-orange-500 p-3 rounded-full flex-shrink-0">
                    <pro.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">{pro.text}</p>
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

export default ContractToHire;