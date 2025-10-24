import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle, Monitor, ArrowRight, Server, Shield, Zap, Globe, Code, Database, Cloud } from "lucide-react";
import cisco from '../../assets/cisco.png';
import verizon from '../../assets/version.png';
import wells from '../../assets/wells.png';
import fidelity from '../../assets/fidelity.png';
import hcl from '../../assets/hcl.png';
import infosys from '../../assets/infosys.png';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const WebsiteHosting = () => {
  // Refs for animations
  const heroRef = useRef(null);
  const solutionsRef = useRef(null);
  const crucialRef = useRef(null);
  const approachRef = useRef(null);
  const advantagesRef = useRef(null);
  const hostingTypesRef = useRef(null);
  const servicesRef = useRef(null);
  const clientsRef = useRef(null);
  const cardRefs = useRef([]);
  const scrollRef = useRef(null);

  const clients = [
    { name: 'Cisco', logo: cisco },
    { name: 'Verizon', logo: verizon },
    { name: 'Wells Fargo', logo: wells },
    { name: 'Fidelity', logo: fidelity },
    { name: 'HCL', logo: hcl },
    { name: 'Infosys', logo: infosys },
  ];

  // GSAP Animation for Clients Marquee
  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      // Wait for images to load to ensure correct scrollWidth
      gsap.delayedCall(0.5, () => {
        const totalWidth = scrollElement.scrollWidth / 2;
        gsap.to(scrollElement, {
          x: -totalWidth,
          duration: 20,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth, "px"),
          },
          scrollTrigger: {
            trigger: clientsRef.current,
            start: "top 100%",
            toggleActions: "play pause resume pause",
          },
        });
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf(scrollRef.current);
    };
  }, []);

  // Optional: Uncomment to re-enable GSAP animations for other sections
  
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

    // Section animations
    [solutionsRef, crucialRef, approachRef, advantagesRef, hostingTypesRef, servicesRef].forEach((ref) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref.current,
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
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    // Cleanup for other animations
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf(cardRefs.current);
    };
  }, []);
  

  const addToCardRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
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
            <Monitor className="w-5 h-5 text-orange-600 mr-2" />
            <span className="text-orange-600 font-semibold">Web Excellence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Website Development and Hosting
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Eagle Eye Tech builds modern, mobile-friendly websites and provides secure, reliable, and scalable 24/7 hosting solutions.
          </p>
          <button className="group bg-gradient-to-r from-orange-500 to-amber-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center mx-auto">
            Get Started
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Solutions Section - Vertical Feature Cards */}
      <section ref={solutionsRef} className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/webh1.jpeg"
                alt="Hosting Solutions"
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-amber-400/10"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
              <Monitor className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Hosting Solutions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
              Our Hosting Solutions
            </h2>
            <div className="space-y-3">
              {[
                { text: "Cloud Hosting – remove single point of failure with distributed servers.", icon: <Cloud className="w-6 h-6 text-white" /> },
                { text: "Redundancy & Quality – secure data centers worldwide with maximum uptime.", icon: <Server className="w-6 h-6 text-white" /> },
                { text: "Secure – multi-tiered security with firewalls, load balancers & hardened OS.", icon: <Shield className="w-6 h-6 text-white" /> },
                { text: "Dedicated Expertise – tailored support for your business.", icon: <CheckCircle className="w-6 h-6 text-white" /> },
                { text: "Immediate Account Creation – start building right away.", icon: <Zap className="w-6 h-6 text-white" /> },
                { text: "Simple Administration – easy setup & QuickBooks integration.", icon: <Monitor className="w-6 h-6 text-white" /> },
              ].map((item, idx) => (
                <div key={idx} className="group bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-orange-200/50 hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <p className="text-gray-700 font-medium flex-1">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Crucial Decision - Left Border Cards */}
      <section ref={crucialRef} className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/webh2.jpg"
                alt="Secure Hosting"
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-amber-400/10"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
              <Monitor className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Why It Matters</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
              Is Web Development & Hosting Such a Crucial Decision?
            </h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-orange-100/50 to-transparent border-l-4 border-orange-500 rounded-r-2xl p-6 hover:shadow-lg transition-all duration-300">
                <p className="text-lg text-gray-700 font-medium">
                  Think of hosting as the foundation of your online presence — it must be safe, secure, and easy to manage. Poor hosting can lead to security risks, downtime, and financial loss.
                </p>
              </div>
              <div className="bg-gradient-to-r from-amber-100/50 to-transparent border-l-4 border-amber-500 rounded-r-2xl p-6 hover:shadow-lg transition-all duration-300">
                <p className="text-lg text-gray-700 font-medium">
                  Eagle Eye Tech ensures reliable hosting & development services so you save time, money, and maintain complete control over your website and customer interactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Approach - Number Cards */}
      <section ref={approachRef} className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/webh3.png"
                alt="Development Approach"
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-amber-400/10"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
              <Monitor className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Development Approach</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
              Our Ideal Website Development Approach
            </h2>
            <div className="space-y-4">
              {[
                "Collecting Requirements – understand business goals & user needs.",
                "Development – build with industry best practices & standards.",
                "Deployment – smooth launch with post-development support.",
                "Testing – ensure usability, responsiveness & cross-browser compatibility.",
              ].map((item, idx) => (
                <div key={idx} className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                    {idx + 1}
                  </div>
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section - Floating Icon Cards */}
      <section ref={advantagesRef} className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
              <Monitor className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Advantages</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
              The Advantages of Our Web Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the benefits of choosing Eagle Eye Tech for your web development and hosting needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Compatibility with Multiple Browsers",
              "Engaging UI/UX",
              "Completely Tested",
              "User-Friendly & Standards-Compliant",
              "Improved Site Performance",
              "Excellent Technical Support",
              "Domain Email Addresses",
              "Enhanced Website Security",
              "High Uptime & Reliability",
            ].map((adv, idx) => (
              <div
                key={idx}
                ref={addToCardRefs}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-orange-100 hover:border-orange-300 text-center"
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-300">
                    <CheckCircle className="text-white w-6 h-6" />
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-gray-700 font-semibold text-lg">{adv}</p>
                </div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-400/5 to-amber-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hosting Types - Minimal Line Cards */}
      <section ref={hostingTypesRef} className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/webh4.jpg"
                alt="Hosting Types"
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-amber-400/10"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
              <Monitor className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Hosting Types</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
              Types of Hosting We Offer
            </h2>
            <div className="space-y-3">
              {[
                "Shared Web Hosting",
                "VPS (Virtual Private Server)",
                "Reseller Hosting",
                "Dedicated Servers",
                "Grid Hosting",
              ].map((type, idx) => (
                <div key={idx} className="group bg-white rounded-lg p-6 border-l-4 border-transparent hover:border-orange-500 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-700 font-medium text-lg">{type}</p>
                    <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Alternating Image Cards */}
      <section ref={servicesRef} className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
              <Monitor className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
              Delivering Direct-to-Need Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive services tailored to your web development and hosting requirements.
            </p>
          </div>
          <div className="space-y-8">
            {[
              {
                title: "Ecommerce Development",
                desc: "Our professionals design eCommerce websites that help convert visitors into high-potential consumers. We create an easy-to-navigate website, a hassle-free environment, mailing lists & a specific product setup.",
                icon: <Globe className="w-8 h-8 text-white" />,
              },
              {
                title: "High-End Hosting",
                desc: "Personal websites might benefit from premium hosting. We host websites that use our storage & handle varied visits each month. Furthermore, we provide development tools, quicker websites, limitless databases, GIT access & SSH access.",
                icon: <Server className="w-8 h-8 text-white" />,
              },
              {
                title: "WordPress Design",
                desc: "Many of our clients used our WordPress development services. We design websites that are both user-friendly and efficient. Furthermore, we design websites that are very responsive and attract visitors.",
                icon: <Code className="w-8 h-8 text-white" />,
              },
              {
                title: "Private Hosting",
                desc: "Essentially, it is ideal for novices. We host the required website, give SSD storage & handle visitors each month. In addition, we give developers tools and make websites faster and more efficient all around the world.",
                icon: <Shield className="w-8 h-8 text-white" />,
              },
              {
                title: "WooCommerce",
                desc: "WooCommerce is a well-known framework for building eCommerce websites. We provide a unique service to all of our clients, whether a startup or large corporation. Our WooCommerce services radically improve the eCommerce experience of your consumers.",
                icon: <Database className="w-8 h-8 text-white" />,
              },
              {
                title: "Organizational Hosting",
                desc: "Provide business hosting for businesses of all sizes. Furthermore, we provide development tools, quicker websites, limitless databases, GIT access, SSH access, daily backups, and free CDN.",
                icon: <Cloud className="w-8 h-8 text-white" />,
              },
            ].map((srv, idx) => (
              <div
                key={idx}
                ref={addToCardRefs}
                className="group bg-gradient-to-r from-white to-orange-50/30 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-orange-100"
              >
                <div className="flex items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {srv.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-orange-700 mb-2 group-hover:text-orange-600 transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">{srv.desc}</p>
                  </div>
                  <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-6 h-6 text-orange-500" />
                  </div>
                </div>
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
              <Monitor className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Trusted Partners</span>
            </div>
            <h2 className="text-3xl font-bold text-orange-600 mb-4">Our Clients</h2>
            <p className="text-gray-600 text-lg">Trusted by industry leaders worldwide</p>
          </div>
          <div className="relative overflow-hidden py-8">
            <div ref={scrollRef} className="flex space-x-12 whitespace-nowrap">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 h-24 flex items-center justify-center inline-flex"
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

      <style jsx>{`
        @media (max-width: 640px) {
          .group h3 {
            font-size: 1.25rem !important;
          }
          .group p {
            font-size: 0.875rem !important;
          }
        }
        .group {
          will-change: transform, box-shadow;
        }
        .whitespace-nowrap {
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
};

export default WebsiteHosting;