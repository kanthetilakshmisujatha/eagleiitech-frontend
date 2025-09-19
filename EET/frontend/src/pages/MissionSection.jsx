// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { FaUsers, FaHandshake, FaLightbulb, FaStar, FaBullseye, FaRocket } from "react-icons/fa";

// gsap.registerPlugin(ScrollTrigger);

// const MissionPage = () => {
//   const sectionsRef = useRef([]);
//   const coreRef = useRef(null);
//   const aboutRef = useRef(null);
//   const partnersRef = useRef(null);

//   useEffect(() => {
//     // Animate sections
//     sectionsRef.current.forEach((section, index) => {
//       const text = section.querySelector(".text");
//       const image = section.querySelector(".image");

//       if (index % 2 === 0) {
//         gsap.fromTo(
//           text,
//           { x: -100, opacity: 0 },
//           {
//             x: 0,
//             opacity: 1,
//             duration: 1.2,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: section,
//               start: "top 80%",
//               toggleActions: "play none none reverse",
//             },
//           }
//         );

//         gsap.fromTo(
//           image,
//           { x: 100, opacity: 0 },
//           {
//             x: 0,
//             opacity: 1,
//             duration: 1.2,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: section,
//               start: "top 80%",
//               toggleActions: "play none none reverse",
//             },
//           }
//         );
//       } else {
//         gsap.fromTo(
//           text,
//           { y: 80, opacity: 0 },
//           {
//             y: 0,
//             opacity: 1,
//             duration: 1.2,
//             ease: "back.out(1.7)",
//             scrollTrigger: {
//               trigger: section,
//               start: "top 80%",
//               toggleActions: "play none none reverse",
//             },
//           }
//         );

//         gsap.fromTo(
//           image,
//           { scale: 0.8, opacity: 0 },
//           {
//             scale: 1,
//             opacity: 1,
//             duration: 1.2,
//             ease: "elastic.out(1, 0.5)",
//             scrollTrigger: {
//               trigger: section,
//               start: "top 80%",
//               toggleActions: "play none none reverse",
//             },
//           }
//         );
//       }
//     });

//     // Animate Core Values
//     if (coreRef.current) {
//       gsap.fromTo(
//         coreRef.current.querySelectorAll(".core-card"),
//         { y: 60, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1,
//           stagger: 0.2,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: coreRef.current,
//             start: "top 80%",
//             toggleActions: "play none none reverse",
//           },
//         }
//       );
//     }

//     // Animate About Us progress bars
//     if (aboutRef.current) {
//       gsap.fromTo(
//         aboutRef.current.querySelectorAll(".progress-bar"),
//         { width: "0%" },
//         {
//           width: (i) =>
//             aboutRef.current.querySelectorAll(".progress-bar")[i].dataset.width,
//           duration: 1.5,
//           stagger: 0.3,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: aboutRef.current,
//             start: "top 80%",
//             toggleActions: "play none none reverse",
//           },
//         }
//       );
//     }

//     // Animate Partner logos
//     if (partnersRef.current) {
//       gsap.fromTo(
//         partnersRef.current.querySelectorAll(".partner-logo"),
//         { opacity: 0, y: 30 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1,
//           stagger: 0.2,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: partnersRef.current,
//             start: "top 80%",
//             toggleActions: "play none none reverse",
//           },
//         }
//       );
//     }
//   }, []);

//   const coreValues = [
//     {
//       icon: <FaUsers size={30} />,
//       title: "Customer-Centric",
//       description:
//         "Our #1 priority is to achieve the best outcomes for our clients, always.",
//     },
//     {
//       icon: <FaHandshake size={30} />,
//       title: "Truthfulness",
//       description:
//         "We stand for honesty, integrity, and timely communication in all our interactions.",
//     },
//     {
//       icon: <FaLightbulb size={30} />,
//       title: "Collaboration",
//       description:
//         "We listen, understand needs, and work together to find the best solutions.",
//     },
//     {
//       icon: <FaStar size={30} />,
//       title: "Empowerment",
//       description:
//         "We enable people to create outstanding results through education and innovation.",
//     },
//     {
//       icon: <FaBullseye size={30} />,
//       title: "Quality",
//       description:
//         "We ensure reliable products and services that exceed customer expectations.",
//     },
//     {
//       icon: <FaRocket size={30} />,
//       title: "Bold",
//       description:
//         "We take risks, learn from mistakes, and aim for breakthrough innovations.",
//     },
//   ];

