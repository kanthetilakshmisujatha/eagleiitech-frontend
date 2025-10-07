
// import React from 'react';
// import { FaLock, FaBuilding, FaLaptopCode } from 'react-icons/fa';

// const services = [
//   {
//     title: 'Data Security',
//     description:
//       'Data security, privacy, encryption, cyber threats, sensitive information, protection measures.',
//     icon: <FaLock />,
//   },
//   {
//     title: 'Business Security',
//     description:
//       'A critical aspect that every organization must prioritize in today\'s digital landscape.',
//     icon: <FaBuilding />,
//   },
//   {
//     title: 'Managed IT Services',
//     description:
//       'IT infrastructure, Support, Technology solutions, management, efficiency, cost-effectiveness.',
//     icon: <FaLaptopCode />,
//   },
// ];

// export default function Services() {
//   return (
//     <section className="flex justify-center py-4 mb-5 bg-gradient-to-br from-gray-50 to-gray-200 px-4 sm:px-6 lg:px-8">
//       <ul className="flex flex-col sm:flex-row gap-8 justify-center items-center">
//         {services.map((service, index) => (
//           <li
//             key={index}
//             className="relative flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md cursor-pointer transition-transform duration-200 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] hover:scale-110 hover:shadow-lg group"
//           >
//             {/* Icon */}
//             <div className="text-orange-500 text-3xl flex items-center justify-center">
//               {service.icon}
//             </div>

//             {/* Tooltip-like popup on hover */}
//             <div className="absolute -top-24 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:-translate-y-2 transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] bg-orange-400 text-white rounded-lg px-4 py-2 w-64 text-center shadow-lg pointer-events-none">
//               <h3 className="font-extrabold text-base mb-1">{service.title}</h3>
//               <p className="text-xs">{service.description}</p>
//               {/* Triangle arrow */}
//               <span className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-orange-400 rotate-45"></span>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// }
// import React, { useState } from 'react';
// import { FaLock, FaBuilding, FaLaptopCode } from 'react-icons/fa';

// const services = [
//   {
//     title: 'Data Security',
//     description:
//       'Data security, privacy, encryption, cyber threats, sensitive information, protection measures.',
//     icon: <FaLock />,
//   },
//   {
//     title: 'Business Security',
//     description:
//       'A critical aspect that every organization must prioritize in today\'s digital landscape.',
//     icon: <FaBuilding />,
//   },
//   {
//     title: 'Managed IT Services',
//     description:
//       'IT infrastructure, Support, Technology solutions, management, efficiency, cost-effectiveness.',
//     icon: <FaLaptopCode />,
//   },
// ];

// export default function Services() {
//   const [activePopup, setActivePopup] = useState(null);

//   const handleIconClick = (index) => {
//     setActivePopup(activePopup === index ? null : index);
//   };

//   return (
//     <section className="flex justify-center py-4 mb-5 bg-gradient-to-br from-gray-50 to-gray-200 px-4 sm:px-6 lg:px-8">
//       <ul className="flex flex-col sm:flex-row gap-8 justify-center items-center">
//         {services.map((service, index) => (
//           <li
//             key={index}
//             className="relative flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md cursor-pointer transition-transform duration-200 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] hover:scale-110 hover:shadow-lg group"
//             onClick={() => handleIconClick(index)}
//           >
//             {/* Icon */}
//             <div className="text-orange-500 text-3xl flex items-center justify-center">
//               {service.icon}
//             </div>

//             {/* Tooltip-like popup on click and hover */}
//             <div
//               className={`absolute -top-24 transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] bg-orange-400 text-white rounded-lg px-4 py-2 w-64 text-center shadow-lg pointer-events-none
//                 ${activePopup === index
//                   ? 'opacity-100 visible -translate-y-2'
//                   : 'opacity-0 invisible'
//                 }
//                 group-hover:opacity-100 group-hover:visible group-hover:-translate-y-2
//               `}
//             >
//               <h3 className="font-extrabold text-base mb-1">{service.title}</h3>
//               <p className="text-xs">{service.description}</p>
//               {/* Triangle arrow */}
//               <span className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-orange-400 rotate-45"></span>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// }
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { FaLock, FaBuilding, FaLaptopCode } from "react-icons/fa";

// const features = [
//   {
//     title: "Data Security",
//     desc: "Data security, privacy, encryption, cyber threats, sensitive information, protection measures.",
//     icon: <FaLock />,
//     id: "green",
//   },
//   {
//     title: "Business Security",
//     desc: "A critical aspect that every organization must prioritize in today’s digital landscape.",
//     icon: <FaBuilding />,
//     id: "blue",
//   },
//   {
//     title: "Managed IT Services",
//     desc: "IT infrastructure, Support, Technology solutions, management, efficiency, cost-effectiveness.",
//     icon: <FaLaptopCode />,
//     id: "orange",
//   },
// ];

// const Services = () => {
//   const featureRefs = useRef([]);

//   useEffect(() => {
//     let tl = gsap.timeline({ defaults: { ease: "power2.out" } });

//     featureRefs.current.forEach((el) => {
//       tl.fromTo(el, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
//     });
//   }, []);

