import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useNavigate } from "react-router-dom";

// Register GSAP plugin
gsap.registerPlugin(TextPlugin);

const slides = [
  {
    title: "WELCOME TO EAGLE EYE TECH",
    subtitle: "Explore Our Technology Services",
    smallText: "We help companies thrive with technology and extend their business.",
    buttonText: "Read More",
    image:
      "https://img.freepik.com/free-photo/software-programer-pointing-pencil-source-code-computer-screen-explaining-algorithm-coworker-standing-desk-programmers-discussing-online-cloud-computing-with-team_482257-33535.jpg",
  },
  {
    title: "WELCOME TO EAGLE EYE TECH",
    subtitle: "We Employ Valuable Talent For Any Position",
    smallText: "We are global staffing providers with a vision to ensure a hiccup-free process",
    buttonText: "Read More",
    image:
      "https://media.istockphoto.com/id/1536191188/photo/web-developers-using-a-computer-together-in-an-office.jpg?s=612x612&w=0&k=20&c=MqBrIeX_itBLU7pr5d3rQ7ZrB6_mzJ_ZSEbb4ONfkiQ=",
  },
  {
    title: "WELCOME TO EAGLE EYE TECH",
    subtitle: "We Bring The Right Solutions To Your Business",
    smallText: "We bring up innovative solutions with the right strategy for your business.",
    buttonText: "Read More",
    image:
      "https://media.istockphoto.com/id/1478040273/video/team-of-multiethnic-indian-software-engineers-having-a-meeting-in-order-to-review-the-code.jpg?s=640x640&k=20&c=c3Ojc3De_8jRec46M0hFXmjHqB7m9wKZWUV_BOla6jQ=",
  },
];

export default function Header() {
  const [current, setCurrent] = useState(0);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      const tl = gsap.timeline();
      tl.to(".text-content > *", {
        opacity: 0,
        x: -100,
        rotationY: -45,
        duration: 0.8,
        ease: "power2.inOut",
        stagger: 0.1,
      })
        .to(
          ".image-content",
          {
            opacity: 0,
            x: 100,
            rotationY: 45,
            scale: 0.8,
            duration: 0.8,
            ease: "power2.inOut",
          },
          0
        )
        .to(
          ".slide-bg",
          {
            scale: 1.2,
            opacity: 0.3,
            duration: 0.8,
            ease: "power2.inOut",
            onComplete: () => {
              setCurrent((prev) => (prev + 1) % slides.length);
            },
          },
          0
        );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    gsap.set(".text-content > *", { opacity: 0, x: -50, rotationY: -30 });
    gsap.set(".image-content", { opacity: 0, x: 50, rotationY: 30, scale: 0.9 });
    gsap.set(".slide-bg", { scale: 1.2, opacity: 0.3 });

    tl.to(".slide-bg", {
      scale: 1,
      opacity: 1,
      duration: 1.2,
      ease: "power2.out",
    })
      .to(
        ".image-content",
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          scale: 1,
          duration: 1.2,
          ease: "back.out(1.7)",
        },
        0.2
      )
      .to(
        ".text-content > *",
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: 1.0,
          ease: "power2.out",
          stagger: 0.15,
        },
        0.4
      )
      .to(
        titleRef.current,
        {
          duration: 0.5,
          textShadow: "0 0 15px rgba(245, 74, 0, 0.8)",
          repeat: 1,
          yoyo: true,
          ease: "power1.inOut",
        },
        1.0
      );
  }, [current]);

  const { title, subtitle, smallText, buttonText, image } = slides[current];

  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gray-900 p-4 sm:p-6 md:p-8 lg:p-12 overflow-hidden relative">
      <style>
        {`
          .custom-orange-100 { background-color: #FFE8E0; }
          .custom-orange-200 { background-color: #FFD1C0; }
          .custom-orange-300 { background-color: #FFAA8F; }
          .custom-orange-400 { background-color: #F54A00; }
          .custom-orange-500 { background-color: #D43F00; }
          .custom-orange-600 { background-color: #B33600; }
          .text-custom-orange-400 { color: #F54A00; }
          .bg-custom-orange-500 { background-color: #D43F00; }
          .from-custom-orange-600 { background-color: #B33600; }
          .to-custom-orange-500 { background-color: #D43F00; }

          /* Mobile-specific styles */
          @media (max-width: 1024px) {
            .text-content {
              padding: 1rem;
              margin-top: 1.5rem;
              margin-bottom: 1.5rem;
            }
            .image-content {
              padding: 1rem;
            }
            .text-content > * {
              text-align: center;
            }
            .button-container {
              display: flex;
              justify-content: center;
            }
          }

          /* Desktop-specific styles */
          @media (min-width: 1025px) {
            .text-content {
              padding-right: 2.5rem;
            }
            .text-content > * {
              text-align: left;
            }
            .button-container {
              display: flex;
              justify-content: flex-start;
            }
          }
        `}
      </style>

      <div className="slide-bg absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-70 z-0" />

      <div className="text-content w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0 z-10 px-4 sm:px-6 md:px-8 lg:pr-40">
        <div className="max-w-lg">
          <h1
            ref={titleRef}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-custom-orange-400 mb-2 tracking-wider"
          >
            {title}
          </h1>
          <h2
            ref={subtitleRef}
            className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold mb-4 text-white leading-snug"
          >
            {subtitle}
          </h2>
          <p
            ref={textRef}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-6 leading-relaxed"
          >
            {smallText}
          </p>
          <div className="button-container">
            <button
              ref={buttonRef}
              onClick={() => navigate("/mission")}
              className="flex items-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-gradient-to-r from-custom-orange-600 to-custom-orange-500 text-white font-medium rounded-xl shadow-xl hover:scale-105 hover:cursor-pointer transition-all duration-300"
            >
              {buttonText}
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="image-content w-full lg:w-1/2 flex justify-center z-10 px-4 sm:px-6 md:px-8">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl rounded-2xl overflow-hidden shadow-2xl relative">
          <img
            src={image}
            alt={title}
            className="w-full h-64 sm:h-80 md:h-96 lg:h-[32rem] object-cover rounded-2xl transform transition-transform duration-700 hover:scale-105"
            ref={imageRef}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-900/40 rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
}