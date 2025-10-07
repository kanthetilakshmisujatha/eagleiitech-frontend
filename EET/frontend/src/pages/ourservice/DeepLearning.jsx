// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Check, Zap, Shield, Layers, Rocket, Eye, ArrowRight, Play, Target, Users, Award, Settings, Code, TestTube } from "lucide-react";
// import cisco from '../../assets/cisco.png';
// import verizon from '../../assets/version.png';
// import wells from '../../assets/wells.png';
// import fidelity from '../../assets/fidelity.png';
// import hcl from '../../assets/hcl.png';
// import infosys from '../../assets/infosys.png';
// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// // Client data

//   const clients = [
//     { name: 'Cisco', logo: cisco },
//     { name: 'Verizon', logo: verizon },
//     { name: 'Wells Fargo', logo: wells },
//     { name: 'Fidelity', logo: fidelity },
//     { name: 'HCL', logo: hcl },
//     { name: 'Infosys', logo: infosys },
//   ];

// // Updated images for automation theme
// const AutomationMainImg = "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop&auto=format";
// const TestingFrameworkImg = "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=600&h=400&fit=crop&auto=format";
// const AutomationProcessImg = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format";
// const QualityAssuranceImg = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format";
// const TestReportsImg = "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&auto=format";
// const TeamCollabImg = "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop&auto=format";

// const DeepLearning = () => {
//   const heroRef = useRef(null);
//   const sectionRefs = useRef([]);
//   const cardRefs = useRef([]);
//   const featureRefs = useRef([]);
//   const clientsRef = useRef(null);
//   const scrollRef = useRef(null);
//   const strategicHeadingRef = useRef(null);

//   useEffect(() => {
//     // Enhanced hero animation
//     gsap.fromTo(
//       heroRef.current,
//       { opacity: 0, y: 100 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1.5,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: heroRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );

//     // Section animations
//     sectionRefs.current.forEach((section, index) => {
//       if (section) {
//         gsap.fromTo(
//           section,
//           { opacity: 0, y: 100 },
//           {
//             opacity: 1,
//             y: 0,
//             duration: 1.5,
//             delay: index * 0.2,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: section,
//               start: "top 90%",
//               end: "bottom 20%",
//               toggleActions: "play none none reverse",
//             },
//           }
//         );
//       }
//     });

//     // Card animations with stagger effect
//     cardRefs.current.forEach((card, index) => {
//       if (card) {
//         gsap.fromTo(
//           card,
//           { opacity: 0, y: 80, scale: 0.8 },
//           {
//             opacity: 1,
//             y: 0,
//             scale: 1,
//             duration: 1.2,
//             delay: index * 0.2,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: card,
//               start: "top 95%",
//               end: "bottom 20%",
//               toggleActions: "play none none reverse",
//               once: false,
//             },
//           }
//         );
//       }
//     });

//     // Feature animations with enhanced floating effect
//     featureRefs.current.forEach((feature, index) => {
//       if (feature) {
//         gsap.fromTo(
//           feature,
//           { opacity: 0, x: -60 },
//           {
//             opacity: 1,
//             x: 0,
//             duration: 1.0,
//             delay: index * 0.15,
//             ease: "power2.out",
//             scrollTrigger: {
//               trigger: feature,
//               start: "top 95%",
//               toggleActions: "play none none reverse",
//             },
//           }
//         );
//         gsap.to(feature, {
//           y: 10,
//           duration: 4,
//           repeat: -1,
//           yoyo: true,
//           ease: "sine.inOut",
//         });
//       }
//     });

//     // Strategic heading typewriter effect
//     const strategicHeading = strategicHeadingRef.current;
//     if (strategicHeading) {
//       const text = strategicHeading.textContent;
//       strategicHeading.textContent = "";
//       ScrollTrigger.create({
//         trigger: strategicHeading,
//         start: "top 80%",
//         onEnter: () => {
//           let i = 0;
//           const typeWriter = () => {
//             if (i < text.length) {
//               strategicHeading.textContent += text.charAt(i);
//               i++;
//               setTimeout(typeWriter, 60);
//             }
//           };
//           typeWriter();
//         },
//       });
//     }