//   return (
//     <div className="bg-white text-gray-800">
//       {/* Mission Section */}
//       <section
//         ref={(el) => (sectionsRef.current[0] = el)}
//         className="py-6 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center"
//       >
//         <div className="text">
//           <h4 className="text-[#FD4A18] font-semibold mb-2"># OUR</h4>
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">Mission</h2>
//           <p className="text-lg leading-relaxed">
//             We believe that by creating an environment where people feel respected,
//             engaged, and committed to their work, we are able to meet and surpass
//             client expectations by taking complete ownership and accountability while
//             maintaining the highest standards of ethics, professionalism, and
//             transparency in our business.
//           </p>
//         </div>
//         <div className="image">
//           <img src="/imgs1.png" alt="Mission" className="w-full h-auto" />
//         </div>
//       </section>

//       {/* Solutions Section */}
//       <section
//         ref={(el) => (sectionsRef.current[1] = el)}
//         className="py-10 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center"
//       >
//         <div className="image">
//           <img src="/imgs2.png" alt="Solutions" className="w-full h-auto" />
//         </div>
//         <div className="text">
//           <h4 className="text-[#FD4A18] font-semibold mb-2"># WE</h4>
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Deliver Solutions To Enhance Your Business
//           </h2>
//           <p className="text-lg leading-relaxed mb-4">
//             Eagle Eye Tech is a team of bright individuals who share a passion for excellence in transforming businesses to incorporate technology-driven solutions for existing & evolving business challenges. We take great pleasure in cultivating relationships with our clients and, in the process, making an impact on business growth. By offering a wide range of trained views and client-valued technical perspectives, we aim to provide agile solutions, increase profitability and add value to our clients’ work. While bridging the marketing and IT barrier, we also envision technology to help you gain momentum for your business and overcome technical requirements with a unique perspective. We interact with experts in the industry and follow all the latest technology trends. We make sure that our clients are well-informed about new technology & niche enhancements so they stay ahead of their competitors. Our tech experts at Eagle Eye Tech will analyze your requirements and recommend the most suitable technology solution according to your IT infrastructure. With our team’s collective expertise, we offer solutions for any service you need in the field of
//           </p>
//           <ul className="grid grid-cols-2 gap-2 text-gray-700 font-medium">
//             <li>✔ Staffing</li>
//             <li>✔ Development Services</li>
//             <li>✔ Application Support</li>
//             <li>✔ Data Science</li>
//             <li>✔ Digital Marketing</li>
//             <li>✔ Implementations</li>
//             <li>✔ UI/UX</li>
//           </ul>
//         </div>
//       </section>

//       {/* Perks Section */}
//       <section
//         ref={(el) => (sectionsRef.current[2] = el)}
//         className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center"
//       >
//         <div className="text">
//           <h4 className="text-[#FD4A18] font-semibold mb-2">FROM STRATEGY TO EXECUTION</h4>
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">The Perks Of Working With Eagle Eye Tech</h2>
//           <p className="text-lg leading-relaxed">
//             Eagle Eye Tech is a team of specialists in Software development, Digital Marketing, Staffing & Implementations. We focus on delivering value by making a project successful. From Digital Marketing to Website Design to custom Software Development & Implementing all stated technology areas, we can help you succeed. We engage & deliver the best positive work culture value at every step in the process. No matter how varied project requirements are, our challenging technology professionals are always committed to satisfying client requirements. Each project is supervised by a professional, dedicated team that ensures all our departments are always engaged and productive.
//           </p>
//         </div>
//         <div className="image">
//           <img src="/imgs3.png" alt="Perks" className="w-full h-auto" />
//         </div>
//       </section>

