import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Zap, Shield, Layers, Rocket, Eye, ArrowRight, Play, Target, Users, Award, Settings, Code, TestTube } from "lucide-react";
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

// Updated images for automation theme
const AutomationMainImg = "/technologe1.jpg";
const TestingFrameworkImg = "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=600&h=400&fit=crop&auto=format";
const AutomationProcessImg = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format";
const QualityAssuranceImg = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format";
const TestReportsImg = "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&auto=format";
const TeamCollabImg = "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop&auto=format";

const Technologies = () => {
  const heroRef = useRef(null);
  const sectionRefs = useRef([]);
  const cardRefs = useRef([]);
  const featureRefs = useRef([]);
  const clientsRef = useRef(null);
  const scrollRef = useRef(null);
  const strategicHeadingRef = useRef(null);

  useEffect(() => {
    // Enhanced hero animation
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
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 90%",
              end: "bottom 20%",
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
          { opacity: 0, y: 80, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 95%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
              once: false,
            },
          }
        );
      }
    });

    // Feature animations with enhanced floating effect
    featureRefs.current.forEach((feature, index) => {
      if (feature) {
        gsap.fromTo(
          feature,
          { opacity: 0, x: -60 },
          {
            opacity: 1,
            x: 0,
            duration: 1.0,
            delay: index * 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: feature,
              start: "top 95%",
              toggleActions: "play none none reverse",
            },
          }
        );
        gsap.to(feature, {
          y: 10,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
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
              setTimeout(typeWriter, 60);
            }
          };
          typeWriter();
        },
      });
    }

    // Enhanced clients animation
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
    <div className="min-h-screen bg-gradient-to-br from-white to-orange-50 overflow-hidden font-sans">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-amber-400/10"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-orange-200">
            <Zap className="w-5 h-5 text-orange-600 mr-2" />
            <span className="text-orange-600 font-semibold">Advanced Technology Solutions</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Transform Your Future with Data Science
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Empower your business with our innovative data science solutions. Our expert team leverages cutting-edge technologies to unlock actionable insights, optimize processes, and drive unparalleled growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center mx-auto">
              Discover Our Solutions
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Development Section */}
      <section ref={addToSectionRefs} className="py-24 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-100 rounded-2xl -z-10"></div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
                  TECHNOLOGIES
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  Technology specialists draw meaningful insights from the extracted data by indulging subject expertise, computer abilities, and mathematical & statistical understanding. As a result, these systems provide insights that analysts and business users may employ to create meaningful business value.
                </p>
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-2xl border-l-4 border-orange-500">
                  <h3 className="text-xl font-bold text-orange-600 mb-4">Technologies Services We Provide To Our Clients</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-orange-500 mr-2" />
                      One-of-a-kind Relevant Content for Each Dynamic Page
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-orange-500 mr-2" />
                      Information produced dynamically by the domain
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-orange-500 mr-2" />
                      Product Listings that Change
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-orange-500 mr-2" />
                      News Engine Dynamic
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-orange-500 mr-2" />
                      Using content management to modify a website online
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-orange-500 mr-2" />
                      CMS (Material Management Systems) makes it easier to add and update content.
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-orange-500 mr-2" />
                      Improved user engagement as a result of sophisticated search and filter options
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-orange-500 mr-2" />
                      Regular content updates are perceived positively by search engines.
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-orange-500 mr-2" />
                      Lower bounce rates since visitors have a better user experience.
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-orange-500 mr-2" />
                      Ease of analysis and back-end reporting.
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-orange-500 mr-2" />
                      Integration of helpful & sophisticated features (such as eCommerce / shopping carts, AI-powered chatbots, and so on
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div ref={addToCardRefs} className="order-1 lg:order-2 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={AutomationMainImg}
                  alt="Automation Testing"
                  className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Features Section - Two cards same height */}