//     // Enhanced clients animation
//     gsap.fromTo(
//       clientsRef.current,
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1.2,
//         scrollTrigger: {
//           trigger: clientsRef.current,
//           start: "top 85%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );

//     // Infinite scroll for client logos
//     const scrollElement = scrollRef.current;
//     if (scrollElement) {
//       const totalWidth = scrollElement.scrollWidth / 2;
//       gsap.to(scrollElement, {
//         x: -totalWidth,
//         duration: 30,
//         ease: "none",
//         repeat: -1,
//         modifiers: {
//           x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
//         },
//       });
//     }

//     // Cleanup ScrollTrigger
//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   const addToSectionRefs = (el) => {
//     if (el && !sectionRefs.current.includes(el)) {
//       sectionRefs.current.push(el);
//     }
//   };

//   const addToCardRefs = (el) => {
//     if (el && !cardRefs.current.includes(el)) {
//       cardRefs.current.push(el);
//     }
//   };

//   const addToFeatureRefs = (el) => {
//     if (el && !featureRefs.current.includes(el)) {
//       featureRefs.current.push(el);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-white to-orange-50 overflow-hidden font-sans">
//       {/* Hero Section */}
//       <section
//         ref={heroRef}
//         className="relative min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16"
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-amber-400/10"></div>
//         <div className="relative max-w-6xl mx-auto text-center">
//           <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-orange-200">
//             <Zap className="w-5 h-5 text-orange-600 mr-2" />
//             <span className="text-orange-600 font-semibold">Automation Excellence</span>
//           </div>
//           <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
//             Streamline with Automation Testing
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
//             Accelerate your software delivery with our cutting-edge automation testing solutions. Our expert team ensures flawless performance, reduced costs, and faster releases with precision and reliability.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//             <button className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center mx-auto">
//               Start Automating Now
//               <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Development Section */}
//       <section ref={addToSectionRefs} className="py-24 px-4 md:px-8 lg:px-16 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
//             <div className="order-2 lg:order-1">
//               <div className="relative">
//                 <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-100 rounded-2xl -z-10"></div>
//                 <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
//                 DEEP LEARNING
//                 </h2>
//               </div>
//               <div className="space-y-6">
//                 <p className="text-lg text-gray-700 leading-relaxed font-medium">
//                  Use Deep Learning Solutions To Help Your Growing Business
//                 </p>
//                 <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-2xl border-l-4 border-orange-500">
//                   <p className="text-gray-700 leading-relaxed mb-4">
//                  Deep Learning (DL) is a component of Artificial Intelligence (AI) that mimics the learning technique used by humans to acquire certain types of information. Eagle Eye Tech assists organizations in incorporating DL technology and transforming them into viable commercial endeavors.
                 
//                  </p> 
//                  <p>A Deep Learning solution integrates several layers of complicated neural networks to achieve a goal. It combines the capabilities of voice recognition and computer vision with machine learning. With the ability to process vast amounts of information, computer-based neural networks could operate at a level of efficiency compared to the human brain.</p>
//                  <p>If a deep learning solution is ideal for your company, Eagle Eye Tech may replace your present technology solution & give an interface that delivers accurate data to boost your revenue.</p>
               
//                 </div>
//               </div>
//             </div>
//             <div ref={addToCardRefs} className="order-1 lg:order-2 relative">
//               <div className="relative rounded-3xl overflow-hidden shadow-2xl">
//                 <img
//                   src={AutomationMainImg}
//                   alt="Automation Testing"
//                   className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
//                 />
               
//               </div>
            
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section - Enhanced with better layout */}
//       <section ref={addToSectionRefs} className="py-24 bg-gradient-to-br from-orange-50 to-amber-50 px-4 md:px-8 lg:px-16">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
            
