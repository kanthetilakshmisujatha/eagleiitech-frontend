import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Corrected import path
import cisco from '../../assets/cisco.png';
import version from '../../assets/version.png';
import wells from '../../assets/wells.png';
import fidelity from '../../assets/fidelity.png';
import hcl from '../../assets/hcl.png';
import infosys from '../../assets/infosys.png';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Placeholder images (replace with local assets if available)
const AppDevelopmentImg = "https://images.unsplash.com/photo-1581276879432-15e50529f34b?w=500";
const PlanningImg = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500";
const TestingImg = "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500";
const MaintenanceImg = "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=500";
const BenefitsImg = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500";
const WebMobileImg = "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500";
const ServicesImg = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500";

const clients = [
  { name: 'Cisco', logo: cisco },
  { name: 'Verizon', logo: version },
  { name: 'Wells Fargo', logo: wells },
  { name: 'Fidelity', logo: fidelity },
  { name: 'HCL', logo: hcl },
  { name: 'Infosys', logo: infosys },
];

const ApplicationDevelopment = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const contentRefs = useRef([]);
  const servicesRef = useRef(null);
  const checklistRefs = useRef([]);
  const cardRefs = useRef([]);
  const strategicHeadingRef = useRef(null);
  const benefitCardsRef = useRef([]);
  const imageRefs = useRef([]);
  const clientsRef = useRef(null); // Added for clients section

  useEffect(() => {
    // Animation for the main heading
    gsap.fromTo(headingRef.current, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Animation for the subheading
    gsap.fromTo(subheadingRef.current, 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: subheadingRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Animation for each content paragraph
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(ref, 
          { opacity: 0, x: -50 },
          { 
            opacity: 1, 
            x: 0, 
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: ref,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    });

    // Animation for services section
    gsap.fromTo(servicesRef.current, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Animation for checklist items with staggered effect
    checklistRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(ref, 
          { 
            opacity: 0, 
            x: -30,
            rotation: -5
          },
          { 
            opacity: 1, 
            x: 0, 
            rotation: 0,
            duration: 0.6,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: ref,
              start: 'top 90%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    });

    // Animation for cards with a cool flip effect
    cardRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(ref, 
          { 
            opacity: 0, 
            y: 50,
            rotationY: 90
          },
          { 
            opacity: 1, 
            y: 0, 
            rotationY: 0,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: ref,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    });

    // Animation for images
    imageRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(ref, 
          { 
            opacity: 0, 
            scale: 0.8,
            rotation: -5
          },
          { 
            opacity: 1, 
            scale: 1,
            rotation: 0,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: ref,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    });

    // Strategic heading animation - typewriter effect
    const strategicHeading = strategicHeadingRef.current;
    if (strategicHeading) {
      const text = strategicHeading.textContent;
      strategicHeading.textContent = '';
      
      ScrollTrigger.create({
        trigger: strategicHeading,
        start: 'top 80%',
        onEnter: () => {
          let i = 0;
          const typeWriter = () => {
            if (i < text.length) {
              strategicHeading.textContent += text.charAt(i);
              i++;
              setTimeout(typeWriter, 50);
            }
          };
          typeWriter();
        }
      });
    }

    // Benefit cards animation - floating effect
    benefitCardsRef.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(ref, 
          { 
            opacity: 0, 
            y: 80,
            scale: 0.8
          },
          { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            duration: 0.8,
            delay: index * 0.15,
            scrollTrigger: {
              trigger: ref,
              start: 'top 90%',
              toggleActions: 'play none none reverse'
            }
          }
        );

        // Add continuous floating animation
        gsap.to(ref, {
          y: 10,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut"
        });
      }
    });

    // Animation for clients section
    gsap.fromTo(clientsRef.current, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        scrollTrigger: {
          trigger: clientsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Clean up ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Function to add refs to our contentRefs array
  const addToRefs = (el) => {
    if (el && !contentRefs.current.includes(el)) {
      contentRefs.current.push(el);
    }
  };

  // Function to add refs to checklistRefs array
  const addToChecklistRefs = (el) => {
    if (el && !checklistRefs.current.includes(el)) {
      checklistRefs.current.push(el);
    }
  };

  // Function to add refs to cardRefs array
  const addToCardRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  // Function to add refs to benefitCardsRef array
  const addToBenefitCardsRefs = (el) => {
    if (el && !benefitCardsRef.current.includes(el)) {
      benefitCardsRef.current.push(el);
    }
  };

  // Function to add refs to imageRefs array
  const addToImageRefs = (el) => {
    if (el && !imageRefs.current.includes(el)) {
      imageRefs.current.push(el);
    }
  };

  return (
    <div className="bg-gradient-to-br from-white to-orange-50 mt-10">
      {/* First Section */}
      <section ref={sectionRef} className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h1 
                ref={headingRef}
                className="text-4xl md:text-5xl font-bold text-orange-600 mb-6"
              >
                APPLICATION DEVELOPMENT
              </h1>
              
              <p 
                ref={subheadingRef}
                className="text-lg md:text-xl text-gray-700 mb-6"
              >
                Eagle Eye Tech professionals programming experts perform various tasks. Tasks such as collecting specifications, developing prototypes, testing, implementation & integration are all necessary steps for developing web & mobile applications.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                ref={addToImageRefs}
                src={AppDevelopmentImg} 
                alt="Application Development" 
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>

          <div className="w-24 h-1 bg-orange-600 mx-auto mb-12"></div>

          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-8 text-center">
            One-Stop Web & Mobile App Design & Development
          </h2>

          <div className="space-y-6 text-gray-700 mb-12">
            <p 
              ref={addToRefs}
              className="text-lg leading-relaxed"
            >
              We always dedicate time and resources to developing new products to provide the most modern software solutions that make a difference in the success of your organization.
            </p>

            <p 
              ref={addToRefs}
              className="text-lg leading-relaxed"
            >
              Custom mobile app development follows the same standard-based concepts as other Eagle Eye Tech development solutions. We are committed to different techniques and also have expertise in this specific field.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Analysis', 'Design', 'Development'].map((item, index) => (
              <div 
                key={index}
                ref={addToCardRefs}
                className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-600 transform transition-all duration-500 hover:scale-105"
              >
                <h3 className="text-xl font-bold text-orange-600 mb-4">{item}</h3>
                <p className="text-gray-600">
                  Our comprehensive {item.toLowerCase()} process ensures your application meets all requirements and exceeds expectations.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                ref={addToImageRefs}
                src={ServicesImg} 
                alt="Services" 
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 
                ref={servicesRef}
                className="text-3xl md:text-4xl font-bold text-orange-600 mb-6"
              >
                Application & Web Development Solutions & Services
              </h2>
              
              <p 
                ref={addToRefs}
                className="text-lg text-gray-700"
              >
                Eagle Eye Tech is a technology innovator with the ability to develop unique web development solutions that address complex business challenges in the day-to-day world.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            {/* Custom Web & Mobile App Development */}
            <div 
              ref={addToCardRefs}
              className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-orange-600 mb-6">Custom Web & Mobile App Development</h3>
              <p className="text-gray-700 mb-6">
                We deliver dynamic, responsive, and well-integrated custom applications to build better visibility over the web platforms.
              </p>
              
              <ul className="space-y-3">
                {[
                  "Customer & organization research",
                  "Design wireframing & prototyping",
                  "Architecture Planning",
                  "Backend Coding & Frontend",
                  "Optimization",
                  "Maintenance",
                  "DevOps"
                ].map((item, index) => (
                  <li 
                    key={index}
                    ref={addToChecklistRefs}
                    className="flex items-start"
                  >
                    <span className="text-orange-600 mr-2 mt-1">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Application Development */}
            <div 
              ref={addToCardRefs}
              className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-orange-600 mb-6">Mobile Application Development</h3>
              <p className="text-gray-700 mb-6">
                Eagle Eye Tech mobile application developers can design and deliver high-quality applications that work on all mobile devices.
              </p>
              
              <ul className="space-y-3">
                {[
                  "Architecture planning",
                  "Business analysis",
                  "UI/UX design and prototyping",
                  "Development",
                  "Testing and QA",
                  "Publication",
                  "Further Tech support"
                ].map((item, index) => (
                  <li 
                    key={index}
                    ref={addToChecklistRefs}
                    className="flex items-start"
                  >
                    <span className="text-orange-600 mr-2 mt-1">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {/* Responsive Development */}
            <div 
              ref={addToCardRefs}
              className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-orange-600"
            >
              <div className="flex items-center mb-4">
                <img 
                  ref={addToImageRefs}
                  src={WebMobileImg} 
                  alt="Web and Mobile" 
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <h3 className="text-2xl font-bold text-orange-600">Responsive Mobile & Web Development</h3>
              </div>
              <p className="text-gray-700">
                We design and develop highly responsive web and mobile-first web applications with emerging technologies and platforms.
              </p>
            </div>

            {/* E-Commerce & CMS */}
            <div 
              ref={addToCardRefs}
              className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-amber-500"
            >
              <h3 className="text-2xl font-bold text-orange-600 mb-4">E-Commerce & CMS Specialized</h3>
              <p className="text-gray-700">
                Our team can build you an easy-to-use CMS or eCommerce platform that will help your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section - Strategic Planning */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-white to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 
                ref={strategicHeadingRef}
                className="text-3xl md:text-4xl font-bold text-orange-600 mb-6"
              >
                Eagle Eye Tech Strategic Planning Analysis
              </h2>
              
              <p 
                ref={addToRefs}
                className="text-lg text-gray-700"
              >
                By gathering business requirements, performing in-depth business analysis, and planning web development efficiently, we define the scope of the application.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                ref={addToImageRefs}
                src={PlanningImg} 
                alt="Strategic Planning" 
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Development Process */}
            <div 
              ref={addToCardRefs}
              className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-orange-600"
            >
              <img 
                ref={addToImageRefs}
                src={AppDevelopmentImg} 
                alt="Development" 
                className="w-full h-40 object-cover rounded-t-xl -mt-6 -mx-6 mb-4"
              />
              <h3 className="text-xl font-bold text-orange-600 mb-4">Mobile & Web App Development</h3>
              <p className="text-gray-700">
                We prefer to develop the design as fast as possible, without spending too much money. The first step is to design an MVP.
              </p>
            </div>

            {/* Testing Process */}
            <div 
              ref={addToCardRefs}
              className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-amber-500"
            >
              <img 
                ref={addToImageRefs}
                src={TestingImg} 
                alt="Testing" 
                className="w-full h-40 object-cover rounded-t-xl -mt-6 -mx-6 mb-4"
              />
              <h3 className="text-xl font-bold text-orange-600 mb-4">Mobile & Web Application Testing</h3>
              <p className="text-gray-700">
                Eagle Eye Tech can assist you with end-to-end web app testing to ensure your application meets all your requirements.
              </p>
            </div>

            {/* Maintenance Process */}
            <div 
              ref={addToCardRefs}
              className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-yellow-500"
            >
              <img 
                ref={addToImageRefs}
                src={MaintenanceImg} 
                alt="Maintenance" 
                className="w-full h-40 object-cover rounded-t-xl -mt-6 -mx-6 mb-4"
              />
              <h3 className="text-xl font-bold text-orange-600 mb-4">Mobile & Web Application Maintenance</h3>
              <p className="text-gray-700">
                For Eagle Eye Tech experts, we see about creating a reliable product that benefits your business.
              </p>
            </div>
          </div>

          <div className="w-24 h-1 bg-orange-600 mx-auto my-16"></div>

          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                ref={addToImageRefs}
                src={BenefitsImg} 
                alt="Benefits" 
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h3 className="text-2xl md:text-3xl font-bold text-orange-600 mb-6">
                Benefits From Our Web & App Development Services
              </h3>
              
              <p 
                ref={addToRefs}
                className="text-lg text-gray-700 mb-8"
              >
                If you need professional web & mobile app development services, it's better to analyze all pros & cons. Compared to other cooperation Eagle Eye Tech custom client-focused approach has a few advantages.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Better engagement through fast & responsive solutions",
              "Custom monitoring with transparent project control",
              "Fully tailored solutions by complete understanding",
              "New revenue opportunities",
              "Reduced Development costs"
            ].map((benefit, index) => (
              <div 
                key={index}
                ref={addToBenefitCardsRefs}
                className="bg-white p-6 rounded-lg shadow-md flex items-start border border-orange-600"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-4">
                  <span className="text-orange-600 font-bold">{index + 1}</span>
                </div>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Clients Section */}
      <section ref={clientsRef} className="bg-white text-black max-w-6xl mx-auto rounded-lg shadow-lg p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-8">Our Clients</h2>
        <div className="flex justify-center items-center gap-8 flex-wrap px-4">
          {clients.map((client) => (
            <div
              key={client.name}
              className="w-32 h-20 flex items-center justify-center cursor-pointer transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105"
            >
              <img src={client.logo} alt={client.name} className="max-h-full object-contain" />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default ApplicationDevelopment;