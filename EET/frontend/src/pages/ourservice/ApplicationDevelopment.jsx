import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Zap, Shield, Layers, Rocket, Eye, ArrowRight } from "lucide-react";
import cisco from "../../assets/cisco.png";
import verizon from "../../assets/version.png";
import wells from "../../assets/wells.png";
import fidelity from "../../assets/fidelity.png";
import hcl from "../../assets/hcl.png";
import infosys from "../../assets/infosys.png";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Client data
const clients = [
  { name: "Cisco", logo: cisco },
  { name: "Verizon", logo: verizon },
  { name: "Wells Fargo", logo: wells },
  { name: "Fidelity", logo: fidelity },
  { name: "HCL", logo: hcl },
  { name: "Infosys", logo: infosys },
];

// Placeholder images (replace with local assets if needed)
const AppDevelopmentImg = "https://images.unsplash.com/photo-1581276879432-15e50529f34b?w=500";
const PlanningImg = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500";
const TestingImg = "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500";
const MaintenanceImg = "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=500";
const BenefitsImg = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500";
const WebMobileImg = "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500";
const ServicesImg = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500";

const ApplicationDevelopment = () => {
  const heroRef = useRef(null);
  const sectionRefs = useRef([]);
  const cardRefs = useRef([]);
  const featureRefs = useRef([]);
  const clientsRef = useRef(null);
  const scrollRef = useRef(null);
  const strategicHeadingRef = useRef(null);

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

    // Feature animations with floating effect
    featureRefs.current.forEach((feature, index) => {
      if (feature) {
        gsap.fromTo(
          feature,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            delay: index * 0.15,
            scrollTrigger: {
              trigger: feature,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
        // Add floating animation
        gsap.to(feature, {
          y: 10,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }
    });

    // Strategic heading typewriter effect
    const strategicHeading = strategicHeadingRef.current;
    if (strategicHeading) {
      const text = strategicHeading.textContent;
      strategicHeading.textContent = "";
      ScrollTrigger.create({
        trigger: strategicHeading,
        start: "top 80%",
        onEnter: () => {
          let i = 0;
          const typeWriter = () => {
            if (i < text.length) {
              strategicHeading.textContent += text.charAt(i);
              i++;
              setTimeout(typeWriter, 50);
            }
          };
          typeWriter();
        },
      });
    }

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

  const addToFeatureRefs = (el) => {
    if (el && !featureRefs.current.includes(el)) {
      featureRefs.current.push(el);
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
            <span className="text-orange-600 font-semibold">Development Excellence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            APPLICATION DEVELOPMENT
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Eagle Eye Tech professionals deliver custom web and mobile applications, from requirement analysis to deployment, ensuring high-quality solutions.
          </p>
          <button className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center mx-auto">
            Get Started
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Development Section */}
      <section ref={addToSectionRefs} className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
                <Zap className="w-5 h-5 text-orange-600 mr-2" />
                <span className="text-orange-600 font-semibold">App Development</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
                One-Stop Web & Mobile App Development
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  We dedicate time and resources to developing innovative web and mobile applications that drive organizational success.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our custom development follows standard-based concepts, ensuring high-quality, responsive solutions tailored to your needs.
                </p>
                <div
                  ref={addToCardRefs}
                  className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl p-8 border-l-4 border-orange-400 shadow-xl"
                >
                  <h3 className="text-2xl font-bold mb-4 text-orange-600 flex items-center">
                    <Rocket className="w-6 h-6 mr-2" />
                    Development Process
                  </h3>
                  <p className="text-lg text-gray-700">
                    From requirement analysis to deployment, our comprehensive process ensures your application exceeds expectations.
                  </p>
                </div>
              </div>
            </div>
            <div ref={addToCardRefs} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={AppDevelopmentImg}
                  alt="Application Development"
                  className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {["Analysis", "Design", "Development"].map((item, index) => (
              <div
                key={index}
                ref={addToCardRefs}
                className="bg-white p-6 rounded-3xl shadow-xl border-l-4 border-orange-600 transform transition-all duration-500 hover:scale-105"
              >
                <h3 className="text-xl font-bold text-orange-600 mb-4">{item}</h3>
                <p className="text-gray-600">
                  Our {item.toLowerCase()} process ensures your application meets all requirements and delivers exceptional performance.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={addToSectionRefs} className="py-20 bg-gradient-to-br from-orange-50 to-amber-50 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
                <Shield className="w-5 h-5 text-orange-600 mr-2" />
                <span className="text-orange-600 font-semibold">Our Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
                Application & Web Development Services
              </h2>
              <div className="space-y-8">
                <div
                  ref={addToCardRefs}
                  className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-orange-100"
                >
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 rounded-2xl w-14 h-14 flex items-center justify-center mb-6">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-orange-600">
                    Custom Web & Mobile Development
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We deliver dynamic, responsive applications with wireframing, prototyping, and optimization for superior visibility.
                  </p>
                </div>
                <div
                  ref={addToCardRefs}
                  className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-orange-100"
                >
                  <div className="bg-gradient-to-r from-orange-400 to-amber-500 p-4 rounded-2xl w-14 h-14 flex items-center justify-center mb-6">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-orange-600">
                    E-Commerce & CMS Solutions
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our team builds easy-to-use CMS and eCommerce platforms to enhance your business operations.
                  </p>
                </div>
              </div>
            </div>
       
                  <div ref={addToCardRefs} >
         
               <img
  src={ServicesImg}
  alt="Solutions"
  className="w-full h-96 mt-50 rounded-lg"
/>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            <div
              ref={addToCardRefs}
              className="bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-3xl shadow-xl"
            >
              <h3 className="text-2xl font-bold text-orange-600 mb-6">Custom App Development</h3>
              <p className="text-gray-700 mb-6">
                We deliver dynamic, responsive, and well-integrated custom applications to build better visibility over web platforms.
              </p>
              <div className="space-y-3">
                {[
                  "Customer & organization research",
                  "Design wireframing & prototyping",
                  "Architecture Planning",
                  "Backend Coding & Frontend",
                  "Optimization",
                  "Maintenance",
                  "DevOps",
                ].map((item, index) => (
                  <div key={index} ref={addToFeatureRefs} className="flex items-start">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-1 rounded-full mr-3 flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div
              ref={addToCardRefs}
              className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-3xl shadow-xl"
            >
              <h3 className="text-2xl font-bold text-orange-600 mb-6">Mobile Application Development</h3>
              <p className="text-gray-700 mb-6">
                Our developers design and deliver high-quality mobile applications that work seamlessly on all devices.
              </p>
              <div className="space-y-3">
                {[
                  "Architecture planning",
                  "Business analysis",
                  "UI/UX design and prototyping",
                  "Development",
                  "Testing and QA",
                  "Publication",
                  "Further Tech support",
                ].map((item, index) => (
                  <div key={index} ref={addToFeatureRefs} className="flex items-start">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-1 rounded-full mr-3 flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Planning Section */}
      <section ref={addToSectionRefs} className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
                <Shield className="w-5 h-5 text-orange-600 mr-2" />
                <span className="text-orange-600 font-semibold">Strategic Planning</span>
              </div>
              <h2
                ref={strategicHeadingRef}
                className="text-4xl md:text-5xl font-bold mb-6 text-orange-600"
              >
                Eagle Eye Tech Strategic Planning Analysis
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                By gathering business requirements and performing in-depth analysis, we define the scope of your application for optimal development.
              </p>
            </div>
            
            <div ref={addToCardRefs} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={PlanningImg}
                  alt="Strategic Planning"
                  className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "Development",
                img: AppDevelopmentImg,
                desc: "We design and develop MVPs quickly, ensuring cost-effective and scalable solutions.",
              },
              {
                title: "Testing",
                img: TestingImg,
                desc: "End-to-end testing ensures your application meets all requirements and performs reliably.",
              },
              {
                title: "Maintenance",
                img: MaintenanceImg,
                desc: "Ongoing maintenance ensures your application remains robust and up-to-date.",
              },
            ].map((item, index) => (
              <div
                key={index}
                ref={addToCardRefs}
                className="bg-white p-6 rounded-3xl shadow-xl border-t-4 border-orange-600"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-t-xl -mt-6 -mx-6 mb-4"
                />
                <h3 className="text-xl font-bold text-orange-600 mb-4">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={addToSectionRefs} className="py-20 bg-gradient-to-br from-orange-50 to-amber-50 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div ref={addToCardRefs} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={BenefitsImg}
                  alt="Benefits"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-400/20"></div>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
                <Rocket className="w-5 h-5 text-orange-600 mr-2" />
                <span className="text-orange-600 font-semibold">Key Benefits</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-orange-600">
                Benefits of Our Development Services
              </h2>
              <div className="space-y-4">
                {[
                  "Better engagement through fast & responsive solutions",
                  "Custom monitoring with transparent project control",
                  "Fully tailored solutions by complete understanding",
                  "New revenue opportunities",
                  "Reduced development costs",
                  "Scalable & reliable infrastructure",
                ].map((benefit, index) => (
                  <div
                    key={index}
                    ref={addToFeatureRefs}
                    className="flex items-start p-6 bg-gradient-to-r from-white to-orange-50 rounded-2xl hover:shadow-lg transition-all duration-300 border-l-4 border-orange-400 group"
                  >
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-2 rounded-full mr-4 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
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

export default ApplicationDevelopment;