//             <h2 className="text-4xl md:text-5xl font-bold text-orange-600 mb-4">
//              Our Expertise-Based Approach
//             </h2>
//             <p>Our deep learning solutions improve the process to build custom-tailored products that transform your organization’s capabilities.</p>
//           </div>
          
//           <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
//             <div ref={addToCardRefs} className="relative">
//               <div className="relative rounded-3xl overflow-hidden shadow-2xl">
//                 <img
//                   src={TestingFrameworkImg}
//                   alt="Automation Framework"
//                   className="w-full h-96 object-cover"
//                 />
                
//               </div>
//             </div>
            
//             <div className="space-y-8">
//               {[
//                 {
//                   icon: Target,
//                   title: "Data Gathering",
//                   desc: "A neural network is an algorithm that learns on its own with our bespoke solutions as we collect real-world training data from clients to develop enterprise-ready networks.",
//                   color: "from-orange-500 to-amber-500"
//                 },
//                 {
//                   icon: Rocket,
//                   title: "Model Creation",
//                   desc: "We develop solutions that provide accurate predictions based on the obtained data by understanding the principles.",
//                   color: "from-amber-500 to-orange-500"
//                 },
//                 {
//                   icon: Shield,
//                   title: "Our Unique Solution",
//                   desc: "We begin with a neural network and assess its performance in subsequent iterations. These networks aid in the construction of more precise & complicated networks.",
//                   color: "from-orange-600 to-amber-600"
//                 }
//               ].map((service, index) => (
//                 <div
//                   key={index}
//                   ref={addToCardRefs}
//                   className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border-l-4 border-orange-500 group hover:scale-105"
//                 >
                 
//                 </div>
//               ))}
//             </div>
//           </div>

    
//         </div>
//       </section>

//       {/* Features Section - Enhanced styling */}
//       <section ref={addToSectionRefs} className="py-24 bg-white px-4 md:px-8 lg:px-16">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div
//               ref={addToCardRefs}
//               className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-3xl shadow-xl"
//             >
//               <h3 className="text-3xl font-bold text-orange-600 mb-8 flex items-center">
//                 <Eye className="w-8 h-8 mr-3" />
//               How does Deep Learning Benefit Your Organization?
//               </h3>
//               <div className="space-y-4">
//                 {[
//                   "Adaptable systems",
                  
// "A genetic algorithm to solve problems",
// "Use of automation to troubleshoot issues",
// "Cost-cutting strategies that are exact & efficient",
// "High-speed picture processing in real-time",
// "Recognition of optical characters",
// "Detect characteristics and automatically categorize them in images",
// "Intelligent video analysis",
// "Natural language processing AI",
// "Semantic Analysis",
// "Assistive Technology",
// "Hardware integration is extensive",
                  
//                 ].map((item, index) => (
//                   <div key={index} ref={addToFeatureRefs} className="flex items-start group">
//                     <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-1.5 rounded-full mr-4 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
//                       <Check className="w-4 h-4 text-white" />
//                     </div>
//                     <span className="text-gray-700 leading-relaxed">{item}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div
//               ref={addToCardRefs}
//               className="bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-3xl shadow-xl"
//             >
//               <h3 className="text-3xl font-bold text-orange-600 mb-8 flex items-center">
//                 <Layers className="w-8 h-8 mr-3" />
//                Let's Get Started If You Have A Project In Mind
//               </h3>
//               <p>If you have a project in mind, send us an email or connect with us. The more comprehensive your requirement, the more accurate our estimate of what your project will take in terms of time, resources & individuals involved.</p>
//               <div className="space-y-4">
//                 {[
//                   "Development:We assist you in bringing your idea to market faster than the traditional way. We have successfully developed various applications across varied sectors globally. We offer our services to different businesses & domains, adhering to a high-quality solution with on-time delivery.",
//                   "Finalizing Contract:To secure your sensitive data and ideas, we sign NDAs (Non-Disclosure Agreements).",
                  
