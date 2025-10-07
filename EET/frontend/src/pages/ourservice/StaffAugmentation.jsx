
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  DollarSign,
  Handshake,
  ChevronLeft,
  ChevronRight,
  Check,
  Zap,
  Shield,
  Layers,
  Rocket,
  Eye,
  ArrowRight,
  Search,
  Users,
  Settings,
  Clock,
  BarChart2,
  ShieldCheck,
  UserCheck,
  MessageSquare,
} from "lucide-react";
import cisco from '../../assets/cisco.png';
import verizon from '../../assets/version.png';
import wells from '../../assets/wells.png';
import fidelity from '../../assets/fidelity.png';
import hcl from '../../assets/hcl.png';
import infosys from '../../assets/infosys.png';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Client data
const clients = [
  { name: 'Cisco', logo: cisco },
  { name: 'Verizon', logo: verizon },
  { name: 'Wells Fargo', logo: wells },
  { name: 'Fidelity', logo: fidelity },
  { name: 'HCL', logo: hcl },
  { name: 'Infosys', logo: infosys },
];

// Placeholder images (replace with local assets if needed)
const DataMigrationImg = "/staff1.png";
const BenefitsImg = "/staff2.jpg";
const ProcessImg = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500";
const SolutionsImg = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500";

const StaffAugmentation = () => {
  const heroRef = useRef(null);
  const sectionRefs = useRef([]);
  const cardRefs = useRef([]);
  const featureRefs = useRef([]);
  const clientsRef = useRef(null);
  const scrollRef = useRef(null);
  const timelineRefs = useRef([]);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const animationTimeline = useRef(null);
  const isPaused = useRef(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const solutions = [
    {
      title: "DEDICATED TEAMS",
      desc: "Eagle Eye Tech provides firms with dedicated professional personnel that provides the best solutions.",
      icon: <Users className="text-white w-6 h-6" />,
    },
    {
      title: "THE LEADING IT STAFFING FIRM",
      desc: "We provide various digital services, such as staffing, development, digital marketing & testing.",
      icon: <Settings className="text-white w-6 h-6" />,
    },
    {
      title: "HIGH & EASY RECRUITMENT PROCESS",
      desc: "We handle staffing thoroughly & continuously seek the finest individuals.",
      icon: <Clock className="text-white w-6 h-6" />,
    },
    {
      title: "MAINTAIN OVERSIGHT & CONTROL",
      desc: "Our professionals integrate with your internal team's processes seamlessly.",
      icon: <BarChart2 className="text-white w-6 h-6" />,
    },
    {
      title: "REDUCE HIRING TIME",
      desc: "We work round-the-clock to find the best fit under stipulated timelines.",
      icon: <ShieldCheck className="text-white w-6 h-6" />,
    },
    {
      title: "QUALIFIED & SENIOR EXPERTISE",
      desc: "We rigorously evaluate skills, technical ability & soft skills during screening.",
      icon: <UserCheck className="text-white w-6 h-6" />,
    },
    {
      title: "HIGH & SCALABLE OPPORTUNITIES",
      desc: "Scale up the team as per the project's needs with our services.",
      icon: <Rocket className="text-white w-6 h-6" />,
    },
    {
      title: "FLEXIBILITY & AFFORDABLE COST",
      desc: "We offer flexible proposals for managing hiring costs effectively.",
      icon: <DollarSign className="text-white w-6 h-6" />,
    },
    {
      title: "TRUSTED PARTNER",
      desc: "We build long-term partnerships ensuring growth and success together.",
      icon: <Handshake className="text-white w-6 h-6" />,
    },
  ];

  // Duplicate for smooth loop
  const duplicatedSolutions = [...solutions, ...solutions];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Solutions Section animation
      const cards = cardsContainerRef.current?.children;
      if (cards && cards.length > 0) {
        const cardWidth = cards[0].offsetWidth + 32;
        const totalWidth = (cardWidth * cards.length) / 2;

        gsap.set(cardsContainerRef.current, { x: 0 });

        animationTimeline.current = gsap.timeline({
          repeat: -1,
          defaults: { ease: "linear" },
        });

        animationTimeline.current.to(cardsContainerRef.current, {
          x: -totalWidth,
          duration: 70,
          modifiers: {
            x: gsap.utils.unitize((x) => {
              const xVal = parseFloat(x);
              return (xVal % totalWidth) + (xVal < -totalWidth ? totalWidth : 0);
            }),
          },
        });

        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          onEnter: () => !isPaused.current && animationTimeline.current.play(),
          onLeave: () => animationTimeline.current.pause(),
          onEnterBack: () => !isPaused.current && animationTimeline.current.play(),
          onLeaveBack: () => animationTimeline.current.pause(),
        });
      }

      // Hero animation
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

      // Section animations
      sectionRefs.current.forEach((section, index) => {
        if (section) {
          gsap.fromTo(
            section,
            { opacity: 0, y: 80 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              delay: index * 0.2,
              scrollTrigger: {
                trigger: section,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });

      // Card animations (excluding Process Section)
      cardRefs.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 60, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              delay: index * 0.1,
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });

      // Feature animations (for Benefits section)
      featureRefs.current.forEach((feature, index) => {
        if (feature) {
          gsap.fromTo(
            feature,
            { opacity: 0, x: -50 },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              delay: index * 0.15,
              scrollTrigger: {
                trigger: feature,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });

      // Clients animation
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

      // Infinite scroll for client logos
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

      // Timeline animations for Services section
      timelineRefs.current.forEach((el, i) => {
        if (el) {
          gsap.fromTo(
            el,
            { x: i % 2 === 0 ? -100 : 100, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1.2,
              delay: i * 0.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        ctx.revert();
      };
    }, []);
  }, []);

  const handlePrev = () => {
    if (!cardsContainerRef.current) return;
    const cardWidth = cardsContainerRef.current.children[0].offsetWidth + 32;
    const total = solutions.length;

    setCurrentIndex((prev) => {
      const newIndex = (prev + 1) % total; // Move to next card
      gsap.to(cardsContainerRef.current, {
        x: -newIndex * cardWidth, // Shift right (x decreases)
        duration: 0.6,
        ease: "power2.out",
      });
      return newIndex;
    });
  };

  const handleNext = () => {
    if (!cardsContainerRef.current) return;
    const cardWidth = cardsContainerRef.current.children[0].offsetWidth + 32;
    const total = solutions.length;

    setCurrentIndex((prev) => {
      const newIndex = (prev - 1 + total) % total; // Move to previous card
      gsap.to(cardsContainerRef.current, {
        x: -newIndex * cardWidth, // Shift left (x increases)
        duration: 0.6,
        ease: "power2.out",
      });
      return newIndex;
    });
  };

  const goToSolution = (index) => {
    if (!cardsContainerRef.current) return;
    const cardWidth = cardsContainerRef.current.children[0].offsetWidth + 32;
    setCurrentIndex(index);
    gsap.to(cardsContainerRef.current, {
      x: -index * cardWidth,
      duration: 0.6,
      ease: "power2.out",
    });
  };

  const handleHoverStart = () => {
    if (animationTimeline.current) {
      animationTimeline.current.pause();
      isPaused.current = true;
    }
  };

  const handleHoverEnd = () => {
    if (animationTimeline.current) {
      animationTimeline.current.play();
      isPaused.current = false;
    }
  };

  const addToSectionRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const addToCardRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  const addToFeatureRefs = (el) => {
    if (el && !featureRefs.current.includes(el)) {
      featureRefs.current.push(el);
    }
  };

  const addToTimelineRefs = (el) => {
    if (el && !timelineRefs.current.includes(el)) {
      timelineRefs.current.push(el);
    }
  };

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
            <span className="text-orange-600 font-semibold">Staffing Excellence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Expert Staff Augmentation Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Scale your team with our professional staff augmentation services, delivering top-tier talent to drive your projects forward with efficiency and expertise.
          </p>
          <button className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center mx-auto">
            Get Started
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Intro Section */}
      <section ref={addToSectionRefs} className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
                <Zap className="w-5 h-5 text-orange-600 mr-2" />
                <span className="text-orange-600 font-semibold">STAFF AUGMENTATION</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-orange-600 leading-tight">
          The Best Staffing Augmentation Solution
        </h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-700 leading-relaxed">
            An outsourcing strategy that enables organizations to fill particular & temporary positions to fulfill business goals. Eagle Eye Tech provides staff augmentation services for IT organizations & non-IT firms, leveraging our professional expertise to accelerate development & reduce development expenses. Our solution usually welcomes additional resources as needed in the organization rather than outsourcing a whole project to some different entity. Our staffing solution provides flexibility to your organization by delivering professional individuals through augmentation. Eagle Eye Tech has well-established professionals who are reliable, productive, and dedicated to providing ground-breaking solutions.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 leading-relaxed">
            Types Of Staff Augmentation Services
          </h3>
          <p className="text-base text-gray-700 leading-relaxed">
            Our staff augmentation services operate both short-term & long-term hiring requirements, and the rest of the solutions are based on the client’s requirements.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
              Commodity Based Staff Augmentation
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
              Skill-Based Staff Augmentation
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
              High-Skilled Staff Augmentation
            </li>
          </ul>
              </div>
            </div>
            <div ref={addToCardRefs} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={DataMigrationImg}
                  alt="Staff Augmentation"
                  className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={addToSectionRefs} className="py-20 bg-gradient-to-br from-orange-50 to-amber-50 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
              Scale Up Your Team With Staff Augmentation
            </h2>
            <div className="max-w-lg mx-auto mb-6">
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src={BenefitsImg}
                  alt="Benefits"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-400/20"></div>
              </div>
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Eagle Eye Tech brings on-demand talent to its project development process. We find the right fit for any difficult-to-fill positions which boost the scalability and efficiency of project development. If you’re looking for highly skilled professional services to support your projects, it’s ideal to always have a checklist before working on it.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Cost-effective Approach",
                desc: "Hire a full-time & skilled professional temporarily to scale up your project efficiency.",
                icon: <Check className="w-6 h-6 text-white" />,
                image: "/staff3.jpg",
              },
              {
                title: "On-Going Hiring Process",
                desc: "Offers a higher level of flexibility as they can hire talent as per the project's demand.",
                icon: <Zap className="w-6 h-6 text-white" />,
                image: "/staff4.webp",
              },
              {
                title: "Operative Efficiency",
                desc: "Improves operational efficiency as they need not bear the infrastructural costs.",
                icon: <Eye className="w-6 h-6 text-white" />,
                image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=500",
              },
              {
                title: "Secure Data",
                desc: "Secure your software by hiring security experts & implementing their best practices.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                image: "/staff1.png",
              },
              {
                title: "Workforce Transparency",
                desc: "Scale up your workforce by hiring professionals & highly skilled full-time experts.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500",
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                ref={addToCardRefs}
                className="relative p-6 bg-white rounded-xl transition-transform duration-300 group hover:-rotate-2"
                style={{
                  border: "2px solid transparent",
                  backgroundImage: "linear-gradient(white, white), linear-gradient(to right, #f97316, #f59e0b)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                }}
              >
                <div className="relative w-full h-40 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-cover transform translate-y-4"
                    ref={(el) => {
                      if (el && !cardRefs.current.includes(el)) {
                        cardRefs.current.push(el);
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-400/20 to-transparent"></div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-3 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-orange-600">{benefit.title}</h3>
                  </div>
                  <button className="bg-gradient-to-r from-orange-500 to-amber-500 p-2 rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform duration-200">
                    <Search className="w-5 h-5 text-white" />
                  </button>
                </div>
                <p className="text-gray-700">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        ref={addToSectionRefs}
        className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-orange-600 via-amber-500 to-yellow-400"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 text-white">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg"
            >
              SERVICES OFFERED BY Eagle Eye Tech
            </h2>
            <p className="max-w-3xl mx-auto text-lg opacity-90">
              We offer a variety of technology services. Below are glimpses of our expertise in delivering top-tier staffing solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Working With The Right Partner",
                desc: "To kick off a successful partnership, we support the company's standards, past work, recruitment process, and expertise.",
                icon: <Users className="w-6 h-6 text-white" />,
              },
              {
                title: "Our Commitment",
                desc: "Eagle Eye Tech matches the right resources with the right requirement at the right time. We adopt a multi-channel strategy in achieving its objective by shortlisting suitable candidates, designing precisely targeted advertising campaigns, maintaining an extensive database of diversely skilled candidates, and performing a holistic candidate assessment.",
                icon: <Shield className="w-6 h-6 text-white" />,
              },
              {
                title: "Outsourcing Solutions",
                desc: "We perform prior research to understand more about your organization to find out what kind of staff & resources you need. Eagle Eye Tech staffing services are fully customizable, and we always find the right model that best suits your needs.",
                icon: <Layers className="w-6 h-6 text-white" />,
              },
              {
                title: "Define Expectations From The Start",
                desc: "Once you know the project's requirements, it's crucial to make sure that your goals & design expectations are determined distinctly. Also, numerous iterations are taken to recruit professional experts to your organization before too many resources have been invested.",
                icon: <Zap className="w-6 h-6 text-white" />,
              },
              {
                title: "Prioritize Communication",
                desc: "Before you outsource your staffing requirement, it's important to have a clear line of communication & to create an effective feedback cycle. We believe that this is a key factor for any project's success.",
                icon: <MessageSquare className="w-6 h-6 text-white" />,
                center: true,
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className={`bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-orange-100 
                  ${step.center ? "md:col-span-2 md:max-w-xl md:mx-auto" : ""}`}
              >
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-3 rounded-2xl w-12 h-12 flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-orange-600 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-700">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section
        ref={sectionRef}
        className="relative min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 py-20 px-6 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-orange-600 relative inline-block">
              IS Eagle Eye Tech A SMART CHOICE!
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-orange-500 transform scale-x-75"></span>
            </h2>
            <p className="text-lg text-gray-700 mt-6 max-w-3xl mx-auto">
              Staff augmentation is a powerful way to enhance your team & gain high skill sets through our professional experts.
            </p>
          </div>
          <div ref={containerRef} className="relative overflow-hidden py-8">
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-md z-20"
            >
              <ChevronLeft className="text-orange-600" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-md z-20"
            >
              <ChevronRight className="text-orange-600" />
            </button>
            <div
              ref={cardsContainerRef}
              className="flex gap-8 cursor-pointer"
              onMouseEnter={handleHoverStart}
              onMouseLeave={handleHoverEnd}
            >
              {duplicatedSolutions.map((solution, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-80 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-80 flex flex-col justify-between relative overflow-hidden group"
                >
                  <div className="bg-gradient-to-r from-orange-400 to-amber-500 p-4 rounded-2xl w-14 h-14 flex items-center justify-center mb-6 shadow-md">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-orange-600">{solution.title}</h3>
                  <p className="text-gray-700 text-base leading-relaxed">{solution.desc}</p>
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-orange-200 transition-all duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-12 space-x-2">
            {solutions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSolution(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === idx
                    ? "bg-orange-600"
                    : "bg-gray-300 hover:bg-orange-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
        
   
      </section>

      {/* Services Section */}
      <section ref={addToSectionRefs} className="py-20 bg-gradient-to-b from-white via-orange-50 to-white px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
              <Shield className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
              Our Staff Augmentation Services
            </h2>
          </div>
          <div className="relative border-l-4 border-dotted border-orange-400 ml-10">
            {[
              {
                title: "Analysis",
                desc: "We study your systems to define requirements for a safe and effective staffing solution.",
                icon: <Search className="w-6 h-6 text-white" />,
              },
              {
                title: "Planning",
                desc: "We create a detailed staffing plan to minimize risks and ensure the right fit.",
                icon: <Eye className="w-6 h-6 text-white" />,
              },
              {
                title: "Execution",
                desc: "We deploy top-tier talent using industry best practices or custom solutions.",
                icon: <Zap className="w-6 h-6 text-white" />,
              },
              {
                title: "Post-Deployment",
                desc: "We validate team integration, monitor performance, and optimize workflows.",
                icon: <Check className="w-6 h-6 text-white" />,
              },
            ].map((service, index) => (
              <div
                key={index}
                ref={addToTimelineRefs}
                className="mb-12 ml-8 relative pl-16"
              >
                <div
                  className="absolute -left-16 top-0 w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg text-white transition-transform duration-300 hover:scale-110"
                >
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section ref={clientsRef} className="py-20 bg-white px-4 md:px-8 lg:px-16">
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
            <div ref={scrollRef} className="flex space-x-12">
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

export default StaffAugmentation;
