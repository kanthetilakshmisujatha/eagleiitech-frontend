import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Zap, Shield, Layers, Rocket, Eye, ArrowRight, Search } from "lucide-react";
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
  { name: 'Cisco', logo: cisco },
  { name: 'Verizon', logo: verizon },
  { name: 'Wells Fargo', logo: wells },
  { name: 'Fidelity', logo: fidelity },
  { name: 'HCL', logo: hcl },
  { name: 'Infosys', logo: infosys },
];

// Placeholder images
const DataMigrationImg = "/or1.jpg";
const BenefitsImg = "/or2.webp";

const SolutionsImg = "/or3.webp";

const OnlineReputation = () => {
  const heroRef = useRef(null);
  const sectionRefs = useRef([]);
  const cardRefs = useRef([]);
  const featureRefs = useRef([]);
  const clientsRef = useRef(null);
  const scrollRef = useRef(null);
  const processHeadingRef = useRef(null);
  const timelineRefs = useRef([]);
  const addToBenefitsRef = useRef(null);

  useEffect(() => {
    // Hero animation
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 100, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
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

    // Feature animations (for Benefits section)
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
      }
    });

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

    // Additional Benefits card animations
    featureRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
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

    // Timeline animations for Services section
    timelineRefs.current.forEach((el, i) => {
      if (el) {
        gsap.fromTo(
          el,
          { x: i % 2 === 0 ? -100 : 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            delay: i * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    // Cleanup ScrollTrigger
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf([scrollRef.current, ...cardRefs.current, ...featureRefs.current, ...timelineRefs.current]);
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

  const addToTimelineRefs = (el) => {
    if (el && !timelineRefs.current.includes(el)) {
      timelineRefs.current.push(el);
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
            <span className="text-orange-600 font-semibold text-lg">Reputation Excellence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Online Reputation Management
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 mb-8 max-w-4xl mx-auto leading-relaxed">
            Elevate your brand’s image with Eagle Eye Tech’s expert ORM services. We craft strategies to enhance your online presence, build trust, and drive business success across digital platforms.
          </p>
          <button className="group bg-gradient-to-r from-orange-500 to-amber-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center mx-auto text-lg">
            Start Protecting Your Brand
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Intro Section */}
      <section ref={addToSectionRefs} className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
                <Zap className="w-5 h-5 text-orange-600 mr-2" />
                <span className="text-orange-600 font-semibold">Online Reputation</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
                Online Reputation Management
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Eagle Eye Tech is a leading provider of online reputation management services, offering a full spectrum of online public relations, brand management, and digital marketing solutions to small, medium, and global corporations.
                </p>
              </div>
            </div>
            <div ref={addToCardRefs} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={DataMigrationImg}
                  alt="Online Reputation Management"
                  className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Found"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={addToSectionRefs} className="py-20 bg-gradient-to-br from-orange-50 to-amber-50 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div ref={addToCardRefs} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={BenefitsImg}
                  alt="Benefits"
                  className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Found"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 to-amber-400/30"></div>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
                <Rocket className="w-5 h-5 text-orange-600 mr-2" />
                <span className="text-orange-600 font-semibold">Key Benefits</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-orange-600">
                Why Choose ORM?
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Eagle Eye Tech has assisted small businesses, entrepreneurs, and global organizations in achieving a balanced online reputation across their digital platforms.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Boost Profits",
                    desc: "Strengthen your brand’s image to drive higher revenue.",
                    icon: <Check className="w-6 h-6 text-white" />,
                  },
                  {
                    title: "Reduce Risks",
                    desc: "Minimize exposure to negative feedback and business setbacks.",
                    icon: <Zap className="w-6 h-6 text-white" />,
                  },
                  {
                    title: "Increase Trust",
                    desc: "Build market credibility and customer loyalty.",
                    icon: <Eye className="w-6 h-6 text-white" />,
                  },
                  {
                    title: "Drive Growth",
                    desc: "Attract more clients with a positive digital presence.",
                    icon: <Rocket className="w-6 h-6 text-white" />,
                  },
                  {
                    title: "Enhance Reliability",
                    desc: "Gain valuable feedback to refine your brand.",
                    icon: <Shield className="w-6 h-6 text-white" />,
                  },
                  {
                    title: "Expand Visibility",
                    desc: "Increase online reach to target the right audience.",
                    icon: <Search className="w-6 h-6 text-white" />,
                  },
                ].map((benefit, idx) => (
                  <div
                    key={idx}
                    ref={addToFeatureRefs}
                    className="relative bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-200 group hover:-rotate-1"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-2 rounded-full flex-shrink-0 group-hover:scale-105 transition-transform">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-orange-600">{benefit.title}</h3>
                        <p className="text-gray-700 text-sm">{benefit.desc}</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400 to-amber-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={addToSectionRefs} className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
              <Shield className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">ORM Process</span>
            </div>
         
            <h2
              ref={processHeadingRef}
              className="text-4xl md:text-5xl font-bold text-orange-600 mb-4"
            >
              Our Unique ORM Skills
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              To deliver result-oriented Online Reputation Management Services, our team stays updated with social media trends and search engine optimization techniques.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Brand Reputation Expertise",
                desc: "Our experts leverage social media and search engine strategies to enhance your brand’s reputation.",
              },
              {
                title: "Social Media & SEO Insights",
                desc: "We perform deep analysis of social media and search engines to optimize your online presence.",
              },
              {
                title: "SEO-Friendly Tactics",
                desc: "Our team uses SEO-friendly approaches to boost your brand’s visibility and credibility.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                ref={addToCardRefs}
                className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-orange-100"
              >
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-orange-600 mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits Section */}
      <section ref={addToSectionRefs} className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div ref={addToCardRefs} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={SolutionsImg}
                  alt="ORM Solutions"
                  className="w-full h-50 object-cover transform hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Found"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 to-amber-400/30"></div>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
                <Rocket className="w-5 h-5 text-orange-600 mr-2" />
                <span className="text-orange-600 font-semibold">Core ORM Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-orange-600">
                Our ORM Solutions
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                We provide comprehensive ORM services to enhance your brand’s digital presence and build lasting trust with your audience.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Reputation Management",
                  "SEO Optimization",
                  "Social Media Strategy",
                  "Brand Monitoring",
                  "Content Creation",
                  "Crisis Management",
                ].map((benefit, index) => (
                  <div
                    key={index}
                    ref={addToFeatureRefs}
                    className="relative bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-200 group hover:-rotate-1"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-2 rounded-full flex-shrink-0 group-hover:scale-105 transition-transform">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-800 font-medium text-base leading-tight">{benefit}</span>
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400 to-amber-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={addToSectionRefs} className="py-20 bg-gradient-to-b from-white via-orange-50 to-white px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
              <Shield className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Our Services</span>
            </div>
        
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
              Hiring ORM Services From Us
            </h2>
          </div>
          <div className="relative border-l-4 border-dotted border-orange-400 ml-10">
            {[
              {
                title: "Create a Positive Image",
                desc: "Building a favorable image is essential for every organization's survival. It's difficult to keep customer faith in your brand while confronting a slew of competition techniques designed to tarnish a company's reputation. Our internet reputation management solution can assist you in acquiring a wide range of good impressions about your business. We reduce the trust gap, allowing you to get more out of your business.",
                icon: <Search className="w-6 h-6 text-white" />,
              },
              {
                title: "Provided Feedback",
                desc: "The three most important aspects of internet reputation management are minimizing a brand's image, collecting more positive reviews, and keeping the same positive image in the market. As a brand reputation management service, we work hard to acquire positive evaluations for your company and keep them positive for a long time, which helps you in the long run.",
                icon: <Eye className="w-6 h-6 text-white" />,
              },
              {
                title: "The Most Effective ORM Service",
                desc: "Unquestionably, a brand's poor image has an impact on a company's productivity and income. Our Online Review Management solution assists firms in emerging from the shadow of a tarnished industry image. The field of ORM is quite broad. To maintain a company's online reputation, one must be well-versed in advertising and marketing. Our organization has extensive knowledge and experience in ORM services, making us an excellent alternative for firms.",
                icon: <Zap className="w-6 h-6 text-white" />,
              },
              {
                title: "Expert Reputation Assessment & Repair",
                desc: "Eagle Eye Tech does reputation analysis and brand image restoration to overcome the company's poor image. Business competitors utilize the negative influence of your goodwill to grow their company volume. We thoroughly examine and restore your brand image to increase your loyalty and trust among your clients.",
                icon: <Check className="w-6 h-6 text-white" />,
              },
            ].map((service, index) => (
              <div
                key={index}
                ref={addToTimelineRefs}
                className="mb-12 ml-8 relative pl-16"
              >
                <div
                  className="absolute -left-16 top-0 w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg text-white transition-transform duration-300 hover:scale-110"
                >
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {service.desc}
                </p>
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

export default OnlineReputation;