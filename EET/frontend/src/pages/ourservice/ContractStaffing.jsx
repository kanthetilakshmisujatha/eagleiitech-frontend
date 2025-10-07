// import React, { useEffect, useRef, Component } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import {
//   Search, Filter, Users, Check, DollarSign, Repeat, Clock, Globe, ArrowRight,
//   Layers, Shield, Award, Monitor, PenTool
// } from "lucide-react";
// import cisco from '../../assets/cisco.png';
// import verizon from '../../assets/version.png';
// import wells from '../../assets/wells.png';
// import fidelity from '../../assets/fidelity.png';
// import hcl from '../../assets/hcl.png';
// import infosys from '../../assets/infosys.png';

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// // Images from Manual component for consistency
// const ManualTestingImg = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&auto=format&fit=crop";
// const QualityAssuranceImg = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop";
// const TestPlanningImg = "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=500&auto=format&fit=crop";
// const StrategyImg = "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&auto=format&fit=crop";

// // Error Boundary Component
// class ErrorBoundary extends Component {
//   state = { hasError: false, error: null };

//   static getDerivedStateFromError(error) {
//     return { hasError: true, error };
//   }

//   componentDidCatch(error, errorInfo) {
//     console.error("ErrorBoundary caught an error:", error, errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       return (
//         <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-orange-50 px-4">
//           <div className="text-center">
//             <h2 className="text-3xl font-bold text-orange-600 mb-4">Something went wrong</h2>
//             <p className="text-lg text-gray-700 mb-6">Please try refreshing the page or contact support.</p>
//             <button
//               onClick={() => window.location.reload()}
//               className="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
//             >
//               Refresh Page
//             </button>
//           </div>
//         </div>
//       );
//     }
//     return this.props.children;
//   }
// }

// const ContractStaffing = () => {
//   // Refs for animations
//   const heroRef = useRef(null);
//   const introRef = useRef(null);
//   const featuresRef = useRef(null);
//   const servicesRef = useRef(null);
//   const clientsRef = useRef(null);
//   const scrollRef = useRef(null);
//   const featureRefs = useRef([]);
//   const benefitCardRefs = useRef([]);

//   const addToRefs = (el, refArray) => {
//     if (el && !refArray.current.includes(el)) {
//       refArray.current.push(el);
//     }
//   };

//   const features = [
//     {
//       title: "A Contract for Services",
     
//     },
//     {
//       title: "Project-Based Hiring",
      
//     },
//     {
//       title: "Third-party Agency",
     
//     },
   
//   ];

//   const fea = [
//     {
//       title: "Speed of hiring",
    
//     },
//     {
//       title: "Cost savings",
      
//     },
//     {
//       title: "Multiple location hiring",
     
//     },
//     {
//       title: "Reduce the risk of employee misclassification",
     
//     },
    
//   ];

//   const services = [
//     {
//       title: "Talent Based Outsourcing",
//       desc: "Recruitment or choosing from among its existing staff, appropriate workers for various clients.",
//       icon: <Globe className="w-6 h-6 text-orange-600" />,
//       img: ManualTestingImg,
//     },
//     {
//       title: "Sector-wise Expertise",
//       desc: "The contract services company manages the payroll for staff and benefits and social contributions.",
//       img: QualityAssuranceImg,
//       icon: <Monitor className="w-6 h-6 text-orange-600" />,
//     },
//     {
//       title: "Domestic & International recruitments",
//       desc: "The staffing agency deals with employment disputes, contract renewals, or terminations.",
//       img: TestPlanningImg,
//       icon: <PenTool className="w-6 h-6 text-orange-600" />,
//     },
//     {
//       title: "Flexible contracts",
//       desc: "We offer the opportunities to scale up the team as per the project's needs.",
//       img: StrategyImg,
//       icon: <Check className="w-6 h-6 text-orange-600" />,
//     },
//   ];

//   const clients = [
//     { name: 'Cisco', logo: cisco },
//     { name: 'Verizon', logo: verizon },
//     { name: 'Wells Fargo', logo: wells },
//     { name: 'Fidelity', logo: fidelity },
//     { name: 'HCL', logo: hcl },
//     { name: 'Infosys', logo: infosys },
//   ];

