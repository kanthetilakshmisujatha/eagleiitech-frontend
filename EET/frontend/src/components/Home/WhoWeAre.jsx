// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { useNavigate } from 'react-router-dom';
// import { FaChartLine, FaTools } from 'react-icons/fa';

// gsap.registerPlugin(ScrollTrigger);

// const WhatWeAre = () => {
//   const navigate = useNavigate();

//   // Refs for Who We Are
//   const headingRef = useRef(null);
//   const subtitleRef = useRef(null);
//   const contentRefs = useRef([]);

//   // Refs for What We Do
//   const titleRef = useRef(null);
//   const whatSubtitleRef = useRef(null);
//   const sectionRefs = useRef([]);

//   useEffect(() => {
//     // WHO WE ARE animations
//     if (headingRef.current) {
//       gsap.fromTo(
//         headingRef.current,
//         { x: -100, opacity: 0 },
//         {
//           x: 0,
//           opacity: 1,
//           duration: 1,
//           scrollTrigger: {
//             trigger: headingRef.current,
//             start: 'top 80%',
//           },
//         }
//       );
//     }

//     if (subtitleRef.current) {
//       gsap.fromTo(
//         subtitleRef.current,
//         { x: -100, opacity: 0 },
//         {
//           x: 0,
//           opacity: 1,
//           duration: 1,
//           delay: 0.3,
//           scrollTrigger: {
//             trigger: subtitleRef.current,
//             start: 'top 80%',
//           },
//         }
//       );
//     }

//     contentRefs.current.forEach((el, index) => {
//       if (el) {
//         gsap.fromTo(
//           el,
//           { x: -100, opacity: 0 },
//           {
//             x: 0,
//             opacity: 1,
//             duration: 0.8,
//             delay: index * 0.2,
//             scrollTrigger: {
//               trigger: el,
//               start: 'top 85%',
//             },
//           }
//         );
//       }
//     });

//     // WHAT WE DO animations
//     if (titleRef.current) {
//       gsap.fromTo(
//         titleRef.current,
//         { scale: 0.8, opacity: 0 },
//         {
//           scale: 1,
//           opacity: 1,
//           duration: 1.2,
//           ease: 'back.out(1.7)',
//           scrollTrigger: {
//             trigger: titleRef.current,
//             start: 'top 85%',
//           },
//         }
//       );
//     }

//     if (whatSubtitleRef.current) {
//       gsap.fromTo(
//         whatSubtitleRef.current,
//         { y: -40, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1.2,
//           ease: 'power3.out',
//           scrollTrigger: {
//             trigger: whatSubtitleRef.current,
//             start: 'top 85%',
//           },
//         }
//       );
//     }

//     sectionRefs.current.forEach((section, index) => {
//       if (section) {
//         gsap.fromTo(
//           section,
//           { y: -100, opacity: 0 },
//           {
//             y: 0,
//             opacity: 1,
//             duration: 1.2,
//             delay: index * 0.3,
//             ease: 'power3.out',
//             scrollTrigger: {
//               trigger: section,
//               start: 'top 80%',
//             },
//           }
//         );
//       }
//     });

//     ScrollTrigger.refresh();
//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, []);

//   // Refs add helpers
//   const addToContentRefs = (el) => {
//     if (el && !contentRefs.current.includes(el)) contentRefs.current.push(el);
//   };

//   const addToSectionRefs = (el) => {
//     if (el && !sectionRefs.current.includes(el)) sectionRefs.current.push(el);
//   };

