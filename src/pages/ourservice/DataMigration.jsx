import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Zap, Shield, Layers, Rocket, Eye, ArrowRight, Search } from "lucide-react";
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

// Placeholder images (replace with local assets if needed)
const DataMigrationImg = "/datamitigation.jpeg";
const BenefitsImg = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500";
const ProcessImg = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500";
const SolutionsImg = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500";

const DataMigration = () => {
  const heroRef = useRef(null);
  const sectionRefs = useRef([]);
  const cardRefs = useRef([]);
  const featureRefs = useRef([]);
  const clientsRef = useRef(null);
  const scrollRef = useRef(null);
  const processHeadingRef = useRef(null);
  const timelineRefs = useRef([]);

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
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-orange-200">
            <Layers className="w-5 h-5 text-orange-500 mr-2" />
            <span className="text-orange-600 font-semibold">Migration Excellence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Data Migration Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Streamline your business processes with our seamless data migration services, ensuring efficiency and scalability.
          </p>
          <button className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center mx-auto">
            Get Started
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Intro Section */}
      <section ref={addToSectionRefs} className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
                <Zap className="w-5 h-5 text-orange-600 mr-2" />
                <span className="text-orange-600 font-semibold">Data Migration</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
                DATA MIGRATION
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  For over a decade, Eagle Eye Tech has provided unique technical solutions for data migration. Our experts ensure smooth integration with existing systems, scalability, and flexibility for future growth.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We focus on ROI by executing data migration accurately and efficiently, minimizing disruptions and maximizing business value.
                </p>
                <div
                  ref={addToCardRefs}
                  className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl p-8 border-l-4 border-orange-400 shadow-xl"
                >
                  <h3 className="text-2xl font-bold mb-4 text-orange-600 flex items-center">
                    <Rocket className="w-6 h-6 mr-2" />
                    Migration Expertise
                  </h3>
                  <p className="text-lg text-gray-700">
                    Our team collaborates with you to deliver tailored migration solutions that enhance data consistency and business efficiency.
                  </p>
                </div>
              </div>
            </div>
            <div ref={addToCardRefs} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={DataMigrationImg}
                  alt="Data Migration"
                  className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
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
                Benefits of Data Migration
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Ensuring Integrity Of Data",
                    desc: "Consistent, structured, and organized data for meaningful insights.",
                    icon: <Check className="w-6 h-6 text-white" />,
                  },
                  {
                    title: "Cost & Time Savings",
                    desc: "Efficient data transfers reduce operational costs with free consultation.",
                    icon: <Zap className="w-6 h-6 text-white" />,
                  },
                  {
                    title: "Enhanced Decision-Making",
                    desc: "Accurate reports for stronger data-driven decisions.",
                    icon: <Eye className="w-6 h-6 text-white" />,
                  },
                  {
                    title: "The Digital Transform",
                    desc: "Innovative data management solutions for a competitive edge.",
                    icon: <Rocket className="w-6 h-6 text-white" />,
                  },
                ].map((benefit, idx) => (
                  <div
                    key={idx}
                    ref={addToCardRefs}
                    className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-orange-100"
                  >
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-3 rounded-2xl w-12 h-12 flex items-center justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-orange-600 mb-2">{benefit.title}</h3>
                    <p className="text-gray-700">{benefit.desc}</p>
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
              <span className="text-orange-600 font-semibold">Migration Process</span>
            </div>
            <h2
              ref={processHeadingRef}
              className="text-4xl md:text-5xl font-bold text-orange-600 mb-4"
            >
              Process Of Data Migration
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Business Requirements",
                desc: "We collaborate with your teams to define requirements and scope the migration process.",
              },
              {
                title: "Provide a Solution & a Plan",
                desc: "We design a detailed migration plan and mapping strategy to ensure smooth execution.",
              },
              {
                title: "Execution",
                desc: "Using modern tools and in-house solutions, we transfer data from old systems to new ones.",
              },
              {
                title: "Data Validation",
                desc: "We employ rigorous testing and validation to ensure complete and accurate data migration.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                ref={addToCardRefs}
                className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-orange-100"
              >
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-3 rounded-2xl w-12 h-12 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-orange-600 mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section ref={addToSectionRefs} className="py-20 bg-gradient-to-br from-orange-50 to-amber-50 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
                <Eye className="w-5 h-5 text-orange-600 mr-2" />
                <span className="text-orange-600 font-semibold">Our Solutions</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
                Data Migration Solutions
              </h2>
              <div className="space-y-8">
                {[
                  {
                    title: "Solutions That Are Unique",
                    desc: "We design migration strategies tailored to your specific business model and data requirements.",
                  },
                  {
                    title: "Data Migration That Is Secure",
                    desc: "We follow best practices and security protocols to ensure safe data movement.",
                  },
                ].map((solution, idx) => (
                  <div
                    key={idx}
                    ref={addToCardRefs}
                    className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-orange-100"
                  >
                    <div className="bg-gradient-to-r from-orange-400 to-amber-500 p-4 rounded-2xl w-14 h-14 flex items-center justify-center mb-6">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-orange-600">{solution.title}</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">{solution.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div ref={addToCardRefs} >
         
               <img
  src={SolutionsImg}
  alt="Solutions"
  className="w-full h-96 mt-50 rounded-lg"
/>

               
            
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
              Our Data Migration Services
            </h2>
          </div>
          <div className="relative border-l-4 border-dotted border-orange-400 ml-10">
            {[
              {
                title: "Analysis",
                desc: "We study your systems to define requirements for a safe and effective migration.",
                icon: <Search className="w-6 h-6 text-white" />,
              },
              {
                title: "Planning",
                desc: "We create a detailed migration plan to minimize risks and errors.",
                icon: <Eye className="w-6 h-6 text-white" />,
              },
              {
                title: "Migration",
                desc: "We execute data transfers using industry tools or custom solutions.",
                icon: <Zap className="w-6 h-6 text-white" />,
              },
              {
                title: "Post-Migration",
                desc: "We validate data, inspect systems, and decommission legacy systems.",
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

export default DataMigration;