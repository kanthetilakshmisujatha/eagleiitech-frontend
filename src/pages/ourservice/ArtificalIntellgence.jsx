
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Check,
  Zap,
  Shield,
  Layers,
  Rocket,
  Eye,
  ArrowRight,
  Award,
  Target,
  Brain,
} from "lucide-react";
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
  { name: "Cisco", logo: cisco },
  { name: "Verizon", logo: verizon },
  { name: "Wells Fargo", logo: wells },
  { name: "Fidelity", logo: fidelity },
  { name: "HCL", logo: hcl },
  { name: "Infosys", logo: infosys },
];

// Image URLs
const NeuralNetworkImg =
  "/aiintellengce1.webp";
const AIImg =
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&auto=format";
const MachineLearningImg =
  "/aiintellence2.jpg";

const ArtificialIntelligence = () => {
  const heroRef = useRef(null);
  const sectionRefs = useRef([]);
  const cardRefs = useRef([]);
  const featureRefs = useRef([]);
  const clientsRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    // Hero animation
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
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
            duration: 1.2,
            delay: index * 0.3,
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    // Card animations with stagger effect
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
            delay: index * 0.15,
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
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: feature,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
        gsap.to(feature, {
          y: 15,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    });

    // Clients animation
    gsap.fromTo(
      clientsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
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
        duration: 30,
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-100 font-sans overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/90 rounded-full px-4 py-2 mb-6 border border-orange-200 shadow-sm">
            <Brain className="w-5 h-5 text-orange-500 mr-2" />
            <span className="text-orange-500 font-medium text-sm sm:text-base">
              AI-Powered Innovation
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Revolutionize Your Business with AI
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Harness the power of artificial intelligence and machine learning to drive innovation, optimize operations, and achieve unparalleled growth.
          </p>
          <button className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center mx-auto">
            Explore AI Solutions
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Development Section */}
      <section
        ref={addToSectionRefs}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-orange-100 rounded-xl -z-10"></div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-orange-600">
                  AI Technology
                </h2>
              </div>
              <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                Our AI as a Service (AIaaS) solutions empower businesses to leverage advanced machine learning and deep learning technologies. With AI, companies achieve up to 40% productivity gains, enhancing decision-making, reducing costs, and delivering innovative solutions.
              </p>
              <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
                <p className="text-gray-600 leading-relaxed">
                  Our dedicated project management ensures seamless task coordination, clear communication, and full project visibility to meet your business needs.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src={NeuralNetworkImg}
                  alt="Deep Learning Neural Networks"
                  className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-amber-100 rounded-full -z-10"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-orange-200 rounded-xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={addToSectionRefs}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-amber-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white rounded-full px-4 py-2 shadow-md">
              <Shield className="w-5 h-5 text-orange-500 mr-2" />
              <span className="text-orange-500 font-medium">Our AI Approach</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-orange-600 mt-4">
              Our Unique Methodology
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {[
                {
                  icon: Target,
                  title: "Research",
                  desc: "We conduct in-depth research to tailor AI solutions, analyzing data requirements to ensure optimal outcomes.",
                  color: "bg-orange-500",
                },
                {
                  icon: Rocket,
                  title: "Innovation",
                  desc: "Our experts craft innovative AI solutions, integrating cutting-edge functionality to make your project stand out.",
                  color: "bg-amber-500",
                },
                {
                  icon: Brain,
                  title: "Proof of Concept",
                  desc: "We validate solutions through PoCs, ensuring alignment with your business goals and market demands.",
                  color: "bg-orange-600",
                },
                {
                  icon: Layers,
                  title: "Project Deployment",
                  desc: "We scale and deploy tailored AI solutions, making adjustments to meet your specific requirements.",
                  color: "bg-amber-600",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  ref={addToFeatureRefs}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 mb-6 border-l-4 border-orange-500"
                >
                  <div
                    className={`${service.color} p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4`}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-orange-600">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
            <div ref={addToCardRefs}>
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src={AIImg}
                  alt="AI Development Framework"
                  className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Planning Section */}
      <section
        ref={addToSectionRefs}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-orange-100 rounded-xl -z-10"></div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-orange-600">
                  Innovative AI Services
                </h2>
              </div>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Our comprehensive AI services are designed to transform your business, delivering tailored solutions that drive efficiency and innovation.
              </p>
            </div>
            <div ref={addToCardRefs}>
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src={MachineLearningImg}
                  alt="AI Services"
                  className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">AI-Powered Transformation</h3>
                  <p className="text-amber-200 text-sm">Comprehensive Solutions</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-amber-100 rounded-full -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-orange-200 rounded-xl -z-10"></div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Expert Knowledge",
                desc: "Our skilled AI team leverages advanced data engineering to deliver solutions that propel your business forward.",
                icon: Eye,
                bg: "bg-orange-500",
              },
              {
                title: "Proven Success",
                desc: "With a track record of successful projects, we turn data into actionable insights to overcome complex challenges.",
                icon: Award,
                bg: "bg-amber-500",
              },
              {
                title: "Tailored Strategies",
                desc: "We craft customized AI strategies to exceed your business goals and set new industry benchmarks.",
                icon: Target,
                bg: "bg-orange-600",
              },
              {
                title: "Advanced NLP",
                desc: "Our NLP solutions power chatbots, sentiment analysis, and enhanced search, giving you a competitive edge.",
                icon: Rocket,
                bg: "bg-amber-600",
              },
            ].map((item, index) => (
              <div
                key={index}
                ref={addToCardRefs}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-center"
              >
                <div
                  className={`${item.bg} w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4`}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-base text-orange-600 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section ref={clientsRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-orange-50 rounded-full px-4 py-2">
              <Shield className="w-5 h-5 text-orange-500 mr-2" />
              <span className="text-orange-500 font-medium">Trusted Partners</span>
            </div>
            <h2 className="text-3xl font-bold text-orange-600 mt-4">Our AI Partners</h2>
            <p className="text-gray-600 text-base">Collaborating with leading organizations globally</p>
          </div>
          <div className="relative overflow-hidden py-8">
            <div
              ref={scrollRef}
              className="flex space-x-8"
              style={{ display: "flex", whiteSpace: "nowrap" }}
            >
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-40 h-20 flex items-center justify-center"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-16 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArtificialIntelligence;