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
const AutomationMainImg = "/comp1.jpg";
const TestingFrameworkImg = "/comp2.webp";
const AutomationProcessImg = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format";
const QualityAssuranceImg = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format";
const TestReportsImg = "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&auto=format";
const TeamCollabImg = "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop&auto=format";

const Competencies = () => {
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
            <span className="text-orange-600 font-semibold">Data Science Expertise</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Empower Your Business with Data Science
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Unlock the power of data with our advanced data science competencies. Our expert team delivers innovative solutions to drive actionable insights, optimize processes, and fuel business transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center mx-auto">
              Explore Our Competencies
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Development Section - Modern Orange Theme */}
<section ref={addToSectionRefs} className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-white to-orange-50">
  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
      {/* Text Content */}
      <div className="order-2 lg:order-1 space-y-6">
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-28 h-28 bg-orange-100/60 rounded-full -z-10 animate-pulse"></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
            COMPETENCIES
          </h2>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed font-medium">
          Data science is an interdisciplinary field that applies scientific methods, algorithms, and systems to extract insights from structured and unstructured data sources. It integrates data mining, machine learning, and big data analytics.
        </p>

        <div className="bg-white p-8 rounded-3xl shadow-lg border-l-8 border-orange-500 hover:shadow-2xl transition-all duration-500">
          <p className="text-gray-700 leading-relaxed mb-4">
            Our technology solutions stand out with a scientific analytical approach to identify & solve business challenges, increasing competency across the enterprise.
          </p>
          <h3 className="text-xl font-bold text-orange-600 mb-4">Competency Development Process</h3>
          <p className="text-gray-700 mb-4">
            Our professionals are proficient in big data platforms such as Hadoop and Spark. The process includes:
          </p>
          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              "Foundations of statistics & programming",
              "Data preparation",
              "Model building",
              "Model deployment",
              "Leadership & professional development",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="bg-orange-500 p-2 rounded-full flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Image Content */}
      <div ref={addToCardRefs} className="order-1 lg:order-2 relative">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-4xl transition-shadow duration-500">
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

    {/* Services Section - Modern Orange Theme */}
<section ref={addToSectionRefs} className="py-24 bg-gradient-to-br from-orange-50 to-amber-50 px-4 md:px-8 lg:px-16">
  <div className="max-w-7xl mx-auto">
    {/* Heading */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-md">
        <Settings className="w-5 h-5 text-orange-600 mr-2" />
        <span className="text-orange-600 font-semibold">Services</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-4">
        Our Competency Services
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto">
        We provide expert solutions that combine advanced technology, analytics, and practical methodologies to empower your business.
      </p>
    </div>

    {/* Content Grid */}
    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
      {/* Image Card */}
      <div ref={addToCardRefs} className="relative group">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
          <img
            src={TestingFrameworkImg}
            alt="Automation Framework"
            className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
         
        </div>
      </div>

      {/* Services Cards */}
      <div className="space-y-8">
        {[
  {
    icon: Target,           // Tools
    title: "Tools",
    desc: "We leverage top programming and visualization tools to handle complex datasets efficiently.",
    color: "from-orange-400 to-amber-500",
  
  },
  {
    icon: Rocket,           // Techniques
    title: "Techniques",
    desc: "Unique approaches to implement methodologies and decision-making insights tailored to each project.",
    color: "from-amber-400 to-orange-500",
 
  },
  {
    icon: Zap,              // Tactic (changed from Shield)
    title: "Tactic",
    desc: "Agile strategies that deliver data-analytic solutions for complex business challenges.",
    color: "from-orange-500 to-amber-600",
  
  },
  {
    icon: Users,            // Tact (changed from Shield)
    title: "Tact",
    desc: "Soft skills management for ambiguity and client interaction ensuring balance between tech and soft skills.",
    color: "from-orange-500 to-amber-600",
 
  }
]
.map((service, index) => (
          <div
            key={index}
            ref={addToCardRefs}
            className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-l-4 border-orange-500 group"
          >
            <div className="flex items-start space-x-4">
              {/* Gradient Icon Circle */}
              <div className={`bg-gradient-to-r ${service.color} p-4 rounded-xl flex-shrink-0 relative group-hover:scale-110 transition-transform`}>
                <service.icon className="w-6 h-6 text-white" />
                {/* Small Icon Accent */}
               
              </div>
              {/* Text Content */}
              <div>
                <h3 className="text-xl font-semibold mb-2 text-orange-600">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


     {/* Features Section - Orange Theme with Icons + Small Images */}
<section ref={addToSectionRefs} className="py-24 bg-white px-4 md:px-8 lg:px-16">
  <div className="max-w-7xl mx-auto text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
      Benefits of Our <span className="text-orange-600">Competencies</span>
    </h2>
    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
      Our advanced data science competencies empower organizations with efficiency, 
      security, and smarter business decisions.
    </p>
  </div>

  {/* Cards Grid */}
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {[
      { title: "Business Predictability", desc: "Enhance forecasting accuracy with AI-powered models.", icon: Target, },
      { title: "Real-time Intelligence", desc: "Instant insights that drive data-backed actions.", icon: Zap,  },
      { title: "Marketing & Sales Boost", desc: "Unlock customer trends and boost sales.", icon: Rocket, },
      { title: "Data Security", desc: "Protect sensitive information with advanced safeguards.", icon: Shield,  },
      { title: "Simplified Decision Making", desc: "Transform complex datasets into actionable strategies.", icon: Code,  },
      { title: "Smarter Data Management", desc: "Improve overall data quality and usability.", icon: TestTube,  },
    ].map((feature, index) => (
      <div
        key={index}
        ref={addToCardRefs}
        className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center"
      >
        {/* Small Icon Image */}
        

        {/* Main Icon in Orange Gradient Circle */}
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-400 to-orange-600 mb-6">
          <feature.icon className="w-10 h-10 text-white" />
        </div>

        <h3 className="text-xl font-semibold text-orange-600 mb-3">{feature.title}</h3>
        <p className="text-gray-700 text-sm leading-relaxed">{feature.desc}</p>
      </div>
    ))}
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

export default Competencies;