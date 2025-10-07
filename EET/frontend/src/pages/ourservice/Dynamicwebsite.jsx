import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Layers, Edit, Expand, DollarSign, Search, User, Globe, Monitor, PenTool, Database, Palette, FileText, Cloud, ShoppingBag, Rss, Layout, Filter, TrendingUp, BarChart, Bot, Shield } from "lucide-react";
import cisco from '../../assets/cisco.png';
import verizon from '../../assets/version.png'; // Fixed typo
import wells from '../../assets/wells.png';
import fidelity from '../../assets/fidelity.png';
import hcl from '../../assets/hcl.png';
import infosys from '../../assets/infosys.png';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Dynamicwebsite = () => {
  // Refs for animations
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const featuresRef = useRef(null);
  const servicesRef = useRef(null);
  const benefitsRef = useRef(null);
  const clientsRef = useRef(null);
  const scrollRef = useRef(null);
  const benefitCardRefs = useRef([]);

  const features = [
    {
      title: "Simple To Operate",
      desc: "Manage products & content without special IT skills.",
      icon: <Edit className="w-6 h-6 text-white" />,
    },
    {
      title: "Extremely Scalable",
      desc: "Modular design supporting blogs, e-commerce, events, and more.",
      icon: <Expand className="w-6 h-6 text-white" />,
    },
    {
      title: "Cost-Effective Maintenance",
      desc: "Lower long-term costs despite higher initial investment.",
      icon: <DollarSign className="w-6 h-6 text-white" />,
    },
    {
      title: "Search Engine Supported",
      desc: "Frequent updates help SEO and indexing.",
      icon: <Search className="w-6 h-6 text-white" />,
    },
    {
      title: "Independent Administration",
      desc: "Update and expand your site without developer help.",
      icon: <User className="w-6 h-6 text-white" />,
    },
  ];

  const services = [
    {
      title: "Dynamic Website Solutions",
      desc: "When there is a need for modifications, you may make them on a dynamic website. In contrast to static websites, it shows different material on various pages, keeping the audience engaged. Companies must stay current with new technology, trends, and client expectations. Eagle Eye Tech provides a variety of templates organizations can choose from.",
      img: "/dy2.jpg",
      icon: <Globe className="w-8 h-8 text-white" />,
    },
    {
      title: "Professional Dynamic Websites",
      desc: "If you own a business, you must have a professional web presence. We specialize in creating modern, visually engaging websites that enhance your brand. Unlike static sites, dynamic websites are interactive, polished, and impactful.",
      img: "/dy3.png",
      icon: <Monitor className="w-8 h-8 text-white" />,
    },
    {
      title: "Effortless Editing & Upgrades",
      desc: "Our dynamic website design services are perfect for blog-based or content-heavy platforms. With our simplified CMS, you can easily update, revise, and publish new content. We enable businesses to manage their websites more efficiently.",
      img: "/dy4.jpg",
      icon: <PenTool className="w-8 h-8 text-white" />,
    },
    {
      title: "Database Structure",
      desc: "Dynamic websites often require complex coding, but our experts ensure your site is designed with a well-organized database structure. This makes your site easy to maintain, administer, and keeps it engaging for users.",
      img: "/dy5.jpg",
      icon: <Database className="w-8 h-8 text-white" />,
    },
    {
      title: "Eye-catching Web Designs",
      desc: "Our dynamic websites are visually appealing and customizable with a single click—change themes, colors, fonts, images, and more. This flexibility allows businesses to stay creative and keep their websites fresh and engaging.",
      img: "/dy6.jpg",
      icon: <Palette className="w-8 h-8 text-white" />,
    },
  ];

  const benefits = [
    {
      title: "One-of-a-kind Relevant Content",
      desc: "For each dynamic page.",
      icon: <FileText className="w-7 h-7 text-white" />,
    },
    {
      title: "Dynamic Information",
      desc: "Information produced dynamically by the domain.",
      icon: <Cloud className="w-7 h-7 text-white" />,
    },
    {
      title: "Dynamic Product Listings",
      desc: "Product listings that change based on updates.",
      icon: <ShoppingBag className="w-7 h-7 text-white" />,
    },
    {
      title: "Dynamic News Engine",
      desc: "For real-time updates.",
      icon: <Rss className="w-7 h-7 text-white" />,
    },
    {
      title: "Online Content Management",
      desc: "Modify website content online with content management.",
      icon: <Edit className="w-7 h-7 text-white" />,
    },
    {
      title: "Simplified CMS",
      desc: "Content Management Systems simplify adding and updating content.",
      icon: <Layout className="w-7 h-7 text-white" />,
    },
    {
      title: "Improved User Engagement",
      desc: "Through advanced search and filter options.",
      icon: <Filter className="w-7 h-7 text-white" />,
    },
    {
      title: "Enhanced SEO",
      desc: "Regular content updates improve SEO and search engine ranking.",
      icon: <TrendingUp className="w-7 h-7 text-white" />,
    },
    {
      title: "Ease of Analysis",
      desc: "Ease of analysis and back-end reporting.",
      icon: <BarChart className="w-7 h-7 text-white" />,
    },
    {
      title: "Advanced Feature Integration",
      desc: "Integration of advanced features such as eCommerce, shopping carts, AI-powered chatbots, and more.",
      icon: <Bot className="w-7 h-7 text-white" />,
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
    // Store event handlers to ensure consistent references
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

    // Features animation
    gsap.fromTo(
      featuresRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Services animation
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

    // Benefits animation
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

    // Store listeners for proper cleanup
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

    // Clients animation
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
            <span className="text-orange-600 font-semibold">Dynamic Website Excellence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Dynamic Website
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Accelerate growth with our smart technology solutions. Build engaging, scalable, and manageable dynamic websites with Eagle Eye Tech.
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
              <Layers className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
              Dynamic Website
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Eagle Eye Tech is a well-known website development business focused on Web Development, Ecommerce Development, Custom WordPress Development & JavaScript Development. With changing technology, trends & client preferences, website owners must maintain their sites up to date with a dynamic website. At Eagle Eye Tech, you may choose a website template for your organization from a wide selection. Having a dynamic website implies having the ability to update it as needed. Websites display different material on different pages, as opposed to static web pages. Visitors are never bored since they are continually engaged in this manner.
            </p>
          </div>
          {/* Right Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/dy1.jpg"
                alt="Dynamic Website"
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-400/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
              <Globe className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Our Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
              Designing a Dynamic Website
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Powerful, manageable, and built to scale.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-orange-100 group"
              >
                <div className="p-6 flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-orange-700 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-400 to-amber-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
              <Monitor className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
              Services Eagle Eye Tech Provide
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive solutions to build and manage dynamic websites.
            </p>
          </div>
          <div className="space-y-16">
            {services.map((srv, index) => (
              <div
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

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
              <FileText className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Our Benefits</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
              Benefits of Dynamic Websites
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Unlock the full potential of your online presence with dynamic websites.
            </p>
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
              className="flex space-x-12" // Removed animate-marquee class
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

export default Dynamicwebsite;