//                 ].map((item, index) => (
//                   <div key={index} ref={addToFeatureRefs} className="flex items-start group">
//                     <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-1.5 rounded-full mr-4 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
//                       <Check className="w-4 h-4 text-white" />
//                     </div>
//                     <span className="text-gray-700 leading-relaxed">{item}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Strategic Planning Section - Enhanced */}
//       <section ref={addToSectionRefs} className="py-24 bg-gradient-to-br from-orange-50 to-amber-50 px-4 md:px-8 lg:px-16">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
//               <Award className="w-5 h-5 text-orange-600 mr-2" />
//               <span className="text-orange-600 font-semibold">Premium Services</span>
//             </div>
//             <h2
//               ref={strategicHeadingRef}
//               className="text-4xl md:text-5xl font-bold mb-6 text-orange-600"
//             >
//            Our Deep Learning Services
//             </h2>
          
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Classification Of Image Data",
//                 img: TestingFrameworkImg,
//                 desc: "Our bespoke image recognition model can extract data patterns to predict analysis & other similar purposes."
//               },
//               {
//                 title: "Detecting Objects In Images",
//                 img: AutomationProcessImg,
//                 desc: "Our object detection methodology allows the user to detect an attribute in an image to identify a face, shape, edge, and other features. We also provide picture recognition services."
//               },
//               {
//                 title: "NLP (Natural Language Processing)",
//                 img: QualityAssuranceImg,
               
//                 desc: "We create dynamic user experiences that are more accurate and richer because of our improved natural language processing."
//               },
//                 {
//                 title: "Disruptive Technology",
//                 img: TestReportsImg,
//                 desc: "Take a look at how cognitive intelligence may transform data into a huge opportunity. Our experts are capable of providing low-cost deep learning solutions that are effective, efficient & dependable."
//               },
//               {
//                 title: "Providing End-To-End Services",
//                 img: TeamCollabImg,
//                 desc: "te with your in-house or third-party development and QA teams to ensure operations are prioritized and scheduled appropriately."
//               }
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 ref={addToCardRefs}
//                 className={`bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 ${
//                   index === 4 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''
//                 }`}
//               >
//                 <div className="relative h-48 overflow-hidden">
//                   <img
//                     src={item.img}
//                     alt={item.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-orange-600 mb-4">{item.title}</h3>
//                   <p className="text-gray-700 leading-relaxed">{item.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//    {/* Clients Section */}
//          <section ref={clientsRef} className="py-20 px-4 md:px-8 lg:px-16 bg-white">
//            <div className="max-w-6xl mx-auto">
//              <div className="text-center mb-12">
//                <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-6 py-3 mb-6">
//                  <Shield className="w-5 h-5 text-orange-600 mr-2" />
//                  <span className="text-orange-600 font-semibold">Trusted Partners</span>
//                </div>
//                <h2 className="text-3xl font-bold text-orange-600 mb-4">Our Clients</h2>
//                <p className="text-gray-600 text-lg">Trusted by industry leaders worldwide</p>
//              </div>
//              <div className="relative overflow-hidden py-8">
//                <div
//                  ref={scrollRef}
//                  className="flex space-x-12"
//                  style={{ display: "flex", whiteSpace: "nowrap" }}
//                >
//                  {[...clients, ...clients].map((client, index) => (
//                    <div
//                      key={index}
//                      className="flex-shrink-0 w-48 h-24 flex items-center justify-center"
//                    >
//                      <img
//                        src={client.logo}
//                        alt={client.name}
//                        className="max-h-20 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
//                      />
//                    </div>
//                  ))}
//                </div>
//                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
//                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
//              </div>
//            </div>
//          </section>
//     </div>
//   );
// };

// export default DeepLearning;

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Zap, Shield, Layers, Rocket, Eye, ArrowRight, Award, Target, Brain } from "lucide-react";
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

// Updated images for deep learning theme
const NeuralNetworkImg = "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop&auto=format";
const AIImg = "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&auto=format";
const DataProcessingImg = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format";
const MachineLearningImg = "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop&auto=format";
const AnalyticsImg = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format";
const TeamCollabImg = "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop&auto=format";

