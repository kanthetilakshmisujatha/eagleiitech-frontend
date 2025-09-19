
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
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaLock, FaBuilding, FaLaptopCode } from "react-icons/fa"; // React icons

const features = [
  {
    title: "Data Security",
    desc: "Data security, privacy, encryption, cyber threats, sensitive information, protection measures.",
    icon: <FaLock />,
    id: "green",
  },
  {
    title: "Business Security",
    desc: "A critical aspect that every organization must prioritize in today’s digital landscape.",
    icon: <FaBuilding />,
    id: "blue",
  },
  {
    title: "Managed IT Services",
    desc: "IT infrastructure, Support, Technology solutions, management, efficiency, cost-effectiveness.",
    icon: <FaLaptopCode />,
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
    <section className="relative -mt-32 px-12 py-16 z-10">
      {/* Transparent gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/50 -z-10"></div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((f, i) => (
          <div
            key={f.id}
            ref={(el) => (featureRefs.current[i] = el)}
            className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition bg-white border border-[#F54A00]/20 text-center"
          >
            {/* Circle Icon */}
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#F54A00]/10 text-[#F54A00] text-3xl mb-4 shadow-md">
              {f.icon}
            </div>
            <h3 className="text-lg font-bold text-[#F54A00]">{f.title}</h3>
            <p className="text-gray-700 mt-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