//   useEffect(() => {
//     const handleMouseEnter = (icon) => {
//       gsap.to(icon, { y: -4, scale: 1.1, duration: 0.3, ease: "power2.out" });
//     };
//     const handleMouseLeave = (icon) => {
//       gsap.to(icon, { y: 0, scale: 1, duration: 0.3, ease: "power2.out" });
//     };

//     // Hero Section Animation
//     gsap.fromTo(
//       heroRef.current,
//       { opacity: 0, y: 100 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: heroRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );

//     // Intro Section Animation
//     gsap.fromTo(
//       introRef.current,
//       { opacity: 0, y: 80 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: introRef.current,
//           start: "top 85%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );

//     // Features Section Animation
//     gsap.fromTo(
//       featuresRef.current,
//       { opacity: 0, y: 80 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: featuresRef.current,
//           start: "top 85%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );

//     // Features Cards Animation
//     featureRefs.current.forEach((feature, index) => {
//       if (feature) {
//         gsap.fromTo(
//           feature,
//           { opacity: 0, y: 60, scale: 0.9 },
//           {
//             opacity: 1,
//             y: 0,
//             scale: 1,
//             duration: 0.8,
//             delay: index * 0.15,
//             scrollTrigger: {
//               trigger: feature,
//               start: "top 90%",
//               toggleActions: "play none none reverse",
//             },
//           }
//         );
//       }
//     });

//     // Benefits Cards Animation
//     benefitCardRefs.current.forEach((card, index) => {
//       if (card) {
//         gsap.fromTo(
//           card,
//           { opacity: 0, y: 60, scale: 0.9 },
//           {
//             opacity: 1,
//             y: 0,
//             scale: 1,
//             duration: 0.8,
//             delay: index * 0.15,
//             scrollTrigger: {
//               trigger: card,
//               start: "top 90%",
//               toggleActions: "play none none reverse",
//             },
//           }
//         );
//         const icon = card.querySelector(".benefit-icon");
//         if (icon) {
//           card.addEventListener("mouseenter", () => handleMouseEnter(icon));
//           card.addEventListener("mouseleave", () => handleMouseLeave(icon));
//         }
//       }
//     });

//     // Services Section Animation
//     gsap.fromTo(
//       servicesRef.current,
//       { opacity: 0, y: 80 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: servicesRef.current,
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
//           start: "top 85%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );

//     // Infinite Scroll for Clients
//     const scrollElement = scrollRef.current;
//     if (scrollElement) {
//       const totalWidth = scrollElement.scrollWidth / 2;
//       gsap.to(scrollElement, {
//         x: -totalWidth,
//         duration: 25,
//         ease: "none",
//         repeat: -1,
//         modifiers: {
//           x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
//         },
//       });
//     }

//     // Cleanup
//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//       gsap.killTweensOf([scrollRef.current, ...featureRefs.current, ...benefitCardRefs.current]);
//       benefitCardRefs.current.forEach((card) => {
//         if (card) {
//           card.removeEventListener("mouseenter", () => handleMouseEnter(card.querySelector(".benefit-icon")));
//           card.removeEventListener("mouseleave", () => handleMouseLeave(card.querySelector(".benefit-icon")));
//         }
//       });
//     };
//   }, []);

//   return (
//     <ErrorBoundary>
//        <div className="min-h-screen bg-gradient-to-br from-white to-orange-50 overflow-hidden">
//       {/* Hero Section */}
//    {/* Hero Section */}
// <section
//   ref={heroRef}
//   className="relative h-[80vh] flex items-center justify-center px-4 md:px-8 lg:px-16 mt-20"
// >
//   <div className="absolute inset-0 bg-gradient-to-br from-orange-200/20 to-amber-200/20"></div>
//   <div className="relative max-w-6xl mx-auto text-center">
//     <div className="inline-flex items-center bg-white/90 backdrop-blur-md rounded-full px-8 py-4 mb-6 border border-orange-300 shadow-md hover:scale-105 transition-transform duration-300">
//       <Layers className="w-7 h-7 text-orange-500 mr-3" />
//       <span className="text-orange-600 font-semibold text-xl">Permanent Staffing Excellence</span>
//     </div>
//     <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
//       Expert Permanent Staffing Solutions
//     </h1>
//     <p className="text-lg md:text-xl text-gray-800 font-medium leading-snug mb-8 max-w-4xl mx-auto">
//       Build your dream team with Eagle Eye Tech’s permanent staffing services. We deliver top-tier talent to drive your business forward with reliability and expertise.
//     </p>
//     <button className="group bg-gradient-to-r from-orange-500 to-amber-600 text-white px-10 py-5 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center mx-auto text-lg">
//       Get Started
//       <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
//     </button>
    
