// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Search, Filter, Users, Check, DollarSign, Repeat, Clock, Globe,ArrowRight, Layers, Edit, Expand,  User, Award , Monitor, PenTool, FileText, CheckCircle, Gauge, Smartphone, Shield, Bot, Accessibility, Rocket } from "lucide-react";
// import cisco from '../../assets/cisco.png';
// import verizon from '../../assets/version.png';
// import wells from '../../assets/wells.png';
// import fidelity from '../../assets/fidelity.png';
// import hcl from '../../assets/hcl.png';
// import infosys from '../../assets/infosys.png';

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const PermanentStaffing = () => {
//   // Refs for animations
//   const heroRef = useRef(null);
//   const introRef = useRef(null);
//   const featuresRef = useRef(null);
//   const servicesRef = useRef(null);
//   const benefitsRef = useRef(null);
//   const clientsRef = useRef(null);
//   const scrollRef = useRef(null);
//   const benefitCardRefs = useRef([]);
//   const addToSectionRefs = useRef(null);
//   const addToCardRefs = useRef(null);
//   const addToFeatureRefs = useRef([]);
  
//   const featureRefs= useRef(null);

// const features = [
//   {
//     title: "Finding",
//     desc: "Our global network and advanced sourcing tools identify top talent tailored to your organization’s needs.",
//     icon: Search,
//   },
//   {
//     title: "Filtering",
//     desc: "We meticulously screen candidates to ensure only the most qualified professionals reach your hiring pipeline.",
//     icon: Filter,
//   },
//   {
//     title: "Interviewing",
//     desc: "Our experts conduct thorough interviews to assess skills, cultural fit, and long-term potential.",
//     icon: Users,
//   },
//   {
//     title: "Placing",
//     desc: "We streamline the placement process, ensuring seamless onboarding and integration into your team.",
//     icon: Check,
//   },
// ];

// const fea = [
//   {
//     title: "Improved Hiring Quality with Expertise",
//     desc: "Leverage our industry knowledge to hire professionals who drive success and innovation.",
//     icon: Award,
//   },
//   {
//     title: "Reduced Hiring Expenses",
//     desc: "Minimize recruitment costs with our efficient, targeted staffing solutions.",
//     icon: DollarSign,
//   },
//   {
//     title: "Zero Iterations",
//     desc: "Our precise matching reduces the need for multiple hiring rounds, saving time and resources.",
//     icon: Repeat,
//   },
//   {
//     title: "Less Fluctuation in Staffing Needs",
//     desc: "Stable, long-term hires reduce turnover and maintain workforce consistency.",
//     icon: Clock,
//   },
//   {
//     title: "Greater Flexibility",
//     desc: "Adaptable staffing solutions meet your evolving business demands with ease.",
//     icon: Globe,
//   },
// ];

//   const services = [
//     {
//       title: "Recognize Your Needs",
//       desc: "We freeze our time to understand your business for tailoring our solutions. We think about your long-term & short-term objectives, learn about your company culture, and review your work environment to ensure that the Eagle Eye Tech solution fits.",
//       icon: <Globe className="w-6 h-6 text-orange-600" />,
//       img: "/TESTING2.png",
//     },
//     {
//       title: "Customized Selection Process & Methodology",
//       desc: "We know that hiring the right person is one of the most crucial decisions for your business. Eagle Eye Tech's strategic alliances, personal networks, and contacts give us access to the most qualified talent in the industry. We can help you identify, recruit & hire the best suitable person for the job.",
//       img: "/TESTING4.jpg",
//       icon: <Monitor className="w-6 h-6 text-orange-600" />,
//     },
//     {
//       title: "Suitable Candidate Selection & Verification",
//       desc: "Once Eagle Eye Tech shortlists the most suitable candidates, we'll conduct a series of interviews to narrow it down further. We then undertake a background check and verify references and work history.",
//       img: "/TESTING3.jpg",
//       icon: <PenTool className="w-6 h-6 text-orange-600" />,
//     },
//       {
//       title: "Job Offer Completion & Follow-up",
//       desc: "Eagle Eye Tech serves various clients with the hiring process, including getting job offers, negotiating salary, and signing an employment contract. In today's rapidly growing & developing market, it is hard to find the right candidate for a job. Eagle Eye Tech can assist you in delivering discovering & hiring outstanding professional expertise.",
//       img: "/TESTING3.jpg",
//       icon: <PenTool className="w-6 h-6 text-orange-600" />,
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

//   // GSAP Animations
//   useEffect(() => {
//     const handleMouseEnter = (icon) => {
//       gsap.to(icon, { y: -4, scale: 1.1, duration: 0.3, ease: "power2.out" });
//     };
//     const handleMouseLeave = (icon) => {
//       gsap.to(icon, { y: 0, scale: 1, duration: 0.3, ease: "power2.out" });
//     };

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

//     gsap.fromTo(
//       heroRef.current.querySelector('.hero-image'),
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         delay: 0.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: heroRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );

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

