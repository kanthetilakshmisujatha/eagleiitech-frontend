import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import {
  FaNewspaper, FaFilm, FaUsers, FaSearch, FaCamera, FaComments,
  FaGlobe, FaClock, FaBalanceScale, FaShareAlt, FaTheaterMasks, FaStar
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const TeaTimeTelugu = () => {
  // Section refs
  const headerSectionRef = useRef(null);
  const coversSectionRef = useRef(null);
  const interviewsSectionRef = useRef(null);
  const highlightsSectionRef = useRef(null);
  const beyondSectionRef = useRef(null);
  const visionSectionRef = useRef(null);
  const whyChooseSectionRef = useRef(null);

  // Item refs for lists in each section
  const coversItemsRef = useRef([]);
  const highlightsItemsRef = useRef([]);
  const visionItemsRef = useRef([]);
  const whyChooseItemsRef = useRef([]);

  useEffect(() => {
    // Animation for sections: fade in and move up
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

    // Animation for items: staggered fade-in with alternating direction
    const fadeInItems = (itemsRef, direction = 'x', delayFactor = 0.15) => {
      itemsRef.current.forEach((item, index) => {
        if (!item) return;
        const fromProps = { opacity: 0 };
        fromProps[direction] = direction === 'y' ? 30 : (direction === 'x' ? (index % 2 === 0 ? -50 : 50) : 0);

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

    // Apply animations to sections
    fadeInSection(headerSectionRef);
    fadeInSection(coversSectionRef);
    fadeInSection(interviewsSectionRef);
    fadeInSection(highlightsSectionRef);
    fadeInSection(beyondSectionRef);
    fadeInSection(visionSectionRef);
    fadeInSection(whyChooseSectionRef);

    // Apply animations to list items
    fadeInItems(coversItemsRef, 'x', 0.2);
    fadeInItems(highlightsItemsRef, 'x', 0.15);
    fadeInItems(visionItemsRef, 'x', 0.2);
    fadeInItems(whyChooseItemsRef, 'y', 0.15);

    // Clean up ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const orangeColor = '#F54A00';

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-orange-50 font-sans py-12 px-6 mt-10">
      {/* Header Section */}
      <section ref={headerSectionRef} className="max-w-6xl mx-auto mb-16 flex flex-col md:flex-row items-center gap-8">
        <img src="/tt1.png" alt="Tea Time Telugu" className="md:w-1/2 w-full h-80 object-cover rounded-xl shadow-lg" />
        <div className="md:w-1/2 p-6 bg-white rounded-xl shadow-lg prose prose-lg text-gray-800">
          <h2 style={{ color: orangeColor }} className="text-4xl font-bold mb-6">INTRO: Tea Time Telugu</h2>
          <p>
            Tea Time Telugu is one of the fastest-growing Telugu news and entertainment platforms, launched in 2025 with a mission to connect the global Telugu community. We specialize in delivering news that truly matters—whether it’s politics, movies, human-interest stories, or social commentary.
          </p>
          <p>
            Unlike many platforms that treat news as pure entertainment, we treat it as a responsibility. Our content is credible, accurate, and fast, making us a trusted name among Telugu audiences worldwide.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto border-t my-12" style={{ borderColor: orangeColor }}></div>

      {/* What Tea Time Telugu Covers */}
      <section ref={coversSectionRef} className="max-w-6xl mx-auto mb-16 flex flex-col md:flex-row items-center gap-8">
        <img src="/ts.png" alt="News Feed" className="md:w-1/2 w-full h-90 object-cover rounded-xl shadow-lg" />
        <div className="md:w-1/2 p-6 bg-white rounded-xl shadow-lg">
          <h2 style={{ color: orangeColor }} className="text-4xl font-bold mb-6">What Tea Time Telugu Covers</h2>
          <p className="text-gray-800 mb-6">We bring you a diverse range of content:</p>
          <ul className="space-y-4">
            {[
              { icon: FaNewspaper, text: 'Breaking News - Political updates, state and national events, and timely reports.' },
              { icon: FaFilm, text: 'Tollywood & Movies - Film news, box office updates, gossip, and behind-the-scenes stories.' },
              { icon: FaUsers, text: 'Human-Interest Stories - Inspiring, emotional, and untold stories from everyday lives.' },
              { icon: FaSearch, text: 'News Behind the News - Uncovering mysteries, scandals, and exclusive insights.' },
              { icon: FaCamera, text: 'Event Gallery - Candid pictures from celebrity events, movie launches, and more.' },
              { icon: FaComments, text: 'Social & Political Commentary - Analysis and opinions that matter.' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <li
                  key={index}
                  ref={(el) => (coversItemsRef.current[index] = el)}
                  className="flex items-center bg-white p-4 rounded-lg shadow-md border-l-4"
                  style={{ borderColor: orangeColor }}
                >
                  <Icon className="mr-4 text-2xl" style={{ color: orangeColor }} />
                  {item.text}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <div className="max-w-6xl mx-auto border-t my-12" style={{ borderColor: orangeColor }}></div>

      {/* Celebrity Interviews & Events */}
      <section ref={interviewsSectionRef} className="max-w-6xl mx-auto mb-16 flex flex-col md:flex-row items-center gap-8">
        <img src="/int.webp" alt="Interview Scene" className="md:w-1/2 w-full h-87 object-cover rounded-lg shadow-md" />
        <div className="md:w-1/2 p-6">
          <h2 style={{ color: orangeColor }} className="text-3xl md:text-4xl font-bold mb-4"># Interviews: Celebrity Interviews & Events</h2>
          <p className="text-gray-800 max-w-3xl text-lg mb-4">
            At Tea Time Telugu, we believe in bringing fans closer to their stars. Our exclusive celebrity interviews provide candid insights into actors’ lives, careers, and upcoming projects.
          </p>
          <p className="text-gray-800 max-w-3xl text-lg">
            Soon, we will be expanding into on-ground coverage of movie release events, press meets, and red-carpet shows—delivering an authentic Tollywood experience to your screens.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto border-t my-12" style={{ borderColor: orangeColor }}></div>

      {/* Key Highlights */}
      <section ref={highlightsSectionRef} className="max-w-6xl mx-auto mb-16 flex flex-col md:flex-row items-center gap-8">
        <img src="/teat.jpg" alt="Movie Scene" className="md:w-1/2 w-full h-80 object-cover rounded-xl shadow-lg" />
        <div className="md:w-1/2 p-10 bg-white rounded-xl shadow-lg">
          <h2 style={{ color: orangeColor }} className="text-3xl md:text-4xl font-bold mb-8">Tea Time Telugu's Key Highlights</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: FaNewspaper, text: 'Real-Time Breaking News Coverage' },
              { icon: FaFilm, text: 'Movie Reviews & Box Office Analysis' },
              { icon: FaStar, text: 'Exclusive Celebrity Interviews' },
              { icon: FaGlobe, text: 'OTT Series Updates & Film Highlights' },
              { icon: FaComments, text: 'Political Sensations & Social Stories' },
              { icon: FaTheaterMasks, text: '100% Native Telugu Content' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <li
                  key={index}
                  ref={(el) => (highlightsItemsRef.current[index] = el)}
                  className="bg-white p-6 rounded-xl shadow-md border-l-4 flex items-center h-28"
                  style={{ borderColor: orangeColor }}
                >
                  <Icon className="mr-5 text-3xl" style={{ color: orangeColor }} />
                  {item.text}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <div className="max-w-6xl mx-auto border-t my-12" style={{ borderColor: orangeColor }}></div>

      {/* Beyond The Website */}
      <section ref={beyondSectionRef} className="max-w-6xl mx-auto mb-16 flex flex-col md:flex-row items-center gap-8">
        <img src="movie.png" alt="Social Media Icons" className="md:w-1/2 w-full h-auto object-cover rounded-lg shadow-md" />
        <div className="md:w-1/2 p-6">
          <h2 style={{ color: orangeColor }} className="text-3xl md:text-4xl font-bold mb-4">Beyond The Website</h2>
          <p className="text-gray-800 max-w-3xl text-lg mb-4">
            Tea Time Telugu is not limited to just a website. We’re building a strong presence across YouTube, Instagram, and other social platforms to bring:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Celebrity Bites & Interviews</li>
            <li>Short-form Breaking News Updates</li>
            <li>Event Coverage & Exclusive Footage</li>
            <li>Engaging Social Media Campaigns</li>
          </ul>
        </div>
      </section>

      <div className="max-w-6xl mx-auto border-t my-12" style={{ borderColor: orangeColor }}></div>

      {/* Vision Section */}
      <section ref={visionSectionRef} className="max-w-6xl mx-auto mb-16 flex flex-col md:flex-row items-center gap-8">
        <img src="/tea.jpg" alt="Vision" className="md:w-1/2 w-full h-80 object-cover rounded-xl shadow-md" />
        <div className="md:w-1/2 p-6 bg-white rounded-xl shadow-lg">
          <h2 style={{ color: orangeColor }} className="text-3xl md:text-4xl font-bold mb-6">Beyond Today: The Vision of Tea Time Telugu</h2>
          <ul className="space-y-4">
            {[
              { icon: FaClock, text: 'Maintaining speed and accuracy in news delivery' },
              { icon: FaShareAlt, text: 'Acting as a bridge between newsmakers and the public' },
              { icon: FaBalanceScale, text: 'Avoiding sensationalism, but offering sensational stories that matter' },
              { icon: FaGlobe, text: 'Continuously expanding to new media formats and platforms' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <li
                  key={index}
                  ref={(el) => (visionItemsRef.current[index] = el)}
                  className="flex items-center bg-white p-4 rounded-lg shadow-md border-l-4"
                  style={{ borderColor: orangeColor }}
                >
                  <Icon className="mr-4 text-2xl" style={{ color: orangeColor }} />
                  {item.text}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <div className="max-w-6xl mx-auto border-t my-12" style={{ borderColor: orangeColor }}></div>

      {/* Why Choose Section */}
      <section ref={whyChooseSectionRef} className="max-w-6xl mx-auto mb-16 flex flex-col md:flex-row items-center gap-8">
        <img src="/tt.jpeg" alt="Why Choose" className="md:w-1/2 w-full h-130 object-cover rounded-xl shadow-md" />
        <div className="md:w-1/2 p-6 bg-white rounded-xl shadow-md">
          <h2 style={{ color: orangeColor }} className="text-3xl md:text-4xl font-bold mb-6">Why Choose Tea Time Telugu?</h2>
          <div className="grid grid-cols-1 gap-4">
            {[
              { icon: FaTheaterMasks, title: 'Trusted by Telugu readers worldwide', desc: 'A reliable source for news and entertainment.' },
              { icon: FaClock, title: 'Always first in breaking news', desc: 'Delivering updates as they happen.' },
              { icon: FaBalanceScale, title: 'Balanced mix of entertainment and responsibility', desc: 'News with a purpose.' },
              { icon: FaGlobe, title: 'A true reflection of Telugu culture and voice', desc: 'Celebrating Telugu heritage.' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  ref={(el) => (whyChooseItemsRef.current[index] = el)}
                  className="flex items-center bg-white p-4 rounded-lg shadow-md border-l-4"
                  style={{ borderColor: orangeColor }}
                >
                  <Icon className="mr-4 text-2xl" style={{ color: orangeColor }} />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeaTimeTelugu;