// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const WhyEagleEyeTech = () => {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const subtitleRef = useRef(null);
//   const cardRefs = useRef([]);

//   useEffect(() => {
//     // Animation for the main title
//     gsap.fromTo(titleRef.current, 
//       { y: 50, opacity: 0 },
//       { 
//         y: 0, 
//         opacity: 1, 
//         duration: 1,
//         scrollTrigger: {
//           trigger: titleRef.current,
//           start: 'top 85%',
//           toggleActions: 'play none none reverse'
//         }
//       }
//     );

//     // Animation for the subtitle
//     gsap.fromTo(subtitleRef.current, 
//       { y: 30, opacity: 0 },
//       { 
//         y: 0, 
//         opacity: 1, 
//         duration: 1,
//         delay: 0.3,
//         scrollTrigger: {
//           trigger: subtitleRef.current,
//           start: 'top 85%',
//           toggleActions: 'play none none reverse'
//         }
//       }
//     );

//     // Animation for cards with staggered effect
//     cardRefs.current.forEach((card, index) => {
//       if (!card) return;
      
//       const cardIcon = card.querySelector('.card-icon');
//       const cardContent = card.querySelector('.card-content');
      
//       // Icon animation (rotate and scale)
//       gsap.fromTo(cardIcon,
//         { rotation: -15, scale: 0.8, opacity: 0 },
//         {
//           rotation: 0,
//           scale: 1,
//           opacity: 1,
//           duration: 0.8,
//           scrollTrigger: {
//             trigger: card,
//             start: 'top 80%',
//             toggleActions: 'play none none reverse'
//           }
//         }
//       );
      
//       // Content animation (slide up)
//       gsap.fromTo(cardContent,
//         { y: 30, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 0.8,
//           delay: 0.2,
//           scrollTrigger: {
//             trigger: card,
//             start: 'top 80%',
//             toggleActions: 'play none none reverse'
//           }
//         }
//       );
      
//       // Hover effect
//       card.addEventListener('mouseenter', () => {
//         gsap.to(card, {
//           y: -10,
//           boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
//           duration: 0.3
//         });
//         gsap.to(cardIcon, {
//           rotation: 5,
//           duration: 0.3
//         });
//       });
      
//       card.addEventListener('mouseleave', () => {
//         gsap.to(card, {
//           y: 0,
//           boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
//           duration: 0.3
//         });
//         gsap.to(cardIcon, {
//           rotation: 0,
//           duration: 0.3
//         });
//       });
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

//   const addToCardRefs = (el) => {
//     if (el && !cardRefs.current.includes(el)) {
//       cardRefs.current.push(el);
//     }
//   };

//   const cards = [
//     {
//       title: "Detail",
//       icon: (
//         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//         </svg>
//       ),
//       content: "Our method is to get precious information from clients before moving forward."
//     },
//     {
//       title: "Design",
//       icon: (
//         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
//         </svg>
//       ),
//       content: "Eagle Eye Tech possesses the best experts in designing according to the client's requirements."
//     },
//     {
//       title: "Develop",
//       icon: (
//         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
//         </svg>
//       ),
//       content: "We at Eagle Eye Tech are ready to grow and be the route case in elaborate Digital Advancement."
//     },
//     {
//       title: "Deliver",
//       icon: (
//         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//         </svg>
//       ),
//       content: "Our organization strictly follows timelines because we respect client deadlines."
//     }
//   ];

//   return (
//     <section ref={sectionRef} className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16 md:py-24 px-4 md:px-8">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16 md:mb-20">
//           <h2 
//             ref={titleRef}
//             className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
//           >
//             Why Eagle Eye Tech Only!
//           </h2>
//           <p 
//             ref={subtitleRef}
//             className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
//           >
//             Our insiders evaluate niche technology elements and your business challenges, yielding better & smarter digital transformation solutions while ensuring success in today's digital environment.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//           {cards.map((card, index) => (
//             <div 
//               key={index}
//               ref={addToCardRefs}
//               className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:border-orange-100 transition-all duration-300 group"
//             >
//               <div className="card-icon mb-5 w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center text-[#F54A00] group-hover:bg-[#F54A00] group-hover:text-white transition-colors duration-300">
//                 {card.icon}
//               </div>
              
