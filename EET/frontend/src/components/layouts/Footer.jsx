import React, { useState, useEffect } from "react";
import "./Footer.css";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show arrow when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer-bg text-white py-14 px-6 relative">
      {/* Scroll to top button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#F54A00] hover:bg-[#d64000] text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50 cursor-pointer"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Section */}
        <div className="text-center md:text-left">
          <img
            src="/eet.png"
            alt="Eagle Eye Tech"
            className="w-40 mx-auto md:mx-0 mb-4"
          />
          <p className="text-gray-300 text-sm">
            Discover how technology and innovation can transform your business
            outcomes. You have landed at the right place.
          </p>

          {/* Social Icons */}
          <ul className="wrapper mt-5 justify-center md:justify-start">
            <li className="icon linkedin">
              <span className="tooltip">LinkedIn</span>
              <svg
                viewBox="0 0 448 512"
                height="1.2em"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M100.28 448H7.4V148.9h92.88zm-46.44-338C24 110 0 86 0 57.3 0 28.3 24 4 53.84 4S107.7 28.3 107.7 57.3c0 28.7-24 52.7-53.86 52.7zM447.9 448h-92.68V302.4c0-34.7-12.4-58.4-43.3-58.4-23.6 0-37.6 15.8-43.8 31V448h-92.7V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.4 87.9-48.4 59.2 0 103.9 38.7 103.9 121.9V448z" />
              </svg>
            </li>
            <li className="icon facebook">
              <span className="tooltip">Facebook</span>
              <svg
                viewBox="0 0 320 512"
                height="1.2em"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
              </svg>
            </li>
            <li className="icon instagram">
              <span className="tooltip">Instagram</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.2em"
                fill="currentColor"
                className="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>• Software Development</li>
            <li>• Mobile Development</li>
            <li>• UI/UX Design</li>
            <li>• Software Testing</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <div className="text-gray-300 text-sm space-y-4">
            <div>
              <span className="font-semibold text-[#F54A00]">USA</span>
              <br />
              1000 Bearcat Way Suite 105 Unit 5 Morrisville, NC 27560
            </div>
            <div>
              <span className="font-semibold text-[#F54A00]">India</span>
              <br />
              Workafella Cyber Crown HiTech City, 7th Floor HUDA Techno Enclave,
              Madhapur, Hyderabad, Telangana 500081
            </div>
            <div>
              <span className="font-semibold text-[#F54A00]">Phone:</span>{" "}
              <a href="tel:+19194396578" className="hover:underline">
                (919) 439-6578
              </a>
            </div>
            <div>
              <span className="font-semibold text-[#F54A00]">Email:</span>{" "}
              <a href="mailto:hr@eagleiitech.com" className="hover:underline">
                hr@eagleiitech.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center">
        <p>© 2025 Eagle Eye Technologies — All Rights Reserved.</p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="#" className="hover:text-[#F54A00]">
            Career
          </a>
          <a href="#" className="hover:text-[#F54A00]">
            Terms of Use
          </a>
          <a href="#" className="hover:text-[#F54A00]">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
