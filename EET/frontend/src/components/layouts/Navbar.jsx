import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaBoxOpen,
  FaBlog,
  FaBriefcase,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaPhone,
} from "react-icons/fa";
import { gsap } from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const [activeSubItem, setActiveSubItem] = useState(null);
  const dotRef = useRef(null);
  const navItemsRef = useRef([]);
  const logoRef = useRef(null);
  const desktopBtnRef = useRef(null);
  const mobileBtnRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const overlayRef = useRef(null);
  const dropdownRefs = useRef([]);
  const subDropdownRefs = useRef([]);

  const menuItems = [
    { label: "Home", icon: <FaHome />, link: "/" },
    {
      label: "About Us",
      icon: <FaInfoCircle />,
      dropdown: [
        { label: "Company", link: "/mission" },
        { label: "CSR", link: "/csr" },
      ],
    },
    {
      label: "Our Services",
      icon: <FaServicestack />,
      dropdown: [
        {
          label: "Development Services",
          subMenu: [
            { label: "Application Integration", link: "/applicationdev" },
            { label: "Application Development", link: "#" },
            { label: "Data Migration", link: "#" },
            { label: "Devops & Cloud", link: "#" },
            { label: "Snowflake", link: "#" },
          ],
        },
        {
          label: "Application Support",
          subMenu: [
            { label: "Implementation Services", link: "#" },
            { label: "Post Implementation Support", link: "#" },
            { label: "Troubleshooting Support", link: "#" },
            { label: "Technical Support", link: "#" },
          ],
        },
        {
          label: "UI/UX",
          subMenu: [
            { label: "Dynamic Website", link: "#" },
            { label: "Mobile Optimized Website", link: "#" },
            { label: "Responsive Web Design", link: "#" },
            { label: "Web Design", link: "#" },
            { label: "Website Development & Hosting", link: "#" },
            {
              label: "Ecommerce Website Design & Development Services",
              link: "#",
            },
          ],
        },
        {
          label: "Digital Marketing",
          subMenu: [
            { label: "Search Engine Optimization", link: "#" },
            { label: "Social Media Marketing", link: "#" },
            { label: "Search Engine Marketing", link: "#" },
            { label: "Online Reputation Management", link: "#" },
            { label: "Strategy Analytics", link: "#" },
          ],
        },
        {
          label: "Software Testing",
          subMenu: [
            { label: "MobileApp Testing", link: "#" },
            { label: "Manual", link: "#" },
            { label: "Automation", link: "#" },
          ],
        },
        {
          label: "Data Science",
          subMenu: [
            { label: "Deep Learning", link: "#" },
            { label: "Artificial Intelligence", link: "#" },
            { label: "Machine Learning", link: "#" },
            { label: "AI Chatbots", link: "#" },
            { label: "Technologies Competencies Testing", link: "#" },
          ],
        },
        {
          label: "Staffing",
          subMenu: [
            { label: "Staff Augmentation", link: "#" },
            { label: "Permanent Staffing Services", link: "#" },
            { label: "Contract Staffing Services", link: "#" },
            { label: "Contract To Hire", link: "#" },
          ],
        },
      ],
    },
    {
      label: "Products",
      icon: <FaBoxOpen />,
      dropdown: [
        { label: "Medi2AI", link: "/med2ai" },
        { label: "TeaTimeTelugu", link: "/ttt" },
        { label: "CloudNetPMS", link: "#" },
      ],
    },
    { label: "Blogs", icon: <FaBlog />, link: "/blog" },
    { label: "Careers", icon: <FaBriefcase />, link: "/careers" },
    { label: "Contact Us", icon: <FaPhone />, link: "/contact" },
  ];

