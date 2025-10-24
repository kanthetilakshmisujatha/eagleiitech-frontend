import React, { useEffect, useRef } from "react";
import { Check, Zap, Shield, Layers, Rocket, Eye , BarChart,ArrowRight, Play,MessageSquare,Bot,Handshake, Globe } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cisco from '../../assets/cisco.png';
import verizon from '../../assets/version.png';
import wells from '../../assets/wells.png';
import fidelity from '../../assets/fidelity.png';
import hcl from '../../assets/hcl.png';
import infosys from '../../assets/infosys.png';

gsap.registerPlugin(ScrollTrigger);

const clients = [
  { name: 'Cisco', logo: cisco },
  { name: 'Verizon', logo: verizon },
  { name: 'Wells Fargo', logo: wells },
  { name: 'Fidelity', logo: fidelity },
  { name: 'HCL', logo: hcl },
  { name: 'Infosys', logo: infosys },
];

const MeachineLearning = () => {
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
      { opacity: 0, y: 100, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.4,
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

    // Feature animations
    featureRefs.current.forEach((feature, index) => {
      if (feature) {
        gsap.fromTo(
          feature,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: feature,
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

    // Infinite scroll animation
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
      gsap.killTweensOf([scrollRef.current, ...cardRefs.current, ...featureRefs.current]);
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
          <div className="inline-flex items-center bg-white/90 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-orange-300 shadow-sm">
            <Layers className="w-6 h-6 text-orange-500 mr-2" />
            <span className="text-orange-600 font-semibold text-lg">AI Innovation</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Machine Learning Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with Eagle Eye Tech's cutting-edge machine learning solutions. We build intelligent systems that drive innovation, optimize operations, and deliver measurable results.
          </p>
          <button className="group bg-gradient-to-r from-orange-500 to-amber-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center mx-auto text-lg shadow-lg">
            Start Your AI Journey
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Introduction Section */}
      <section ref={addToSectionRefs} className="py-20 px-4 md:px-8 lg:px-16 relative">
        <div className="max-w-6xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-5xl md:text-6xl font-black text-orange-600 leading-tight">
                  MACHINE LEARNING
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Machine learning (ML) is a subset of artificial intelligence (AI) that enables software programs to improve at predicting outcomes without explicit programming. Machine learning algorithms estimate new output values using prior data as input.
                </p>
                <p>
                  With highly skilled Machine Learning experts in-house, Eagle Eye Tech provides innovative solutions to solve complex business challenges. We incorporate cutting-edge technology into every aspect of your business processes.
                </p>
              </div>
              
              <div ref={addToCardRefs} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-orange-100 hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-orange-600 mb-6 text-center">Benefits Of Our Services</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Streamline Business Processes",
                      "Enhance Client Segmentation", 
                      "Predictive Analytics Power",
                      "Improve Customer Satisfaction",
                      "Real-time Data Insights",
                      "Automated Decision Making"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-3 p-3 rounded-xl bg-orange-50 hover:bg-orange-100 transition-colors">
                        <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 font-medium text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div ref={addToCardRefs} className="relative">
              <div className="relative bg-gradient-to-br from-orange-500 to-amber-600 p-1 rounded-3xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <div className="bg-white rounded-2xl overflow-hidden">
                  <img
                    src="/mllearn2.jpg"
                    alt="Machine Learning Illustration"
                    className="w-full h-80 object-cover rounded-2xl transform hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Found"; }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* Additional Benefits Section */}
<section ref={addToSectionRefs} className="py-20 px-6 md:px-12 lg:px-20 bg-white relative">
  <div className="max-w-6xl mx-auto text-center">
    
    {/* Heading */}
    <div className="mb-12">
      <h2 className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-6 leading-tight">
        Our Approach to Ground-breaking ML Solutions
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
        Eagle Eye Tech brings on-demand talent to our project development process. 
        We find the perfect fit for difficult-to-fill positions, boosting scalability and efficiency in project development.
      </p>
    </div>

    {/* Image Center */}
    <div ref={addToCardRefs} className="relative flex justify-center mb-16">
      <div className="relative w-full max-w-2xl">
        <img
          src="/m1learn1.jpg"
          alt="ML Approach"
          className="w-full h-[420px] object-cover rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-700 ease-in-out"
          onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=Image+Not+Found'; }}
        />
        {/* Decorative Gradient Shapes */}
        <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl opacity-50 blur-md"></div>
        <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-orange-300 to-amber-400 rounded-xl opacity-60 blur-sm"></div>
      </div>
    </div>

    {/* Feature Cards (3 per row) */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {[
        {
          title: "Data Comprehension",
          desc: "We collect and analyze data from reliable sources to better understand your business status."
        },
        {
          title: "Data Preparation",
          desc: "We clean and transform data to enhance quality and facilitate processing and analysis."
        },
        {
          title: "Model Construction",
          desc: "We create and train models, verifying effectiveness until target accuracy is achieved."
        },
        {
          title: "Evaluation & Implementation",
          desc: "We proceed with model deployment after thorough evaluation and your satisfaction."
        },
        {
          title: "Continuous Support",
          desc: "We collect feedback, analyze results, and engage continuously to benefit your company."
        }
      ].map((benefit, index) => (
        <div
          key={index}
          ref={addToFeatureRefs}
          className="group relative"
        >
          <div className="relative bg-white border-2 border-orange-200 p-6 rounded-2xl hover:border-orange-400 transition-all duration-300 hover:shadow-xl flex flex-col h-full text-left">
            <div className="flex items-start space-x-4">
              
              {/* Number Icon */}
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform flex-shrink-0">
                <span className="text-white font-bold text-lg">{index + 1}</span>
              </div>
              
              {/* Text */}
              <div>
                <h4 className="text-lg font-bold text-orange-600 mb-2">{benefit.title}</h4>
                <p className="text-gray-700 leading-relaxed">{benefit.desc}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>


   {/* Services Section */}
<section ref={addToSectionRefs} className="py-24 px-4 md:px-8 lg:px-16 relative bg-gradient-to-br from-orange-50 to-amber-50">
  <div className="max-w-7xl mx-auto relative">
    
    <div className="grid lg:grid-cols-5 gap-12 items-start">
      
      {/* Left Side Image Card */}
      <div ref={addToCardRefs} className="lg:col-span-2 relative">
        <div className="sticky top-24">
          <div className="relative z-10 bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-orange-100 hover:shadow-3xl transition-all duration-300">
            
            {/* Image */}
            <div className="relativemt-20">
              <img
                src="/mllearning3.webp"
                alt="ML Services Illustration"
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Found"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
              {/* Image */}
            <div className="relative mt-20">
              <img
                src="/mllearn4.jpg"
                alt="ML Services Illustration"
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Found"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Text Overlay */}
            <div className="p-8 bg-gradient-to-b from-white to-orange-50">
              <h3 className="text-2xl font-bold text-orange-600 mb-4">
                Why Choose Our ML Services?
              </h3>
              <p className="text-gray-700 mb-6">
                We combine technical expertise with business acumen to deliver solutions that drive real value.
              </p>
              <div className="flex items-center space-x-2 text-orange-600 font-semibold cursor-pointer">
                <span>Get Started Today</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Cards */}
      <div className="lg:col-span-3 space-y-10">
        
        {/* Section Heading */}
        <div>
          <div className="flex items-center space-x-4 mb-8">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl flex items-center justify-center shadow-xl">
                <Shield className="w-7 h-7 text-white" />
              </div>
            </div>
            <div>
              <span className="text-orange-600 font-bold text-sm uppercase tracking-widest">Our ML Services</span>
              <div className="w-24 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 mt-1"></div>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-orange-600 leading-tight mb-8">
            Comprehensive Machine Learning Services
          </h2>
        </div>

        {/* Service Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {[
            {
              number: "01",
              icon: <Layers className="w-6 h-6 text-white" />,
              title: "Deep Learning",
              desc: "Scalable deep learning solutions with optimized compute, storage, and memory for real-time AI workloads."
            },
            {
              number: "02",
              icon: <BarChart className="w-6 h-6 text-white" />,
              title: "Predictive Analytics",
              desc: "Transform data into insights with predictive models for smarter decision-making and future planning."
            },
            {
              number: "03",
              icon: <Eye className="w-6 h-6 text-white" />,
              title: "Image Analysis",
              desc: "Accurate image recognition services to classify and detect objects, attributes, and patterns."
            },
            {
              number: "04",
              icon: <Play className="w-6 h-6 text-white" />,
              title: "Video Analytics",
              desc: "Identify, categorize, and analyze dynamic video data with advanced ML-driven intelligence."
            },
            {
              number: "05",
              icon: <MessageSquare className="w-6 h-6 text-white" />,
              title: "Natural Language Processing",
              desc: "Sentiment analysis, content classification, and text analytics with NLP models tailored for businesses."
            },
            {
              number: "06",
              icon: <Bot className="w-6 h-6 text-white" />,
              title: "AI Models",
              desc: "Custom AI models built and trained to continuously adapt, learn, and evolve with your business needs."
            },
            {
              number: "07",
              icon: <Handshake className="w-6 h-6 text-white" />,
              title: "Flexibility",
              desc: "Win-win partnerships with customized ML approaches that fit your exact business scenario."
            },
            {
              number: "08",
              icon: <Globe className="w-6 h-6 text-white" />,
              title: "Industry Expertise",
              desc: "Domain-focused experts leveraging cutting-edge ML to solve specific industry challenges."
            }
          ].map((service, index) => (
            <div key={index} ref={addToCardRefs} className="group relative">
              
              {/* Number Badge */}
              <div className="absolute -left-6 -top-4 w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg z-10">
                <span className="text-white font-bold text-lg">{service.number}</span>
              </div>

              {/* Card */}
              <div className="relative bg-white/90 backdrop-blur-sm border-2 border-orange-100 pt-10 pb-8 px-6 rounded-3xl hover:shadow-2xl hover:border-orange-300 transition-all duration-500 group-hover:bg-white">
                <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-400 rounded-2xl flex items-center justify-center shadow-md flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-lg font-bold text-orange-600 group-hover:text-orange-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Clients Section */}
      <section ref={clientsRef} className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-6 py-3 mb-6 border border-orange-200">
              <Shield className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Trusted Partners</span>
            </div>
            <h2 className="text-3xl font-bold text-orange-600 mb-4">Our Valued Clients</h2>
            <p className="text-gray-600 text-lg">Trusted by industry leaders worldwide for innovative ML solutions</p>
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
                  className="flex-shrink-0 w-48 h-24 flex items-center justify-center bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-16 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
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

export default MeachineLearning;