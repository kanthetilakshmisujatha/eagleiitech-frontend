import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import heroImage from "/eet image.png"; // Ensure this path is correct

gsap.registerPlugin(ScrollTrigger);

const jobs = [
  { title: "DATA ENGINEER (Multiple Openings)", role: "Engineer", location: "USA" },
  { title: "Azure Cloud Engineer", role: "Engineer", location: "USA" },
  { title: "DevOps Engineers (DVOP-3)", role: "Developer", location: "Eagle Eye Tech" },
  { title: "SYSTEMS ENGINEERS (SYSE-23)", role: "Engineer", location: "USA" },
  { title: "SOFTWARE ENGINEER (SE-23)", role: "Software Engineer", location: "USA" },
  { title: "Snowflake", role: "Manager", location: "USA" },
  { title: "Salesforce Developer", role: "Developer", location: "Remote" },
];

const highlightColor = "#F54A00";

const CareersPage = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const openPositionsRef = useRef(null);
  const filterButtonsRef = useRef([]);
  const jobCardRefs = useRef([]);

  const addToFilterButtonsRefs = (el) => {
    if (el && !filterButtonsRef.current.includes(el)) {
      filterButtonsRef.current.push(el);
    }
  };

  const addToJobCardRefs = (el) => {
    if (el && !jobCardRefs.current.includes(el)) {
      jobCardRefs.current.push(el);
    }
  };

  useEffect(() => {
    gsap.fromTo(headerRef.current, 
      { y: 100, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: headerRef.current, start: "top 80%", toggleActions: "play none none reverse" } }
    );

    gsap.fromTo(openPositionsRef.current, 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.4, scrollTrigger: { trigger: openPositionsRef.current, start: "top 80%", toggleActions: "play none none reverse" } }
    );

    filterButtonsRef.current.forEach((button, index) => {
      if (!button) return;
      gsap.fromTo(button, { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)", delay: index * 0.15, scrollTrigger: { trigger: button, start: "top 80%", toggleActions: "play none none reverse" } });
    });

    jobCardRefs.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(card, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: index * 0.2, scrollTrigger: { trigger: card, start: "top 75%", toggleActions: "play none none reverse" } });
    });

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen bg-white px-6 md:px-20 py-16 mt-9">
      <div ref={headerRef} className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest" style={{ color: highlightColor }}>
            # Careers
          </h3>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-2">
            Why Choose Eagle Eye Tech:{" "}
            <span className="relative inline-block bg-no-repeat">Career</span>{" "}
            That Defines Tomorrow
          </h1>
          <p className="mt-4 text-gray-600">
            Embark on a journey with Eagle Eye Tech, where innovative minds thrive and careers are developed and transformed.
          </p>
        </div>
        <div className="flex justify-center">
          <img src={heroImage} alt="Career Hero" className="w-72 md:w-96 drop-shadow-xl" />
        </div>
      </div>

      <div ref={openPositionsRef} className="mt-16">
        <h2 className="text-2xl font-bold" style={{ color: highlightColor }}>Open Positions</h2>
        <p className="text-gray-600 mt-2">
          Dive into a world of opportunities at Eagle Eye Tech. Whether you're just starting out, freshly graduated, or a seasoned professional, find a role that aligns with your aspirations.
        </p>
        <p className="mt-2">
          Don't see a position that suits you? Reach out to us at{" "}
          <span className="font-medium" style={{ color: highlightColor }}>hr@eagleietech.com</span>
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium">
        <button ref={addToFilterButtonsRefs} className="px-4 py-2 border rounded-md hover:bg-orange-50 transition-colors" style={{ borderColor: highlightColor }}>
          All Job Category
        </button>
        <button ref={addToFilterButtonsRefs} className="px-4 py-2 border rounded-md hover:bg-orange-50 transition-colors" style={{ borderColor: highlightColor }}>
          All Job Type
        </button>
        <button ref={addToFilterButtonsRefs} className="px-4 py-2 border rounded-md hover:bg-orange-50 transition-colors" style={{ borderColor: highlightColor }}>
          All Job Location
        </button>
      </div>

      <div className="mt-10 space-y-4">
        {jobs.map((job, index) => (
          <div
            key={index}
            ref={addToJobCardRefs}
            className="border p-5 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 flex justify-between items-center"
            style={{ borderColor: highlightColor }}
          >
            <div>
              <h3 className="font-bold text-lg">{job.title}</h3>
              <p className="text-sm text-gray-500">
                {job.role} | {job.location}
              </p>
            </div>
            <Link
              to={`/blog/job-application/${encodeURIComponent(job.title)}`}
              className="font-semibold hover:underline"
              style={{ color: highlightColor }}
            >
              More Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareersPage;