
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CloudNestPMS = () => {
  const heroRef = useRef(null);
  const offersRef = useRef(null);
  const highlightsRef = useRef(null);
  const benefitsRef = useRef(null);
  const differentRef = useRef(null);
  const visionRef = useRef(null);
  const offersItemsRef = useRef([]);
  const highlightsItemsRef = useRef([]);
  const benefitsItemsRef = useRef([]);
  const differentItemsRef = useRef([]);
  const visionItemsRef = useRef([]);

  useEffect(() => {
    const fadeInSection = (ref) => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    };

    const fadeInItems = (itemsRef, direction = 'x', delayFactor = 0.2) => {
      itemsRef.current.forEach((item, index) => {
        if (!item) return;
        const fromProps = { opacity: 0 };
        fromProps[direction] = direction === 'y' ? 30 : index % 2 === 0 ? -50 : 50;

        gsap.fromTo(
          item,
          fromProps,
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.8,
            delay: index * delayFactor,
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    };

    // Sections
    fadeInSection(heroRef);
    fadeInSection(offersRef);
    fadeInSection(highlightsRef);
    fadeInSection(benefitsRef);
    fadeInSection(differentRef);
    fadeInSection(visionRef);

    // Items
    fadeInItems(offersItemsRef, 'x', 0.2);
    fadeInItems(highlightsItemsRef, 'x', 0.2);
    fadeInItems(benefitsItemsRef, 'y', 0.15);
    fadeInItems(differentItemsRef, 'x', 0.2);
    fadeInItems(visionItemsRef, 'x', 0.2);

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-orange-50 font-sans mt-25">
      {/* Custom CSS for Medi2AI theme */}
      <style>
        {`
          .from-custom-orange-500 { background-color: #F54A00; }
          .to-custom-orange-50 { background-color: #FFF7ED; }
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
          .bg-custom-orange-100 { background-color: #FFF7ED; }
          .border-custom-orange-100 { border-color: #FFF7ED; }
          .bg-custom-orange-50 { background-color: #FFF7ED; }
          .hover\\:bg-custom-orange-600 { background-color: #D43F00; }
          .hover\\:shadow-custom-orange-200 { box-shadow: 0 0 15px rgba(245, 74, 0, 0.2); }
        `}
      </style>

      {/* Hero Section */}
      <section ref={heroRef} className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-white to-orange-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-custom-orange-700 mb-4">
              Cloud Nest PMS
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              Next-Generation Property & Hotel Management System
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Cloud Nest PMS simplifies hospitality operations—whether you manage hotels, resorts, serviced apartments, or rental properties. 
              Streamline operations, improve guest experience, and maximize revenue—all from one centralized dashboard.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/cloudnest1.png" 
              alt="Cloud Nest PMS Dashboard" 
              className="rounded-lg shadow-xl w-full max-w-md"
              onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Found"; }}
            />
          </div>
        </div>
      </section>

      {/* What Cloud Nest PMS Offers */}
      <section ref={offersRef} className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 order-2 md:order-1">
            <img 
              src="/cloudnest2.jpg" 
              alt="Property Management" 
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Found"; }}
            />
          </div>
          <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
            <h2 className="text-3xl font-bold text-custom-orange-700 mb-6">
              What Cloud Nest PMS Offers
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Cloud Nest PMS brings every aspect of property and hotel management into one platform:
            </p>
            <ul className="space-y-4">
              {[
                "Front Desk Management – Smooth check-in/check-out, room allocation, and reservations.",
                "Booking Engine Integration – Manage direct and third-party bookings (OTAs like Booking.com, Expedia, Airbnb).",
                "Revenue & Rate Management – Dynamic pricing, occupancy tracking, and revenue forecasts.",
                "Guest Profile Management – Maintain guest history, preferences, and loyalty programs.",
                "Billing & Payments – Automated invoicing, multi-currency, and secure payment support.",
                "Housekeeping & Maintenance – Task assignment, real-time room status, and staff coordination.",
                "Reports & Analytics – Dashboards for occupancy, revenue, and guest satisfaction."
              ].map((point, index) => (
                <li 
                  key={index} 
                  ref={(el) => (offersItemsRef.current[index] = el)}
                  className="flex items-start"
                >
                  <div className="bg-custom-orange-100 p-2 rounded-full mr-4">
                    <Check className="w-5 h-5 text-custom-orange-500" />
                  </div>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section ref={highlightsRef} className="py-16 px-4 md:px-8 lg:px-16 bg-custom-orange-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-custom-orange-700 mb-6">
              Cloud Nest PMS Key Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Cloud-based, accessible from anywhere",
                "Multi-property management from one platform",
                "Integration with OTAs & Channel Managers",
                "Automated Invoicing & Payment Processing",
                "Real-time Housekeeping & Maintenance Tracking",
                "AI-powered Reporting & Forecasting"
              ].map((highlight, index) => (
                <div 
                  key={index} 
                  ref={(el) => (highlightsItemsRef.current[index] = el)}
                  className="flex items-start"
                >
                  <div className="bg-custom-orange-100 p-2 rounded-full mr-3 mt-1">
                    <Check className="w-4 h-4 text-custom-orange-500" />
                  </div>
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/cloudnest3.avif" 
              alt="Cloud Nest PMS Highlights" 
              className="rounded-lg shadow-lg w-full max-w-md"
              onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Found"; }}
            />
          </div>
        </div>
      </section>

      {/* Who Benefits */}
      <section ref={benefitsRef} className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 order-2 md:order-1">
            <img 
              src="/cloudnest4.jpg" 
              alt="Who Benefits from Cloud Nest PMS" 
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Found"; }}
            />
          </div>
          <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
            <h2 className="text-3xl font-bold text-custom-orange-700 mb-6">
              Who Benefits from Cloud Nest PMS?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Cloud Nest PMS is designed for the entire hospitality ecosystem:
            </p>
            <div className="space-y-6">
              {[
                { title: "Hotels & Resorts", description: "Simplify reservations, staff, and guest management." },
                { title: "Property Managers", description: "Easily handle multiple rental units or serviced apartments." },
                { title: "Hostels & Guesthouses", description: "Streamline occupancy and reduce manual errors." },
                { title: "Hospitality Chains", description: "Centralized control across multiple properties in real-time." }
              ].map((benefit, index) => (
                <div 
                  key={index} 
                  ref={(el) => (benefitsItemsRef.current[index] = el)}
                  className="bg-custom-orange-50 p-4 rounded-lg"
                >
                  <h3 className="font-semibold text-lg text-custom-orange-700 mb-2">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Cloud Nest PMS is Different */}
      <section ref={differentRef} className="py-16 px-4 md:px-8 lg:px-16 bg-custom-orange-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-custom-orange-700 mb-6">
              Why Cloud Nest PMS is Different
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Unlike traditional PMS, Cloud Nest is modern, scalable, and user-friendly. 
              It’s not just software—it’s a digital transformation tool for your business.
            </p>
            <div className="space-y-4">
              {[
                "All-in-One Platform – from reservations to revenue management.",
                "Mobile-Friendly – manage on the go.",
                "Seamless Integrations – OTAs, POS, payment gateways.",
                "Secure & Reliable – encryption, backups, GDPR compliant."
              ].map((point, index) => (
                <div 
                  key={index} 
                  ref={(el) => (differentItemsRef.current[index] = el)}
                  className="flex items-start"
                >
                  <div className="bg-custom-orange-100 p-2 rounded-full mr-4">
                    <Check className="w-5 h-5 text-custom-orange-500" />
                  </div>
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/cloudnest5.png" 
              alt="Why Cloud Nest PMS is Different" 
              className="rounded-lg shadow-lg w-full max-w-md"
              onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Found"; }}
            />
          </div>
        </div>
      </section>

      {/* Vision / Future Section */}
      <section ref={visionRef} className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 order-2 md:order-1">
            <img 
              src="/cloudnest6.png" 
              alt="Cloud Nest PMS Vision" 
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Found"; }}
            />
          </div>
          <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
            <h2 className="text-3xl font-bold text-custom-orange-700 mb-6">
              The Future of Cloud Nest PMS
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              We’re constantly innovating to bring smarter solutions for the hospitality industry:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "AI-driven guest personalization",
                "Chatbot for guest inquiries and reservations",
                "Marketplace integrations (spa, events, tours)",
                "Mobile apps for guests – self check-in, digital keys",
                "Voice-enabled operations",
                "Smart revenue optimization",
                "Integrated marketing tools (email, SMS, social)"
              ].map((vision, index) => (
                <div 
                  key={index} 
                  ref={(el) => (visionItemsRef.current[index] = el)}
                  className="bg-custom-orange-50 p-4 rounded-lg"
                >
                  <div className="flex items-center mb-2">
                    <div className="bg-custom-orange-100 p-2 rounded-full mr-3">
                      <Check className="w-4 h-4 text-custom-orange-500" />
                    </div>
                    <h3 className="font-semibold text-custom-orange-700">Future Roadmap</h3>
                  </div>
                  <p className="text-gray-700 text-sm">{vision}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudNestPMS;
