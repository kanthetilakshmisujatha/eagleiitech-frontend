import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Layers, Edit, Expand, DollarSign, Search, User, Globe, Monitor, PenTool, FileText, Cloud, ShoppingBag, Rss, Rocket, Check, Shield } from "lucide-react";
import cisco from '../../assets/cisco.png';
import verizon from '../../assets/version.png';
import wells from '../../assets/wells.png';
import fidelity from '../../assets/fidelity.png';
import hcl from '../../assets/hcl.png';
import infosys from '../../assets/infosys.png';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const SocialMedia = () => {
  // Refs for animations
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const featuresRef = useRef(null);
  const servicesRef = useRef(null);
  const benefitsRef = useRef(null);
  const clientsRef = useRef(null);
  const scrollRef = useRef(null);
  const benefitCardRefs = useRef([]);
  const addToSectionRefs = useRef(null);
  const addToCardRefs = useRef(null);
  const addToFeatureRefs = useRef([]);

  const features = [
    {
      title: "Increases Brand Recognition",
      desc: "Social media management services help your company increase brand awareness in the target sector.",
      icon: <Edit className="w-6 h-6 text-orange-600" />,
    },
    {
      title: "Increase Conversion Rate",
      desc: "Social media allows you to leave an impact on customers’ minds which leads to increased conversion rates.",
      icon: <Expand className="w-6 h-6 text-orange-600" />,
    },
    {
      title: "Cost-Effective Maintenance",
      desc: "Lower long-term costs despite higher initial investment.",
      icon: <DollarSign className="w-6 h-6 text-orange-600" />,
    },
    {
      title: "Economical Approach",
      desc: "Social media marketing services are practical since they provide a better return on investment.",
      icon: <Search className="w-6 h-6 text-orange-600" />,
    },
    {
      title: "Truthful Reviews",
      desc: "The goods reviews and feedbacks submitted by customers assist you in more accurately improving the product or services.",
      icon: <User className="w-6 h-6 text-orange-600" />,
    },
    {
      title: "Competitive Analysis",
      desc: "Social media allows you to analyze your competition and follow their growth through social media networks.",
      icon: <User className="w-6 h-6 text-orange-600" />,
    },
  ];

  const services = [
    {
      title: "Knowledge of Social Media",
      desc: "Every in-house professional complies with all the algorithms of each social media network to perform the appropriate techniques.",
      icon: <Globe className="w-6 h-6 text-orange-600" />,
      img: "/socialmm2.webp",
    },
    {
      title: "Understanding of Social Trends",
      desc: "Our social media experts & managers always stay on top of the latest social media marketing trends.",
      img: "/socialmm3.jpg",
      icon: <Monitor className="w-6 h-6 text-orange-600" />,
    },
    {
      title: "Marketing Creativity",
      desc: "Our Creative heads possess appealing marketing ideas for creating visuals and information on social media.",
      img: "/socialmm4.png",
      icon: <PenTool className="w-6 h-6 text-orange-600" />,
    },
  ];

  const benefits = [
    {
      title: "Expertise in Social Media Marketing",
      desc: "Eagle Eye Tech is a well-known solution offering firm that provides strategic social media expert advice and social media management services. We have handled several social media accounts for our clients all around the world since 2018. Through social media marketing, we assisted our clients in achieving the necessary brand exposure and conversion rates.",
      icon: <FileText className="w-7 h-7 text-white" />,
    },
    {
      title: "Surprising Marketing Outcomes",
      desc: "Our ongoing effort and study in the social media domain enabled us to follow the social media algorithms and operate appropriately. We offer social media marketing services, both organic and paid. We guarantee to deliver the required outcomes within your specified budget and time frame.",
      icon: <Cloud className="w-7 h-7 text-white" />,
    },
    {
      title: "Social Media Marketing That Is Strategic",
      desc: "Our well-qualified & highly experienced social media marketing team commits to a structured social media marketing plan to provide our clients with satisfactory results. We employ various marketing strategies for each social media platform based on the needs of the business industry.",
      icon: <ShoppingBag className="w-7 h-7 text-white" />,
    },
    {
      title: "Experts in Social Media Management",
      desc: "We have a dedicated team of skilled social media specialists with many years of expertise providing social media management services. We have a deep knowledge of social media algorithms and user behavior. The growth of social media channels depends on audience behavior, but our team goes beyond creating a need to grab target audience attention to drive fruitful results.",
      icon: <Rss className="w-7 h-7 text-white" />,
    },
  ];

  const clients = [
    { name: 'Cisco', logo: cisco },
    { name: 'Verizon', logo: verizon },
    { name: 'Wells Fargo', logo: wells },
    { name: 'Fidelity', logo: fidelity },
    { name: 'HCL', logo: hcl },
    { name: 'Infosys', logo: infosys },
  ];

  // GSAP Animations
  useEffect(() => {
    const handleMouseEnter = (icon) => {
      gsap.to(icon, { y: -4, scale: 1.1, duration: 0.3, ease: "power2.out" });
    };
    const handleMouseLeave = (icon) => {
      gsap.to(icon, { y: 0, scale: 1, duration: 0.3, ease: "power2.out" });
    };

    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      introRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      featuresRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      servicesRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      benefitsRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    const listeners = new Map();
    benefitCardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            delay: index * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
        const icon = card.querySelector(".benefit-icon");
        if (icon) {
          const mouseEnter = () => handleMouseEnter(icon);
          const mouseLeave = () => handleMouseLeave(icon);
          card.addEventListener("mouseenter", mouseEnter);
          card.addEventListener("mouseleave", mouseLeave);
          listeners.set(card, { mouseEnter, mouseLeave });
        }
      }
    });

    gsap.fromTo(
      addToSectionRefs.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: addToSectionRefs.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      clientsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: clientsRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      const totalWidth = scrollElement.scrollWidth / 2;
      gsap.to(scrollElement, {
        x: -totalWidth,
        duration: 25,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf([scrollRef.current, ...benefitCardRefs.current]);
      benefitCardRefs.current.forEach((card) => {
        if (card && listeners.has(card)) {
          const { mouseEnter, mouseLeave } = listeners.get(card);
          card.removeEventListener("mouseenter", mouseEnter);
          card.removeEventListener("mouseleave", mouseLeave);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-orange-50 overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-amber-400/10"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-orange-200">
            <Layers className="w-5 h-5 text-orange-500 mr-2" />
            <span className="text-orange-600 font-semibold">Social Media Excellence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Social Media Marketing
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Unlock the full potential of your brand with Eagle Eye Tech’s social media marketing solutions. From strategy to engagement, we empower your business with scalable, high-impact campaigns.
          </p>
          <button className="group bg-gradient-to-r from-orange-500 to-amber-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center mx-auto">
            Get Started
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Intro Section */}
      <section ref={introRef} className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 text-gray-800">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
              <Layers className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
              Social Media Marketing
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Connect with Your Audience, Anywhere, Anytime
            </p>
            <p className="text-gray-700 leading-relaxed">
              At Eagle Eye Tech, we simplify and analyze your brand’s needs to deliver tailored social media marketing strategies. Our team ensures your business stays relevant and engaging across all social platforms, driving real-time results with a focus on audience connection and brand growth.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/socialmm1.webp"
                alt="Social Media Marketing"
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Found"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-400/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
              <Globe className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Our Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
              Why Invest in Social Media Marketing?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our social media marketing services boost your brand’s visibility, drive traffic, and enhance conversions. With strategic campaigns, we help you achieve greater brand loyalty and revenue growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl shadow-2xl border border-orange-100"
              >
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-2xl font-bold text-orange-600 ml-3">{feature.title}</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
              <Monitor className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
              Expert Social Media Engagement
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our social media managers craft trending strategies and unique content to engage your audience effectively across platforms.
            </p>
          </div>
          {services.map((srv, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-12 py-12 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="w-full md:w-1/2 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={srv.img}
                    alt={srv.title}
                    className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Found"; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-400/20"></div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="bg-white p-8 rounded-3xl shadow-2xl border border-orange-100">
                  <div className="flex items-center mb-4">
                    {srv.icon}
                    <h3 className="text-2xl font-bold text-orange-600 ml-3">{srv.title}</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">{srv.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section (Unchanged) */}
      <section ref={benefitsRef} className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
              <FileText className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Our Benefits</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
              Hiring Social Media Marketing Services From Us
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We have a reputable team of social media marketing managers who provide various social media marketing services to help your company’s online visibility.
            </p>
          </div>
          <div className="relative border-l-4 border-dotted border-orange-400 ml-10">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                ref={(el) => (benefitCardRefs.current[idx] = el)}
                className="mb-12 ml-8 relative pl-16 bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-orange-200 group hover:rotate-1 hover:skew-y-1"
              >
                <div className="absolute -left-16 top-0 w-14 h-14 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white border border-orange-300 shadow-md transition-transform duration-300 benefit-icon group-hover:scale-110">
                  {benefit.icon}
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-orange-800 mb-3 group-hover:underline group-hover:decoration-orange-500">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                </div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Additional Benefits Section */}
<section
  ref={addToSectionRefs}
  className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-orange-50 to-amber-50"
>
  <div className="max-w-6xl mx-auto">
    {/* Full Width Content */}
    <div>
      <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6 shadow-sm">
        <Rocket className="w-5 h-5 text-orange-600 mr-2" />
        <span className="text-orange-600 font-semibold">Key Benefits</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-orange-600">
        Our Social Media Marketing Services
      </h2>
      <p className="text-gray-700 mb-6 leading-relaxed max-w-3xl">
        As a leading social media marketing firm, we craft strategies to
        elevate your brand’s reputation and engagement across platforms.
      </p>

      {/* Benefits Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          "Social Media Management Services",
          "Social Media Marketing Campaigns",
          "Social Media Promotion",
          "Social Media Brand Management",
          "Social Media Video Promotion",
          "Social Media Engagements",
          "Social Media Advertising",
          "Conversion Rates on Social Media",
          "Content Marketing on Social Media",
          "Facebook Marketing",
          "Twitter Marketing",
          "LinkedIn Marketing",
          "Snapchat Marketing",
          "Instagram Marketing",
          "Social Media Marketing Agency Service (Covering all the above services).",
        ].map((benefit, index) => (
          <div
            key={index}
            ref={(el) => (addToFeatureRefs.current[index] = el)}
            className="flex items-start p-6 rounded-2xl shadow-lg border border-orange-200 
                       bg-white/70 backdrop-blur-md hover:shadow-2xl hover:-translate-y-1 
                       hover:border-orange-400 transition-all duration-300"
          >
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-2 rounded-full mr-3 flex-shrink-0 mt-0.5 shadow-md">
              <Check className="w-4 h-4 text-white" />
            </div>
            <span className="text-gray-800 font-medium leading-relaxed">
              {benefit}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* Clients Section */}
      <section ref={clientsRef} className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-6 py-3 mb-6">
              <Shield className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Trusted Partners</span>
            </div>
            <h2 className="text-3xl font-bold text-orange-600 mb-4">Our Clients</h2>
            <p className="text-gray-600 text-lg">Trusted by industry leaders worldwide</p>
          </div>
          <div className="relative overflow-hidden py-8">
            <div
              ref={scrollRef}
              className="flex space-x-12"
              style={{ display: "flex", whiteSpace: "nowrap" }}
            >
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 h-24 flex items-center justify-center"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-20 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMedia;