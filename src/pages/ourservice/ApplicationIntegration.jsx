// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import cisco from '../../assets/cisco.png';
// import version from '../../assets/version.png';
// import wells from '../../assets/wells.png';
// import fidelity from '../../assets/fidelity.png';
// import hcl from '../../assets/hcl.png';
// import infosys from '../../assets/infosys.png';

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);
// const clients = [
//   { name: 'Cisco', logo: cisco },
//   { name: 'Verizon', logo: version },
//   { name: 'Wells Fargo', logo: wells },
//   { name: 'Fidelity', logo: fidelity },
//   { name: 'HCL', logo: hcl },
//   { name: 'Infosys', logo: infosys },
// ];

// const ApplicationIntegration = () => {


//   // Declare all refs at the top to avoid initialization issues
//   const heroRef = useRef(null);
//   const introHeadingRef = useRef(null);
//   const introContentRefs = useRef([]);
//   const introImageRef = useRef(null);
//   const apiHeadingRef = useRef(null);
//   const apiContentRefs = useRef([]);
//   const apiImageRef = useRef(null);
//   const benefitsHeadingRef = useRef(null);
//   const benefitsContentRefs = useRef([]);
//   const benefitsImageRef = useRef(null);
//   const servicesHeadingRef = useRef(null);
//   const servicesContentRefs = useRef([]);
//   const servicesImageRef = useRef(null);
//   const clientsRef = useRef(null);
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     // Hero Section Animation
//     gsap.fromTo(
//       heroRef.current,
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         scrollTrigger: {
//           trigger: heroRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );

//     // Introduction Section Animations
//     gsap.fromTo(
//       introHeadingRef.current,
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         scrollTrigger: {
//           trigger: introHeadingRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );

//     introContentRefs.current.forEach((ref, index) => {
//       if (ref) {
//         gsap.fromTo(
//           ref,
//           { opacity: 0, x: -50 },
//           {
//             opacity: 1,
//             x: 0,
//             duration: 0.8,
//             delay: index * 0.2,
//             scrollTrigger: {
//               trigger: ref,
//               start: "top 85%",
//               toggleActions: "play none none reverse",
//             },
//           }
//         );
//       }
//     });

//     gsap.fromTo(
//       introImageRef.current,
//       { opacity: 0, scale: 0.8, rotation: -5 },
//       {
//         opacity: 1,
//         scale: 1,
//         rotation: 0,
//         duration: 0.8,
//         scrollTrigger: {
//           trigger: introImageRef.current,
//           start: "top 85%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );

//     // API Section Animations
//     gsap.fromTo(
//       apiHeadingRef.current,
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         scrollTrigger: {
//           trigger: apiHeadingRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );

//     apiContentRefs.current.forEach((ref, index) => {
//       if (ref) {
//         gsap.fromTo(
//           ref,
//           { opacity: 0, x: -50 },
//           {
//             opacity: 1,
//             x: 0,
//             duration: 0.8,
//             delay: index * 0.2,
//             scrollTrigger: {
//               trigger: ref,
//               start: "top 85%",
//               toggleActions: "play none none reverse",
//             },
//           }
//         );
//       }
//     });

//     gsap.fromTo(
//       apiImageRef.current,
//       { opacity: 0, scale: 0.8, rotation: -5 },
//       {
//         opacity: 1,
//         scale: 1,
//         rotation: 0,
//         duration: 0.8,
//         scrollTrigger: {
//           trigger: apiImageRef.current,
//           start: "top 85%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );

//     // Benefits Section Animations
//     gsap.fromTo(
//       benefitsHeadingRef.current,
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         scrollTrigger: {
//           trigger: benefitsHeadingRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );

//     benefitsContentRefs.current.forEach((ref, index) => {
//       if (ref) {
//         gsap.fromTo(
//           ref,
//           { opacity: 0, x: -50 },
//           {
//             opacity: 1,
//             x: 0,
//             duration: 0.8,
//             delay: index * 0.2,
//             scrollTrigger: {
//               trigger: ref,
//               start: "top 85%",
//               toggleActions: "play none none reverse",
//             },
//           }
//         );
//       }
//     });

//     gsap.fromTo(
//       benefitsImageRef.current,
//       { opacity: 0, scale: 0.8, rotation: -5 },
//       {
//         opacity: 1,
//         scale: 1,
//         rotation: 0,
//         duration: 0.8,
//         scrollTrigger: {
//           trigger: benefitsImageRef.current,
//           start: "top 85%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );

//     // Services Section Animations
//     gsap.fromTo(
//       servicesHeadingRef.current,
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         scrollTrigger: {
//           trigger: servicesHeadingRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );

//     servicesContentRefs.current.forEach((ref, index) => {
//       if (ref) {
//         gsap.fromTo(
//           ref,
//           { opacity: 0, x: -50 },
//           {
//             opacity: 1,
//             x: 0,
//             duration: 0.8,
//             delay: index * 0.2,
//             scrollTrigger: {
//               trigger: ref,
//               start: "top 85%",
//               toggleActions: "play none none reverse",
//             },
//           }
//         );
//       }
//     });

//     gsap.fromTo(
//       servicesImageRef.current,
//       { opacity: 0, scale: 0.8, rotation: -5 },
//       {
//         opacity: 1,
//         scale: 1,
//         rotation: 0,
//         duration: 0.8,
//         scrollTrigger: {
//           trigger: servicesImageRef.current,
//           start: "top 85%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );

//     // Clients Section Animation
//     gsap.fromTo(
//       clientsRef.current,
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         scrollTrigger: {
//           trigger: clientsRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );

//     // Scrolling animation for client logos
//     const scrollElement = scrollRef.current;
//     if (scrollElement) {
//       const totalWidth = scrollElement.scrollWidth / 2; // Divide by 2 due to duplication
//       gsap.to(scrollElement, {
//         x: -totalWidth,
//         duration: 20,
//         ease: "none",
//         repeat: -1,
//         scrollTrigger: {
//           trigger: clientsRef.current,
//           start: "top 80%",
//           end: "bottom top",
//           toggleActions: "play pause resume pause",
//         },
//       });
//     }

//     // Cleanup ScrollTrigger instances
//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   // Function to add refs to contentRefs arrays
//   const addToIntroContentRefs = (el) => {
//     if (el && !introContentRefs.current.includes(el)) {
//       introContentRefs.current.push(el);
//     }
//   };

//   const addToApiContentRefs = (el) => {
//     if (el && !apiContentRefs.current.includes(el)) {
//       apiContentRefs.current.push(el);
//     }
//   };

//   const addToBenefitsContentRefs = (el) => {
//     if (el && !benefitsContentRefs.current.includes(el)) {
//       benefitsContentRefs.current.push(el);
//     }
//   };

//   const addToServicesContentRefs = (el) => {
//     if (el && !servicesContentRefs.current.includes(el)) {
//       servicesContentRefs.current.push(el);
//     }
//   };

//   return (
//     <div className="bg-gradient-to-br from-white to-orange-50 mt-10">
     

//       {/* Introduction Section */}
//       <section className="w-full bg-white py-16 px-4 md:px-8 lg:px-16">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
//           {/* Left Side - Image */}
//           <div className="md:w-1/2 mb-8 md:mb-0">
//             <img
//               ref={introImageRef}
//               src="/api.jpg"
//               alt="Application Integration Illustration"
//               className="rounded-xl shadow-lg w-full h-64 object-cover"
//             />
//           </div>

//           {/* Right Side - Content */}
//           <div className="md:w-1/2 md:pl-8">
//             <h2 ref={introHeadingRef} className="text-3xl md:text-4xl font-bold mb-6 text-orange-600">
//               APPLICATION INTEGRATION
//             </h2>
//             <p ref={addToIntroContentRefs} className="text-lg text-gray-700 mb-6">
//               Eagle Eye Tech enables data sharing across different enterprise
//               applications while reducing data redundancy. We process merging &
//               optimizing the data and workflows between two disparate software
//               applications with efficient processes at a low cost.
//             </p>
//             <p ref={addToIntroContentRefs} className="text-lg text-gray-700 mb-6">
//               Integrating applications automate your business processes, which
//               allows them to focus on adding value to other parts of your
//               business. Our core process automation includes ordering and
//               fulfillment, invoicing, collections, expenses, approvals, and
//               more.
//             </p>
//             <h3 ref={addToIntroContentRefs} className="text-2xl font-bold mb-4 text-orange-500">
//               Concepts On Application Integration
//             </h3>
//             <p ref={addToIntroContentRefs} className="text-lg text-gray-700">
//               Our applications communicate with clients by exchanging data &
//               invoking services that we offer. Application Integration is one of
//               the Digital Transformation strategies where your business can
//               operate in new & innovative ways.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* API Section */}
//       <section className="w-full bg-gray-100 py-16 px-4 md:px-8 lg:px-16">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
//           {/* Right Side - Image */}
//           <div className="md:w-1/2 mb-8 md:mb-0">
//             <img
//               ref={apiImageRef}
//               src="/ap5.jpg"
//               alt="API Illustration"
//               className="rounded-xl shadow-lg w-full h-64 object-cover"
//             />
//           </div>

//           {/* Left Side - Content */}
//           <div className="md:w-1/2 md:pr-8">
//             <h2 ref={apiHeadingRef} className="text-3xl md:text-4xl font-bold mb-6 text-orange-600">
//               API - Application Programming Interface
//             </h2>
//             <p ref={addToApiContentRefs} className="text-lg text-gray-700 mb-6">
//               APIs allow different software components to interact, enabling
//               developers to easily and quickly gain access to the functionality
//               of other systems.
//             </p>

//             <div ref={addToApiContentRefs} className="bg-white p-6 rounded-xl shadow-md mb-6">
//               <h3 className="text-xl font-semibold mb-3 text-orange-600">
//                 Actions & Events
//               </h3>
//               <p className="text-gray-700">
//                 When users interact with a product or service, it generates an
//                 event that triggers an action in other systems. These actions are
//                 standardized and can include creating, retrieving, or updating
//                 information.
//               </p>
//             </div>

//             <div ref={addToApiContentRefs} className="bg-white p-6 rounded-xl shadow-md mb-6">
//               <h3 className="text-xl font-semibold mb-3 text-orange-600">
//                 Data Mapping
//               </h3>
//               <p className="text-gray-700">
//                 Information is exchanged between applications by linking fields
//                 from one application to another, ensuring smooth data flow.
//               </p>
//             </div>

//             <div ref={addToApiContentRefs} className="bg-white p-6 rounded-xl shadow-md mb-6">
//               <h3 className="text-xl font-semibold mb-3 text-orange-600">
//                 Choosing Eagle Eye Tech!
//               </h3>
//               <p className="text-gray-700">
//                 Our approach to business process automation offers organizations
//                 affordable cost planning while avoiding changes to existing IT
//                 systems.
//               </p>
//             </div>

//             <div ref={addToApiContentRefs} className="bg-white p-6 rounded-xl shadow-md">
//               <h3 className="text-xl font-semibold mb-4 text-orange-600">
//                 Key Features of Eagle Eye Tech
//               </h3>
//               <ul className="space-y-3">
//                 {[
//                   "Scalable",
//                   "Complete transparency",
//                   "Secure",
//                   "Reliable",
//                   "Superior Quality",
//                 ].map((feature, index) => (
//                   <li key={index} className="flex items-start">
//                     <div className="bg-orange-100 p-1 rounded-full mr-3">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="w-5 h-5 text-orange-600"
//                         viewBox="0 0 20 20"
//                         fill="currentColor"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                     </div>
//                     <span className="text-lg">{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="w-full bg-white py-16 px-4 md:px-8 lg:px-16">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
//           {/* Left Side - Image */}
//           <div className="md:w-1/2 mb-8 md:mb-0">
//             <img
//               ref={benefitsImageRef}
//               src="/ap1.jpg"
//               alt="Benefits of Application Integration Illustration"
//               className="rounded-xl shadow-lg w-full h-64 object-cover"
//             />
//           </div>

//           {/* Right Side - Content */}
//           <div className="md:w-1/2 md:pl-8">
//             <h2 ref={benefitsHeadingRef} className="text-3xl md:text-4xl font-bold mb-6 text-orange-600">
//               Benefits Of Application Integration
//             </h2>
//             <ul className="space-y-4">
//               {[
//                 "Reduce system architecture complexity",
//                 "Improve organization agility",
//                 "Efficient process management for effective optimization",
//                 "Optimize use of current infrastructure",
//                 "Reduce operational costs by utilizing tailor-made automated processes",
//                 "Scalable & reliable infrastructure",
//                 "A well-integrated ecosystem of technologies & application integration solutions enhances business operations which enable for shorter time-to-market.",
//               ].map((benefit, index) => (
//                 <li
//                   key={index}
//                   ref={addToBenefitsContentRefs}
//                   className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors duration-300"
//                 >
//                   <div className="bg-orange-100 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="w-5 h-5 text-orange-600"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </div>
//                   <span className="text-lg">{benefit}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="w-full bg-gradient-to-br from-orange-50 to-amber-50 py-16 px-4 md:px-8 lg:px-16">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
//           {/* Right Side - Image */}
//           <div className="md:w-1/2 mb-8 md:mb-0">
//             <img
//               ref={servicesImageRef}
//               src="/ap2.jpg"
//               alt="Integration Consulting Illustration"
//               className="rounded-xl shadow-lg w-full h-64 object-cover"
//             />
//           </div>

//           {/* Left Side - Content */}
//           <div className="md:w-1/2 md:pr-8">
//             <h2 ref={servicesHeadingRef} className="text-3xl md:text-4xl font-bold mb-6 text-orange-600">
//               Services We Offer
//             </h2>
//             <div ref={addToServicesContentRefs} className="mb-8 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
//               <h3 className="text-2xl font-bold mb-4 text-orange-600">
//                 Integration Consulting
//               </h3>
//               <p className="text-lg text-gray-700">
//                 Our team of experts analyze existing IT infrastructure, its needs,
//                 and constraints. Then Eagle Eye Tech understands which integration
//                 model is suitable for your organization. By applying the chosen
//                 integration model, your organization will have an efficient
//                 integration architecture and secured infrastructure.
//               </p>
//             </div>
//             <div ref={addToServicesContentRefs} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
//               <h3 className="text-2xl font-bold mb-4 text-orange-600">
//                 Full Cycle Integration Implementation
//               </h3>
//               <p className="text-lg text-gray-700">
//                 Eagle Eye Tech offers specialists who enable integration
//                 implementation and planning IT needs. We also provide system
//                 integration, re-engineering, re-architecting, and implement
//                 integration solutions at various component levels. We continually
//                 oversee the growth of an integrated ecosystem once we implement
//                 the setup.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//     {/* Our Clients Section */}
//       <section ref={clientsRef} className="bg-white py-12">
//         <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">
//           Our Clients
//         </h2>
//         <div className="overflow-hidden">
//           <div ref={scrollRef} className="flex w-max">
//             {[...clients, ...clients].map((client, index) => (
//               <div
//                 key={index}
//                 className="w-40 h-20 mx-6 flex items-center justify-center cursor-pointer transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105"
//               >
//                 <img
//                   src={client.logo}
//                   alt={client.name}
//                   className="max-h-full object-contain"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ApplicationIntegration;
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Zap, Shield, Layers, Rocket, Eye, ArrowRight } from "lucide-react";
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

const ApplicationIntegration = () => {
  const heroRef = useRef(null);
  const sectionRefs = useRef([]);
  const cardRefs = useRef([]);
  const featureRefs = useRef([]);
  const clientsRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    // Hero animation
    gsap.fromTo(heroRef.current, 
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
        }
      }
    );

    // Section animations
    sectionRefs.current.forEach((section, index) => {
      if (section) {
        gsap.fromTo(section,
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
            }
          }
        );
      }
    });

    // Card animations
    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
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
            }
          }
        );
      }
    });

    // Feature animations
    featureRefs.current.forEach((feature, index) => {
      if (feature) {
        gsap.fromTo(feature,
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
            }
          }
        );
      }
    });

    // Clients animation
    gsap.fromTo(clientsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: clientsRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
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
          x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
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
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-amber-400/10"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-orange-200">
            <Layers className="w-5 h-5 text-orange-500 mr-2" />
            <span className="text-orange-600 font-semibold">Integration Excellence</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            APPLICATION INTEGRATION
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Eagle Eye Tech enables data sharing across different enterprise applications while reducing data redundancy.
          </p>
          
          <button className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center mx-auto">
            Get Started
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Introduction Section */}
      <section ref={addToSectionRefs} className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
                <Layers className="w-5 h-5 text-orange-600 mr-2" />
                <span className="text-orange-600 font-semibold">Integration Excellence</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
                APPLICATION INTEGRATION
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Eagle Eye Tech enables data sharing across different enterprise
                  applications while reducing data redundancy. We process merging &
                  optimizing the data and workflows between two disparate software
                  applications with efficient processes at a low cost.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Integrating applications automate your business processes, which
                  allows them to focus on adding value to other parts of your
                  business. Our core process automation includes ordering and
                  fulfillment, invoicing, collections, expenses, approvals, and
                  more.
                </p>
                
                <div ref={addToCardRefs} className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl p-8 border-l-4 border-orange-400 shadow-xl">
                  <h3 className="text-2xl font-bold mb-4 text-orange-600 flex items-center">
                    <Zap className="w-6 h-6 mr-2" />
                    Concepts On Application Integration
                  </h3>
                  <p className="text-lg text-gray-700">
                    Our applications communicate with clients by exchanging data &
                    invoking services that we offer. Application Integration is one of
                    the Digital Transformation strategies where your business can
                    operate in new & innovative ways.
                  </p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div ref={addToCardRefs} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/api.jpg"
                  alt="Application Integration Illustration"
                  className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Section */}
      <section ref={addToSectionRefs} className="py-20 bg-gradient-to-br from-orange-50 to-amber-50 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
                <Layers className="w-5 h-5 text-orange-600 mr-2" />
                <span className="text-orange-600 font-semibold">API Solutions</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
                API - Application Programming Interface
              </h2>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                APIs allow different software components to interact, enabling
                developers to easily and quickly gain access to the functionality
                of other systems.
              </p>

              <div className="space-y-6">
                <div ref={addToCardRefs} className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-orange-100">
                  <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-3 rounded-2xl w-12 h-12 flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-orange-600">Actions & Events</h3>
                  <p className="text-gray-700">
                    When users interact with a product or service, it generates an
                    event that triggers an action in other systems. These actions are
                    standardized and can include creating, retrieving, or updating
                    information.
                  </p>
                </div>

          <div ref={addToCardRefs} className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-orange-100">
  <h3 className="text-2xl font-bold mb-6 text-orange-600 flex items-center">
    <Shield className="w-7 h-7 mr-3 text-orange-500" />
    Key Features of Eagle Eye Tech
  </h3>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {["Scalable", "Complete transparency", "Secure", "Reliable", "Superior Quality"].map((feature, index) => (
      <div
        key={index}
        ref={addToFeatureRefs}
        className="flex items-center p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl shadow-[inset_2px_2px_8px_rgba(0,0,0,0.1),inset_-2px_-2px_8px_rgba(255,255,255,0.8)] hover:shadow-lg hover:scale-105 transition-all duration-300 border border-orange-100/50"
      >
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-2 rounded-full mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
          <Check className="w-5 h-5 text-white" />
        </div>
        <span className="text-gray-800 text-base md:text-lg font-semibold">{feature}</span>
      </div>
    ))}
  </div>
