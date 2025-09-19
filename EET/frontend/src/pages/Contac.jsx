
import React, { useEffect, useRef, useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  const highlightColor = "#F54A00";

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo({ top: 0, behavior: "smooth" });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      });

      tl.from(leftRef.current, {
        x: -150,
        opacity: 0,
        rotationY: -30,
        duration: 1,
        ease: "power3.out",
      });

      tl.from(
        rightRef.current,
        {
          x: 150,
          opacity: 0,
          rotationY: 30,
          scale: 0.9,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.6"
      );

      tl.from(
        rightRef.current.querySelectorAll("input, textarea, button"),
        {
          y: 40,
          opacity: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.15,
        },
        "-=0.3"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div
      ref={sectionRef}
      className="bg-gradient-to-r from-gray-50 to-gray-100 py-8 sm:py-16 px-4 sm:px-6 md:px-20 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-stretch mt-12 sm:mt-16 mb-16">
        {/* Left Info */}
        <div
          ref={leftRef}
          className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 relative overflow-hidden h-full flex flex-col"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 pt-4 sm:pt-6">
            Get <span style={{ color: highlightColor }}>Started</span> Today!
          </h2>
          <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
            Discover how technology and innovation can transform your business
            outcomes. Let's bring your ideas to life with digital experiences
            that delight your customers.
          </p>

          <div className="space-y-4 sm:space-y-6 flex-grow">
            <div className="flex items-start gap-3 sm:gap-4">
              <FaMapMarkerAlt className="text-xl sm:text-2xl mt-1" style={{ color: highlightColor }} />
              <div>
                <h4 className="font-semibold text-base sm:text-lg">USA</h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  1000 Bearcat Way Suite 105 Unit 5 <br />
                  Morrisville, NC 27560
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <FaMapMarkerAlt className="text-xl sm:text-2xl mt-1" style={{ color: highlightColor }} />
              <div>
                <h4 className="font-semibold text-base sm:text-lg">India</h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  Workafella Cyber Crown HiTech City <br />
                  7th Floor HUDA Techno Enclave Madhapur <br />
                  Hyderabad Telangana 500081
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <FaEnvelope className="text-lg sm:text-xl" style={{ color: highlightColor }} />
              <p className="text-gray-600 text-sm sm:text-base">hr@eagleiitech.com</p>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <FaPhoneAlt className="text-lg sm:text-xl" style={{ color: highlightColor }} />
              <p className="text-gray-600 text-sm sm:text-base">(919) 439-6578</p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div
          ref={rightRef}
          className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 h-full flex flex-col"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 pt-4 sm:pt-6">
            Request A Quote
          </h2>
          <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
            Let's talk about your IT needs!
          </p>

          <form className="space-y-4 sm:space-y-6 flex-grow" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm sm:text-base"
                style={{ borderColor: highlightColor }}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm sm:text-base"
                style={{ borderColor: highlightColor }}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <input
                type="text"
                placeholder="Phone No"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm sm:text-base"
                style={{ borderColor: highlightColor }}
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm sm:text-base"
                style={{ borderColor: highlightColor }}
              />
            </div>

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm sm:text-base"
              style={{ borderColor: highlightColor }}
              required
            ></textarea>

            <button
              type="submit"
              className="w-full text-white px-2 py-2 sm:py-3 rounded-lg hover:scale-105 transition-transform font-semibold text-sm sm:text-base mb-20"
              style={{ backgroundColor: highlightColor }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {submitted && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg z-50">
          Thank you! Your message has been sent.
        </div>
      )}

      {/* Google Map */}
      <div className="map-container rounded-lg overflow-hidden shadow-md mt-12 sm:mt-16">
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.317828458927!2d-78.82750712462252!3d35.84521027252502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac96b5db3e6a6d%3A0x6d2b3e2a6e96b33c!2s1000%20Bearcat%20Way%20%23105%2C%20Morrisville%2C%20NC%2027560%2C%20USA!5e0!3m2!1sen!2sin!4v1694851512365!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