//       </div>
// </section>
//  {/* Intro Section */}
//       <section ref={introRef} className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-orange-50 to-amber-50">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
//           <div className="w-full md:w-1/2 text-gray-800">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
//   CONTRACT STAFFING SERVICES
//             </h2>
//             <p className="text-lg text-gray-700 mb-6 leading-relaxed">
//              We are a leading staffing agency focused on placing highly-skilled technical personnel in temporary employment positions. We are committed to building lasting relationships with our candidates, clients, and employees. We are Eagle Eye Tech</p>
//          <p>
//           Our expertise addresses the complex workforce challenges organizations face today. We deliver the solutions that drive your business forward with our cutting-edge contract staffing services.  </p> </div>
//           <div className="w-full md:w-1/2 flex justify-center">
//             <div className="relative rounded-3xl overflow-hidden shadow-2xl">
//               <img
//                 src="/permantstaff1.webp"
//                 alt="Mobile App Testing"
//                 className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
//                 onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Found"; }}
//               />
//               <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-400/20"></div>
//             </div>
//           </div>
//         </div>
//       </section>
//         {/* Features Section */}
//         <section ref={featuresRef} className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-orange-50 to-amber-50">
//           <div className="max-w-7xl mx-auto relative">
//             <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-100 rounded-full -z-10"></div>
//             <div className="text-center mb-12">
//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
//                 Knowing About Contract Staffing
//               </h2>
//               <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
//                 An organization that hires contract staffing is known as a Professional Employer Organization (PEO), and we at Eagle Eye Tech provide hassle-free contract staffing solutions by making the process smooth. We’ve grown accustomed to the newest trends in recruitment, and that’s why we offer you young & dynamic experienced staff who are up to date with the latest technological advancements.</p>
//               <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
//                When you need a skilled workforce to deal with the industry’s demands, we stand first to satisfy your need through customized services. A glance at the services below:</p>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//               {features.map((feature, idx) => (
//                 <div
//                   key={idx}
//                   ref={(el) => addToRefs(el, featureRefs)}
//                   className="bg-white p-6 md:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-orange-500 group"
//                 >
//                   <div className="flex items-center mb-4">
                   
//                     <h3 className="text-xl md:text-2xl font-bold text-orange-600">{feature.title}</h3>
//                   </div>
                
//                 </div>
//               ))}
//             </div>
//             <div className="text-center mt-12 mb-8">
//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
// Advantages of Contract Staffing
//               </h2>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//               {fea.map((benefit, idx) => (
//                 <div
//                   key={idx}
//                   ref={(el) => addToRefs(el, benefitCardRefs)}
//                   className="bg-white p-6 md:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-orange-500 group"
//                 >
//                   <div className="flex items-center mb-4">
                 
