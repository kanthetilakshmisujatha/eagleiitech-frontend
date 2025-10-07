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
const AutomationMainImg = "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop&auto=format";
const TestingFrameworkImg = "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=600&h=400&fit=crop&auto=format";
const AutomationProcessImg = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format";
const QualityAssuranceImg = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format";
const TestReportsImg = "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&auto=format";
const TeamCollabImg = "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop&auto=format";

const Automation = () => {
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
            <span className="text-orange-600 font-semibold">Automation Excellence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Streamline with Automation Testing
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Accelerate your software delivery with our cutting-edge automation testing solutions. Our expert team ensures flawless performance, reduced costs, and faster releases with precision and reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center mx-auto">
              Start Automating Now
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
                  Automation Testing
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  Automation testing is an approach to test & compare the actual results of a software functioning to predict the outcome. To yield test results through test scripts or other automated testing tools, industry professionals believe that automation testing is a process to automate repetitive processes & other testing jobs that are tough to complete manually.
                </p>
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-2xl border-l-4 border-orange-500">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Services for automation testing include test planning, tool selection, test environment set up, test data preparation, test script creation and maintenance, and reporting. Eagle Eye tech has been providing full-range test automation services to assist organizations in reducing testing time and costs for over a decade
                  </p>
                  <h3 className="text-xl font-bold text-orange-600 mb-4">Advantages Of Automation</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-orange-500 mr-2" />
                      Keyword Research & Analysis
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-orange-500 mr-2" />
                      Competitor Analysis
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-orange-500 mr-2" />
                      On-Page SEO
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-orange-500 mr-2" />
                      Video Marketing
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-bold">Automation Excellence</h3>
                  <p className="text-sm opacity-90">Streamline your testing process</p>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-100 rounded-full -z-10"></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-orange-200 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced with better layout */}
      <section ref={addToSectionRefs} className="py-24 bg-gradient-to-br from-orange-50 to-amber-50 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <Settings className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-orange-600 mb-4">
              Eagle Eye Tech Performs Various Types Of Automation
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div ref={addToCardRefs} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={TestingFrameworkImg}
                  alt="Automation Framework"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-bold">Advanced Testing Framework</h3>
                  <p className="text-sm opacity-90">Comprehensive automation solutions</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  icon: Target,
                  title: "Automation Functional Testing",
                  desc: "Eagle Eye Tech executes automated regression testing to ensure that newly added features do not interfere with the rest of the program's functionality.",
                  color: "from-orange-500 to-amber-500"
                },
                {
                  icon: Rocket,
                  title: "Automated Performance Testing",
                  desc: "Eagle Eye Tech test automation team conducts tasks to assure the stability & high performance of your product.",
                  color: "from-amber-500 to-orange-500"
                },
                {
                  icon: Shield,
                  title: "Testing for Automation Integration",
                  desc: "Our professionals assess software integrations to assure seamless end-to-end processes of your integrated applications.",
                  color: "from-orange-600 to-amber-600"
                }
              ].map((service, index) => (
                <div
                  key={index}
                  ref={addToCardRefs}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border-l-4 border-orange-500 group hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`bg-gradient-to-r ${service.color} p-3 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-orange-600">{service.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced grid cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Compatibility Testing Automation",
                desc: "To ensure that the software's user interface and functionality render correctly in diverse target contexts, our engineers verify its compatibility with various aspects.",
                bg: "bg-orange-500",
                icon: TestTube,
                img: AutomationProcessImg
              },
              {
                title: "Software Security Automation",
                desc: "Eagle Eye Tech testing engineers automate cybersecurity checks to guarantee your software is not vulnerable to common security vulnerabilities.",
                icon: Shield,
                bg: "bg-amber-500",
                img: QualityAssuranceImg
              },
              {
                title: "Continuous Integration Testing",
                desc: "Seamless integration with CI/CD pipelines to ensure automated testing at every stage of development and deployment.",
                icon: Code,
                bg: "bg-orange-600",
                img: TestReportsImg
              }
            ].map((service, index) => (
              <div
                key={index}
                ref={addToCardRefs}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className={`absolute top-4 right-4 ${service.bg} w-12 h-12 rounded-xl flex items-center justify-center`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-xl text-orange-600 mb-3">{service.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced styling */}
      <section ref={addToSectionRefs} className="py-24 bg-white px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              ref={addToCardRefs}
              className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-3xl shadow-xl"
            >
              <h3 className="text-3xl font-bold text-orange-600 mb-8 flex items-center">
                <Eye className="w-8 h-8 mr-3" />
                Why Choose Eagle Eye Tech
              </h3>
              <div className="space-y-4">
                {[
                  "Experience in software testing & test automation services",
                  "Experience with robust test automation tools like Selenium, Apache JMeter & Postman",
                  "Custom test automation framework development",
                  "Expertise across multiple industries including healthcare, financial services, and telecommunications",
                  "Years of professional experience in handling complex testing challenges"
                ].map((item, index) => (
                  <div key={index} ref={addToFeatureRefs} className="flex items-start group">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-1.5 rounded-full mr-4 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              ref={addToCardRefs}
              className="bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-3xl shadow-xl"
            >
              <h3 className="text-3xl font-bold text-orange-600 mb-8 flex items-center">
                <Layers className="w-8 h-8 mr-3" />
                Software Types For Automation
              </h3>
              <div className="space-y-4">
                {[
                  "Mobile Applications (iOS & Android)",
                  "Web Applications & Progressive Web Apps",
                  "Cloud-based Applications & SaaS Platforms",
                  "Desktop Applications & Enterprise Software",
                  "Business Intelligence & Analytics Software",
                  "Customer Relationship Management Systems"
                ].map((item, index) => (
                  <div key={index} ref={addToFeatureRefs} className="flex items-start group">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-1.5 rounded-full mr-4 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Planning Section - Enhanced */}
      <section ref={addToSectionRefs} className="py-24 bg-gradient-to-br from-orange-50 to-amber-50 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <Award className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Premium Services</span>
            </div>
            <h2
              ref={strategicHeadingRef}
              className="text-4xl md:text-5xl font-bold mb-6 text-orange-600"
            >
              Our Automation Services For Testing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive automation solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Reduced Cost For Test Automation",
                img: TestingFrameworkImg,
                desc: "Eagle Eye tech test automation professionals enhance the return on investment of your test automation project by outlining the possible test automation coverage and choosing effective frameworks."
              },
              {
                title: "Business-Suitable Timelines",
                img: AutomationProcessImg,
                desc: "We work according to your timelines, setting up test environments, writing test scenarios and scripts, and delivering all release and regression tests within iteration deadlines."
              },
              {
                title: "Quality Based On KPIs",
                img: QualityAssuranceImg,
                desc: "Eagle Eye Tech software testing professionals measure testing efficiency against specific KPIs and deliver monthly updates on their fulfillment to ensure excellent performance."
              },
              {
                title: "Customized Automated Testing Software",
                img: TestReportsImg,
                desc: "Our experts examine the efficacy of your approaches and frameworks, switching to alternative technologies and optimizing your automated testing toolkit."
              },
              {
                title: "Development Team Collaboration",
                img: TeamCollabImg,
                desc: "Our test automation experts communicate with your in-house or third-party development and QA teams to ensure operations are prioritized and scheduled appropriately."
              }
            ].map((item, index) => (
              <div
                key={index}
                ref={addToCardRefs}
                className={`bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-orange-600 mb-4">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
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

export default Automation;