//     gsap.fromTo(
//       benefitsRef.current,
//       { opacity: 0, y: 60 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.6,
//         scrollTrigger: {
//           trigger: benefitsRef.current,
//           start: "top 85%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );

//     const listeners = new Map();
//     benefitCardRefs.current.forEach((card, index) => {
//       if (card) {
//         gsap.fromTo(
//           card,
//           { opacity: 0, x: -50 },
//           {
//             opacity: 1,
//             x: 0,
//             duration: 0.6,
//             delay: index * 0.15,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: card,
//               start: "top 90%",
//               toggleActions: "play none none reverse",
//             },
//           }
//         );
//         const icon = card.querySelector(".benefit-icon");
//         if (icon) {
//           const mouseEnter = () => handleMouseEnter(icon);
//           const mouseLeave = () => handleMouseLeave(icon);
//           card.addEventListener("mouseenter", mouseEnter);
//           card.addEventListener("mouseleave", mouseLeave);
//           listeners.set(card, { mouseEnter, mouseLeave });
//         }
//       }
//     });

//     gsap.fromTo(
//       addToSectionRefs.current,
//       { opacity: 0, y: 80 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: addToSectionRefs.current,
//           start: "top 85%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );

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

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//       gsap.killTweensOf([scrollRef.current, ...benefitCardRefs.current]);
//       benefitCardRefs.current.forEach((card) => {
//         if (card && listeners.has(card)) {
//           const { mouseEnter, mouseLeave } = listeners.get(card);
//           card.removeEventListener("mouseenter", mouseEnter);
//           card.removeEventListener("mouseleave", mouseLeave);
//         }
//       });
//     };
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-white to-orange-50 overflow-hidden">
//       {/* Hero Section */}
//     {/* Hero Section */}
// <section
//   ref={heroRef}
//   className="relative h-[80vh] flex items-center justify-center px-4 md:px-8 lg:px-16"
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
//             Find The Right Employees For Your Business
//             </h2>
//             <p className="text-lg text-gray-700 mb-6 leading-relaxed">
//              Permanent staffing services are often the ideal solution for many organizations. These services cover critical gaps in their human resource demands that temporary staffing cannot meet. These solutions are especially beneficial for firms that need to fulfill their requirements, acquire top personnel on a full-time basis or replace a departing employee. Eagle Eye Tech provides organizations with permanent staffing services. Our article explores some of the significant features Eagle Eye Tech can provide your organization.</p>
//           </div>
//           <div className="w-full md:w-1/2 flex justify-center">
//             <div className="relative rounded-3xl overflow-hidden shadow-2xl">
//               <img
//                 src="/TESTING1.jpg"
//                 alt="Mobile App Testing"
//                 className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
//                 onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Found"; }}
//               />
//               <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-400/20"></div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Features Section */}
// <section ref={featuresRef} className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-orange-50 to-amber-50">
//   <div className="max-w-7xl mx-auto relative">
//     <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-100 rounded-full -z-10"></div>
//     <div className="text-center mb-12">
//       <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
//         Staffing Solutions at Eagle Eye Tech
//       </h2>
//       <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
//         Eagle Eye Tech is a global provider of professional experts in staffing varied positions and domains to a wide range of organizations through our staffing services. We have a team of highly experienced experts who are proficient in handling any staffing requirements of our clients.
//       </p>
//       <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
//         Our approach implies that we provide the best professional experts throughout each process through a particular period and deliver to our clients. Eagle Eye Tech offers & delivers efficient services & solutions to various global organizations. Eagle Eye Tech is superior in outsourcing the necessary talent in your firm.
//       </p>
//     </div>
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//       {features.map((feature, idx) => (
//         <div
//           key={idx}
//           ref={(el) => (featureRefs.current[idx] = el)}
//           className="bg-white p-6 md:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-orange-500 group"
//         >
//           <div className="flex items-center mb-4">
//             <div className="bg-orange-500 p-3 rounded-full mr-4 group-hover:-translate-y-2 transition-transform duration-300">
//               <feature.icon className="w-6 h-6 text-white" />
//             </div>
//             <h3 className="text-xl md:text-2xl font-bold text-orange-600">{feature.title}</h3>
//           </div>
//           <p className="text-base md:text-lg text-gray-700 leading-relaxed">{feature.desc}</p>
//         </div>
//       ))}
//     </div>
//     <div className="text-center mt-12 mb-8">
//       <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
//         Benefits of Permanent Staffing Solution
//       </h2>
//     </div>
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//       {fea.map((benefit, idx) => (
//         <div
//           key={idx}
//           ref={(el) => (benefitCardRefs.current[idx] = el)}
//           className="bg-white p-6 md:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-orange-500 group"
//         >
//           <div className="flex items-center mb-4">
//             <div className="bg-amber-500 p-3 rounded-full mr-4 group-hover:-translate-y-2 transition-transform duration-300">
//               <benefit.icon className="w-6 h-6 text-white" />
//             </div>
//             <h3 className="text-xl md:text-2xl font-bold text-orange-600">{benefit.title}</h3>
//           </div>
//           <p className="text-base md:text-lg text-gray-700 leading-relaxed">{benefit.desc}</p>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