//   // Sections data
//   const sections = [
//     {
//       title: 'Shape Your Solution',
//       content:
//         'With the evolving demands of clients, we tailor solutions that meet their needs and changing requirements.',
//       icon: (
//         <svg
//           className="w-12 h-12 text-[#F54A00]"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M9.663 17h4.673M9.663 3h4.673m0 0a2 2 0 100 4m0 0a2 2 0 100-4m0 0V3m0 16V9m0 0h4.673M9.663 9h4.673"
//           />
//         </svg>
//       ),
//     },
//     {
//       title: 'Create Your Vision',
//       content:
//         'We provide real experiences and aim to be internationally known by offering higher quality services.',
//       icon: (
//         <svg
//           className="w-12 h-12 text-[#F54A00]"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//           />
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
//           />
//         </svg>
//       ),
//     },
//     {
//       title: "Enhance Your Company's Growth",
//       content:
//         'With the assistance of our team, we ensure digital transformation gains momentum with continuous support.',
//       icon: <FaChartLine className="w-12 h-12 text-[#F54A00]" />,
//     },
//     {
//       title: 'Focus On Services & Solutions',
//       content:
//         'We deliver customer-centric, results-oriented, and innovative IT solutions worldwide.',
//       icon: <FaTools className="w-12 h-12 text-[#F54A00]" />,
//     },
//   ];

//   // Handle navigation
//   const handleNavigate = () => {
//     navigate('/mission');
//     setTimeout(() => {
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }, 0);
//   };

//   return (
//     <div className="w-full">
//       {/* WHO WE ARE */}
//       <section className="min-h-screen bg-white flex items-center px-6 py-20">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//           {/* Image */}
//           <div className="relative">
//             <div className="absolute -top-12 -left-12 w-100 h-100 bg-orange-300 rounded-full blur-3xl opacity-30"></div>
//             <img
//               src="/su.jpg"
//               alt="Who We Are"
//               className="relative rounded-3xl shadow-2xl border-4 border-orange-200"
//             />
//           </div>