</div>
              </div>
            </div>

            {/* Image */}
            <div ref={addToCardRefs} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/ap5.jpg"
                  alt="API Illustration"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-400/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={addToSectionRefs} className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div ref={addToCardRefs} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/ap1.jpg"
                  alt="Benefits of Application Integration Illustration"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-400/20"></div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
                <Rocket className="w-5 h-5 text-orange-600 mr-2" />
                <span className="text-orange-600 font-semibold">Key Benefits</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-orange-600">
                Benefits Of Application Integration
              </h2>
              
              <div className="space-y-4">
                {[
                  "Reduce system architecture complexity",
                  "Improve organization agility",
                  "Efficient process management for effective optimization",
                  "Optimize use of current infrastructure",
                  "Reduce operational costs by utilizing tailor-made automated processes",
                  "Scalable & reliable infrastructure",
                  "A well-integrated ecosystem of technologies & application integration solutions enhances business operations which enable for shorter time-to-market.",
                ].map((benefit, index) => (
                  <div
                    key={index}
                    ref={addToFeatureRefs}
                    className="flex items-start p-6 bg-gradient-to-r from-white to-orange-50 rounded-2xl hover:shadow-lg transition-all duration-300 border-l-4 border-orange-400 group"
                  >
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-2 rounded-full mr-4 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
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

      {/* Services Section */}
      <section ref={addToSectionRefs} className="py-20 bg-gradient-to-br from-orange-50 to-amber-50 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
                <Shield className="w-5 h-5 text-orange-600 mr-2" />
                <span className="text-orange-600 font-semibold">Our Services</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
                Services We Offer
              </h2>
              
              <div className="space-y-8">
                <div ref={addToCardRefs} className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-orange-100">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 rounded-2xl w-14 h-14 flex items-center justify-center mb-6">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-orange-600">
                    Integration Consulting
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our team of experts analyze existing IT infrastructure, its needs,
                    and constraints. Then Eagle Eye Tech understands which integration
                    model is suitable for your organization. By applying the chosen
                    integration model, your organization will have an efficient
                    integration architecture and secured infrastructure.
                  </p>
                </div>
                
                <div ref={addToCardRefs} className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-orange-100">
                  <div className="bg-gradient-to-r from-orange-400 to-amber-500 p-4 rounded-2xl w-14 h-14 flex items-center justify-center mb-6">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-orange-600">
                    Full Cycle Integration Implementation
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Eagle Eye Tech offers specialists who enable integration
                    implementation and planning IT needs. We also provide system
                    integration, re-engineering, re-architecting, and implement
                    integration solutions at various component levels. We continually
                    oversee the growth of an integrated ecosystem once we implement
                    the setup.
                  </p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div ref={addToCardRefs} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/ap2.jpg"
                  alt="Integration Consulting Illustration"
                  className="w-full h-70 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-400/20"></div>
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
            <div ref={scrollRef} className="flex space-x-12">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 h-24 flex items-center justify-center  "
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-30 w-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
            
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplicationIntegration;