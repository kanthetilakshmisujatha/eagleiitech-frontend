import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle, Monitor, ArrowRight, Server, Shield, Zap, Globe, Code, Database, Cloud,Eye,Rocket } from "lucide-react";
import cisco from '../../assets/cisco.png';
import verizon from '../../assets/version.png';
import wells from '../../assets/wells.png';
import fidelity from '../../assets/fidelity.png';
import hcl from '../../assets/hcl.png';
import infosys from '../../assets/infosys.png';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Client data
const clients = [
  { name: 'Cisco', logo: cisco },
  { name: 'Verizon', logo: verizon },
  { name: 'Wells Fargo', logo: wells },
  { name: 'Fidelity', logo: fidelity },
  { name: 'HCL', logo: hcl },
  { name: 'Infosys', logo: infosys },
];

const WebDesign = () => {
  const heroRef = useRef(null);
  const sectionRefs = useRef([]);
  const cardRefs = useRef([]);
  const clientsRef = useRef(null);
  const scrollRef = useRef(null);
  const processHeadingRef = useRef(null);

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

    // Section animations
    sectionRefs.current.forEach((section, index) => {
      if (section) {
        gsap.fromTo(
          section,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: index * 0.2,
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
            duration: 0.8,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
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
          start: "top 100%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Infinite scroll for client logos
    const scrollElement = scrollRef.current;
    if (scrollElement) {
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

    // Process heading typewriter effect
    const processHeading = processHeadingRef.current;
    if (processHeading) {
      const text = processHeading.textContent;
      processHeading.textContent = "";
      ScrollTrigger.create({
        trigger: processHeading,
        start: "top 80%",
        onEnter: () => {
          let i = 0;
          const typeWriter = () => {
            if (i < text.length) {
              processHeading.textContent += text.charAt(i);
              i++;
              setTimeout(typeWriter, 50);
            }
          };
          typeWriter();
        },
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf([scrollRef.current, ...cardRefs.current]);
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
            Web Design Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Sadup Softech creates stunning, user-friendly, and SEO-optimized websites tailored to your business needs.
          </p>
          <button className="group bg-gradient-to-r from-orange-500 to-amber-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center mx-auto">
            Get Started
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Intro Section - Left Border Cards */}
      <section ref={addToSectionRefs} className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/webdesign1.jpg"
                alt="Web Design"
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-amber-400/10"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
              <Monitor className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Web Design</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
              Transform Your Online Presence
            </h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-orange-100/50 to-transparent border-l-4 border-orange-500 rounded-r-2xl p-6 hover:shadow-lg transition-all duration-300">
                <p className="text-lg text-gray-700 font-medium">
                  In today’s digital landscape, your website is the bridge between your business and its audience. As digital users outpace traditional customers, businesses are shifting online. Our expert team delivers tailored web design solutions to meet your unique needs.
                </p>
              </div>
              <div className="bg-gradient-to-r from-amber-100/50 to-transparent border-l-4 border-amber-500 rounded-r-2xl p-6 hover:shadow-lg transition-all duration-300">
                <p className="text-lg text-gray-700 font-medium">
                  We craft websites that balance aesthetics, usability, and SEO compliance. Our creative designers ensure your site aligns with your brand’s colors and performs swiftly across devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Vertical Feature Cards */}
      <section ref={addToSectionRefs} className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/webdesign2.jpg"
                alt="Benefits"
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-amber-400/10"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
              <Monitor className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Key Benefits</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
              Our Unique Website Design Process
            </h2>
            <div className="space-y-3">
              {[
                { text: "Strategizing – Gather customer requirements and align with business goals.", icon: <CheckCircle className="w-6 h-6 text-white" /> },
                { text: "Designing – Create wireframes and visually appealing designs.", icon: <Code className="w-6 h-6 text-white" /> },
                { text: "Developing – Build with CMS, robust code, and server integration.", icon: <Server className="w-6 h-6 text-white" /> },
                { text: "Testing – Ensure usability, responsiveness, and cross-browser compatibility.", icon: <Shield className="w-6 h-6 text-white" /> },
                { text: "Maintaining – Monitor and optimize website performance post-launch.", icon: <Zap className="w-6 h-6 text-white" /> },
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

      {/* Process Section - Number Cards */}
      <section ref={addToSectionRefs} className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
              <Monitor className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Why Choose Us</span>
            </div>
            <h2
              ref={processHeadingRef}
              className="text-4xl md:text-5xl font-bold mb-4 text-orange-600"
            >
              Choose Our Web Design Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our web design services are trusted and celebrated in the industry.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Designer Expertise",
                desc: "Our team delivers visually stunning and high-quality websites that captivate your audience.",
              },
              {
                title: "Proven Reputation",
                desc: "We’re known for creating unique, high-quality designs that reflect your brand’s identity.",
              },
              {
                title: "Structured Project Plan",
                desc: "We follow a time-bound plan to ensure your website is launched efficiently and on schedule.",
              },
              {
                title: "Customer-Centric Approach",
                desc: "We prioritize your feedback, making adjustments to deliver a website that meets your vision.",
              },
              {
                title: "Continuous Monitoring",
                desc: "We regularly analyze and optimize your website’s performance to ensure it runs smoothly.",
              },
              {
                title: "Extensive Experience",
                desc: "Our expertise aligns with your business goals, earning trust through proven results.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                ref={addToCardRefs}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-600 mb-2">{step.title}</h3>
                  <p className="text-gray-700">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section - Floating Icon Cards */}
      <section ref={addToSectionRefs} className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/webdesign3.jpg"
                alt="Solutions"
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-amber-400/10"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
              <Monitor className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Our Solutions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
              Benefits of Our Web Design
            </h2>
            <div className="space-y-3">
              {[
                { text: "Effective Layout – Streamlined and visually appealing designs.", icon: <Globe className="w-6 h-6 text-white" /> },
                { text: "Personalization – Websites tailored to your brand and needs.", icon: <Code className="w-6 h-6 text-white" /> },
                { text: "Effective Call-to-Action – Seamless user engagement with clear CTAs.", icon: <Zap className="w-6 h-6 text-white" /> },
                { text: "Easy Information Access – Intuitive navigation for better UX.", icon: <Eye className="w-6 h-6 text-white" /> },
                { text: "Comprehensive Maintenance – Ongoing support to keep your site optimized.", icon: <Server className="w-6 h-6 text-white" /> },
              ].map((solution, idx) => (
                <div
                  key={idx}
                  ref={addToCardRefs}
                  className="group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-orange-100 hover:border-orange-300"
                >
                  <div className="absolute -top-6 left-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-300">
                      {solution.icon}
                    </div>
                  </div>
                  <div className="pt-4">
                    <p className="text-gray-700 font-semibold text-lg">{solution.text}</p>
                  </div>
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-400/5 to-amber-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Alternating Image Cards */}
      <section ref={addToSectionRefs} className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
              <Monitor className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
              Comprehensive Web Design Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Outstanding website designs for startups, entrepreneurs, and businesses.
            </p>
          </div>
          <div className="space-y-8">
            {[
              {
                title: "Fundamental Website",
                desc: "Basic websites built with HTML and single templates, ideal for small businesses like clinics, cafés, and stores with minimal customization needs.",
                icon: <Globe className="w-8 h-8 text-white" />,
              },
              {
                title: "E-Commerce Web Design",
                desc: "We create e-commerce websites with intuitive navigation, mobile-friendliness, product filters, secure payments, and clear call-to-action buttons.",
                icon: <Database className="w-8 h-8 text-white" />,
              },
              {
                title: "Mobile Website Design",
                desc: "Optimized for mobile users, our designs ensure seamless performance and engagement, targeting the growing mobile browsing audience.",
                icon: <Monitor className="w-8 h-8 text-white" />,
              },
              {
                title: "Corporate Website Design",
                desc: "Strengthen your brand with professional websites tailored to your business offerings and corporate identity.",
                icon: <Shield className="w-8 h-8 text-white" />,
              },
              {
                title: "Personalized Website",
                desc: "Custom WordPress websites for portfolios, blogs, and content creators, designed to showcase your unique style and services.",
                icon: <Code className="w-8 h-8 text-white" />,
              },
              {
                title: "Landing Page Design",
                desc: "High-converting landing pages crafted to align with your business goals and drive user action.",
                icon: <Zap className="w-8 h-8 text-white" />,
              },
              {
                title: "Responsive Web Design",
                desc: "Fluid, device-agnostic designs that provide a consistent and engaging user experience across all platforms.",
                icon: <Server className="w-8 h-8 text-white" />,
              },
              {
                title: "Wireframing",
                desc: "Detailed wireframes to visualize your website’s structure and layout before development begins.",
                icon: <Eye className="w-8 h-8 text-white" />,
              },
              {
                title: "Graphic Design",
                desc: "Visually striking graphics to enhance your website’s appeal and align with your brand identity.",
                icon: <Cloud className="w-8 h-8 text-white" />,
              },
              {
                title: "Blog Website Design",
                desc: "Dedicated blog pages to highlight industry-relevant content and engage your audience.",
                icon: <CheckCircle className="w-8 h-8 text-white" />,
              },
              {
                title: "Logo Design",
                desc: "Unique, memorable logos to define your brand, or redesigns to refresh your existing identity.",
                icon: <Rocket className="w-8 h-8 text-white" />,
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

export default WebDesign;