//       {/* Services Section */}
//       <section ref={servicesRef} className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-orange-50 to-amber-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
//              Services offered By Eagle Eye Tech
//             </h2>
//             <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
//              Eagle Eye Tech is delighted to give unrivaled offshore outsourcing solutions with world-class expertise. We deliver permanent staffing solutions to our clients and enable them to access global resources. Our permanent staffing solutions give you the following services.
//             </p>
//           </div>
//           {services.map((srv, index) => (
//             <div
//               key={index}
//               className={`flex flex-col md:flex-row items-center gap-12 py-12 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
//             >
//               <div className="w-full md:w-1/2 relative">
//                 <div className="relative rounded-3xl overflow-hidden shadow-2xl">
//                   <img
//                     src={srv.img}
//                     alt={srv.title}
//                     className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
//                     onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Found"; }}
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-400/20"></div>
//                 </div>
//               </div>
//               <div className="w-full md:w-1/2">
//                 <div className="bg-white p-8 rounded-3xl shadow-2xl border border-orange-100">
//                   <div className="flex items-center mb-4">
//                     {srv.icon}
//                     <h3 className="text-2xl font-bold text-orange-600 ml-3">{srv.title}</h3>
//                   </div>
//                   <p className="text-lg text-gray-700 leading-relaxed">{srv.desc}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

    
//       {/* Clients Section */}
//       <section ref={clientsRef} className="py-20 px-4 md:px-8 lg:px-16 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-6 py-3 mb-6">
//               <Shield className="w-5 h-5 text-orange-600 mr-2" />
//               <span className="text-orange-600 font-semibold">Trusted Partners</span>
//             </div>
//             <h2 className="text-3xl font-bold text-orange-600 mb-4">Our Clients</h2>
//             <p className="text-gray-600 text-lg">Trusted by industry leaders worldwide</p>
//           </div>
//           <div className="relative overflow-hidden py-8">
//             <div
//               ref={scrollRef}
//               className="flex space-x-12"
//               style={{ display: "flex", whiteSpace: "nowrap" }}
//             >
//               {[...clients, ...clients].map((client, index) => (
//                 <div
//                   key={index}
//                   className="flex-shrink-0 w-48 h-24 flex items-center justify-center"
//                 >
//                   <img
//                     src={client.logo}
//                     alt={client.name}
//                     className="max-h-20 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
//                   />
//                 </div>
//               ))}
//             </div>
//             <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
//             <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default PermanentStaffing;
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
const ManualTestingImg = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&auto=format&fit=crop";
const QualityAssuranceImg = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop";
const TestPlanningImg = "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=500&auto=format&fit=crop";
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

