import React, { useEffect, useRef } from "react";
import { Check, Zap, Shield, Layers, Rocket, Eye, ArrowRight } from "lucide-react";
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

const Strategy = () => {
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
            <span className="text-orange-600 font-semibold text-lg">Strategy Excellence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Digital Marketing Strategy
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with Eagle Eye Tech's tailored digital marketing strategies. We drive brand growth, boost engagement, and deliver measurable results across platforms.
          </p>
          <button className="group bg-gradient-to-r from-orange-500 to-amber-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center mx-auto text-lg">
            Build Your Strategy Now
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
              <div className="inline-flex items-center bg-white shadow-lg rounded-2xl px-6 py-3 border border-orange-200">
                <div className="w-3 h-3 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-orange-600 font-bold text-sm uppercase tracking-wide">Digital Strategy</span>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-5xl md:text-6xl font-black text-orange-600 leading-tight">
                  Strategy
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500"></div>
                <p className="text-2xl text-gray-800 font-semibold">The Success Framework For Your Company</p>
              </div>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Professional services are not relieved from the wave of digital technology that is altering industry after industry. Potential clients may now learn about and assess potential service providers in new ways. Digital transformation is pushing businesses to reconsider their digital marketing tactics to remain competitive.
                </p>
                <p>
                  Our marketing buddies unleash the potential of digital marketing strategies in boosting product-oriented & service-oriented organizations and propose a method for developing a winning digital strategy for your firm. Let us begin by going over some fundamental ideas.
                </p>
              </div>
              
              <div ref={addToCardRefs} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-orange-100">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      "Keyword Research & Analysis",
                      "Competitor Analysis", 
                      "On-Page SEO",
                      "Video Marketing"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
                        <span className="text-gray-700 font-medium text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent mb-6"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Our marketing approach meets strategic marketing goals, such as brand building or new business growth. Search engine optimization, digital advertising, email, webinars, social media, websites, and mobile applications are all common digital strategies. Digital marketing strategies frequently combine digital and traditional (offline) approaches.
                  </p>
                </div>
              </div>
            </div>
            
            <div ref={addToCardRefs} className="relative">
              <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
                <img
                  src="/str2.png"
                  alt="Digital Strategy Illustration"
                  className="w-full h-70 object-cover rounded-2xl"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Found"; }}
                />
                <div className="absolute inset-2 bg-gradient-to-t from-orange-900/30 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Benefits Section */}
      <section ref={addToSectionRefs} className="py-20 px-4 md:px-8 lg:px-16 bg-white relative">
        <div className="max-w-6xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div ref={addToCardRefs} className="relative order-2 lg:order-1">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-4 shadow-xl">
                <img
                  src="/str1.jpg"
                  alt="Strategy Benefits"
                  className="w-full h-80 object-cover rounded-2xl"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Found"; }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl opacity-80 shadow-lg"></div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-orange-600 font-bold text-sm uppercase tracking-wider">Core Strategy Services</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-black text-orange-600 mb-6 leading-tight">
                  Our Digital Marketing Solutions
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We craft personalized digital marketing strategies to elevate your brand, attract leads, and achieve your business goals.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "SEO Optimization",
                  "Content Marketing", 
                  "Social Media Strategy",
                  "PPC Advertising",
                  "Lead Generation",
                  "Brand Awareness",
                ].map((benefit, index) => (
                  <div
                    key={index}
                    ref={addToFeatureRefs}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-400 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    <div className="relative bg-white border-2 border-orange-200 p-6 rounded-2xl hover:border-orange-400 transition-all duration-300 hover:shadow-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                          <Check className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-800 font-semibold">{benefit}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={addToSectionRefs} className="py-24 px-4 md:px-8 lg:px-16 relative">
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-8">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-orange-200 rounded-full px-6 py-3 mb-8 shadow-sm">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-orange-600 font-semibold text-sm uppercase tracking-wide">Our Expertise</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-orange-600 mb-6 leading-none">
                  We Apply Our Skills
                </h2>
                <div className="w-32 h-1.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mx-auto lg:mx-0 mb-12"></div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Search Engine Optimization (SEO)",
                  "Pay-Per-Click (PPC) Marketing", 
                  "Webinar Production",
                  "Content Marketing (Blogging & Article Writing)",
                  "Downloadable Content Offerings (eBooks, Whitepapers, Webinars)",
                  "Email Marketing",
                  "Social Media Marketing",
                  "Video Production",
                  "Website Design A/B Testing",
                  "Landing Page Strategy",
                  "Call-To-Action Strategy", 
                  "Link Building/Earning",
                  "Infographic Design",
                  "Marketing Automation",
                  "Lead Nurture Strategy",
                  "Public Relations (PR)",
                ].map((benefit, index) => (
                  <div
                    key={index}
                    ref={addToFeatureRefs}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-amber-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative bg-white/70 backdrop-blur-sm border border-orange-100 p-5 rounded-2xl hover:shadow-lg hover:border-orange-300 transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform flex-shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium text-sm leading-relaxed group-hover:text-orange-600 transition-colors">
                          {benefit}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div ref={addToCardRefs} className="relative lg:col-span-1">
              <div className="sticky top-24">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-orange-300/50 to-amber-300/50 rounded-3xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity"></div>
                  <div className="relative bg-white/90 backdrop-blur-sm p-4 rounded-3xl shadow-2xl border border-orange-100">
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src="/str4.jpg"
                        alt="Benefits of Strategy Illustration"
                        className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Found"; }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-orange-100">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-orange-600">16+</div>
                      <div className="text-xs text-gray-600 uppercase tracking-wide">Services</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-amber-600">100%</div>
                      <div className="text-xs text-gray-600 uppercase tracking-wide">Success</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={addToSectionRefs} className="py-24 px-4 md:px-8 lg:px-16 relative">
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div ref={addToCardRefs} className="lg:col-span-2 relative">
              <div className="sticky top-24">
                <div className="relative z-10 bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-orange-100">
                  <div className="relative">
                    <img
                      src="/str3.webp"
                      alt="Strategy Services Illustration"
                      className="w-full h-96 object-cover"
                      onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Found"; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  
                  <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-lg border border-orange-100">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-gray-700">Live Strategy</span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-6 right-6 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl px-4 py-3 shadow-lg">
                    <div className="text-center">
                      <div className="text-lg font-bold">3</div>
                      <div className="text-xs uppercase tracking-wide">Levels</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3 space-y-10">
              <div>
                <div className="flex items-center space-x-4 mb-8">
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl flex items-center justify-center shadow-xl rotate-3">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <span className="text-orange-600 font-bold text-sm uppercase tracking-widest">Our Strategy Services</span>
                    <div className="w-24 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 mt-1"></div>
                  </div>
                </div>
                
                <h2 className="text-xl md:text-xl font-black text-orange-600 leading-tight mb-8">
                  Based on your firm goals, we developed a tailored digital marketing plan for you, and post-evaluation, our team alters & personalizes every month. We have categorized our services into three levels.
                </h2>
              </div>
              
              <div className="space-y-8">
                <div ref={addToCardRefs} className="group relative">
                  <div className="absolute -left-8 top-6 w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg z-10">
                    <span className="text-white font-bold text-lg">01</span>
                  </div>
                  
                  <div className="relative bg-white/80 backdrop-blur-sm border-2 border-orange-100 ml-8 p-8 rounded-3xl hover:shadow-xl hover:border-orange-300 transition-all duration-500 group-hover:bg-white">
                    <div className="flex items-start space-x-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-400 rounded-2xl flex items-center justify-center shadow-md flex-shrink-0">
                        <Eye className="w-6 h-6 text-white" />
                      </div>
                      <div className="space-y-4 flex-1">
                        <h3 className="text-xl font-bold text-orange-600 group-hover:text-orange-700 transition-colors">
                          Setting Goals by Understanding Your Target Audience
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          Increase website traffic via content marketing (blogging), email marketing, search engine optimization (SEO), pay-per-click (PPC), and social media.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div ref={addToCardRefs} className="group relative">
                  <div className="absolute -left-8 top-6 w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg z-10">
                    <span className="text-white font-bold text-lg">02</span>
                  </div>
                  
                  <div className="relative bg-white/80 backdrop-blur-sm border-2 border-orange-100 ml-8 p-8 rounded-3xl hover:shadow-xl hover:border-orange-300 transition-all duration-500 group-hover:bg-white">
                    <div className="flex items-start space-x-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-400 rounded-2xl flex items-center justify-center shadow-md flex-shrink-0">
                        <Rocket className="w-6 h-6 text-white" />
                      </div>
                      <div className="space-y-4 flex-1">
                        <h3 className="text-xl font-bold text-orange-600 group-hover:text-orange-700 transition-colors">
                          Implementing More Effective Marketing Channels to Convert More Leads
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          Once you have increased traffic on your website, you must transform it from an anonymous visitor to a contactable lead. We accomplish this with appealing downloadable content offers (like eBooks and webinars), email lead nurturing, A/B testing & engaging videos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div ref={addToCardRefs} className="group relative">
                  <div className="absolute -left-8 top-6 w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg z-10">
                    <span className="text-white font-bold text-lg">03</span>
                  </div>
                  
                  <div className="relative bg-white/80 backdrop-blur-sm border-2 border-orange-100 ml-8 p-8 rounded-3xl hover:shadow-xl hover:border-orange-300 transition-all duration-500 group-hover:bg-white">
                    <div className="flex items-start space-x-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-400 rounded-2xl flex items-center justify-center shadow-md flex-shrink-0">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div className="space-y-4 flex-1">
                        <h3 className="text-xl font-bold text-orange-600 group-hover:text-orange-700 transition-colors">
                          Close More Sales by Creating Right Message
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          Eagle Eye Tech optimizes your content regularly, whether it is a video, blog, or eBook. We collaborate with you to understand your customer's concerns and pain points, find keyword possibilities, and generate tailored content that promotes your company. Every piece of our content strategy creates an asset to create a need for the target audience. Ultimately, this enables your brand to transform into an ideal solution.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

export default Strategy;