//               <div className="card-content">
//                 <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#F54A00] transition-colors duration-300">
//                   {card.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   {card.content}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Decorative elements */}
//         <div className="absolute left-10 top-1/4 w-24 h-24 bg-orange-200 rounded-full opacity-20 blur-xl"></div>
//         <div className="absolute right-10 bottom-1/4 w-32 h-32 bg-orange-300 rounded-full opacity-10 blur-xl"></div>
//       </div>
//     </section>
//   );
// };

// export default WhyEagleEyeTech;

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const WhyEagleEyeTech = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardRefs = useRef([]);
  const waveRef = useRef(null);

  useEffect(() => {
    // Animation for the main title
    gsap.fromTo(titleRef.current, 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Animation for the subtitle
    gsap.fromTo(subtitleRef.current, 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Wave animation
    gsap.fromTo(waveRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        delay: 0.5,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Animation for cards with staggered effect
    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      
      const cardIcon = card.querySelector('.card-icon');
      const cardContent = card.querySelector('.card-content');
      
      // Icon animation (rotate and scale)
      gsap.fromTo(cardIcon,
        { rotation: -15, scale: 0.8, opacity: 0 },
        {
          rotation: 0,
          scale: 1,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
      
      // Content animation (slide up)
      gsap.fromTo(cardContent,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
      
      // Hover effect
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -10,
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          duration: 0.3
        });
        gsap.to(cardIcon, {
          rotation: 5,
          duration: 0.3
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          duration: 0.3
        });
        gsap.to(cardIcon, {
          rotation: 0,
          duration: 0.3
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addToCardRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  const cards = [
    {
      title: "Detail",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      content: "Our method is to get precious information from clients before moving forward.",
      video: "/detail.mp4"
    },
    {
      title: "Design",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      content: "Eagle Eye Tech possesses the best experts in designing according to the client's requirements.",
      video: "/design.mp4"
    },
    {
      title: "Develop",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      content: "We at Eagle Eye Tech are ready to grow and be the route case in elaborate Digital Advancement.",
      video: "/devlop.mp4" // Corrected from "devlop.mp4"
    },
    {
      title: "Deliver",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      content: "Our organization strictly follows timelines because we respect client deadlines.",
      video: "/deliver.mp4"
    }
  ];

  return (
    <section ref={sectionRef} className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Wave Background */}
      <div ref={waveRef} className="absolute top-0 left-0 w-full h-64 opacity-10">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="absolute top-0 left-0 w-full h-full"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
            className="fill-[#F54A00]"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
            className="fill-[#F54A00]"
          ></path>
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            className="fill-[#F54A00]"
          ></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 relative "
          >
            Why Eagle Eye Tech Only!
          </h2>
          <p 
            ref={subtitleRef}
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Our insiders evaluate niche technology elements and your business challenges, yielding better & smarter digital transformation solutions while ensuring success in today's digital environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <div 
              key={index}
              ref={addToCardRefs}
              className="relative bg-white rounded-2xl shadow-md border border-gray-100 hover:border-orange-100 transition-all duration-300 group"
              style={{ height: '300px' }} // Fixed height to contain video
            >
              <video
                className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
                src={card.video}
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-black opacity-40 rounded-2xl"></div> {/* Overlay for readability */}
              <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                <div className="card-icon mb-5 w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center text-[#F54A00] group-hover:bg-[#F54A00] group-hover:text-white transition-colors duration-300">
                  {card.icon}
                </div>
                <div className="card-content">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#F54A00] transition-colors duration-300 stylish-underline">
                    {card.title}
                  </h3>
                  <p className="text-white leading-relaxed">
                    {card.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute left-10 top-1/4 w-24 h-24 bg-orange-200 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute right-10 bottom-1/4 w-32 h-32 bg-orange-300 rounded-full opacity-10 blur-xl"></div>
      </div>
    </section>
  );
};

export default WhyEagleEyeTech;