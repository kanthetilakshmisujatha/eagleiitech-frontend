import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Layers, Edit, Expand, DollarSign, Search, User, Globe, Monitor, PenTool, FileText, CheckCircle, Gauge, Smartphone, Shield, Bot, Accessibility, Rocket } from "lucide-react";
import cisco from '../../assets/cisco.png';
import verizon from '../../assets/version.png';
import wells from '../../assets/wells.png';
import fidelity from '../../assets/fidelity.png';
import hcl from '../../assets/hcl.png';
import infosys from '../../assets/infosys.png';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const MobileAppTesting = () => {
  // Refs for animations
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const featuresRef = useRef(null);
  const servicesRef = useRef(null);
  const benefitsRef = useRef(null);
  const clientsRef = useRef(null);
  const scrollRef = useRef(null);
  const benefitCardRefs = useRef([]);
  const addToSectionRefs = useRef(null);
  const addToCardRefs = useRef(null);
  const addToFeatureRefs = useRef([]);

  const features = [
    {
      title: "Analyzing Project Requirements",
      desc: "Our mobile testing team will evaluate your project specifications and look for flaws. Initial project requirement analysis helps to avoid the inaccurate outcome.",
      icon: <Edit className="w-6 h-6 text-orange-600" />,
    },
    {
      title: "Choosing Instruments & Planning the Approach",
      desc: "The number of mobile device models is increasing rapidly, making it hard to test the app on all of them. We choose target devices based on your criteria, data for the target region, and user audience.",
      icon: <Expand className="w-6 h-6 text-orange-600" />,
    },
    {
      title: "Developing & Designing Test Cases",
      desc: "The mobile testing in-house team is in charge of creating test cases.",
      icon: <DollarSign className="w-6 h-6 text-orange-600" />,
    },
    {
      title: "Testing",
      desc: "Our mobile testing in-house team conducts testing and reports the defects to the project manager.",
      icon: <Search className="w-6 h-6 text-orange-600" />,
    },
    {
      title: "Examining Test Results",
      desc: "Throughout the lifecycle of an application, the mobile testing team covers testing findings by extracting insights from the test results.",
      icon: <User className="w-6 h-6 text-orange-600" />,
    },
  ];

  const services = [
    {
      title: "Changing Specifications",
      desc: "Every in-house professional complies with all the algorithms of each social media network to perform the appropriate techniques. We are very versatile and respond quickly to changes in your specifications, working accurately and efficiently to ensure on-time deliveries.",
      icon: <Globe className="w-6 h-6 text-orange-600" />,
      img: "/TESTING2.png",
    },
    {
      title: "Usability & Device Fragmentation",
      desc: "To solve the fragmentation problem, we test apps on devices from our in-house testing devices. We optimize your software work on any mobile platform, operating system. Moreover, we even ensure it runs smoothly on many different devices.",
      img: "/TESTING4.jpg",
      icon: <Monitor className="w-6 h-6 text-orange-600" />,
    },
    {
      title: "Need of domain knowledge?",
      desc: "Our mobile testing professional experts have extensive experience in numerous industrial domains and will quickly uncover industry-specific problems, bottlenecks, and security risks in your app.",
      img: "/TESTING3.jpg",
      icon: <PenTool className="w-6 h-6 text-orange-600" />,
    },
  ];

  const benefits = [
    {
      title: "Testing for Usability",
      desc: "Eagle Eye Tech mobile testing team guarantees that your app has a user-friendly interface and is simple to use for your target audience.",
      icon: <FileText className="w-7 h-7 text-white" />,
    },
    {
      title: "Functional Testing on Mobile Devices",
      desc: "Our mobile testing team assures that your app's backend functionality runs smoothly and satisfies all functional requirements.",
      icon: <CheckCircle className="w-7 h-7 text-white" />,
    },
    {
      title: "Mobile Performance Evaluation",
      desc: "Eagle Eye tech performance test engineers will confirm that your mobile app has no stress, load, scalability, or reliability flaws. Our testing team also undertakes backend performance testing by considering large applications with several users (banking apps, mobile e-stores, multiplayer games & messaging games).",
      icon: <Gauge className="w-7 h-7 text-white" />,
    },
    {
      title: "Testing For Mobile Compatibility",
      desc: "Our testing professionals can verify that your mobile app delivers an excellent user experience and runs properly on all target devices, operating systems, and mobile browsers.",
      icon: <Smartphone className="w-7 h-7 text-white" />,
    },
    {
      title: "Mobile Security Evaluation",
      desc: "Eagle Eye tech cybersecurity engineers undertake penetration testing that simulates a real-world vulnerable threat, security flaws in your app and makes recommendations for mitigating them. Our professional mobile testing team can also assure the security of a complicated mobile application's server-side (backend security testing).",
      icon: <Shield className="w-7 h-7 text-white" />,
    },
    {
      title: "Automated Mobile Testing",
      desc: "Eagle Eye tech professional team can evaluate your apps for compliance with official iOS and Android guidelines, as well as industry-specific restrictions.",
      icon: <Bot className="w-7 h-7 text-white" />,
    },
    {
      title: "Testing For Mobile Accessibility",
      desc: "Eagle Eye Tech mobile testing team extensively examines your app against necessary industry standards, as well as any unique requirements from clients. We guarantee post-testing analysis & pots optimization, can easily access and utilize the application.",
      icon: <Accessibility className="w-7 h-7 text-white" />,
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
    const handleMouseEnter = (icon) => {
      gsap.to(icon, { y: -4, scale: 1.1, duration: 0.3, ease: "power2.out" });
    };
    const handleMouseLeave = (icon) => {
      gsap.to(icon, { y: 0, scale: 1, duration: 0.3, ease: "power2.out" });
    };

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

    gsap.fromTo(
      heroRef.current.querySelector('.hero-image'),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

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

    gsap.fromTo(
      featuresRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      servicesRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

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

    const listeners = new Map();
    benefitCardRefs.current.forEach((card, index) => {
      if (card) {
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

    gsap.fromTo(
      addToSectionRefs.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: addToSectionRefs.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

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
    <div className="min-h-screen bg-gradient-to-br from-white to-orange-50 overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-amber-400/10"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/90 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-orange-300 shadow-sm">
            <Layers className="w-6 h-6 text-orange-500 mr-2" />
            <span className="text-orange-600 font-semibold text-lg">Mobile Testing Excellence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Mobile App Testing Excellence
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed mb-8 max-w-4xl mx-auto">
            Ensure flawless performance with Eagle Eye Tech’s mobile app testing solutions. From functionality to compatibility, we deliver robust, user-focused testing for your apps.
          </p>
          <button className="group bg-gradient-to-r from-orange-500 to-amber-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center mx-auto text-lg group-hover:rotate-2">
            Get Started
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
          </button>
          <div className="mt-12 relative rounded-2xl overflow-hidden shadow-xl hero-image">
          
            <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Intro Section */}
      <section ref={introRef} className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 text-gray-800">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
              Mobile App Testing
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Every application designed for portable devices must go through mobile application testing. Dwelling into deep understanding about testing, in short – testing is processed to check a particular degree of quality before releasing a web or mobile application into the marketplace (app store/play store).
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/TESTING1.jpg"
                alt="Mobile App Testing"
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Found"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-400/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
              <Globe className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">SERVICES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
              Our Distinct & Unique Approach
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl shadow-2xl border border-orange-100"
              >
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-2xl font-bold text-orange-600 ml-3">{feature.title}</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
              Our Solutions Towards Project Challenges
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We collaborate with professional experts by integrating them into the project team and accelerating the project workflow to make informed decisions.
            </p>
          </div>
          {services.map((srv, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-12 py-12 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="w-full md:w-1/2 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={srv.img}
                    alt={srv.title}
                    className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Found"; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-400/20"></div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="bg-white p-8 rounded-3xl shadow-2xl border border-orange-100">
                  <div className="flex items-center mb-4">
                    {srv.icon}
                    <h3 className="text-2xl font-bold text-orange-600 ml-3">{srv.title}</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">{srv.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
              <FileText className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">SERVICES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
              We Deliver Below Services
            </h2>
          </div>
          <div className="relative border-l-4 border-dotted border-orange-400 ml-10">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                ref={(el) => (benefitCardRefs.current[idx] = el)}
                className="mb-12 ml-8 relative pl-16 bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-orange-200 group hover:rotate-1 hover:skew-y-1"
              >
                <div className="absolute -left-16 top-0 w-14 h-14 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white border border-orange-300 shadow-md transition-transform duration-300 benefit-icon group-hover:scale-110">
                  {benefit.icon}
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-orange-800 mb-3 group-hover:underline group-hover:decoration-orange-500">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                </div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section ref={clientsRef} className="py-20 px-4 md:px-8 lg:px-16 bg-white">
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

export default MobileAppTesting;