//           {/* Text */}
//           <div className="space-y-6 text-center md:text-left">
//             <h1
//               ref={headingRef}
//               className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-500 drop-shadow-lg"
//             >
//               WHO WE ARE
//             </h1>
//             <h2
//               ref={subtitleRef}
//               className="text-2xl md:text-3xl font-semibold text-gray-800"
//             >
//               Dreamers & Innovators With a Creative Bent
//             </h2>
//             <p ref={addToContentRefs} className="text-gray-600 text-lg">
//               Eagle Eye Tech serves clients with fast, unique, and high-quality
//               services.
//             </p>
//             <p ref={addToContentRefs} className="text-gray-600 text-lg">
//               Our innovators boost brands and make them instantly recognizable.
//             </p>
//             <p ref={addToContentRefs} className="text-gray-600 text-lg">
//               We implement technology solutions that bring results.
//             </p>
//             <button
//               onClick={handleNavigate}
//               className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
//             >
//               Discover More
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* WHAT WE DO */}
//       <section className="relative bg-gradient-to-b from-white via-orange-50 to-white py-20">
//         <div className="max-w-6xl mx-auto px-6">
//           <h1
//             ref={titleRef}
//             className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600 text-center mb-6"
//           >
//             WHAT WE DO
//           </h1>
//           <h2
//             ref={whatSubtitleRef}
//             className="text-xl md:text-2xl font-semibold text-gray-700 text-center mb-16"
//           >
//             Design • Develop • Deliver
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//             {sections.map((sec, index) => (
//               <div
//                 key={index}
//                 ref={addToSectionRefs}
//                 className="bg-white/90 p-8 rounded-3xl shadow-2xl border-2 border-orange-100 hover:shadow-orange-200 transition transform hover:-translate-y-2 hover:scale-105 text-center"
//               >
//                 <div className="mb-6 flex justify-center">
//                   <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center">
//                     {sec.icon}
//                   </div>
//                 </div>
//                 <h3 className="text-2xl font-bold text-[#F54A00] mb-3">
//                   {sec.title}
//                 </h3>
//                 <p className="text-gray-700 text-base leading-relaxed">
//                   {sec.content}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default WhatWeAre;
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaChartLine, FaTools, FaBullseye, FaLightbulb } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const WhatWeAre = () => {
  const navigate = useNavigate();

  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const contentRefs = useRef([]);
  const titleRef = useRef(null);
  const whatSubtitleRef = useRef(null);
  const timelineRefs = useRef([]);

  const addToContentRefs = (el) => {
    if (el && !contentRefs.current.includes(el)) {
      contentRefs.current.push(el);
    }
  };

  const addToTimelineRefs = (el) => {
    if (el && !timelineRefs.current.includes(el)) {
      timelineRefs.current.push(el);
    }
  };

  const handleNavigate = () => {
    navigate('/mission'); // Change route as needed
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  };

  useEffect(() => {
    // WHO WE ARE animations
    gsap.fromTo(
      headingRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      subtitleRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    contentRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: index * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // WHAT WE DO animations
    gsap.fromTo(
      titleRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      whatSubtitleRef.current,
      { y: -40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: whatSubtitleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    timelineRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { x: i % 2 === 0 ? -100 : 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          delay: i * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const sections = [
    {
      title: 'Shape Your Solution',
      content:
        'With the evolving demands of clients, we tailor solutions that meet their needs and changing requirements.',
      icon: <FaBullseye className="text-2xl" />,
    },
    {
      title: 'Create Your Vision',
      content:
        'We provide real experiences and aim to be internationally known by offering higher quality services.',
      icon: <FaLightbulb className="text-2xl" />,
    },
    {
      title: "Enhance Your Company's Growth",
      content:
        'With the assistance of our team, we ensure digital transformation gains momentum with continuous support.',
      icon: <FaChartLine className="text-2xl" />,
    },
    {
      title: 'Focus On Services & Solutions',
      content:
        'We deliver customer-centric, results-oriented, and innovative IT solutions worldwide.',
      icon: <FaTools className="text-2xl" />,
    },
  ];

  return (
    <div className="w-full">
      {/* WHO WE ARE */}
      <section className="min-h-screen bg-gradient-to-r from-orange-50 via-white to-orange-100 flex items-center px-6 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -top-12 -left-12 w-80 h-80 bg-orange-300 rounded-full blur-3xl opacity-30"></div>
            <img
              src="/su.jpg"
              alt="Who We Are"
              className="relative rounded-3xl shadow-2xl border-4 border-orange-200"
            />
          </div>

          {/* Text */}
          <div className="space-y-6 text-center md:text-left">
            <h1
              ref={headingRef}
              className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-500 drop-shadow-lg"
            >
              WHO WE ARE
            </h1>
            <h2
              ref={subtitleRef}
              className="text-2xl md:text-3xl font-semibold text-gray-800"
            >
              Dreamers & Innovators With a Creative Bent
            </h2>
            <p ref={addToContentRefs} className="text-gray-600 text-lg">
              Eagle Eye Tech serves clients with fast, unique, and high-quality
              services.
            </p>
            <p ref={addToContentRefs} className="text-gray-600 text-lg">
              Our innovators boost brands and make them instantly recognizable.
            </p>
            <p ref={addToContentRefs} className="text-gray-600 text-lg">
              We implement technology solutions that bring results.
            </p>
            <button
              onClick={handleNavigate}
              className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              Discover More
            </button>
          </div>
        </div>
      </section>

      {/* WHAT WE DO (Timeline Style) */}
      <section className="relative bg-gradient-to-b from-white via-orange-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1
            ref={titleRef}
            className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600 text-center mb-6"
          >
            WHAT WE DO
          </h1>
          <h2
            ref={whatSubtitleRef}
            className="text-xl md:text-2xl font-semibold text-gray-700 text-center mb-16"
          >
            Design • Develop • Deliver
          </h2>

          {/* Timeline */}
          <div className="relative border-l-4 border-dotted border-orange-400 ml-10">
            {sections.map((sec, index) => (
              <div
                key={index}
                ref={addToTimelineRefs}
                className="mb-12 ml-8 relative pl-16"
              >
                {/* Icon Circle */}
                <div
                  className="absolute -left-16 top-0 w-14 h-14 
                             bg-gradient-to-br from-orange-500 to-red-500 
                             rounded-full flex items-center justify-center 
                             shadow-lg text-white 
                             transition-transform duration-300 hover:scale-110"
                >
                  {sec.icon}
                </div>

                {/* Text */}
                <h3 className="text-2xl font-bold text-gray-800 mb-2 leading-snug">
                  {sec.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {sec.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeAre;