//       {/* Specialized Section */}
//       <section
//         ref={(el) => (sectionsRef.current[3] = el)}
//         className="py-1 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center"
//       >
//         <div className="image">
//           <img src="/imgs4.png" alt="Specialized" className="w-full h-auto" />
//         </div>
//         <div className="text">
//           <h4 className="text-[#FD4A18] font-semibold mb-2">INNOVATIVE WAY TO GROW YOUR BUSINESS</h4>
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">Specialized Professionals, Integrated Solutions</h2>
//           <p className="text-lg leading-relaxed">
//             We are skilled in the most innovative technologies and methodologies mapping it to varied industries & businesses service sectors, providing tailored solutions meeting client needs under stipulated time. Our Software development services also undergo a continuous delivery process to ensure they are updated with the latest market trends. We are always ready to engage our skill sets to execute and produce the best outcomes in managing projects, regardless of the service requirement’s complexity.
//           </p>
//         </div>
//       </section>

//       {/* Delivering Section */}
//       <section
//         ref={(el) => (sectionsRef.current[4] = el)}
//         className="py-6 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center"
//       >
//         <div className="text">
//           <h4 className="text-[#FD4A18] font-semibold mb-2">BRINGING SOLUTIONS TO LIFE</h4>
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">Delivering The Impossible</h2>
//           <p className="text-lg leading-relaxed">
//             Eagle Eye Tech focuses on providing necessary Technology-oriented Services & Business solutions to clients, which are often connected with scalability, alongside progressing towards a success roadmap. Our team knows how to accomplish tasks in a timely and effective manner. So, we’d be scheduling flexible meet-ups to grasp the client’s expectations & then we will perform suitable modifications. We connect our team to our clients, aiming to contribute the desired value and deliver quick results.
//           </p>
//         </div>
//         <div className="image">
//           <img src="/imgs5.png" alt="Delivering" className="w-full h-auto" />
//         </div>
//       </section>

