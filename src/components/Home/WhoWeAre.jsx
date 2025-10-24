
// import React, { useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { FaChartLine, FaTools, FaBullseye, FaLightbulb } from 'react-icons/fa';

// gsap.registerPlugin(ScrollTrigger);

// const WhatWeAre = () => {
//   const navigate = useNavigate();

//   const headingRef = useRef(null);
//   const subtitleRef = useRef(null);
//   const contentRefs = useRef([]);
//   const titleRef = useRef(null);
//   const whatSubtitleRef = useRef(null);
//   const timelineRefs = useRef([]);

//   const addToContentRefs = (el) => {
//     if (el && !contentRefs.current.includes(el)) {
//       contentRefs.current.push(el);
//     }
//   };

//   const addToTimelineRefs = (el) => {
//     if (el && !timelineRefs.current.includes(el)) {
//       timelineRefs.current.push(el);
//     }
//   };

//   const handleNavigate = () => {
//     navigate('/mission'); // Change route as needed
//     setTimeout(() => {
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }, 0);
//   };

//   useEffect(() => {
//     // WHO WE ARE animations
//     gsap.fromTo(
//       headingRef.current,
//       { x: -100, opacity: 0 },
//       {
//         x: 0,
//         opacity: 1,
//         duration: 1,
//         scrollTrigger: {
//           trigger: headingRef.current,
//           start: 'top 85%',
//           toggleActions: 'play none none reverse',
//         },
//       }
//     );

//     gsap.fromTo(
//       subtitleRef.current,
//       { x: -100, opacity: 0 },
//       {
//         x: 0,
//         opacity: 1,
//         duration: 1,
//         delay: 0.3,
//         scrollTrigger: {
//           trigger: subtitleRef.current,
//           start: 'top 85%',
//           toggleActions: 'play none none reverse',
//         },
//       }
//     );

//     contentRefs.current.forEach((el, index) => {
//       gsap.fromTo(
//         el,
//         { y: 40, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1,
//           delay: index * 0.2,
//           ease: 'power3.out',
//           scrollTrigger: {
//             trigger: el,
//             start: 'top 85%',
//             toggleActions: 'play none none reverse',
//           },
//         }
//       );
//     });

//     // WHAT WE DO animations
//     gsap.fromTo(
//       titleRef.current,
//       { scale: 0.8, opacity: 0 },
//       {
//         scale: 1,
//         opacity: 1,
//         duration: 1.2,
//         ease: 'back.out(1.7)',
//         scrollTrigger: {
//           trigger: titleRef.current,
//           start: 'top 85%',
//           toggleActions: 'play none none reverse',
//         },
//       }
//     );

//     gsap.fromTo(
//       whatSubtitleRef.current,
//       { y: -40, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1.2,
//         ease: 'power3.out',
//         scrollTrigger: {
//           trigger: whatSubtitleRef.current,
//           start: 'top 85%',
//           toggleActions: 'play none none reverse',
//         },
//       }
//     );

//     timelineRefs.current.forEach((el, i) => {
//       gsap.fromTo(
//         el,
//         { x: i % 2 === 0 ? -100 : 100, opacity: 0 },
//         {
//           x: 0,
//           opacity: 1,
//           duration: 1.2,
//           delay: i * 0.2,
//           ease: 'power3.out',
//           scrollTrigger: {
//             trigger: el,
//             start: 'top 85%',
//             toggleActions: 'play none none reverse',
//           },
//         }
//       );
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   const sections = [
//     {
//       title: 'Shape Your Solution',
//       content:
//         'With the evolving demands of clients, we tailor solutions that meet their needs and changing requirements.',
//       icon: <FaBullseye className="text-2xl" />,
//     },
//     {
//       title: 'Create Your Vision',
//       content:
//         'We provide real experiences and aim to be internationally known by offering higher quality services.',
//       icon: <FaLightbulb className="text-2xl" />,
//     },
//     {
//       title: "Enhance Your Company's Growth",
//       content:
//         'With the assistance of our team, we ensure digital transformation gains momentum with continuous support.',
//       icon: <FaChartLine className="text-2xl" />,
//     },
//     {
//       title: 'Focus On Services & Solutions',
//       content:
//         'We deliver customer-centric, results-oriented, and innovative IT solutions worldwide.',
//       icon: <FaTools className="text-2xl" />,
//     },
//   ];

//   return (
//     <div className="w-full">
//       {/* WHO WE ARE */}
//       <section className="min-h-screen bg-gradient-to-r from-orange-50 via-white to-orange-100 flex items-center px-6 py-20">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//           {/* Image */}
//           <div className="relative">
//             <div className="absolute -top-12 -left-12 w-80 h-80 bg-orange-300 rounded-full blur-3xl opacity-30"></div>
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
//               className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
//             >
//               Discover More
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* WHAT WE DO (Timeline Style) */}
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

//           {/* Timeline */}
//           <div className="relative border-l-4 border-dotted border-orange-400 ml-10">
//             {sections.map((sec, index) => (
//               <div
//                 key={index}
//                 ref={addToTimelineRefs}
//                 className="mb-12 ml-8 relative pl-16"
//               >
//                 {/* Icon Circle */}
//                 <div
//                   className="absolute -left-16 top-0 w-14 h-14 
//                              bg-gradient-to-br from-orange-500 to-red-500 
//                              rounded-full flex items-center justify-center 
//                              shadow-lg text-white 
//                              transition-transform duration-300 hover:scale-110"
//                 >
//                   {sec.icon}
//                 </div>

