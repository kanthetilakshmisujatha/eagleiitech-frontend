import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Zap, Shield, Layers, Rocket, Eye, ArrowRight } from "lucide-react";
import cisco from "../../assets/cisco.png";
import verizon from '../../assets/version.png';
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
const AppDevelopmentImg = "/searchen1.webp";
const PlanningImg = "/searche2.webp";
const TestingImg = "/onepage.jpg";
const MaintenanceImg = "/web2.0.jpg";
const BenefitsImg = "/searchen3.webp";
const branding = "/branding.jpg";
const lead = "/leads.jpg";
const eco="/economic.jpg"

const SearchEngine = () => {
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
        gsap.to(feature, {
          y: 10,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }
    });

    // // Strategic heading typewriter effect
    // const strategicHeading = strategicHeadingRef.current;
    // if (strategicHeading) {
    //   const text = strategicHeading.textContent;
    //   strategicHeading.textContent = "";
    //   ScrollTrigger.create({
    //     trigger: strategicHeading,
    //     start: "top 80%",
    //     onEnter: () => {
    //       let i = 0;
    //       const typeWriter = () => {
    //         if (i < text.length) {
    //           strategicHeading.textContent += text.charAt(i);
    //           i++;
    //           setTimeout(typeWriter, 50);
    //         }
    //       };
    //       typeWriter();
    //     },
    //   });
    // }

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
            <span className="text-orange-600 font-semibold">SEO Excellence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Search Engine Optimization
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Eagle Eye Tech delivers cutting-edge SEO solutions to boost your online visibility, drive organic traffic, and maximize business growth.
          </p>
          <button className="group bg-gradient-to-r from-orange-500 to-amber-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center mx-auto">
            Get Started
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Development Section - Interactive Hover Cards */}
      <section ref={addToSectionRefs} className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
                <Zap className="w-5 h-5 text-orange-600 mr-2" />
                <span className="text-orange-600 font-semibold">SEO Solutions</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
                Boost Your Visibility with Expert SEO
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  A stunning website is only effective if it reaches the right audience. Our SEO strategies ensure your site ranks high on search engines, driving targeted traffic.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Navigating the complexities of SEO can be daunting with ever-changing algorithms. Our experts combine advanced keyword research, local SEO optimization, and user-focused content to deliver measurable results.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  At Eagle Eye Tech, we craft tailored SEO campaigns to elevate your brand, increase conversions, and boost revenue. Start dominating search results today with our proven SEO services.
                </p>
                <div
                  ref={addToCardRefs}
                  className="group relative bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl p-8 shadow-xl overflow-hidden"
                >
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 to-amber-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  <h3 className="text-2xl font-bold mb-4 text-orange-600 flex items-center">
                    <Rocket className="w-6 h-6 mr-2" />
                    Data-Driven SEO Success
                  </h3>
                  <p className="text-lg text-gray-700">
                    Our SEO experts analyze your website’s performance, optimize for search engines, and implement data-driven strategies to ensure top rankings and sustained growth.
                  </p>
                </div>
              </div>
            </div>
            <div ref={addToCardRefs} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={AppDevelopmentImg}
                  alt="SEO Solutions"
                  className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { title: "Keyword Research", desc: "Identify high-impact keywords to drive targeted traffic." },
              { title: "Content Optimization", desc: "Craft compelling, SEO-friendly content for better rankings." },
              { title: "Technical SEO", desc: "Optimize site structure for fast indexing and performance." },
              { title: "Link Building", desc: "Build authoritative backlinks to boost domain authority." },
              { title: "Local SEO", desc: "Target local audiences to drive foot traffic and sales." },
              { title: "Analytics & Reporting", desc: "Track performance with detailed SEO analytics." },
            ].map((item, index) => (
              <div
                key={index}
                ref={addToCardRefs}
                className="group relative bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-3xl shadow-xl hover:shadow-2xl group-hover:from-orange-100 group-hover:to-amber-100 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 to-amber-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <h3 className="text-xl font-bold text-orange-600 mb-4 group-hover:-translate-y-2 transition-transform duration-300">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* Services Section */}
<section
  ref={addToSectionRefs}
  className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 px-6 md:px-12 lg:px-20"
>
  {/* Heading */}
  <div className="text-center mb-14">
    <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
      Search Engine Optimization Services
    </h1>
    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
      Boost your online visibility and drive more traffic with our result-driven SEO strategies.
    </p>
  </div>

  {/* Service List */}
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
    {[
      "Search Engine Marketing Campaigns",
      "SEO Off-Page Optimization",
      "Search Engine Results",
      "Traffic from Search Engines",
      "Search Engine Interactions",
      "Conversion Rates in Search Engines",
      "Content Marketing for Search Engines",
    ].map((item, index) => (
      <div
        key={index}
        ref={addToFeatureRefs}
        className="flex items-center bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-orange-100"
      >
        <div className="bg-gradient-to-r from-orange-500 to-amber-600 p-2 rounded-full mr-4 flex-shrink-0">
          <Check className="w-5 h-5 text-white" />
        </div>
        <span className="text-gray-800 font-medium">{item}</span>
      </div>
    ))}
  </div>

  {/* Why Choose Us Card */}
  <div
    ref={addToCardRefs}
    className="bg-white p-10 rounded-3xl shadow-2xl border-2 border-orange-200 hover:border-orange-400 transition-all max-w-4xl mx-auto"
  >
    <h3 className="text-3xl font-bold text-orange-600 mb-6 text-center">
      Why Choose EAGLE EYE TECH For SEO Services?
    </h3>
    <p className="text-gray-700 mb-8 text-center leading-relaxed">
      Eagle Eye Tech has a team of SEO specialists with a proven track record of delivering effective SEO results. 
      Our experts constantly adapt to the latest industry trends and ensure your brand stays ahead of the competition.
    </p>
    <div className="grid md:grid-cols-2 gap-4">
      {[
        "Search Engine Optimization Expertise",
        "On-Time Delivery of Perfection",
        "Strategic SEO Solution",
        "Increase Traffic with SEO Experts",
      ].map((item, index) => (
        <div
          key={index}
          ref={addToFeatureRefs}
          className="flex items-center bg-orange-50 rounded-xl p-3 hover:bg-orange-100 transition"
        >
          <div className="bg-gradient-to-r from-orange-500 to-amber-600 p-2 rounded-full mr-3 flex-shrink-0">
            <Check className="w-5 h-5 text-white" />
          </div>
          <span className="text-gray-800 font-medium">{item}</span>
        </div>
      ))}
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
                <span className="text-orange-600 font-semibold">Our Search Engine Optimization (SEO) Services</span>
              </div>
              <p
               
                className="text-4xl md:text-xl font-bold mb-6 text-orange-600"
              >
                Search Engine Optimization helps you get organic traffic to your website without spending a dime on paid advertisements. SEO Services allows you to reach a limitless number of prospective consumers for your products and services from all over the world. We provide Digital Marketing services that are strong, efficient, and productive. A glimpse of specifics is listed below.
              </p>
            </div>
            <div ref={addToCardRefs} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={PlanningImg}
                  alt="Strategic Planning"
                  className="w-full h-70 object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "On-Page Optimization",
                img: AppDevelopmentImg,
                desc: "On-Page Optimization aids in the fast and efficient indexing of webpages in search engines.",
              },
              {
                title: "Audience Reach",
                img: TestingImg,
                desc: "SEO increases website exposure and brings in more visitors.",
              },
              {
                title: "Web 2.0 Optimization",
                img: MaintenanceImg,
                desc: "Indeed, there are many traffic referrals to a website on Web 2.0, which will help you achieve a higher position.",
              },
              {
                title: "Branding",
                img: branding,
                desc: "SEO can help you brand your goods or service.",
              },
              {
                title: "High-Quality Leads",
                img: lead,
                desc: "Search engine optimization aids in the generation of high-quality leads for businesses.",
              },
              {
                title: "Economical",
                img: eco,
                desc: "You don't have to spend money on SEO regularly, as it is less expensive than PPC.",
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
                  className="w-full h-70 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-400/20"></div>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
                <Rocket className="w-5 h-5 text-orange-600 mr-2" />
                <span className="text-orange-600 font-semibold">Required SEO Expert Skills</span>
              </div>
              <p className="text-2xl md:text-xl font-bold mb-8 text-orange-600">
                To become a search engine optimization professional, you must have years of experience. Know how our expert professionals perform search engine optimization such as on-page SEO, off-page SEO, content management, and site structure if you wish to seek SEO services from us.
              </p>
              <div className="space-y-4">
                {[
                  "Research Oriented - SEO necessitates a significant amount of research time. Our SEO professionals have up-to-date knowledge of the latest SEO Ranking Factors.",
                  "Strong Analytical Ability - Our SEO specialists are capable of interpreting & comprehending complex data provided by Google Analytics.",
                  "SEO Implementation Stages - Eagle Eye Tech SEO specialists are aware of the various levels of SEO implementation. Our experts are familiar with all of the webmaster suggestions and techniques.",
                ].map((benefit, index) => (
                  <div
                    key={index}
                    ref={addToFeatureRefs}
                    className="flex items-start p-6 bg-gradient-to-r from-white to-orange-50 rounded-2xl hover:shadow-lg transition-all duration-300 border-l-4 border-orange-400 group"
                  >
                    <div className="bg-gradient-to-r from-orange-500 to-amber-600 p-2 rounded-full mr-4 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
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
            <div ref={scrollRef} className="flex space-x-12 whitespace-nowrap">
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

      <style jsx>{`
        @media (max-width: 640px) {
          h3 {
            font-size: 1.25rem !important;
          }
          p {
            font-size: 0.875rem !important;
          }
        }
        .group {
          will-change: transform, box-shadow, background;
        }
        .whitespace-nowrap {
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
};

export default SearchEngine;