//                     <h3 className="text-xl md:text-2xl font-bold text-orange-600">{benefit.title}</h3>
//                   </div>
           
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Services Section */}
//         <section ref={servicesRef} className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-orange-50 to-amber-50">
//           <div className="max-w-7xl mx-auto">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
//                 Services Offered By Eagle Eye Tech
//               </h2>
//               <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
//                 Eagle Eye Tech delivers unrivaled offshore outsourcing solutions with world-class expertise. Our permanent staffing solutions provide access to global resources, ensuring top talent for your organization.
//               </p>
//             </div>
//             {services.map((srv, index) => (
//               <div
//                 key={index}
//                 className={`flex flex-col md:flex-row items-center gap-8 lg:gap-10 py-12 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
//               >
//                 <div className="w-full md:w-1/2 relative">
//                   <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700">
//                     <img
//                       src={srv.img}
//                       alt={srv.title}
//                       className="w-full h-80 lg:h-96 object-cover"
//                       onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Found"; }}
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
//                     <div className="absolute bottom-6 left-6 text-white">
//                       <h3 className="text-xl font-bold">{srv.title}</h3>
//                       <p className="text-amber-200">Staffing Excellence</p>
//                     </div>
//                   </div>
//                   <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-100 rounded-full -z-10"></div>
//                 </div>
//                 <div className="w-full md:w-1/2">
//                   <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-orange-500">
//                     <div className="flex items-center mb-4">
//                       {srv.icon}
//                       <h3 className="text-xl md:text-2xl font-bold text-orange-600 ml-3">{srv.title}</h3>
//                     </div>
//                     <p className="text-base md:text-lg text-gray-700 leading-relaxed">{srv.desc}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Clients Section */}
//         <section ref={clientsRef} className="py-16 px-4 md:px-8 lg:px-16 bg-white">
//           <div className="max-w-7xl mx-auto">
//             <div className="text-center mb-12">
//               <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-6 py-3 mb-6">
//                 <Shield className="w-5 h-5 text-orange-600 mr-2" />
//                 <span className="text-orange-600 font-semibold">Trusted Partners</span>
//               </div>
//               <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">Our Clients</h2>
//               <p className="text-base md:text-lg text-gray-600">Trusted by industry leaders worldwide</p>
//             </div>
//             <div className="relative overflow-hidden py-8">
//               <div
//                 ref={scrollRef}
//                 className="flex space-x-12"
//                 style={{ display: "flex", whiteSpace: "nowrap" }}
//               >
//                 {[...clients, ...clients].map((client, index) => (
//                   <div
//                     key={index}
//                     className="flex-shrink-0 w-48 h-24 flex items-center justify-center"
//                   >
//                     <img
//                       src={client.logo}
//                       alt={client.name}
//                       className="max-h-20 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
//                     />
//                   </div>
//                 ))}
//               </div>
//               <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
//               <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </ErrorBoundary>
//   );
// };

// export default ContractStaffing;
import React, { useEffect, useRef, Component } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Search, Filter, Users, Check, DollarSign, Repeat, Clock, Globe, ArrowRight,
  Layers, Shield, Award, Monitor, PenTool
} from "lucide-react";
import cisco from '../../assets/cisco.png';
import verizon from '../../assets/version.png';
import wells from '../../assets/wells.png';
import fidelity from '../../assets/fidelity.png';
import hcl from '../../assets/hcl.png';
import infosys from '../../assets/infosys.png';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Images from Manual component for consistency
const ManualTestingImg = "/contract2.jpg";
const QualityAssuranceImg = "/contract3.webp";
const TestPlanningImg = "/contract4.jpg";
const StrategyImg = "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&auto=format&fit=crop";