//                 {/* Text */}
//                 <h3 className="text-2xl font-bold text-gray-800 mb-2 leading-snug">
//                   {sec.title}
//                 </h3>
//                 <p className="text-gray-600 text-base leading-relaxed">
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
import {
  FaChartLine,
  FaTools,
  FaBullseye,
  FaLightbulb,
  FaRocket,
  FaStar,
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const WhatWeAre = () => {
  const navigate = useNavigate();

  // Refs
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const contentRefs = useRef([]);
  const titleRef = useRef(null);
  const whatSubtitleRef = useRef(null);
  const timelineRefs = useRef([]);
  const buttonRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);

  // Helper to collect refs
  const addToContentRefs = (el) => {
    if (el && !contentRefs.current.includes(el)) contentRefs.current.push(el);
  };
  const addToTimelineRefs = (el) => {
    if (el && !timelineRefs.current.includes(el)) timelineRefs.current.push(el);
  };

  const handleNavigate = () => {
    navigate('/mission');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
  };

  useEffect(() => {
    // Animations
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 80%' },
      }
    );

    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power2.out',
        scrollTrigger: { trigger: subtitleRef.current, start: 'top 85%' },
      }
    );

    contentRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.15,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 90%' },
        }
      );
    });

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.6,
        ease: 'power3.out',
        scrollTrigger: { trigger: buttonRef.current, start: 'top 90%' },
      }
    );

    gsap.fromTo(
      titleRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: { trigger: titleRef.current, start: 'top 85%' },
      }
    );

    gsap.fromTo(
      whatSubtitleRef.current,
      { y: -40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: { trigger: whatSubtitleRef.current, start: 'top 85%' },
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
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
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
    <div className="w-full overflow-hidden">
      {/* ==================== WHO WE ARE ==================== */}
      <section className="relative min-h-screen flex flex-col md:flex-row items-center px-4 sm:px-8 md:px-12 py-20 bg-gradient-to-br from-orange-50 via-white to-orange-100 rounded-t-[8rem] md:rounded-t-[10rem]">
        {/* Left Images */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center mb-10 md:mb-0">
          <div className="absolute -top-12 -left-12 w-72 h-72 md:w-96 md:h-96 bg-orange-300 rounded-full blur-3xl opacity-30"></div>

          <div className="relative flex flex-col sm:flex-row gap-6 items-center justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl blur-lg opacity-75"></div>
              <img
                ref={image1Ref}
                src="/WHO.jpg"
                alt="Team Member 1"
                className="relative w-60 sm:w-72 md:w-80 h-80 sm:h-96 object-cover rounded-3xl shadow-2xl border-4 border-orange-200"
              />
            </div>

            <div className="flex flex-col gap-6">
              <img
                ref={image2Ref}
                src="/WHO1.jpg"
                alt="Team Member 2"
                className="w-40 sm:w-48 h-40 sm:h-48 object-cover rounded-3xl shadow-xl border-2 border-orange-200"
              />
              <img
                ref={image3Ref}
                src="/WHO2.jpg"
                alt="Team Member 3"
                className="w-40 sm:w-48 h-40 sm:h-48 object-cover rounded-3xl shadow-xl border-2 border-orange-200"
              />
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left px-2 sm:px-4">
          <h1
            ref={headingRef}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-500 drop-shadow-lg"
          >
            WHO WE ARE
          </h1>
          <h2
            ref={subtitleRef}
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800"
          >
            Dreamers & Innovators With a Creative Bent
          </h2>
          <p ref={addToContentRefs} className="text-gray-600 text-base sm:text-lg">
            Eagle Eye Tech serves clients with fast, unique, and high-quality services.
          </p>
          <p ref={addToContentRefs} className="text-gray-600 text-base sm:text-lg">
            Our innovators boost brands and make them instantly recognizable.
          </p>
          <p ref={addToContentRefs} className="text-gray-600 text-base sm:text-lg">
            We implement technology solutions that bring results.
          </p>

          <button
            ref={buttonRef}
            onClick={handleNavigate}
            className="group relative px-6 sm:px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <FaRocket className="text-lg" />
              Discover More
              <FaStar className="text-lg" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition duration-500"></div>
          </button>
        </div>
      </section>

      {/* ==================== WHAT WE DO ==================== */}
      <section className="relative bg-black py-20 sm:py-24 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            className="w-full h-full object-cover opacity-40"
            src="/whatwedo.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 text-center mb-6 drop-shadow-2xl"
          >
            WHAT WE DO
          </h1>
          <h2
            ref={whatSubtitleRef}
            className="text-lg sm:text-xl md:text-2xl font-semibold text-white text-center mb-16 drop-shadow-lg"
          >
            Design • Develop • Deliver
          </h2>

          <div className="relative border-l-4 border-dotted border-orange-400 ml-6 sm:ml-10">
            {sections.map((sec, index) => (
              <div
                key={index}
                ref={addToTimelineRefs}
                className="mb-10 sm:mb-12 ml-6 sm:ml-8 relative pl-12 sm:pl-16"
              >
                <div
                  className="absolute -left-12 sm:-left-16 top-0 w-12 sm:w-14 h-12 sm:h-14 
                             bg-gradient-to-br from-orange-500 to-red-500 
                             rounded-full flex items-center justify-center 
                             shadow-lg text-white 
                             transition-transform duration-300 hover:scale-110"
                >
                  {sec.icon}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug drop-shadow-md">
                  {sec.title}
                </h3>
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed drop-shadow">
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