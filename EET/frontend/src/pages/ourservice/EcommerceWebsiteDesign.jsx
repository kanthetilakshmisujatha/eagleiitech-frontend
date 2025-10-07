import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShoppingCart, Store, Package, CreditCard, Users, Zap, Eye, Code, Smartphone, ArrowRight, FileText, Lock, Rocket,Search,Layout,Settings,BarChart } from "lucide-react";
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

const EcommerceWebsiteDesign = () => {
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
            <ShoppingCart className="w-5 h-5 text-orange-600 mr-2" />
            <span className="text-orange-600 font-semibold">eCommerce Excellence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            eCommerce Website Design
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Eagle Eye Tech builds dynamic, user-friendly, and secure eCommerce platforms to drive your business growth.
          </p>
          <button className="group bg-gradient-to-r from-orange-500 to-amber-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center mx-auto">
            Get Started
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Intro Section - Sliding Panel Cards */}
      <section ref={addToSectionRefs} className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/ecom1.jpg"
                alt="eCommerce Design"
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-amber-400/10"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
              <Store className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">eCommerce Design</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
              eCommerce Web Design & Development
            </h2>
            <p className="text-lg text-gray-600 mb-4">The Cutting Edge for Diverse Industry Needs</p>
            <div className="space-y-4">
              {[
                "Impress your customers with a fully-featured eCommerce website designed by our experts, driving growth and engagement.",
                "Our team crafts user-friendly, unique, and personalized eCommerce solutions with essential features for seamless shopping experiences.",
                "Eagle Eye Tech delivers cutting-edge eCommerce solutions globally, leveraging advanced technology for competitive digital platforms."
              ].map((text, idx) => (
                <div
                  key={idx}
                  ref={addToCardRefs}
                  className="group relative bg-white rounded-2xl p-6 overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
                >
                  <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-b from-orange-500 to-amber-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                  <p className="text-lg text-gray-700 font-medium relative z-10">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Hover-Expanding Cards */}
      <section ref={addToSectionRefs} className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/ecom2.webp"
                alt="Benefits"
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-amber-400/10"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
              <Package className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Key Benefits</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
              Enhance Your Growth
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { text: "Dynamic Approach – Agile development for maximum growth.", icon: <Zap className="w-10 h-10 text-white" /> },
                { text: "Mobile-Friendly – Engaging and responsive eCommerce solutions.", icon: <Smartphone className="w-10 h-10 text-white" /> },
                { text: "Appealing UI/UX – Interactive designs that connect with customers.", icon: <Eye className="w-10 h-10 text-white" /> },
                { text: "Rich-Featured – Dynamic features for simplified operations.", icon: <Package className="w-10 h-10 text-white" /> },
                { text: "Productive Tech-Stack – Modern technology for robust architecture.", icon: <Code className="w-10 h-10 text-white" /> },
              ].map((item, idx) => (
                <div
                  key={idx}
                  ref={addToCardRefs}
                  className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-300/20 to-amber-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-4 rounded-xl mb-4 group-hover:animate-pulse">
                      {item.icon}
                    </div>
                    <p className="text-gray-700 font-semibold text-lg text-center">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

{/* Process Section - 3D Flip Cards with Images */}
<section ref={addToSectionRefs} className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-orange-50 to-amber-100">
  <div className="max-w-6xl mx-auto">
    {/* Heading */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center bg-gradient-to-r from-orange-200 to-amber-200 rounded-full px-5 py-2 shadow-md mb-6">
        <Users className="w-5 h-5 text-orange-700 mr-2" />
        <span className="text-orange-700 font-semibold tracking-wide">Why Choose Us</span>
      </div>
      <h2
        ref={processHeadingRef}
        className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent"
      >
        Reasons to Select Us
      </h2>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
        Trusted eCommerce solutions crafted with innovation & precision.
      </p>
    </div>

    {/* Cards Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Decades of Expertise",
          desc: "Our skilled developers deliver top-notch eCommerce solutions tailored to your needs.",
          icon: "👨‍💻",
          img: "/ecom5.webp",
        },
        {
          title: "On-Time Delivery",
          desc: "We ensure timely delivery using efficient development approaches.",
          icon: "⏰",
          img: "/ecom6.png",
        },
        {
          title: "Agile Development",
          desc: "Our agile methodology handles complex requirements with ease.",
          icon: "⚡",
          img: "/ecom7.jpg",
        },
        {
          title: "Support & Maintenance",
          desc: "We offer 24/7 support and maintenance to ensure smooth operations.",
          icon: "🛠️",
          img: "/ecom8.jpg",
        },
        {
          title: "High Performance",
          desc: "Performance-driven solutions optimized for success across all aspects.",
          icon: "🚀",
          img: "/ecom9.jpg",
        },
        {
          title: "NDA Protection",
          desc: "We safeguard your data with strict non-disclosure agreements.",
          icon: "🔒",
          img: "/ecom10.jpg",
        },
      ].map((step, idx) => (
        <div
          key={idx}
          className="group relative bg-white/70 backdrop-blur-lg border border-orange-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 [perspective:1200px]"
        >
          {/* Inner 3D Container */}
          <div className="relative w-full h-72 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            
            {/* Front Side */}
            <div className="absolute inset-0 backface-hidden flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 flex items-center justify-center text-3xl rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white mb-4 shadow-md">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-orange-700 mb-2">{step.title}</h3>
            </div>

            {/* Back Side with Image + Desc */}
            <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)] rounded-3xl bg-white flex flex-col items-center justify-center text-center shadow-lg p-4">
              <img
                src={step.img}
                alt={step.title}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-700">{step.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* Solutions Section - Circular Progress Cards */}
      <section ref={addToSectionRefs} className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/ecom3.webp"
                alt="Solutions"
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-amber-400/10"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
              <CreditCard className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Our Approach</span>
            </div>
            <p className="text-lg text-gray-600 mb-4">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
              Our Unique Approach
            </h2>
            <div className="space-y-6">
              {[
                { text: "Discovery – Market research and business goal alignment.", icon: <Search className="w-8 h-8 text-white" /> },
                { text: "Design – Wireframes for engaging and simple designs.", icon: <Layout className="w-8 h-8 text-white" /> },
                { text: "Development – CMS integration for seamless web pages.", icon: <Code className="w-8 h-8 text-white" /> },
                { text: "Testing – Rigorous evaluation for performance and bugs.", icon: <FileText className="w-8 h-8 text-white" /> },
                { text: "Deployment – Smooth launch on your chosen platform.", icon: <Rocket className="w-8 h-8 text-white" /> },
              ].map((solution, idx) => (
                <div
                  key={idx}
                  ref={addToCardRefs}
                  className="group relative bg-white rounded-full p-6 shadow-lg hover:shadow-xl transition-all duration-500 border-2 border-orange-100"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400/10 to-amber-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="relative w-14 h-14">
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {solution.icon}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full opacity-20 group-hover:opacity-0 transition-opacity duration-300"></div>
                    </div>
                    <p className="text-gray-700 font-semibold text-lg">{solution.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Timeline-Inspired Cards */}
      <section ref={addToSectionRefs} className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
              <Store className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Our Services</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
              eCommerce Design & Development Services
            </h2>
          </div>
          <div className="relative space-y-8">
            {[
              {
                title: "B2C eCommerce Platforms",
                desc: "Dynamic platforms for businesses to engage customers and drive growth with feature-rich solutions.",
                icon: <ShoppingCart className="w-8 h-8 text-white" />,
              },
              {
                title: "B2B Marketplaces",
                desc: "Secure, scalable B2B platforms to deliver products and services, generating recurring revenue.",
                icon: <Package className="w-8 h-8 text-white" />,
              },
              {
                title: "Multi-Vendor Platforms",
                desc: "Powerful eCommerce marketplaces enabling multiple vendors to sell online with advanced technology.",
                icon: <Users className="w-8 h-8 text-white" />,
              },
              {
                title: "CMS Integration",
                desc: "Integrate platforms like Shopify, WooCommerce, and Magento for efficient eCommerce management.",
                icon: <Settings className="w-8 h-8 text-white" />,
              },
              {
                title: "Migration & Upgrade",
                desc: "Transition to modern, secure, and feature-packed eCommerce platforms tailored to your business.",
                icon: <BarChart className="w-8 h-8 text-white" />,
              },
              {
                title: "API Integration",
                desc: "Enhance functionality with seamless API integrations for a robust eCommerce ecosystem.",
                icon: <Lock className="w-8 h-8 text-white" />,
              },
            ].map((srv, idx) => (
              <div
                key={idx}
                ref={addToCardRefs}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 pl-16"
              >
                <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-orange-500 to-amber-500"></div>
                <div className="absolute left-4 top-6 w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                  {srv.icon}
                </div>
                <h3 className="text-2xl font-bold text-orange-700 mb-2 group-hover:text-orange-600 transition-colors">
                  {srv.title}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">{srv.desc}</p>
                {idx < 5 && (
                  <div className="absolute left-5 top-14 h-24 w-1 bg-orange-300/50"></div>
                )}
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
              <Users className="w-5 h-5 text-orange-600 mr-2" />
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
                  className="group flex-shrink-0 w-48 h-24 flex items-center justify-center inline-flex"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-20 w-auto opacity-70 group-hover:opacity-100 group-hover:-rotate-3 transition-all duration-300"
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
        .backface-hidden {
          backface-visibility: hidden;
        }
        [perspective\\:1000px] {
          perspective: 1000px;
        }
        [transform-style\\:preserve-3d] {
          transform-style: preserve-3d;
        }
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        .group-hover\\:animate-pulse {
          animation: pulse 1.5s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default EcommerceWebsiteDesign;