<section ref={addToSectionRefs} className="py-24 bg-gradient-to-br from-orange-50 to-amber-50 px-6 md:px-12">
  <div className="max-w-7xl mx-auto">
    {/* Make grid items stretch to equal height */}
    <div className="grid lg:grid-cols-2 gap-16 items-stretch">
      
      {/* Card 1 */}
      <div
        ref={addToCardRefs}
        className="relative bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-2xl hover:shadow-orange-200 transition-all duration-500 h-full flex flex-col"
      >
        {/* Fixed-height Image */}
        <img 
          src="/technologie2.jpg" 
          alt="Technology Approach" 
          className="w-full h-52 object-cover rounded-2xl mb-6 shadow-md flex-shrink-0"
        />

        {/* Content - grows to fill space */}
        <div className="flex-1 flex flex-col">
          <h3 className="text-3xl font-bold text-orange-600 mb-4 flex items-center">
            <Eye className="w-8 h-8 mr-3" />
            Our Technologies Approach
          </h3>

          <p className="text-gray-700 mb-6 leading-relaxed">
            The ever-growing unstructured data is the biggest challenge for many businesses. 
            Our expert supervised data science technology solution deals with messy & unstructured data 
            to draw meaningful insights. Our unique approach has the following perks:
          </p>

          {/* List placed at bottom so cards align visually */}
          <div className="mt-auto space-y-3 mb-20">
            {[
              "Discovery",
              "Data Preparation",
              "Model Planning",
              "Model Building",
              "Operationalize",
              "Results"
            ].map((item, index) => (
              <div key={index} ref={addToFeatureRefs} className="flex items-start group">
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-2 rounded-full mr-4 flex-shrink-0 mt-1 
                                group-hover:scale-110 transition-transform shadow-md">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-800 leading-relaxed group-hover:text-orange-600 transition-colors">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div
        ref={addToCardRefs}
        className="relative bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-2xl hover:shadow-orange-200 transition-all duration-500 h-full flex flex-col"
      >
        {/* Fixed-height Image */}
        <img 
          src="/technologe3.jpg" 
          alt="Smart Technologies Benefits" 
          className="w-full h-52 object-cover rounded-2xl mb-6 shadow-md flex-shrink-0"
        />

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <h3 className="text-3xl font-bold text-orange-600 mb-4 flex items-center">
            <Layers className="w-8 h-8 mr-3" />
            Benefits Through Our Smart Technologies
          </h3>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Our Data Science expert solutions help clients meet the needs of business-IT transformation, 
            alignment, and business optimization through product innovation. We also offer structured consulting 
            across client operations & enterprise. Key benefits include:
          </p>

          <div className="mt-auto space-y-3">
            {[
              "Providing flexibility, value & structure for investments.",
              "Ensure systems support evolving needs.",
              "Creating new capabilities with newer technologies.",
              "Driving differentiation to alter principles.",
              "Strategizing innovative ways for business growth.",
              "Delivering additional outcomes via technology investments.",
              "Enhancing clarity & potency of business processes."
            ].map((item, index) => (
              <div key={index} ref={addToFeatureRefs} className="flex items-start group">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-2 rounded-full mr-4 flex-shrink-0 mt-1 
                                group-hover:scale-110 transition-transform shadow-md">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-800 leading-relaxed group-hover:text-orange-600 transition-colors">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


 <section ref={addToSectionRefs} className="py-24 bg-gradient-to-br from-orange-50 to-amber-50 px-6 md:px-12">
  <div className="max-w-7xl mx-auto">
    
    {/* Heading */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-md">
        <Settings className="w-5 h-5 text-orange-600 mr-2" />
        <span className="text-orange-600 font-semibold tracking-wide">SOLUTIONS</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-4 drop-shadow-sm">
        Data Science Solutions We Offer
      </h2>
      <p className="max-w-2xl mx-auto text-gray-700 leading-relaxed">
        Our unique solutions emerge from advanced scientific technologies in data science to transform the future.
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        {
          icon: Target,
          title: "Artificial Intelligence",
          desc: "AI analyses everyday language to improve predictive analytics, voice commands and operates driverless cars.",
          color: "from-orange-500 to-amber-500"
        },
        {
          icon: Rocket,
          title: "Cloud Services",
          desc: "Storing large amounts of data efficiently while reducing costs and power consumption.",
          color: "from-amber-500 to-orange-500"
        },
        {
          icon: Shield,
          title: "AR/VR Systems",
          desc: "Automated insights with ML & NLP, helping analysts detect patterns and generate data.",
          color: "from-orange-600 to-amber-600"
        },
        {
          icon: Shield,
          title: "IoT (Internet of Things)",
          desc: "Smart meters & sensors to enable predictive analytics for real-world applications.",
          color: "from-orange-600 to-amber-600"
        },
        {
          icon: Shield,
          title: "Big Data",
          desc: "Transforming how businesses and customers interact with technology every day.",
          color: "from-orange-600 to-amber-600"
        },
        {
          icon: Shield,
          title: "Automated ML",
          desc: "Focus more on solving complex problems instead of building workflows manually.",
          color: "from-orange-600 to-amber-600"
        }
      ].map((service, index) => (
        <div
          key={index}
          className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-orange-100 group hover:scale-105"
        >
          {/* Background Accent Circle */}
          <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-gradient-to-r opacity-20 blur-2xl pointer-events-none 
                          group-hover:opacity-40 transition duration-500
                          group-hover:scale-110"
               style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}>
          </div>

          {/* Icon */}
          <div className={`bg-gradient-to-r ${service.color} p-4 rounded-xl inline-flex mb-4 shadow-md group-hover:rotate-6 transition-transform`}>
            <service.icon className="w-7 h-7 text-white" />
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-orange-600 transition-colors">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors">
            {service.desc}
          </p>
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

export default Technologies;