const DeepLearning = () => {
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

    // Feature animations with enhanced floating effect
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
//           setTimeout(typeWriter, 60);
//         }
//       };
//       typeWriter();
//     },
//   });
// }

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
      {/* Hero Section (matches Manual component) */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-amber-400/10"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-orange-200">
            <Brain className="w-5 h-5 text-orange-600 mr-2" />
            <span className="text-orange-600 font-semibold">Deep Learning Excellence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Transform with Deep Learning Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Leverage cutting-edge neural networks and AI algorithms to transform your business. Our deep learning solutions deliver unprecedented accuracy, efficiency, and scalability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center mx-auto">
              Start Your AI Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Development Section (matches Manual component) */}
      <section ref={addToSectionRefs} className="py-24 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-100 rounded-2xl -z-10"></div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
                  Deep Learning Excellence
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  Transform Your Business with Advanced Neural Networks
                </p>
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-2xl border-l-4 border-orange-500">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Deep Learning represents the frontier of artificial intelligence, mimicking human neural networks to process complex data patterns. Our solutions harness this power to drive innovation and competitive advantage.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Through multi-layered neural architectures, we create intelligent systems capable of computer vision, natural language processing, and predictive analytics at unprecedented scales.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Whether you're looking to enhance existing systems or build groundbreaking AI applications, our deep learning expertise delivers measurable business outcomes.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700">
                <img
                  src={NeuralNetworkImg}
                  alt="Deep Learning Neural Networks"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold">Neural Network Architecture</h3>
                  <p className="text-amber-200">Advanced AI Systems</p>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-100 rounded-full -z-10"></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-orange-200 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section (matches Manual component) */}
      <section ref={addToSectionRefs} className="py-24 bg-gradient-to-br from-orange-50 to-amber-50 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg mb-6">
              <Shield className="w-6 h-6 text-orange-600 mr-2" />
              <span className="text-orange-600 font-bold text-lg">Our AI Methodology</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-orange-600 mb-4">
              Intelligent Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven approach combines cutting-edge research with practical implementation to deliver transformative AI solutions.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="space-y-8">
                {[
                  {
                    icon: Target,
                    title: "Data Intelligence",
                    desc: "We architect sophisticated data pipelines and preprocessing systems to fuel your neural networks with high-quality, structured information.",
                    color: "from-orange-500 to-amber-500"
                  },
                  {
                    icon: Rocket,
                    title: "Model Architecture",
                    desc: "Designing custom neural network architectures optimized for your specific use case and performance requirements.",
                    color: "from-amber-500 to-orange-500"
                  },
                  {
                    icon: Brain,
                    title: "AI Optimization",
                    desc: "Advanced training techniques including transfer learning, hyperparameter optimization, and ensemble methods for maximum accuracy.",
                    color: "from-orange-600 to-amber-600"
                  }
                ].map((service, index) => (
                  <div
                    key={index}
                    ref={addToCardRefs}
                    className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-l-4 border-orange-500"
                  >
                    <div className={`bg-gradient-to-r ${service.color} p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-orange-600">{service.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div ref={addToCardRefs} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={AIImg}
                  alt="AI Development Framework"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-bold">AI Development Platform</h3>
                  <p className="text-amber-200">Scalable & Efficient</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-6 py-3 rounded-full font-bold shadow-lg">
                Neural AI
              </div>
            </div>
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
              How does Deep Learning Benefit Your Organization?
              </h3>
              <div className="space-y-4">
                {[
                  "Adaptable systems",
                  
"A genetic algorithm to solve problems",
"Use of automation to troubleshoot issues",
"Cost-cutting strategies that are exact & efficient",
"High-speed picture processing in real-time",
"Recognition of optical characters",
"Detect characteristics and automatically categorize them in images",
"Intelligent video analysis",
"Natural language processing AI",
"Semantic Analysis",
"Assistive Technology",
"Hardware integration is extensive",
                  
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
               Let's Get Started If You Have A Project In Mind
              </h3>
              <p>If you have a project in mind, send us an email or connect with us. The more comprehensive your requirement, the more accurate our estimate of what your project will take in terms of time, resources & individuals involved.</p>
              <div className="space-y-4">
                {[
                  "Development:We assist you in bringing your idea to market faster than the traditional way. We have successfully developed various applications across varied sectors globally. We offer our services to different businesses & domains, adhering to a high-quality solution with on-time delivery.",
                  "Finalizing Contract:To secure your sensitive data and ideas, we sign NDAs (Non-Disclosure Agreements).",
                  
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


      {/* Strategic Planning Section (matches Manual's "The Advantages Of Our Manual Services") */}
      <section ref={addToSectionRefs} className="py-24 bg-white px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-100 rounded-2xl -z-10"></div>
                <h2
                  ref={strategicHeadingRef}
                  className="text-4xl md:text-5xl font-bold mb-6 text-orange-600"
                >
                 Our Deep Learning Services
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Comprehensive deep learning services designed to solve complex business challenges and drive innovation across industries.
                </p>
              </div>
            </div>
            <div ref={addToCardRefs} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={MachineLearningImg}
                  alt="AI Services"
                  className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold">AI Service Delivery</h3>
                  <p className="text-amber-200">End-to-End Solutions</p>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-100 rounded-full -z-10"></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-orange-200 rounded-2xl -z-10"></div>
            </div>
          </div>
     <div className="relative">
  {/* Four-Column Grid for Cards */}
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
    {[
      {
        title: "Classification Of Image Data",
        desc: "Our bespoke image recognition model can extract data patterns to predict analysis & other similar purposes.",
        icon: Eye,
        bg: "bg-orange-500"
      },
      {
        title: "Detecting Objects In Images",
        desc: "Our object detection methodology allows the user to detect an attribute in an image to identify a face, shape, edge, and other features. We also provide picture recognition services.",
        icon: Brain,
        bg: "bg-amber-500"
      },
      {
        title: "NLP (Natural Language Processing)",
        desc: "We create dynamic user experiences that are more accurate and richer because of our improved natural language processing.",
        icon: Target,
        bg: "bg-orange-600"
      },
      {
        title: "Disruptive Technology",
        desc: "Take a look at how cognitive intelligence may transform data into a huge opportunity. Our experts are capable of providing low-cost deep learning solutions that are effective, efficient & dependable.",
        icon: Rocket,
        bg: "bg-amber-600"
      }
    ].map((item, index) => (
      <div
        key={index}
        ref={addToCardRefs}
        className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:transform hover:scale-105"
      >
        <div className={`${item.bg} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
          <item.icon className="w-8 h-8 text-white" />
        </div>
        <h4 className="font-bold text-base text-orange-600 mb-2">{item.title}</h4>
        <p className="text-sm text-gray-600">{item.desc}</p>
      </div>
    ))}
  </div>
  {/* Decorative Elements */}
  <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-100 rounded-full -z-10"></div>
  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-100 rounded-2xl -z-10"></div>
  {/* Fifth Card as Highlight */}
  <div className="max-w-3xl mx-auto">
    <div
      ref={addToCardRefs}
      className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
    >
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 mx-auto">
        <Layers className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-orange-600 mb-4 text-center">
     Providing End-To-End Services
      </h3>
      <p className="text-gray-600 text-center">
       We provide access to specialized deep learning developers to work on your project from ideation to reality and maintenance.
    
    </p></div>
  </div>
</div>
          </div>
        
      </section>

      {/* Clients Section (matches Manual component) */}
      <section ref={clientsRef} className="py-20 bg-white px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-6 py-3 mb-6">
              <Shield className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Trusted Partners</span>
            </div>
            <h2 className="text-3xl font-bold text-orange-600 mb-4">Our AI Partners</h2>
            <p className="text-gray-600 text-lg">Collaborating with forward-thinking organizations worldwide</p>
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

export default DeepLearning;