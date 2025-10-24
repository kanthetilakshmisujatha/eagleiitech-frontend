import React, { useEffect, useRef } from "react";
import { Check, Zap, Shield, Layers, Rocket, Eye, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cisco from "../../assets/cisco.png";
import verizon from "../../assets/version.png";
import wells from "../../assets/wells.png";
import fidelity from "../../assets/fidelity.png";
import hcl from "../../assets/hcl.png";
import infosys from "../../assets/infosys.png";

gsap.registerPlugin(ScrollTrigger);

const clients = [
  { name: 'Cisco', logo: cisco },
  { name: 'Verizon', logo: verizon },
  { name: 'Wells Fargo', logo: wells },
  { name: 'Fidelity', logo: fidelity },
  { name: 'HCL', logo: hcl },
  { name: 'Infosys', logo: infosys },
];

const Analytics = () => {
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
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-amber-400/20"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/90 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-orange-300 shadow-sm">
            <Layers className="w-6 h-6 text-orange-500 mr-2" />
            <span className="text-orange-600 font-semibold text-lg">Analytics Excellence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Data-Driven Marketing Success
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 mb-8 max-w-4xl mx-auto leading-relaxed">
            Unlock your business potential with Sadup Softech's advanced analytics solutions. Harness data to optimize strategies, boost performance, and achieve measurable growth.
          </p>
          <button className="group bg-gradient-to-r from-orange-500 to-amber-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center mx-auto text-lg">
            Start Analyzing Now
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
              <div className="inline-flex items-center bg-white/80 backdrop-blur-md rounded-full px-6 py-3 border border-orange-300 shadow-md">
                <div className="w-3 h-3 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-orange-600 font-bold text-sm uppercase tracking-wide">Digital Analytics</span>
              </div>
              <div className="space-y-6">
                <h2 className="text-5xl md:text-6xl font-black text-orange-600 leading-tight">
                  Analytics
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500"></div>
                <p className="text-2xl text-gray-800 font-semibold">The Success Framework For Your Company</p>
              </div>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Data is the basis of every growth success in the modern world. Robust digital analytics skills are the key to a successful digital marketing strategy. With years of expertise in digital analytics as consultants, we offer growth-driven marketing plans based on sophisticated data analytics insights.
                </p>
                <p>
                  As a marketing analytics consultant, we assist firms in establishing data-driven marketing by developing a specific strategy and optimization plan. We provide marketing consulting services to increase data resource integration, link data trends, optimize reporting systems, and affect productivity to stay at the core of your success.
                </p>
                <p>
                  One of our most valuable assets at Sadup Softech is our capabilities to gather, analyze, and utilize data. We identify significant sources of existing data, set up procedures to extract additional data, and assist you in finding the key indicators to examine. Following a thorough examination of the data, we present the insights enabling you to take necessary actions for accelerating growth.
                </p>
              </div>
            </div>
            <div ref={addToCardRefs} className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-300/50 to-amber-300/50 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-orange-200 transform group-hover:-translate-y-2 transition-all duration-500">
                <img
                  src="/anal1.jpg"
                  alt="Digital Analytics Illustration"
                  className="w-full h-70 object-cover rounded-2xl"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Found"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Benefits Section */}
      <section ref={addToSectionRefs} className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-orange-50 to-amber-50 relative">
        <div className="max-w-6xl mx-auto relative">
          <div className="space-y-8">
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center shadow-lg rotate-3">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <span className="text-orange-600 font-bold text-sm uppercase tracking-wider">Core Analytics Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-orange-600 mb-6 leading-tight">
                Our Analytics Approach
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  text: "Local Search + SEO: Local SEO and good organic search results are essential for keeping a competitive advantage in the multifamily industry. We concentrate on creating a solid personalized strategy for continual content production, local listings, and mobile engagements.",
                  image: "https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                  alt: "Local SEO Strategy",
                },
                {
                  text: "ROI Based on Analytics: As part of our analytics strategy, we compile large volumes of campaign and traffic data every time interval & assist you in optimizing digital marketing expenditures and maximizing revenue. We can capture genuine marketing ROI for yearly budget planning by isolating conversion data by channel and comparing it to ROI and gross margin.",
                  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                  alt: "ROI Analytics",
                },
                {
                  text: "Analytics by Google: Proper tracking and attribution is the first step in analyzing website data. From the first click to the final touch, we un-tap the fundamentals with goals/filters/views and UTM parameters before configuring to meet your digital marketing objectives & revenue targets.",
                  image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                  alt: "Google Analytics",
                },
                {
                  text: "Google Tag Manager: We streamline your integration tags & conversion tracking pixels across websites and platforms. We optimize for unique trigger rules and activities that support digital marketing objectives yielding fruit-full results.",
                  image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                  alt: "Google Tag Manager",
                },
                {
                  text: "Google Data Studio: True transformation occurs when we link data to your choices. We unleash its potential by combining data sources such as Google Analytics, Google Ads, CRMs, and others into a unified platform for better decision making.",
                  image: "/anal5.jpg",
                  alt: "Google Data Studio",
                },
                {
                  text: "Tracking Conversion: Our funnel-focused approach to analytics starts with detailed conversion tracking. We assist you in visualizing the prospect journey, from phone calls and web forms to individual page views and session data, to optimize for maximum revenue benefits.",
                  image: "/anal6.jpg",
                  alt: "Conversion Tracking",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  ref={addToFeatureRefs}
                  className="group relative"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-orange-400/20 to-amber-400/20 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="relative bg-white rounded-3xl p-6 border border-orange-200 shadow-2xl group-hover:shadow-[0_10px_30px_rgba(234,88,12,0.3)] group-hover:-translate-y-2 transition-all duration-300">
                    <div className="flex flex-col space-y-4">
                      <div className="relative">
                        <img
                          src={benefit.image}
                          alt={benefit.alt}
                          className="w-full h-50 object-cover rounded-xl"
                          onError={(e) => { e.target.src = "https://via.placeholder.com/300x120?text=Image+Not+Found"; }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent rounded-xl"></div>
                      </div>
                      <span className="text-gray-800 font-semibold text-sm leading-relaxed">{benefit.text}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={addToSectionRefs} className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-orange-50 to-amber-50 relative">
        <div className="max-w-7xl mx-auto relative">
          <div className="space-y-10">
            <div className="text-center">
              <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-orange-200 rounded-full px-6 py-3 mb-8 shadow-sm">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-orange-600 font-semibold text-sm uppercase tracking-wide">Our Expertise</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-orange-600 mb-6 leading-none">
                Marketing Analytics - Impact on Business
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mx-auto mb-12"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Customer Intelligence",
                  text: "Define your audience & their online behavior.",
                  image: "/anal2.jpg",
                  alt: "Customer Analytics Dashboard",
                },
                {
                  title: "Market & Competitive Analysis",
                  text: "Identify market opportunities, scenario analysis, and competitors.",
                  image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                  alt: "Market Trends Chart",
                },
                {
                  title: "Measuring Performance",
                  text: "Measure the performance of your marketing operations, brand metrics, channels, campaigns, and marketing ROI.",
                  image: "/anal5.jpg",
                  alt: "KPI Dashboard",
                },
                {
                  title: "Forecasting and Prediction",
                  text: "Use data to generate prediction models and determine the best course of action in the future.",
                  image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                  alt: "Predictive Analytics Chart",
                },
                {
                  title: "Result-oriented Strategies",
                  text: "We base your marketing strategy on real-world data and success metrics. We consistently monitor existing patterns to predict future trends.",
                  image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                  alt: "Strategic Planning Board",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  ref={addToFeatureRefs}
                  className="group relative"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-orange-400/20 to-amber-400/20 rounded-4xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="relative bg-white rounded-4xl p-8 border border-orange-200 shadow-lg shadow-inner group-hover:shadow-[0_10px_30px_rgba(234,88,12,0.4)] group-hover:-translate-y-3 group-hover:scale-105 transition-all duration-300">
                    <div className="flex flex-col justify-between h-full space-y-6">
                      <div className="relative">
                        <img
                          src={benefit.image}
                          alt={benefit.alt}
                          className="w-full h-60 object-contain object-center rounded-xl"
                          onError={(e) => { e.target.src = "https://via.placeholder.com/300x200?text=Image+Not+Found"; }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/10 to-transparent rounded-xl"></div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-orange-600">{benefit.title}</h3>
                        <p className="text-base text-gray-900 font-medium leading-loose">{benefit.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={addToSectionRefs} className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-orange-50 to-amber-50 relative">
        <div className="max-w-7xl mx-auto relative">
          <div className="space-y-10">
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl flex items-center justify-center shadow-xl rotate-3">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <span className="text-orange-600 font-bold text-sm uppercase tracking-widest">Our Analytics Services</span>
                  <div className="w-24 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 mt-1"></div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Analysis of a Funnel",
                  image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                  alt: "Funnel Analysis",
                  description: "Using a comprehensive digital analytics dashboard, we examine the sequence of steps visitors take on your website, find bottlenecks, drop-off spots, and other difficulties, and design ways to remedy them for a greater conversion rate.",
                },
                {
                  title: "Analysis of Channels",
                  image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                  alt: "Channel Analysis",
                  description: "We investigate the sales and marketing challenges affecting your various organization channels and provide actionable steps.",
                },
                {
                  title: "Analyze the Content",
                  image: "/anal3.jpg",
                  alt: "Content Analysis",
                  description: "Complete content analysis allows us to identify content gaps and develop a more inclusive and goal-oriented content strategy.",
                },
                {
                  title: "Auditing of Digital Marketing",
                  image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                  alt: "Digital Marketing Audit",
                  description: "A detailed audit by us provides you with a birds-eye perspective of the benefits and drawbacks of your current digital marketing analytics method.",
                },
                {
                  title: "Optimization & Testing",
                  image: "/anal6.jpg",
                  alt: "Optimization and Testing",
                  description: "No digital marketing analytics plan is complete unless it includes a testing cycle to optimize the growing methods.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  ref={addToCardRefs}
                  className="group relative"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-orange-400/20 to-amber-400/20 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="relative bg-white rounded-3xl p-6 border border-orange-200 shadow-lg group-hover:shadow-[0_10px_30px_rgba(234,88,12,0.4)] group-hover:-translate-y-3 group-hover:scale-105 transition-all duration-300">
                    <div className="flex flex-col space-y-4">
                      <div className="relative">
                        <img
                          src={service.image}
                          alt={service.alt}
                          className="w-full h-40 object-cover rounded-xl"
                          onError={(e) => { e.target.src = "https://via.placeholder.com/300x160?text=Image+Not+Found"; }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent rounded-xl"></div>
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold text-orange-600 group-hover:text-orange-700 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-700 text-sm leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

     {/* Advantages & Solutions Section */}
<section ref={addToSectionRefs} className="py-20 bg-gradient-to-br from-orange-50 to-amber-50 px-4 md:px-8 lg:px-16">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
      <div ref={addToCardRefs} className="lg:col-span-2 relative group">
        <div className="absolute -inset-2 bg-gradient-to-r from-orange-400/20 to-amber-400/20 rounded-4xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
        <div className="relative bg-white rounded-4xl p-8 border border-orange-200 shadow-lg shadow-inner group-hover:shadow-[0_10px_30px_rgba(234,88,12,0.4)] group-hover:-translate-y-3 group-hover:scale-105 transition-all duration-400">
          <div className="flex flex-col justify-between h-full space-y-6">
           
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/10 to-transparent rounded-xl"></div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-2 rounded-full">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-orange-600">The Advantages of Our Analytics</h3>
              </div>
              <p className="text-base text-gray-900 font-medium leading-loose">
                Marketing analytics offers effective learning and marketing capability expansion to regulate marketing performance.
              </p>
              <div className="space-y-4">
                {[
                  "Intelligence and segmentation of customers",
                  "Multi-Channel Tracking, Cross-Channel Tracking, Cross-device Tracking",
                  "Modeling of attribution.",
                  "Analysis of revenue funnels and marketing performance.",
                  "Campaign evaluation, content evaluation, CRO, and A/B testing.",
                  "Analysis of advertising, budget control, and ROAS analysis.",
                  "SEO and organic research.",
                  "Listening to and analyzing social media.",
                  "Forecasting, optimization, and predictive analytics are all examples of predictive analytics.",
                  "Competitive analysis and market research.",
                ].map((item, index) => (
                  <div key={index} ref={addToFeatureRefs} className="flex items-start">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-1.5 rounded-full mr-3 flex-shrink-0 mt-0.5">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-base text-gray-900 font-medium leading-loose">{item}</span>
                  </div>
                ))}
            
            </div>
          </div>
        </div>
      </div>
      <div ref={addToCardRefs} className="relative group">
        <div className="absolute -inset-2 bg-gradient-to-r from-orange-400/20 to-amber-400/20 rounded-4xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
        <div className="relative bg-white rounded-4xl p-8 border border-orange-200 shadow-lg shadow-inner group-hover:shadow-[0_10px_30px_rgba(234,88,12,0.4)] group-hover:-translate-y-3 group-hover:scale-105 transition-all duration-400">
          <div className="flex flex-col justify-between h-full space-y-6">
           
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/10 to-transparent rounded-xl"></div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-2 rounded-full">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-orange-600">Our Marketing Analytics Solutions</h3>
              </div>
              <p className="text-base text-gray-900 font-medium leading-loose">
                As a marketing analytics consultant, I assist a variety of marketing clouds and analytic tools, such as:
              </p>
              <div className="space-y-3">
                {[
                  "Marketing systems, including Google Marketing Cloud, Adobe Marketing Cloud, SalesForce, HubSpot, and Marketo.",
                  "Analytics platforms include Google Analytics 360, Adobe Analytics, Google Data Studio, Supermetrics, Tableau, Power BI, Kissmetrics, Moz, and SEMRush.",
                  "Platforms for advertising: Google Ads, AdRoll, Criteo, Kenshoo, Facebook Advertising, Smartly.io.",
                ].map((item, index) => (
                  <div key={index} ref={addToFeatureRefs} className="flex items-start">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-1.5 rounded-full mr-2 flex-shrink-0 mt-0.5">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-base text-gray-900 font-medium leading-loose">{item}</span>
                  </div>
                ))}
             
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

export default Analytics;