const PermanentStaffing = () => {
  // Refs for animations
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const featuresRef = useRef(null);
  const servicesRef = useRef(null);
  const clientsRef = useRef(null);
  const scrollRef = useRef(null);
  const featureRefs = useRef([]);
  const benefitCardRefs = useRef([]);

  const addToRefs = (el, refArray) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  };

  const features = [
    {
      title: "Finding",
      desc: "Our global network and advanced sourcing tools identify top talent tailored to your organization’s needs.",
      icon: Search,
    },
    {
      title: "Filtering",
      desc: "We meticulously screen candidates to ensure only the most qualified professionals reach your hiring pipeline.",
      icon: Filter,
    },
    {
      title: "Interviewing",
      desc: "Our experts conduct thorough interviews to assess skills, cultural fit, and long-term potential.",
      icon: Users,
    },
    {
      title: "Placing",
      desc: "We streamline the placement process, ensuring seamless onboarding and integration into your team.",
      icon: Check,
    },
  ];

  const fea = [
    {
      title: "Improved Hiring Quality with Expertise",
      desc: "Leverage our industry knowledge to hire professionals who drive success and innovation.",
      icon: Award,
    },
    {
      title: "Reduced Hiring Expenses",
      desc: "Minimize recruitment costs with our efficient, targeted staffing solutions.",
      icon: DollarSign,
    },
    {
      title: "Zero Iterations",
      desc: "Our precise matching reduces the need for multiple hiring rounds, saving time and resources.",
      icon: Repeat,
    },
    {
      title: "Less Fluctuation in Staffing Needs",
      desc: "Stable, long-term hires reduce turnover and maintain workforce consistency.",
      icon: Clock,
    },
    {
      title: "Greater Flexibility",
      desc: "Adaptable staffing solutions meet your evolving business demands with ease.",
      icon: Globe,
    },
  ];

  const services = [
    {
      title: "Recognize Your Needs",
      desc: "We take time to understand your business, tailoring solutions to your long-term and short-term objectives, company culture, and work environment.",
      icon: <Globe className="w-6 h-6 text-orange-600" />,
      img: ManualTestingImg,
    },
    {
      title: "Customized Selection Process",
      desc: "Our strategic alliances and networks provide access to top talent, helping you identify, recruit, and hire the best candidates.",
      img: QualityAssuranceImg,
      icon: <Monitor className="w-6 h-6 text-orange-600" />,
    },
    {
      title: "Candidate Selection & Verification",
      desc: "We shortlist candidates, conduct interviews, and perform background checks to ensure only the best fit your team.",
      img: TestPlanningImg,
      icon: <PenTool className="w-6 h-6 text-orange-600" />,
    },
    {
      title: "Job Offer & Follow-up",
      desc: "We assist with job offers, salary negotiations, and employment contracts, ensuring a smooth hiring process.",
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

    // Features Cards Animation
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

    // Benefits Cards Animation
    benefitCardRefs.current.forEach((card, index) => {
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
        const icon = card.querySelector(".benefit-icon");
        if (icon) {
          card.addEventListener("mouseenter", () => handleMouseEnter(icon));
          card.addEventListener("mouseleave", () => handleMouseLeave(icon));
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
      gsap.killTweensOf([scrollRef.current, ...featureRefs.current, ...benefitCardRefs.current]);
      benefitCardRefs.current.forEach((card) => {
        if (card) {
          card.removeEventListener("mouseenter", () => handleMouseEnter(card.querySelector(".benefit-icon")));
          card.removeEventListener("mouseleave", () => handleMouseLeave(card.querySelector(".benefit-icon")));
        }
      });
    };
  }, []);

  return (
    <ErrorBoundary>
       <div className="min-h-screen bg-gradient-to-br from-white to-orange-50 overflow-hidden">
      {/* Hero Section */}
   {/* Hero Section */}
<section
  ref={heroRef}
  className="relative h-[80vh] flex items-center justify-center px-4 md:px-8 lg:px-16 mt-20"
>
  <div className="absolute inset-0 bg-gradient-to-br from-orange-200/20 to-amber-200/20"></div>
  <div className="relative max-w-6xl mx-auto text-center">
    <div className="inline-flex items-center bg-white/90 backdrop-blur-md rounded-full px-8 py-4 mb-6 border border-orange-300 shadow-md hover:scale-105 transition-transform duration-300">
      <Layers className="w-7 h-7 text-orange-500 mr-3" />
      <span className="text-orange-600 font-semibold text-xl">Permanent Staffing Excellence</span>
    </div>
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
      Expert Permanent Staffing Solutions
    </h1>
    <p className="text-lg md:text-xl text-gray-800 font-medium leading-snug mb-8 max-w-4xl mx-auto">
      Build your dream team with Eagle Eye Tech’s permanent staffing services. We deliver top-tier talent to drive your business forward with reliability and expertise.
    </p>
    <button className="group bg-gradient-to-r from-orange-500 to-amber-600 text-white px-10 py-5 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center mx-auto text-lg">
      Get Started
      <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
    </button>
    
      </div>
</section>
 {/* Intro Section */}
      <section ref={introRef} className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 text-gray-800">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
            Find The Right Employees For Your Business
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
             Permanent staffing services are often the ideal solution for many organizations. These services cover critical gaps in their human resource demands that temporary staffing cannot meet. These solutions are especially beneficial for firms that need to fulfill their requirements, acquire top personnel on a full-time basis or replace a departing employee. Eagle Eye Tech provides organizations with permanent staffing services. Our article explores some of the significant features Eagle Eye Tech can provide your organization.</p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/permantstaff1.webp"
                alt="Mobile App Testing"
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
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
                Staffing Solutions at Eagle Eye Tech
              </h2>
              <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Eagle Eye Tech is a global provider of professional experts in staffing varied positions and domains to a wide range of organizations through our staffing services. We have a team of highly experienced experts who are proficient in handling any staffing requirements of our clients.
              </p>
              <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Our approach ensures we provide the best professional experts throughout each process and deliver to our clients. Eagle Eye Tech offers efficient services and solutions to various global organizations, excelling in outsourcing the necessary talent for your firm.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  ref={(el) => addToRefs(el, featureRefs)}
                  className="bg-white p-6 md:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-orange-500 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-orange-500 p-3 rounded-full mr-4 group-hover:-translate-y-2 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-orange-600">{feature.title}</h3>
                  </div>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12 mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Benefits of Permanent Staffing Solution
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {fea.map((benefit, idx) => (
                <div
                  key={idx}
                  ref={(el) => addToRefs(el, benefitCardRefs)}
                  className="bg-white p-6 md:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-orange-500 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-amber-500 p-3 rounded-full mr-4 group-hover:-translate-y-2 transition-transform duration-300 benefit-icon">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-orange-600">{benefit.title}</h3>
                  </div>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">{benefit.desc}</p>
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
                Eagle Eye Tech delivers unrivaled offshore outsourcing solutions with world-class expertise. Our permanent staffing solutions provide access to global resources, ensuring top talent for your organization.
              </p>
            </div>
            {services.map((srv, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 lg:gap-10 py-12 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
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
                  <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-orange-500">
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

export default PermanentStaffing;