//   return (
//     <section className="flex flex-col justify-center py-12 bg-gradient-to-br from-gray-50 to-gray-200 px-4 sm:px-6 lg:px-8">
//       {/* Section Heading */}
//       <div className="text-center mb-14">
//         <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#F54A00] to-[#ff7c47] bg-clip-text text-transparent mb-3">
//           Features of Eagle Eye Tech
//         </h2>
//         <p className="text-gray-700 text-sm md:text-base">
//           Explore our core services designed to protect and empower businesses
//         </p>
//       </div>

//       {/* Features Grid */}
//       <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
//         {features.map((f, i) => (
//           <div
//             key={f.id}
//             ref={(el) => (featureRefs.current[i] = el)}
//             className="flex justify-center"
//           >
//             <div className="relative w-full max-w-sm min-h-[20rem] bg-white/70 backdrop-blur-lg border border-white/40 rounded-2xl shadow-lg text-center flex items-center justify-center overflow-hidden perspective-[2000px] transition-transform hover:scale-105 hover:shadow-2xl duration-500">
//               {/* Inside content */}
//               <div className="p-6">
//                 <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gradient-to-r from-[#F54A00]/20 to-[#ff7c47]/20 text-[#F54A00] text-3xl mb-4 shadow-inner">
//                   {f.icon}
//                 </div>
//                 <h3 className="text-lg font-bold text-[#F54A00]">
//                   {f.title}
//                 </h3>
//                 <p className="text-gray-700 mt-2 text-sm">{f.desc}</p>
//               </div>

//               {/* Cover page */}
//               <div
//                 className="absolute top-0 left-0 w-full h-full rounded-2xl bg-gradient-to-br from-[#fff5f0] to-[#ffe5d8] shadow-lg flex flex-col items-center justify-center gap-2 cursor-pointer transition-transform duration-500"
//                 style={{ transformOrigin: "left" }}
//               >
//                 <div className="text-3xl text-[#F54A00] animate-pulse">
//                   {f.icon}
//                 </div>
//                 <p className="text-[#F54A00] font-bold">Hover Me</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Hover effect */}
//       <style>
//         {`
//           .perspective-[2000px] {
//             perspective: 2000px;
//           }
//           .max-w-sm:hover .absolute {
//             transform: rotateY(-80deg);
//           }
//         `}
//       </style>
//     </section>
//   );
// };

// export default Services;
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaLock, FaBuilding, FaLaptopCode } from "react-icons/fa";

const features = [
  {
    title: "Data Security",
    desc: "Data security, privacy, encryption, cyber threats, sensitive information, protection measures.",
    icon: <FaLock />,
    bg: "data:image/jpeg;base64,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",
    id: "green",
  },
  {
    title: "Business Security",
    desc: "A critical aspect that every organization must prioritize in today’s digital landscape.",
    icon: <FaBuilding />,
    bg: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    id: "blue",
  },
  {
    title: "Managed IT Services",
    desc: "IT infrastructure, Support, Technology solutions, management, efficiency, cost-effectiveness.",
    icon: <FaLaptopCode />,
    bg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    id: "orange",
  },
];

const Services = () => {
  const featureRefs = useRef([]);

  useEffect(() => {
    let tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    featureRefs.current.forEach((el) => {
      tl.fromTo(el, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
    });
  }, []);

  return (
    <section className="flex flex-col justify-center py-12 bg-gray-50 px-4 sm:px-6 lg:px-8">
      {/* Section Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#F54A00] to-[#ff7c47] bg-clip-text text-transparent mb-3">
          Features of Eagle Eye Tech
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          Explore our core services designed to protect and empower businesses
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {features.map((f, i) => (
          <div
            key={f.id}
            ref={(el) => (featureRefs.current[i] = el)}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-sm min-h-[20rem] bg-white/70 backdrop-blur-lg border border-white/40 rounded-2xl shadow-lg text-center flex items-center justify-center overflow-hidden perspective-[2000px] transition-transform hover:scale-105 hover:shadow-2xl duration-500">
              
              {/* Inside content */}
              <div className="p-6">
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gradient-to-r from-[#F54A00]/20 to-[#ff7c47]/20 text-[#F54A00] text-3xl mb-4 shadow-inner">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-[#F54A00]">{f.title}</h3>
                <p className="text-gray-700 mt-2 text-sm">{f.desc}</p>
              </div>

         {/* Hover cover page */}
<div
  className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-lg flex flex-col items-center justify-center gap-2 cursor-pointer transition-transform duration-500"
  style={{
    transformOrigin: "left",
    backgroundImage: `url(${f.bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Semi-transparent black overlay */}
  <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-black/30"></div>

  {/* Hover content */}
  <div className="relative flex flex-col items-center justify-center gap-2">
    <div className="text-4xl text-[#F54A00] font-extrabold drop-shadow-[0_0_25px_#F54A00] animate-pulse">
      {f.icon}
    </div>
    <p className="text-[#F54A00] font-extrabold text-lg drop-shadow-[0_0_25px_#F54A00]">
      Hover Me
    </p>
  </div>
</div>

            </div>
          </div>
        ))}
      </div>

      {/* Hover effect */}
      <style>
        {`
          .perspective-[2000px] {
            perspective: 2000px;
          }
          .max-w-sm:hover .absolute {
            transform: rotateY(-80deg);
          }
        `}
      </style>
    </section>
  );
};

export default Services;
