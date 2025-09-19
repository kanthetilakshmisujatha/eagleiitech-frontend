
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { FaClinicMedical, FaGraduationCap, FaHospital, FaStethoscope, FaHandshake, FaRocket, FaLightbulb, FaUserMd, FaChartLine, FaShieldAlt, FaMobileAlt, FaMicrophone, FaUserShield, FaSyncAlt, FaBrain ,} from 'react-icons/fa';


import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Medi2AI = () => {
  const navigate = useNavigate();

  const introSectionRef = useRef(null);
  const featuresSectionRef = useRef(null);
  const highlightsSectionRef = useRef(null);
  const benefitsSectionRef = useRef(null);
  const visionSectionRef = useRef(null);
  const differentSectionRef = useRef(null);
  const chooseSectionRef = useRef(null);

  const featureItemsRef = useRef([]);
  const highlightItemsRef = useRef([]);
  const benefitItemsRef = useRef([]);
  const visionItemsRef = useRef([]);
  const differentItemsRef = useRef([]);
  const chooseItemsRef = useRef([]);

  useEffect(() => {
    const fadeInSection = (ref) => {
      gsap.fromTo(ref.current, { opacity: 0, y: 50 }, {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    };

    const fadeInItems = (itemsRef, direction = 'x', delayFactor = 0.15) => {
      itemsRef.current.forEach((item, index) => {
        if (!item) return;
        const fromProps = { opacity: 0 };
        fromProps[direction] = direction === 'y' ? 30 : (direction === 'x' ? (index % 2 === 0 ? -50 : 50) : 0);

        gsap.fromTo(item, fromProps, {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          delay: index * delayFactor,
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });
    };

    // Sections
    fadeInSection(introSectionRef);
    fadeInSection(featuresSectionRef);
    fadeInSection(highlightsSectionRef);
    fadeInSection(benefitsSectionRef);
    fadeInSection(visionSectionRef);
    fadeInSection(differentSectionRef);
    fadeInSection(chooseSectionRef);

    // Items
    fadeInItems(featureItemsRef, 'x', 0.2);
    fadeInItems(highlightItemsRef, 'x', 0.15);
    fadeInItems(benefitItemsRef, 'y', 0.2);
    fadeInItems(visionItemsRef, 'x', 0.2);
    fadeInItems(differentItemsRef, 'x', 0.2);
    fadeInItems(chooseItemsRef, 'y', 0.15);

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-orange-50 font-sans py-12 px-6 mt-10">

      {/* Custom CSS for new color */}
      <style>
        {`
          .from-custom-orange-500 { background-color: #F54A00; }
          .to-custom-transparent { background-color: transparent; }
          .text-custom-orange-700 { color: #F54A00; }
          .text-custom-orange-500 { color: #F54A00; }
          .bg-custom-orange-500 { background-color: #F54A00; }
          .border-custom-orange-500 { border-color: #F54A00; }
          .bg-custom-orange-400 { background-color: #F54A00; }
          .border-custom-orange-400 { border-color: #F54A00; }
          .bg-custom-orange-300 { background-color: #F54A00; }
          .border-custom-orange-300 { border-color: #F54A00; }
          .bg-custom-orange-200 { background-color: #F54A00; }
          .border-custom-orange-200 { border-color: #F54A00; }
          .bg-custom-orange-100 { background-color: #F54A00; }
          .border-custom-orange-100 { border-color: #F54A00; }
          .hover\\:bg-custom-orange-600 { background-color: #D43F00; } /* Slightly darker shade for hover */
          .hover\\:shadow-custom-orange-200 { box-shadow: 0 0 15px rgba(245, 74, 0, 0.2); }
        `}
      </style>

      {/* Intro */}
      <section ref={introSectionRef} className="max-w-6xl mx-auto mb-16 flex flex-col md:flex-row items-center gap-8">
        <img src="/medi2ai.png" 
             alt="Medical Robots" 
             className="md:w-1/2 w-full h-80 object-cover rounded-xl shadow-lg" />
        <div className="md:w-1/2 p-6 bg-white rounded-xl shadow-lg prose prose-lg text-gray-800">
        <h2 className="text-4xl font-bold text-custom-orange-700 mb-6">INTRO: Medi2AI </h2>
          <p>
            Medi2AI is an advanced AI-powered medical assistant designed to support healthcare professionals in making faster, smarter, and more accurate clinical decisions. Inspired by modern healthcare challenges, Medi2AI transforms complex patient data into clear, actionable insights, enabling doctors to focus more on patient care rather than paperwork.
          </p>
          <p>
            Whether it's analyzing medical records, generating patient summaries, or highlighting potential risks, Medi2AI acts as a digital co-pilot for clinicians.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto border-t border-custom-orange-200 my-12"></div>

      {/* Features */}
      <section ref={featuresSectionRef} className="max-w-6xl mx-auto mb-16 flex flex-col md:flex-row items-center gap-8">
        <img src="/ai2.jpg" 
             alt="AI Features" 
             className="md:w-1/2 w-full h-100 object-cover rounded-xl shadow-lg" />
        <div className="md:w-1/2 p-6 bg-white rounded-xl shadow-lg">
          <h2 className="text-4xl font-bold text-custom-orange-700 mb-6">What Medi2AI Does</h2>
          <p className="text-gray-800 mb-6">Medi2AI bridges the gap between data overload and clinical clarity. It provides:</p>
          <ul className="space-y-4">
            <li ref={el => featureItemsRef.current[0] = el} className="bg-white p-4 rounded-lg shadow-md border-l-4 border-custom-orange-500 flex items-center h-24 hover:shadow-xl transition-shadow">
              <FaStethoscope className="text-custom-orange-500 mr-4 text-2xl" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Automated Medical Summaries</h3>
                <p className="text-gray-600 text-sm">Converts EHRs and patient notes into concise summaries.</p>
              </div>
            </li>
            <li ref={el => featureItemsRef.current[1] = el} className="bg-white p-4 rounded-lg shadow-md border-l-4 border-custom-orange-400 flex items-center h-24 hover:shadow-xl transition-shadow">
              <FaUserMd className="text-custom-orange-500 mr-4 text-2xl" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Clinical Decision Support</h3>
                <p className="text-gray-600 text-sm">Suggests possible diagnoses, risk factors, and next steps.</p>
              </div>
            </li>
            <li ref={el => featureItemsRef.current[2] = el} className="bg-white p-4 rounded-lg shadow-md border-l-4 border-custom-orange-300 flex items-center h-24 hover:shadow-xl transition-shadow">
              <FaChartLine className="text-custom-orange-500 mr-4 text-2xl" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Symptom & History Analysis</h3>
                <p className="text-gray-600 text-sm">Reviews past medical records to detect patterns.</p>
              </div>
            </li>
            <li ref={el => featureItemsRef.current[3] = el} className="bg-white p-4 rounded-lg shadow-md border-l-4 border-custom-orange-200 flex items-center h-24 hover:shadow-xl transition-shadow">
              <FaShieldAlt className="text-custom-orange-500 mr-4 text-2xl" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Billing & Documentation Support</h3>
                <p className="text-gray-600 text-sm">Generates structured clinical notes for compliance.</p>
              </div>
            </li>
            <li ref={el => featureItemsRef.current[4] = el} className="bg-white p-4 rounded-lg shadow-md border-l-4 border-custom-orange-100 flex items-center h-24 hover:shadow-xl transition-shadow">
              <FaChartLine className="text-custom-orange-500 mr-4 text-2xl" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Predictive Insights</h3>
                <p className="text-gray-600 text-sm">Leverages AI models to forecast health risks and treatment outcomes.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <div className="max-w-5xl mx-auto border-t border-custom-orange-200 my-12"></div>
{/* Key Highlights Section */}
<section ref={highlightsSectionRef} className="max-w-6xl mx-auto mb-16 flex flex-col md:flex-row items-center gap-8">
  <img 
    src="/ai3.png" 
    alt="Highlights" 
    className="md:w-1/2 w-full h-100 object-cover rounded-xl shadow-lg" 
  />
  <div className="md:w-1/2 p-10 bg-white rounded-xl shadow-lg">
    <h2 className="text-3xl md:text-4xl font-bold text-custom-orange-700 mb-8">Medi2AI's Key Highlights</h2>
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <li ref={el => highlightItemsRef.current[0] = el} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-custom-orange-500 hover:shadow-xl transition-shadow flex items-center h-28">
        <FaStethoscope className="text-custom-orange-500 mr-5 text-3xl" />
        <h3 className="text-lg md:text-xl font-semibold text-gray-800">AI-powered Clinical Decision Support</h3>
      </li>
      <li ref={el => highlightItemsRef.current[1] = el} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-custom-orange-400 hover:shadow-xl transition-shadow flex items-center h-28">
        <FaUserMd className="text-custom-orange-500 mr-5 text-3xl" />
        <h3 className="text-lg md:text-xl font-semibold text-gray-800">Automated Patient Record Summaries</h3>
      </li>
      <li ref={el => highlightItemsRef.current[2] = el} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-custom-orange-300 hover:shadow-xl transition-shadow flex items-center h-28">
        <FaChartLine className="text-custom-orange-500 mr-5 text-3xl" />
        <h3 className="text-lg md:text-xl font-semibold text-gray-800">Time-Saving Documentation Tools</h3>
      </li>
      <li ref={el => highlightItemsRef.current[3] = el} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-custom-orange-200 hover:shadow-xl transition-shadow flex items-center h-28">
        <FaChartLine className="text-custom-orange-500 mr-5 text-3xl" />
        <h3 className="text-lg md:text-xl font-semibold text-gray-800">Predictive Healthcare Analytics</h3>
      </li>
      <li ref={el => highlightItemsRef.current[4] = el} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-custom-orange-100 hover:shadow-xl transition-shadow flex items-center h-28">
        <FaShieldAlt className="text-custom-orange-500 mr-5 text-3xl" />
        <h3 className="text-lg md:text-xl font-semibold text-gray-800">Seamless Integration with EHR/EMR Systems</h3>
      </li>
      <li ref={el => highlightItemsRef.current[5] = el} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-custom-orange-500 hover:shadow-xl transition-shadow flex items-center h-28">
        <FaShieldAlt className="text-custom-orange-500 mr-5 text-3xl" />
        <h3 className="text-lg md:text-xl font-semibold text-gray-800">Data Security & HIPAA Compliance</h3>
      </li>
    </ul>
  </div>
</section>

      <div className="max-w-5xl mx-auto border-t border-custom-orange-200 my-12"></div>
{/* Who Benefits Section */}
<section ref={benefitsSectionRef} className="max-w-6xl mx-auto mb-16">
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-custom-orange-700 mb-4">Who Benefits From Medi2AI?</h2>
    <p className="text-gray-800 max-w-3xl mx-auto text-lg">
      Medi2AI is designed for clinicians, hospitals, and healthcare organizations who want to improve efficiency and reduce burnout.
    </p>
  </div>

  <div className="flex flex-col lg:flex-row gap-8 items-stretch">
    {/* Image Section */}
    <div className="lg:w-2/5">
      <img 
        src="/ai4.jpg" 
        alt="Healthcare professionals using Medi2AI" 
        className="w-full h-full object-cover rounded-xl shadow-lg min-h-[400px]" 
      />
    </div>
    
    {/* Cards Section */}
    <div className="lg:w-3/5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 h-full">


         <div ref={el => benefitItemsRef.current[1] = el} className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-shadow flex flex-col">
          <div className="flex items-start mb-4">
            <div className="bg-custom-white-100 p-3 rounded-full mr-4 flex-shrink-0">
              <FaUserMd  className="text-custom-orange-500 text-xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Doctors</h3>
          </div>
          <p className="text-gray-600 text-sm mt-2">Faster access to patient insights & reduced admin work.</p>
        </div>
        
        
        <div ref={el => benefitItemsRef.current[1] = el} className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-shadow flex flex-col">
          <div className="flex items-start mb-4">
            <div className="bg-custom-white-100 p-3 rounded-full mr-4 flex-shrink-0">
              <FaHospital className="text-custom-orange-500 text-xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Clinics & Hospitals</h3>
          </div>
          <p className="text-gray-600 text-sm mt-2">Streamlined workflows, better resource management.</p>
        </div>
        
        <div ref={el => benefitItemsRef.current[2] = el} className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-shadow flex flex-col">
          <div className="flex items-start mb-4">
            <div className="bg-custom-white-100 p-3 rounded-full mr-4 flex-shrink-0">
              <FaClinicMedical className="text-custom-orange-500 text-xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Healthcare Systems</h3>
          </div>
          <p className="text-gray-600 text-sm mt-2">Improved outcomes through data-driven insights.</p>
        </div>
        
        <div ref={el => benefitItemsRef.current[3] = el} className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-shadow flex flex-col">
          <div className="flex items-start mb-4">
            <div className="bg-custom-white-100 p-3 rounded-full mr-4 flex-shrink-0">
              <FaGraduationCap className="text-custom-orange-500 text-xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Medical Students/Residents</h3>
          </div>
          <p className="text-gray-600 text-sm mt-2">Smarter learning with real-time AI assistance.</p>
        </div>
      </div>
    </div>
  </div>
</section>

      <div className="max-w-5xl mx-auto border-t border-custom-orange-200 my-12"></div>

      {/* Vision Section */}
      <section ref={visionSectionRef} className="max-w-5xl mx-auto mb-16 flex flex-col md:flex-row items-center">
        <img src="/ai5.jpg" alt="Vision" className="md:w-1/2 w-full h-100 object-cover rounded-lg shadow-md mr-8" />
        <div className="md:w-1/2 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl md:text-4xl font-bold text-custom-orange-700 mb-6">Beyond Today: The Vision Of Medi2AI</h2>
          <p className="text-gray-800 mb-6">
            Medi2AI is not just a tool—it's the future of intelligent healthcare assistance. Our roadmap includes:
          </p>
          <ul className="space-y-4">
            <li ref={el => visionItemsRef.current[0] = el} className="bg-white p-4 rounded-lg shadow-md border-l-4 border-custom-orange-500 hover:shadow-lg transition-shadow flex items-center h-20">
              <FaMobileAlt className="text-custom-orange-500 mr-4 text-2xl" />
              <h3 className="text-lg font-semibold text-gray-800">Mobile app for doctors on-the-go</h3>
            </li>
            <li ref={el => visionItemsRef.current[1] = el} className="bg-white p-4 rounded-lg shadow-md border-l-4 border-custom-orange-400 hover:shadow-lg transition-shadow flex items-center h-20">
              <FaMicrophone className="text-custom-orange-500 mr-4 text-2xl" />
              <h3 className="text-lg font-semibold text-gray-800">Voice-enabled patient consultation summaries</h3>
            </li>
            <li ref={el => visionItemsRef.current[2] = el} className="bg-white p-4 rounded-lg shadow-md border-l-4 border-custom-orange-300 hover:shadow-lg transition-shadow flex items-center h-20">
              <FaUserMd className="text-custom-orange-500 mr-4 text-2xl" />
              <h3 className="text-lg font-semibold text-gray-800">AI-driven personalized treatment plans</h3>
            </li>
            <li ref={el => visionItemsRef.current[3] = el} className="bg-white p-4 rounded-lg shadow-md border-l-4 border-custom-orange-200 hover:shadow-lg transition-shadow flex items-center h-20">
              <FaStethoscope className="text-custom-orange-500 mr-4 text-2xl" />
              <h3 className="text-lg font-semibold text-gray-800">Integration with telemedicine platforms</h3>
            </li>
          </ul>
        </div>
      </section>

      <div className="max-w-5xl mx-auto border-t border-custom-orange-200 my-12"></div>
{/* Why Different Section */}
<section ref={differentSectionRef} className="max-w-5xl mx-auto mb-16 flex flex-col md:flex-row items-center">
  <img src="/ai6.jpg" alt="Different" className="md:w-1/2 w-full h-100 object-cover rounded-lg shadow-md mr-8" />
  <div className="md:w-1/2 p-6 bg-white rounded-lg shadow-md">
    <h2 className="text-3xl md:text-4xl font-bold text-custom-orange-700 mb-6">Why Medi2AI Is Different</h2>
    <p className="text-gray-800 mb-6">
      Unlike generic AI tools, Medi2AI is built specifically for the medical ecosystem. It doesn't just summarize—it understands clinical context and delivers insights that are relevant, accurate, and actionable.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div ref={el => differentItemsRef.current[0] = el} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center h-24">
        <FaUserMd className="text-custom-orange-500 mr-4 text-2xl" />
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Reduces Physician Burnout</h3>
          <p className="text-gray-600 text-sm">By cutting documentation time.</p>
        </div>
      </div>
      <div ref={el => differentItemsRef.current[1] = el} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center h-24">
        <FaShieldAlt className="text-custom-orange-500 mr-4 text-2xl" />
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Privacy First</h3>
          <p className="text-gray-600 text-sm">HIPAA/CDPR compliant.</p>
        </div>
      </div>
      <div ref={el => differentItemsRef.current[2] = el} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center h-24">
        <FaBrain className="text-custom-orange-500 mr-4 text-2xl" />
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">AI with Clinical Intelligence</h3>
          <p className="text-gray-600 text-sm">Trained on healthcare-specific data.</p>
        </div>
      </div>
      <div ref={el => differentItemsRef.current[3] = el} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center h-24">
        <FaChartLine className="text-custom-orange-500 mr-4 text-2xl" />
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Scalable</h3>
          <p className="text-gray-600 text-sm">Works for solo practitioners to large hospital chains.</p>
        </div>
      </div>
    </div>
  </div>
</section>

      <div className="max-w-5xl mx-auto border-t border-custom-orange-200 my-12"></div>

     {/* Why Choose Section */}
<section ref={chooseSectionRef} className="max-w-5xl mx-auto mb-16 flex flex-col md:flex-row items-center">
  <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Choose" className="md:w-1/2 w-full h-72 object-cover rounded-lg shadow-md mr-8" />
  <div className="md:w-1/2 p-6 bg-white rounded-lg shadow-md">
    <h2 className="text-3xl md:text-4xl font-bold text-custom-orange-700 mb-6">Why Choose Medi2AI?</h2>
    
    <div className="grid grid-cols-1 gap-4">
      {/* Trusted AI Partner */}
      <div ref={el => chooseItemsRef.current[0] = el} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-start">
        <FaHandshake className="text-custom-orange-500 mr-4 text-2xl mt-1" />
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Trusted AI Partner</h3>
          <p className="text-gray-600 text-sm">For healthcare providers. Designed for doctors, by healthcare technologists.</p>
        </div>
      </div>
      
      {/* Speed + Accuracy */}
      <div ref={el => chooseItemsRef.current[1] = el} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-start">
        <FaRocket className="text-custom-orange-500 mr-4 text-2xl mt-1" />
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Speed + Accuracy</h3>
          <p className="text-gray-600 text-sm">In clinical workflows. Aims to revolutionize patient care with AI-driven insights.</p>
        </div>
      </div>
      
      {/* Context-Aware Insights */}
      <div ref={el => chooseItemsRef.current[2] = el} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-start">
        <FaLightbulb className="text-custom-orange-500 mr-4 text-2xl mt-1" />
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Context-Aware Insights</h3>
          <p className="text-gray-600 text-sm">Medi2AI doesn't just process data; it understands clinical relevance, ensuring doctors get meaningful insights tailored to each patient case.</p>
        </div>
      </div>
      
      {/* Continuous Learning AI */}
      <div ref={el => chooseItemsRef.current[3] = el} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-start">
        <FaSyncAlt className="text-custom-orange-500 mr-4 text-2xl mt-1" />
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Continuous Learning AI</h3>
          <p className="text-gray-600 text-sm">With every update, Medi2AI evolves by incorporating the latest medical research, guidelines, and best practices, keeping clinicians ahead of the curve.</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default Medi2AI;