//       {/* Core Values Section */}
//       <section ref={coreRef} className="core-section py-10 px-6 md:px-20 bg-gray-900 text-white">
//         <h4 className="text-[#FD4A18] font-semibold mb-2"># OUR</h4>
//         <h2 className="text-3xl md:text-4xl font-bold mb-8">Core Values</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {coreValues.map((value, index) => (
//             <div
//               key={index}
//               className="core-card bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
//             >
//               <div className="flex items-center mb-4 text-[#FD4A18]">{value.icon}</div>
//               <h3 className="font-bold text-xl mb-2">{value.title}</h3>
//               <p className="text-gray-300 text-sm">{value.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* About Us Section */}
//       <section ref={aboutRef} className="py-10 px-6 md:px-20 bg-gray-50 text-gray-900">
//         <div className="max-w-3xl mx-auto text-center">
//           <h4 className="text-[#FD4A18] font-semibold mb-2"># ABOUT US</h4>
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             We Increasing Business Success With Technology
//           </h2>
//           <p className="mb-8">
//             We combine talented minds with learning and innovation to solve most complex issues...!
//           </p>
//           <div className="space-y-6">
//             <div>
//               <div className="flex justify-between mb-1">
//                 <span className="font-medium">Managed IT Services</span>
//                 <span>85%</span>
//               </div>
//               <div className="w-full bg-gray-300 h-2 rounded">
//                 <div className="progress-bar bg-[#FD4A18] h-2 rounded" data-width="85%"></div>
//               </div>
//             </div>
//             <div>
//               <div className="flex justify-between mb-1">
//                 <span className="font-medium">IT Support & helpdesk</span>
//                 <span>92%</span>
//               </div>
//               <div className="w-full bg-gray-300 h-2 rounded">
//                 <div className="progress-bar bg-[#FD4A18] h-2 rounded" data-width="92%"></div>
//               </div>
//             </div>
//             <div>
//               <div className="flex justify-between mb-1">
//                 <span className="font-medium">We Have an IT Department</span>
//                 <span>80%</span>
//               </div>
//               <div className="w-full bg-gray-300 h-2 rounded">
//                 <div className="progress-bar bg-[#FD4A18] h-2 rounded" data-width="80%"></div>
//               </div>
//             </div>
//             <div>
//               <div className="flex justify-between mb-1">
//                 <span className="font-medium">Software Development</span>
//                 <span>99%</span>
//               </div>
//               <div className="w-full bg-gray-300 h-2 rounded">
//                 <div className="progress-bar bg-[#FD4A18] h-2 rounded" data-width="99%"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Partners Section */}
//       <section ref={partnersRef} className="py-10 px-6 md:px-20 text-center">
//         <h2 className="text-2xl font-bold mb-4">Our Partners</h2>
//         <p className="mb-6 text-gray-700">Empowering Growth Through Strategic Partnerships</p>
//         <p className="mb-8 text-sm text-[#FD4A18] max-w-2xl mx-auto">
//           At Eagle Eye Tech, we embrace a partnership paradigm centered on innovation, precision, and shared success. Our collaborations with SAP and Salesforce are testament to our commitment to delivering cutting-edge solutions.
//         </p>
//         <div className="flex flex-wrap justify-center gap-8 items-center">
//           <img src="/googlecloud.png" alt="Google Cloud Partner" className="partner-logo w-32 h-auto" />
//           <img src="/sales.png" alt="Salesforce Partner" className="partner-logo w-32 h-auto" />
//           <img src="/servicenow.png" alt="ServiceNow Partner" className="partner-logo w-32 h-auto" />
//           <img src="/aws.png" alt="AWS Partner" className="partner-logo w-32 h-auto" />
//           <img src="/sap.png" alt="SAP Partner" className="partner-logo w-32 h-auto" />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default MissionPage;
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaUsers, FaHandshake, FaLightbulb, FaStar, FaBullseye, FaRocket } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const MissionPage = () => {
  const sectionsRef = useRef([]);
  const coreRef = useRef(null);
  const aboutRef = useRef(null);
  const partnersRef = useRef(null);

  useEffect(() => {
    // Animate sections
    sectionsRef.current.forEach((section, index) => {
      const text = section.querySelector(".text");
      const image = section.querySelector(".image");

      if (index % 2 === 0) {
        gsap.fromTo(
          text,
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.fromTo(
          image,
          { x: 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      } else {
        gsap.fromTo(
          text,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.fromTo(
          image,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "elastic.out(1, 0.5)",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    // Animate Core Values
    if (coreRef.current) {
      gsap.fromTo(
        coreRef.current.querySelectorAll(".core-card"),
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: coreRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Animate About Us progress bars
    if (aboutRef.current) {
      gsap.fromTo(
        aboutRef.current.querySelectorAll(".progress-bar"),
        { width: "0%" },
        {
          width: (i) =>
            aboutRef.current.querySelectorAll(".progress-bar")[i].dataset.width,
          duration: 1.5,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Animate Partner logos
    if (partnersRef.current) {
      gsap.fromTo(
        partnersRef.current.querySelectorAll(".partner-logo"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: partnersRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  const coreValues = [
    {
      icon: <FaUsers size={30} />,
      title: "Customer-Centric",
      description:
        "Our #1 priority is to achieve the best outcomes for our clients, always.",
    },
    {
      icon: <FaHandshake size={30} />,
      title: "Truthfulness",
      description:
        "We stand for honesty, integrity, and timely communication in all our interactions.",
    },
    {
      icon: <FaLightbulb size={30} />,
      title: "Collaboration",
      description:
        "We listen, understand needs, and work together to find the best solutions.",
    },
    {
      icon: <FaStar size={30} />,
      title: "Empowerment",
      description:
        "We enable people to create outstanding results through education and innovation.",
    },
    {
      icon: <FaBullseye size={30} />,
      title: "Quality",
      description:
        "We ensure reliable products and services that exceed customer expectations.",
    },
    {
      icon: <FaRocket size={30} />,
      title: "Bold",
      description:
        "We take risks, learn from mistakes, and aim for breakthrough innovations.",
    },
  ];

  return (
    <div className="bg-white text-gray-800 overflow-x-hidden">
      {/* Mission Section */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className="py-6 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center mt-20"
      >
        <div className="text">
          <h4 className="text-[#FD4A18] font-semibold mb-2"># OUR</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Mission</h2>
          <p className="text-lg leading-relaxed">
            We believe that by creating an environment where people feel respected,
            engaged, and committed to their work, we are able to meet and surpass
            client expectations by taking complete ownership and accountability while
            maintaining the highest standards of ethics, professionalism, and
            transparency in our business.
          </p>
        </div>
        <div className="image">
          <img src="/imgs1.png" alt="Mission" className="w-full h-auto mt-15" />
        </div>
      </section>

      {/* Solutions Section */}
      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        className="py-10 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center"
      >
        <div className="image">
          <img src="/imgs2.png" alt="Solutions" className="w-full h-auto" />
        </div>
        <div className="text">
          <h4 className="text-[#FD4A18] font-semibold mb-2"># WE</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Deliver Solutions To Enhance Your Business
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            Eagle Eye Tech is a team of bright individuals who share a passion for excellence in transforming businesses to incorporate technology-driven solutions for existing & evolving business challenges. We take great pleasure in cultivating relationships with our clients and, in the process, making an impact on business growth. By offering a wide range of trained views and client-valued technical perspectives, we aim to provide agile solutions, increase profitability and add value to our clients’ work. While bridging the marketing and IT barrier, we also envision technology to help you gain momentum for your business and overcome technical requirements with a unique perspective. We interact with experts in the industry and follow all the latest technology trends. We make sure that our clients are well-informed about new technology & niche enhancements so they stay ahead of their competitors. Our tech experts at Eagle Eye Tech will analyze your requirements and recommend the most suitable technology solution according to your IT infrastructure. With our team’s collective expertise, we offer solutions for any service you need in the field of
          </p>
          <ul className="grid grid-cols-2 gap-2 text-gray-700 font-medium">
            <li>✔ Staffing</li>
            <li>✔ Development Services</li>
            <li>✔ Application Support</li>
            <li>✔ Data Science</li>
            <li>✔ Digital Marketing</li>
            <li>✔ Implementations</li>
            <li>✔ UI/UX</li>
          </ul>
        </div>
      </section>

      {/* Perks Section */}
      <section
        ref={(el) => (sectionsRef.current[2] = el)}
        className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center"
      >
        <div className="text">
          <h4 className="text-[#FD4A18] font-semibold mb-2">FROM STRATEGY TO EXECUTION</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Perks Of Working With Eagle Eye Tech</h2>
          <p className="text-lg leading-relaxed">
            Eagle Eye Tech is a team of specialists in Software development, Digital Marketing, Staffing & Implementations. We focus on delivering value by making a project successful. From Digital Marketing to Website Design to custom Software Development & Implementing all stated technology areas, we can help you succeed. We engage & deliver the best positive work culture value at every step in the process. No matter how varied project requirements are, our challenging technology professionals are always committed to satisfying client requirements. Each project is supervised by a professional, dedicated team that ensures all our departments are always engaged and productive.
          </p>
        </div>
        <div className="image">
          <img src="/imgs3.png" alt="Perks" className="w-full h-auto" />
        </div>
      </section>

      {/* Specialized Section */}
      <section
        ref={(el) => (sectionsRef.current[3] = el)}
        className="py-1 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center"
      >
        <div className="image">
          <img src="/imgs4.png" alt="Specialized" className="w-full h-auto" />
        </div>
        <div className="text">
          <h4 className="text-[#FD4A18] font-semibold mb-2">INNOVATIVE WAY TO GROW YOUR BUSINESS</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Specialized Professionals, Integrated Solutions</h2>
          <p className="text-lg leading-relaxed">
            We are skilled in the most innovative technologies and methodologies mapping it to varied industries & businesses service sectors, providing tailored solutions meeting client needs under stipulated time. Our Software development services also undergo a continuous delivery process to ensure they are updated with the latest market trends. We are always ready to engage our skill sets to execute and produce the best outcomes in managing projects, regardless of the service requirement’s complexity.
          </p>
        </div>
      </section>

      {/* Delivering Section */}
      <section
        ref={(el) => (sectionsRef.current[4] = el)}
        className="py-6 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center"
      >
        <div className="text">
          <h4 className="text-[#FD4A18] font-semibold mb-2">BRINGING SOLUTIONS TO LIFE</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Delivering The Impossible</h2>
          <p className="text-lg leading-relaxed">
            Eagle Eye Tech focuses on providing necessary Technology-oriented Services & Business solutions to clients, which are often connected with scalability, alongside progressing towards a success roadmap. Our team knows how to accomplish tasks in a timely and effective manner. So, we’d be scheduling flexible meet-ups to grasp the client’s expectations & then we will perform suitable modifications. We connect our team to our clients, aiming to contribute the desired value and deliver quick results.
          </p>
        </div>
        <div className="image">
          <img src="/imgs5.png" alt="Delivering" className="w-full h-auto" />
        </div>
      </section>

      {/* Core Values Section */}
      <section ref={coreRef} className="core-section py-10 px-6 md:px-20 bg-gray-900 text-white">
        <h4 className="text-[#FD4A18] font-semibold mb-2"># OUR</h4>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="core-card bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center mb-4 text-[#FD4A18]">{value.icon}</div>
              <h3 className="font-bold text-xl mb-2">{value.title}</h3>
              <p className="text-gray-300 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section ref={aboutRef} className="py-10 px-6 md:px-20 bg-gray-50 text-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h4 className="text-[#FD4A18] font-semibold mb-2"># ABOUT US</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We Increasing Business Success With Technology
          </h2>
          <p className="mb-8">
            We combine talented minds with learning and innovation to solve most complex issues...!
          </p>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium">Managed IT Services</span>
                <span>85%</span>
              </div>
              <div className="w-full bg-gray-300 h-2 rounded">
                <div className="progress-bar bg-[#FD4A18] h-2 rounded" data-width="85%"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium">IT Support & helpdesk</span>
                <span>92%</span>
              </div>
              <div className="w-full bg-gray-300 h-2 rounded">
                <div className="progress-bar bg-[#FD4A18] h-2 rounded" data-width="92%"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium">We Have an IT Department</span>
                <span>80%</span>
              </div>
              <div className="w-full bg-gray-300 h-2 rounded">
                <div className="progress-bar bg-[#FD4A18] h-2 rounded" data-width="80%"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium">Software Development</span>
                <span>99%</span>
              </div>
              <div className="w-full bg-gray-300 h-2 rounded">
                <div className="progress-bar bg-[#FD4A18] h-2 rounded" data-width="99%"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section ref={partnersRef} className="py-10 px-6 md:px-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Our Partners</h2>
        <p className="mb-6 text-gray-700">Empowering Growth Through Strategic Partnerships</p>
        <p className="mb-8 text-sm text-[#FD4A18] max-w-2xl mx-auto">
          At Eagle Eye Tech, we embrace a partnership paradigm centered on innovation, precision, and shared success. Our collaborations with SAP and Salesforce are testament to our commitment to delivering cutting-edge solutions.
        </p>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          <img src="/googlecloud.png" alt="Google Cloud Partner" className="partner-logo w-32 h-auto" />
          <img src="/sales.png" alt="Salesforce Partner" className="partner-logo w-32 h-auto" />
          <img src="/servicenow.png" alt="ServiceNow Partner" className="partner-logo w-32 h-auto" />
          <img src="/aws.png" alt="AWS Partner" className="partner-logo w-32 h-auto" />
          <img src="/sap.png" alt="SAP Partner" className="partner-logo w-32 h-auto" />
        </div>
      </section>
    </div>
  );
};

export default MissionPage;