// Error Boundary Component
class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-orange-50 px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-orange-600 mb-4">Something went wrong</h2>
            <p className="text-lg text-gray-700 mb-6">Please try refreshing the page or contact support.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const ContractStaffing = () => {
  // Refs for animations
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const featuresRef = useRef(null);
  const servicesRef = useRef(null);
  const clientsRef = useRef(null);
  const scrollRef = useRef(null);
  const featureRefs = useRef([]);
  const benefitRefs = useRef([]);

  const addToRefs = (el, refArray) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  };

  const features = [
    {
      title: "A Contract for Services",
      desc: "We provide flexible contract agreements tailored to your project needs, ensuring clear terms and efficient staffing solutions.",
      icon: PenTool,
    },
    {
      title: "Project-Based Hiring",
      desc: "Hire skilled professionals for specific projects, allowing you to scale your team based on workload and deadlines.",
      icon: Layers,
    },
    {
      title: "Third-party Agency",
      desc: "Our expert agency handles recruitment, payroll, and compliance, freeing you to focus on core business goals.",
      icon: Users,
    },
  ];

  const fea = [
    {
      title: "Speed of Hiring",
      desc: "Quickly onboard skilled professionals to meet urgent project demands with our streamlined recruitment process.",
      icon: Clock,
    },
    {
      title: "Cost Savings",
      desc: "Reduce overhead costs by hiring contract staff, avoiding long-term commitments and benefits expenses.",
      icon: DollarSign,
    },
    {
      title: "Multiple Location Hiring",
      desc: "Access talent across global locations, enabling seamless staffing for distributed teams and projects.",
      icon: Globe,
    },
    {
      title: "Reduce the Risk of Employee Misclassification",
      desc: "Our expertise ensures compliance with labor laws, minimizing risks associated with employee classification.",
      icon: Shield,
    },
  ];

  const services = [
    {
      title: "Talent Based Outsourcing",
      desc: "Recruitment or choosing from among its existing staff, appropriate workers for various clients.",
      icon: <Globe className="w-6 h-6 text-orange-600" />,
      img: ManualTestingImg,
    },
    {
      title: "Sector-wise Expertise",
      desc: "The contract services company manages the payroll for staff and benefits and social contributions.",
      img: QualityAssuranceImg,
      icon: <Monitor className="w-6 h-6 text-orange-600" />,
    },
    {
      title: "Domestic & International Recruitments",
      desc: "The staffing agency deals with employment disputes, contract renewals, or terminations.",
      img: TestPlanningImg,
      icon: <PenTool className="w-6 h-6 text-orange-600" />,
    },
    {
      title: "Flexible Contracts",
      desc: "We offer the opportunities to scale up the team as per the project's needs.",
      img: StrategyImg,
      icon: <Check className="w-6 h-6 text-orange-600" />,
    },
  ];

  const clients = [
    { name: 'Cisco', logo: cisco },
    { name: 'Verizon', logo: verizon },
    { name: 'Wells Fargo', logo: wells },
    { name: 'Fidelity', logo: fidelity },
    { name: 'HCL', logo: hcl },
    { name: 'Infosys', logo: infosys },
  ];

  useEffect(() => {
    const handleMouseEnter = (icon) => {
      gsap.to(icon, { y: -4, scale: 1.1, duration: 0.3, ease: "power2.out" });
    };
    const handleMouseLeave = (icon) => {
      gsap.to(icon, { y: 0, scale: 1, duration: 0.3, ease: "power2.out" });
    };

    // Hero Section Animation
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

    // Intro Section Animation
    gsap.fromTo(
      introRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Features Section Animation
    gsap.fromTo(
      featuresRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Features List Animation
    featureRefs.current.forEach((feature, index) => {
      if (feature) {
        gsap.fromTo(
          feature,
          { opacity: 0, y: 60, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
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

    // Benefits List Animation
    benefitRefs.current.forEach((benefit, index) => {
      if (benefit) {
        gsap.fromTo(
          benefit,
          { opacity: 0, y: 60, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.15,
            scrollTrigger: {
              trigger: benefit,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
        const icon = benefit.querySelector(".benefit-icon");
        if (icon) {
          benefit.addEventListener("mouseenter", () => handleMouseEnter(icon));
          benefit.addEventListener("mouseleave", () => handleMouseLeave(icon));
        }
      }
    });

    // Services Section Animation
    gsap.fromTo(
      servicesRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Clients Section Animation
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

    // Infinite Scroll for Clients
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

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf([scrollRef.current, ...featureRefs.current, ...benefitRefs.current]);
      benefitRefs.current.forEach((benefit) => {
        if (benefit) {
          benefit.removeEventListener("mouseenter", () => handleMouseEnter(benefit.querySelector(".benefit-icon")));
          benefit.removeEventListener("mouseleave", () => handleMouseLeave(benefit.querySelector(".benefit-icon")));
        }
      });
    };
  }, []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-white to-orange-50 overflow-hidden font-sans">
        {/* Hero Section */}
         <section
  ref={heroRef}
  className="relative h-[80vh] flex items-center justify-center px-4 md:px-8 lg:px-16 mt-20"
>
  <div className="absolute inset-0 bg-gradient-to-br from-orange-200/20 to-amber-200/20"></div>
  <div className="relative max-w-6xl mx-auto text-center">
    <div className="inline-flex items-center bg-white/90 backdrop-blur-md rounded-full px-8 py-4 mb-6 border border-orange-300 shadow-md hover:scale-105 transition-transform duration-300">
      <Layers className="w-7 h-7 text-orange-500 mr-3" />
      <span className="text-orange-600 font-semibold text-xl">   CONTRACT STAFFING SERVICES</span>
    </div>
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
       Expert Contract Staffing Solutions
    </h1>
    <p className="text-lg md:text-xl text-gray-800 font-medium leading-snug mb-8 max-w-4xl mx-auto">
      Build your dream team with Eagle Eye Tech’s contract staffing services. We deliver top-tier talent to drive your projects forward with flexibility and expertise.
    </p>
    <button className="group bg-gradient-to-r from-orange-500 to-amber-600 text-white px-10 py-5 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center mx-auto text-lg">
      Get Started
      <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
    </button>
    
      </div>
</section>
     

             <section ref={introRef} className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-orange-50 to-amber-50">
         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
           <div className="w-full md:w-1/2 text-gray-800">
             <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
   CONTRACT STAFFING SERVICES
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
             We are a leading staffing agency focused on placing highly-skilled technical personnel in temporary employment positions. We are committed to building lasting relationships with our candidates, clients, and employees. We are Eagle Eye Tech</p>
         <p>
          Our expertise addresses the complex workforce challenges organizations face today. We deliver the solutions that drive your business forward with our cutting-edge contract staffing services.  </p> </div>
         <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/contract1.png"
                alt="Mobile App Testing"
                className="w-full h-50 object-cover transform hover:scale-105 transition-transform duration-700"
                onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Found"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-400/20"></div>
            </div>
          </div>
        </div>
      </section>

        {/* Features Section */}
        <section ref={featuresRef} className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-orange-50 to-amber-50">
          <div className="max-w-7xl mx-auto relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-100 rounded-full -z-10"></div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Knowing About Contract Staffing
              </h2>
              <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                An organization that hires contract staffing is known as a Professional Employer Organization (PEO), and we at Eagle Eye Tech provide hassle-free contract staffing solutions by making the process smooth. We’ve grown accustomed to the newest trends in recruitment, and that’s why we offer you young & dynamic experienced staff who are up to date with the latest technological advancements.
              </p>
              <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                When you need a skilled workforce to deal with the industry’s demands, we stand first to satisfy your need through customized services. A glance at the services below:
              </p>
            </div>
            <div className="space-y-6">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  ref={(el) => addToRefs(el, featureRefs)}
                  className="flex items-start gap-4 border-b border-orange-200 pb-4 hover:bg-orange-50/50 transition-all duration-300"
                >
                  <div className="bg-orange-500 p-3 rounded-full flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-orange-600">{feature.title}</h3>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12 mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Advantages of Contract Staffing
              </h2>
            </div>
            <div className="space-y-6">
              {fea.map((benefit, idx) => (
                <div
                  key={idx}
                  ref={(el) => addToRefs(el, benefitRefs)}
                  className="flex items-start gap-4 border-b border-orange-200 pb-4 hover:bg-orange-50/50 transition-all duration-300"
                >
                  <div className="bg-amber-500 p-3 rounded-full flex-shrink-0 benefit-icon">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-orange-600">{benefit.title}</h3>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section ref={servicesRef} className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-orange-50 to-amber-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Services Offered By Eagle Eye Tech
              </h2>
              <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Eagle Eye Tech delivers unrivaled offshore outsourcing solutions with world-class expertise. Our contract staffing solutions provide access to global resources, ensuring top talent for your organization.
              </p>
            </div>
            {services.map((srv, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 lg:gap-10 py-12 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""} border-b border-orange-200`}
              >
                <div className="w-full md:w-1/2 relative">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700">
                    <img
                      src={srv.img}
                      alt={srv.title}
                      className="w-full h-80 lg:h-96 object-cover"
                      onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Found"; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-xl font-bold">{srv.title}</h3>
                      <p className="text-amber-200">Staffing Excellence</p>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-100 rounded-full -z-10"></div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="py-6">
                    <div className="flex items-center mb-4">
                      {srv.icon}
                      <h3 className="text-xl md:text-2xl font-bold text-orange-600 ml-3">{srv.title}</h3>
                    </div>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">{srv.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Clients Section */}
        <section ref={clientsRef} className="py-16 px-4 md:px-8 lg:px-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-6 py-3 mb-6">
                <Shield className="w-5 h-5 text-orange-600 mr-2" />
                <span className="text-orange-600 font-semibold">Trusted Partners</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">Our Clients</h2>
              <p className="text-base md:text-lg text-gray-600">Trusted by industry leaders worldwide</p>
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
    </ErrorBoundary>
  );
};

export default ContractStaffing;