const addBubbleEffect = (buttonRef) => {
  const button = buttonRef.current;
  if (!button) return;

  const createBubbles = () => {
    const bubblesContainer = document.createElement("div");
    bubblesContainer.style.position = "absolute";
    bubblesContainer.style.top = "-30px";
    bubblesContainer.style.left = "-30px";
    bubblesContainer.style.width = `${button.offsetWidth + 60}px`;
    bubblesContainer.style.height = `${button.offsetHeight + 60}px`;
    bubblesContainer.style.pointerEvents = "none";
    bubblesContainer.style.overflow = "visible";
    button.style.position = "relative";
    button.appendChild(bubblesContainer);

    // Changed from 10 to 5 bubbles
    for (let i = 0; i < 5; i++) {
      const bubble = document.createElement("div");
      const size = Math.random() * 12 + 8; // Bubble size between 8px and 20px
      bubble.style.width = bubble.style.height = `${size}px`;
      bubble.style.position = "absolute";
      bubble.style.backgroundColor = "#FF6600"; // Ensure vibrant color
      bubble.style.borderRadius = "50%";
      bubble.style.left = `${Math.random() * (button.offsetWidth + 20)}px`;
      bubble.style.bottom = "0px";
      bubble.style.opacity = "1"; // Ensure initial opacity is full
      bubblesContainer.appendChild(bubble);

      gsap.to(bubble, {
        y: -(Math.random() * 80 + 50), // Vertical movement
        x: Math.random() * 60 - 30, // Horizontal spread
        opacity: 0, // Fade out
        duration: 1 + Math.random() * 0.5, // Random duration between 1s and 1.5s
        ease: "power1.out",
        onComplete: () => bubble.remove(),
      });
    }

    setTimeout(() => bubblesContainer.remove(), 1500);
  };

  button.addEventListener("mouseenter", createBubbles);
};
  useEffect(() => {
    gsap.set(dotRef.current, { opacity: 0, scale: 0.5 });

    gsap.fromTo(
      logoRef.current,
      { scale: 0.5, opacity: 0, y: -20 },
      { scale: 1, opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" }
    );

    gsap.fromTo(
      navItemsRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: "power3.out" }
    );

    addBubbleEffect(desktopBtnRef);
    addBubbleEffect(mobileBtnRef);

    dropdownRefs.current.forEach((dropdown, index) => {
      if (!dropdown) return;
      gsap.set(dropdown, { height: 0, opacity: 0, overflow: "hidden" });
      if (openDropdown === index) {
        gsap.to(dropdown, {
          height: "auto",
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      } else {
        gsap.to(dropdown, {
          height: 0,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
        });
      }
    });

    subDropdownRefs.current.forEach((subDropdown, index) => {
      if (!subDropdown) return;
      gsap.set(subDropdown, { height: 0, opacity: 0, overflow: "hidden" });
      if (openSubDropdown === index.toString()) {
        gsap.to(subDropdown, {
          height: "auto",
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      } else {
        gsap.to(subDropdown, {
          height: 0,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
        });
      }
    });
  }, [openDropdown, openSubDropdown]);

  useEffect(() => {
    if (mobileMenuRef.current && overlayRef.current) {
      if (isOpen) {
        gsap.to(mobileMenuRef.current, {
          x: 0,
          duration: 0.4,
          ease: "power2.out",
        });
        gsap.to(overlayRef.current, {
          opacity: 0.5,
          pointerEvents: "auto",
          duration: 0.4,
        });
      } else {
        gsap.to(mobileMenuRef.current, {
          x: "100%",
          duration: 0.4,
          ease: "power2.in",
        });
        gsap.to(overlayRef.current, {
          opacity: 0,
          pointerEvents: "none",
          duration: 0.4,
        });
      }
    }
  }, [isOpen]);

  const animateMenuItem = (target) => {
    const rect = target.getBoundingClientRect();
    const parentRect = target.parentElement.getBoundingClientRect();

    gsap.set(dotRef.current, { opacity: 1 });
    gsap
      .to(dotRef.current, {
        x: rect.left - parentRect.left + rect.width / 2 - 5,
        y: rect.bottom - parentRect.top + 10,
        scale: 1.6,
        duration: 0.4,
        ease: "elastic.out(1, 0.5)",
      })
      .then(() => gsap.to(dotRef.current, { scale: 1, duration: 0.2 }));

    gsap.to(target, {
      scale: 1.05,
      color: "#FF6600",
      duration: 0.1,
      ease: "power2.out",
    });
  };

  const resetMenuItem = (target) => {
    gsap.to(dotRef.current, { opacity: 0, duration: 0.3 });
    gsap.to(target, {
      scale: 1,
      color: "#111827",
      duration: 0.1,
      ease: "power2.in",
    });
  };

  return (
    // <nav className="bg-white text-gray-900 shadow-md relative antialiased z-50">
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3 relative">
        <div ref={logoRef} className="flex items-center gap-2">
          <img
            src="/eet.png"
            alt="Logo"
            className="h-12 sm:h-14 md:h-16 w-auto object-contain"
          />
        </div>

        <div className="hidden md:flex items-center gap-6 lg:gap-8 ml-8">
          <ul className="flex gap-6 text-base sm:text-lg font-medium relative">
            <span
              ref={dotRef}
              className="absolute w-3 h-3 bg-orange-600 rounded-full pointer-events-none shadow-lg"
            ></span>

            {menuItems.map((item, index) => (
              <li
                key={index}
                ref={(el) => (navItemsRef.current[index] = el)}
                className="relative group cursor-pointer text-gray-900"
                onMouseEnter={() => animateMenuItem(navItemsRef.current[index])}
                onMouseLeave={() => resetMenuItem(navItemsRef.current[index])}
              >
                {item.link ? (
                  <Link
                    to={item.link}
                    className="flex items-center gap-1"
                    onClick={() => {
                      setOpenDropdown(null);
                      setOpenSubDropdown(null);
                    }}
                  >
                    {item.icon} {item.label}
                    {item.dropdown && <FaChevronDown className="ml-1 text-xs" />}
                  </Link>
                ) : (
                  <div
                    className="flex items-center gap-1"
                    onClick={() =>
                      setOpenDropdown(openDropdown === index ? null : index)
                    }
                  >
                    {item.icon} {item.label}
                    {item.dropdown && <FaChevronDown className="ml-1 text-xs" />}
                  </div>
                )}

                {item.dropdown && openDropdown === index && (
                  <ul
                    ref={(el) => (dropdownRefs.current[index] = el)}
                    className="absolute left-0 mt-2 w-52 bg-white rounded-lg py-2 z-50"
                    onMouseEnter={() => animateMenuItem(navItemsRef.current[index])}
                    onMouseLeave={() => resetMenuItem(navItemsRef.current[index])}
                  >
                    {item.dropdown.map((sub, i) => (
                      <li key={i} className="relative">
                        <div
                          className="px-4 py-2 flex justify-between items-center cursor-pointer text-gray-900 hover:text-orange-600"
                          onClick={() =>
                            sub.subMenu
                              ? setOpenSubDropdown(
                                  openSubDropdown === `${index}-${i}`
                                    ? null
                                    : `${index}-${i}`
                                )
                              : setOpenSubDropdown(null)
                          }
                        >
                          {sub.link ? (
                            <Link
                              to={sub.link}
                              className={`w-full ${
                                activeSubItem === `${index}-${i}` ? "text-orange-600" : ""
                              }`}
                              onClick={() => {
                                setOpenDropdown(null);
                                setOpenSubDropdown(null);
                                setActiveSubItem(`${index}-${i}`);
                              }}
                            >
                              {sub.label}
                            </Link>
                          ) : (
                            sub.label
                          )}
                          {sub.subMenu && <FaChevronDown className="text-xs ml-2" />}
                        </div>

                        {sub.subMenu && openSubDropdown === `${index}-${i}` && (
                          <ul
                            ref={(el) => (subDropdownRefs.current[`${index}-${i}`] = el)}
                            className="absolute left-full top-0 ml-1 w-56 bg-white rounded-lg py-2 z-50"
                            onMouseEnter={() => animateMenuItem(navItemsRef.current[index])}
                            onMouseLeave={() => resetMenuItem(navItemsRef.current[index])}
                          >
                            {sub.subMenu.map((inner, j) => (
                              <li
                                key={j}
                                className="px-4 py-2 cursor-pointer text-gray-900 hover:text-orange-600"
                              >
                                <Link
                                  to={inner.link}
                                  className={`${
                                    activeSubItem === `${index}-${i}-${j}` ? "text-orange-600" : ""
                                  }`}
                                  onClick={() => {
                                    setOpenDropdown(null);
                                    setOpenSubDropdown(null);
                                    setActiveSubItem(`${index}-${i}-${j}`);
                                  }}
                                >
                                  {inner.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <button
            ref={desktopBtnRef}
            className="px-5 py-2 rounded-lg bg-orange-600 text-white font-semibold shadow-lg hover:shadow-xl transition relative overflow-visible"
          >
            Free Quote
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-orange-600 focus:outline-none z-50 absolute right-4 top-4"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        ref={overlayRef}
        className="fixed top-0 left-0 w-full h-full bg-black opacity-0 pointer-events-none z-30"
        onClick={() => {
          setIsOpen(false);
          setOpenDropdown(null);
          setOpenSubDropdown(null);
        }}
      ></div>

      <div
        ref={mobileMenuRef}
        className="fixed top-0 right-0 w-64 sm:w-80 h-full bg-orange-50 shadow-lg flex flex-col p-6 gap-4 md:hidden z-40"
        style={{ transform: "translateX(100%)", paddingTop: "120px" }}
      >
        {menuItems.map((item, index) => (
          <div key={index} className="flex flex-col">
            {item.link ? (
              <Link
                to={item.link}
                className="flex items-center justify-between cursor-pointer text-lg py-2 relative group"
                onClick={() => {
                  setIsOpen(false);
                  setOpenDropdown(null);
                  setOpenSubDropdown(null);
                }}
              >
                <div className="flex items-center gap-2 group-hover:text-orange-600 transition">
                  {item.icon} {item.label}
                </div>
                {item.dropdown && <FaChevronDown />}
                <span className="absolute bottom-0 left-0 h-[1px] bg-orange-500 w-0 transition-all duration-500 group-hover:w-3/4"></span>
              </Link>
            ) : (
              <div
                className="flex items-center justify-between cursor-pointer text-lg py-2 relative group"
                onClick={() =>
                  setOpenDropdown(openDropdown === index ? null : index)
                }
              >
                <div className="flex items-center gap-2 group-hover:text-orange-600 transition">
                  {item.icon} {item.label}
                </div>
                {item.dropdown && <FaChevronDown />}
                <span className="absolute bottom-0 left-0 h-[1px] bg-orange-500 w-0 transition-all duration-500 group-hover:w-3/4"></span>
              </div>
            )}

            {item.dropdown && openDropdown === index && (
              <div
                ref={(el) => (dropdownRefs.current[index] = el)}
                className="ml-6 flex flex-col gap-2"
              >
                {item.dropdown.map((sub, i) => (
                  <div key={i} className="flex flex-col">
                    <div
                      className="flex justify-between items-center py-2 px-2 hover:bg-orange-200 cursor-pointer rounded text-gray-900 group-hover:text-orange-600"
                      onClick={() =>
                        setOpenSubDropdown(
                          openSubDropdown === `${index}-${i}` ? null : `${index}-${i}`
                        )
                      }
                    >
                      {sub.link ? (
                        <Link
                          to={sub.link}
                          className={`w-full ${
                            activeSubItem === `${index}-${i}` ? "text-orange-600" : ""
                          }`}
                          onClick={() => {
                            setIsOpen(false);
                            setOpenDropdown(null);
                            setOpenSubDropdown(null);
                            setActiveSubItem(`${index}-${i}`);
                          }}
                        >
                          {sub.label}
                        </Link>
                      ) : (
                        sub.label
                      )}
                      {sub.subMenu && <FaChevronDown className="text-xs" />}
                    </div>

                    {sub.subMenu && openSubDropdown === `${index}-${i}` && (
                      <div
                        ref={(el) => (subDropdownRefs.current[`${index}-${i}`] = el)}
                        className="ml-6 flex flex-col gap-2"
                      >
                        {sub.subMenu.map((inner, j) => (
                          <Link
                            key={j}
                            to={inner.link}
                            className={`py-1 px-2 hover:bg-orange-100 rounded text-gray-900 hover:text-orange-600 ${
                              activeSubItem === `${index}-${i}-${j}` ? "text-orange-600" : ""
                            }`}
                            onClick={() => {
                              setIsOpen(false);
                              setOpenDropdown(null);
                              setOpenSubDropdown(null);
                              setActiveSubItem(`${index}-${i}-${j}`);
                            }}
                          >
                            {inner.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        <button
          ref={mobileBtnRef}
          className="px-5 py-2 mt-4 rounded-lg bg-orange-600 text-white font-semibold shadow-lg hover:shadow-xl transition relative overflow-visible"
          onClick={() => setIsOpen(false)}
        >
          Free Quote
        </button>
      </div>
    </nav>
  );
};

export default Navbar;