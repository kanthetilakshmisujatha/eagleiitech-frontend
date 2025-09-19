import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Import client logos
import cisco from "../assets/cisco.png";
import version from "../assets/version.png";
import wells from "../assets/wells.png";
import fidelity from "../assets/fidelity.png";
import hcl from "../assets/hcl.png";
import infosys from "../assets/infosys.png";

const CSR = () => {
  const missionRef = useRef(null);
  const objectivesRef = useRef(null);
  const programsRef = useRef(null);
  const clientsRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    // Animation for main sections
    const elements = [missionRef.current, objectivesRef.current, programsRef.current, clientsRef.current];

    elements.forEach((el) => {
      if (el) {
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
              markers: false,
            },
          }
        );
      }
    });

    // Animate images separately
    const images = [
      missionRef.current?.querySelector('.section-image'),
      objectivesRef.current?.querySelector('.section-image'),
    ].filter(Boolean);

    images.forEach((img) => {
      gsap.fromTo(
        img,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: img,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Infinite scroll animation for clients
    if (scrollRef.current) {
      const element = scrollRef.current;
      const width = element.scrollWidth / 2; // since we duplicate items
      gsap.to(element, {
        x: -width,
        duration: 20, // speed
        ease: "linear",
        repeat: -1,
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const clients = [
    { name: "Cisco", logo: cisco },
    { name: "Verizon", logo: version },
    { name: "Wells Fargo", logo: wells },
    { name: "Fidelity", logo: fidelity },
    { name: "HCL", logo: hcl },
    { name: "Infosys", logo: infosys },
  ];

  return (
    <div className="w-full bg-white text-white px-4 md:px-10 py-10 space-y-20 mt-10">
      {/* Our Mission Section */}
      <section ref={missionRef} className="max-w-6xl mx-auto bg-white text-black rounded-lg p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-3xl font-bold text-orange-600 mb-4 border-b-2 border-orange-400 inline-block pb-1">
              Our Mission
            </h2>
            <p className="text-gray-800 text-base leading-relaxed mb-3">
              Corporate Social Responsibility (CSR) is integral to our business practices, and at Eagle Eye Tech, we firmly believe that being socially responsible and embracing Environmental, Social, and Governance (ESG) practices are essential components of a successful business strategy.
            </p>
            <p className="text-gray-800 text-base leading-relaxed">
              Our CSR initiatives include investing in community development programs, promoting digital literacy and education, and reducing our carbon footprint by implementing green practices. Through the power of emerging technologies, we aim to proactively drive positive change, enhance social equity, and contribute to a sustainable future for all.
            </p>
          </div>
          <div className="section-image">
            <img
              src="/csr1.jpg"
              alt="CSR Mission"
              className="h-48 md:h-64 w-full object-cover rounded-md"
            />
          </div>
        </div>
      </section>

      {/* Our Objectives Section */}
      <section ref={objectivesRef} className="max-w-6xl mx-auto bg-orange-50 text-black rounded-lg p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-3xl font-bold text-orange-600 mb-6 border-b-2 border-orange-400 inline-block pb-1">
              Our Objectives
            </h2>
            <ul className="space-y-4 text-gray-800 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">✓</span>
                Promote diversity and inclusivity by using inclusive language throughout our communication, interactions, and code/solution delivery.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">✓</span>
                Develop code that is accessible to all users, regardless of ability.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">✓</span>
                Prioritize environmental sustainability in our operations by choosing energy-efficient technology solutions and hardware, implementing sustainable procurement practices, and working towards becoming carbon neutral by 2030.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">✓</span>
                Encourage and endorse social impact initiatives that address critical societal challenges.
              </li>
            </ul>
          </div>
          <div className="section-image">
            <img
              src="/csr.png"
              alt="Diverse Team"
              className="h-48 md:h-64 w-full object-cover rounded-md transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* Our Programs Section */}
      <section ref={programsRef} className="max-w-6xl mx-auto bg-white text-black rounded-lg p-8 md:p-12">
        <h2 className="text-3xl font-bold text-orange-600 border-b-2 border-orange-400 inline-block pb-1 mb-8 text-center">
          Our Programs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-orange-400 transition-shadow duration-300">
            <img
              src="/digitals.png"
              alt="Digital Literacy"
              className="h-40 w-full object-cover rounded-md mb-4"
            />
            <h3 className="font-semibold text-orange-600 mb-2">Digital Literacy</h3>
            <p className="text-gray-700 text-sm">
              We will provide access to technology and education to less privileged communities to help bridge the digital divide.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-orange-400 transition-shadow duration-300">
            <img
              src="/environment.png"
              alt="Environmental Sustainability"
              className="h-40 w-full object-cover rounded-md mb-4"
            />
            <h3 className="font-semibold text-orange-600 mb-2">Environmental Sustainability</h3>
            <p className="text-gray-700 text-sm">
              We will use technology to build and support resource-efficient and eco-conscious solutions that focus on eliminating negative environmental impacts and reducing carbon emissions.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-orange-400 transition-shadow duration-300">
            <img
              src="/innovation.png"
              alt="Innovation & Entrepreneurship"
              className="h-40 w-full object-cover rounded-md mb-4"
            />
            <h3 className="font-semibold text-orange-600 mb-2">Innovation & Entrepreneurship</h3>
            <p className="text-gray-700 text-sm">
              We will organize programs to foster innovation and entrepreneurship among young people, providing mentoring, resources, networking opportunities, and STEM training.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-orange-400 transition-shadow duration-300">
            <img
              src="/social impact.png"
              alt="Social Impact"
              className="h-40 w-full object-cover rounded-md mb-4"
            />
            <h3 className="font-semibold text-orange-600 mb-2">Social Impact</h3>
            <p className="text-gray-700 text-sm">
              We will use technology to address social issues such as poverty and inequality, partnering with non-profits and other organizations to positively impact 100 million lives by 2030.
            </p>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section ref={clientsRef} className="max-w-6xl mx-auto bg-white-50 text-black rounded-lg p-8 md:p-12">
        <h2 className="text-3xl font-bold text-orange-600 mb-8 text-center relative pb-1">
  Our Clients
  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-orange-400"></div>
</h2>
        <div className="overflow-hidden py-4">
          <div
            ref={scrollRef}
            className="flex w-max"
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="w-40 h-20 mx-6 flex items-center justify-center cursor-pointer transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        
        <p className="text-center text-gray-700 mt-6">
          We're proud to partner with industry leaders who share our commitment to social responsibility and sustainable practices.
        </p>
      </section>
    </div>
  );
};

export default CSR;