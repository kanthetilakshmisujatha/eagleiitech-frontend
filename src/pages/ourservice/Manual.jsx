import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Zap, Shield, Layers, Rocket, Eye, ArrowRight, Play, Target, Users, Award } from "lucide-react";
import cisco from "../../assets/cisco.png";
import verizon from "../../assets/version.png";
import wells from "../../assets/wells.png";
import fidelity from "../../assets/fidelity.png";
import hcl from "../../assets/hcl.png";
import infosys from "../../assets/infosys.png";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Client data
const clients = [
  { name: "Cisco", logo: cisco },
  { name: "Verizon", logo: verizon },
  { name: "Wells Fargo", logo: wells },
  { name: "Fidelity", logo: fidelity },
  { name: "HCL", logo: hcl },
  { name: "Infosys", logo: infosys },
];

// Images from first component
const ManualTestingImg = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&auto=format&fit=crop";
const QualityAssuranceImg = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop";
const TestPlanningImg = "/hum.webp";
const TeamCollaborationImg = "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=500&auto=format&fit=crop";
const BenefitsImg = "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=500&auto=format&fit=crop";
const StrategyImg = "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&auto=format&fit=crop";

// Images from second component
const AppDevelopmentImg = "/costeff.webp";
const PlanningImg = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500";
const ServicesImg = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500";

const Manual = () => {
  const heroRef = useRef(null);
  const sectionRefs = useRef([]);
  const cardRefs = useRef([]);
  const featureRefs = useRef([]);
  const clientsRef = useRef(null);
  const scrollRef = useRef(null);
  const strategicHeadingRef = useRef(null);

  useEffect(() => {
    // Enhanced hero animation
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
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
            duration: 1.2,
            delay: index * 0.3,
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    // Card animations with stagger effect
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
            delay: index * 0.15,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    // Feature animations with enhanced floating effect
    featureRefs.current.forEach((feature, index) => {
      if (feature) {
        gsap.fromTo(
          feature,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: feature,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
        gsap.to(feature, {
          y: 15,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    });

    // Strategic heading typewriter effect
    const strategicHeading = strategicHeadingRef.current;
    if (strategicHeading) {
      const text = strategicHeading.textContent;
      strategicHeading.textContent = "";
      ScrollTrigger.create({
        trigger: strategicHeading,
        start: "top 80%",
        onEnter: () => {
          let i = 0;
          const typeWriter = () => {
            if (i < text.length) {
              strategicHeading.textContent += text.charAt(i);
              i++;
              setTimeout(typeWriter, 60);
            }
          };
          typeWriter();
        },
      });
    }

    // Enhanced clients animation
    gsap.fromTo(
      clientsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
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
        duration: 30,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
        },
      });
    }

    // Cleanup ScrollTrigger
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-orange-50 overflow-hidden font-sans">
      {/* Hero Section (from first component) */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-amber-400/10"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-orange-200">
            <Layers className="w-5 h-5 text-orange-500 mr-2" />
            <span className="text-orange-600 font-semibold">Precision Manual Testing</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Manual Testing Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Delivering exceptional quality through meticulous manual testing processes. 
            Our certified professionals ensure your applications meet the highest standards of functionality and user experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center mx-auto">
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
            
          </div>
        </div>
      </section>

      {/* Development Section (text from second component, UI from first) */}
      <section ref={addToSectionRefs} className="py-24 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-100 rounded-2xl -z-10"></div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-600">
                  Manual
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  Providing Businesses With A Competitive Advantage In The Market Through High Performance & Reliable Software
                </p>
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-2xl border-l-4 border-orange-500">
                  <p className="text-gray-700 leading-relaxed">
                    Manual testing is software testing in which test cases are performed manually rather than using an automated tool. The tester runs all test cases manually from both perspectives. It determines whether the application meets the requirements or not. We implement test cases to execute the final software application. Moreover, we even develop test case reports manually.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700">
                <img
                  src={ManualTestingImg}
                  alt="Manual Testing Process"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold">Quality Assurance</h3>
                  <p className="text-amber-200">Manual Testing Experts</p>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-100 rounded-full -z-10"></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-orange-200 rounded-2xl -z-10"></div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bg-gradient-to-br from-orange-600 to-amber-600 p-8 rounded-3xl text-white">
                <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-6">
                  <Users className="w-5 h-5 text-white mr-2" />
                  <span className="font-semibold">Essential Service</span>
                </div>
                <h3 className="text-3xl font-bold mb-6">Is Manual Testing Necessary?</h3>
                <p className="text-amber-100 leading-relaxed mb-6">
                  In the modern world, technology & usage of applications has been making tremendous changes every term quarter, majority of application stakeholders release enhancement updates. To ensure the performance, functionality, compatibility & security, our experts deploy testing the use cases manually by performing multiple test iterations. As manual testing consumes time in evaluating, automation in all aspects of development testing has become essential. Automation can provide value to entire testing by its time-effectiveness, accuracy, reusability, and repeatability. There are places in the functional testing process where manual testing is unavoidable. Manual testing is one of the most effective methods for detecting significant flaws. This strategy is to identify defects in the product that are kept aside by automated testing. Because manual testing evaluates internally, it contributes to improving the product’s user experience and usability.
                </p>
              </div>
            </div>
            <div>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Manual testing complements automation by identifying issues that automated scripts might overlook. 
                  It's particularly effective for evaluating user experience, visual design, and complex user interactions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { icon: Eye, title: "Visual Validation", desc: "UI/UX consistency checks" },
                    { icon: Zap, title: "Quick Feedback", desc: "Rapid issue identification" },
                    { icon: Shield, title: "Security Checks", desc: "Manual security testing" },
                    { icon: Award, title: "Quality Assurance", desc: "Comprehensive quality checks" }
                  ].map((item, index) => (
                    <div key={index} className="bg-orange-50 p-4 rounded-xl border border-orange-200">
                      <item.icon className="w-8 h-8 text-orange-600 mb-2" />
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mt-16 mb-8">Our Manual Testing Approach</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Our manual software testing firm follows a well-defined testing approach and sets guidelines to implement best practices for deriving the high quality of the final software product.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Requirement Analysis",
                desc: "Our professional test engineers are involved in project development from the beginning, including business and functional analysis. We assist analysts and architects in appropriately defining requirements and determining the extent of manual testing services."
              },
              {
                title: "Strategy For Testing",
                desc: "When the requirements are accurate, our experts focus on getting test planning & strategy documents. While the software development life cycle, strategy act as an asset for all testing methods, timetables & test coverage."
              },
              {
                title: "Case Studies",
                desc: "Using software requirements specifications, experts write test cases for non-functional requirements, existing rules & application logic. This documentation enables us to lay the groundwork for repeatable testing of future software update releases."
              },
              {
                title: "Execution Of Tests",
                desc: "The test execution phase is one of the most crucial software development phases that determine whether your requirements are satisfied or not. We identify and prioritize significant challenges. Before the next testing cycle begins, our expert team ensures to rectify all errors."
              },
              {
                title: "Reporting Bugs",
                desc: "Effective bug reporting is required to highlight the discovered faults to the team and determine the severity and priority of the problem. A tester will delegate bug-fixing to a developer once we accomplish the need. Reports ensure that the test history is consistent and verifiable, hence accelerating the software development process."
              }
            ].map((item, index) => (
              <div
                key={index}
                ref={addToCardRefs}
                className="bg-white p-6 rounded-3xl shadow-xl border-l-4 border-orange-500 transform transition-all duration-500 hover:scale-105"
              >
                <h3 className="text-xl font-bold text-orange-600 mb-4">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section (text from second component, UI from first) */}
      <section ref={addToSectionRefs} className="py-24 bg-gradient-to-br from-orange-50 to-amber-50 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg mb-6">
              <Shield className="w-6 h-6 text-orange-600 mr-2" />
              <span className="text-orange-600 font-bold text-lg">Our Testing Methodology</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-orange-600 mb-4">
              Services We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our manual software testing firm has a well-defined Quality Assurance methodology in place. The majority of our test engineers have ISTQB certifications and have tested IT projects of all levels of complexity.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="space-y-8">
                {[
                  {
                    icon: Target,
                    title: "Unique Testing Strategy",
                    desc: "Experienced QA engineers create a test strategy document to maintain the transparency of the project. Team heads distribute the opted approach among our in-house team to achieve necessary insights.",
                    color: "from-orange-500 to-amber-500"
                  },
                  {
                    icon: Rocket,
                    title: "Test Preparation",
                    desc: "The test plan document contains the project scope and testing focus, timelines, test coverage, features to be the test, resources, responsible personnel, and the test environment. Comprehensive test planning guarantees that all testing operations are consistent throughout the development lifecycle.",
                    color: "from-amber-500 to-orange-500"
                  }
                ].map((service, index) => (
                  <div
                    key={index}
                    ref={addToCardRefs}
                    className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-l-4 border-orange-500"
                  >
                    <div className={`bg-gradient-to-r ${service.color} p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-orange-600">{service.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div ref={addToCardRefs} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={ServicesImg}
                  alt="Solutions"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-bold">Quality First</h3>
                  <p className="text-amber-200">Every test matters</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-6 py-3 rounded-full font-bold shadow-lg">
                ISTQB Certified
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Several Sorts Of Testing",
                desc: "We even operate a manual testing business that performs functional, usability, scalability, security, integration, interoperability, system, and other sorts of testing. Each testing has its own set of goals, but they all contribute to determining whether the software performs as expected or not.",
                icon: Check,
                bg: "bg-orange-500"
              },
              {
                title: "Testing For User Acceptability",
                desc: "During the UAT stage, we collaborate with end-users to determine whether the application is ready for release. It is an extra opportunity to ensure that the application functions in the user context. All UAT scenarios are planned prior and agreed upon in advance with the customer.",
                icon: Users,
                bg: "bg-amber-500"
              },
              {
                title: "Traceability Matrix For Requirements",
                desc: "To validate requirements, test coverage, we employ a traceability matrix. Design is a mix & combination of all test cases to their relevant user stories, allowing us to track whether featured needs are satisfied or not.",
                icon: Shield,
                bg: "bg-orange-600"
              },
              {
                title: "Metrics & Reports For Testing",
                desc: "We use metrics such as defects by severity, defects by priority, and test case execution productivity when deciding where to focus our testing efforts next. We also provide reports so that our customers can see the progress of our product.",
                icon: Layers,
                bg: "bg-amber-600"
              }
            ].map((service, index) => (
              <div
                key={index}
                ref={addToCardRefs}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:transform hover:scale-105"
              >
                <div className={`${service.bg} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-orange-600 mb-2">{service.title}</h4>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Planning Section (text from second component, UI from first) */}
      <section ref={addToSectionRefs} className="py-24 bg-white px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-100 rounded-2xl -z-10"></div>
                <h2
                  ref={strategicHeadingRef}
                  className="text-4xl md:text-5xl font-bold mb-6 text-orange-600"
                >
                  The Advantages Of Our Manual Services
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Manual QA testing services are required to create a software solution that satisfies your objectives and expectations. Our bespoke software development and manual testing firm provide all sorts of testing as a stand-alone service or as part of your project development. Here are some of the most significant advantages you may obtain.
                </p>
              </div>
            </div>
            <div ref={addToCardRefs} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={PlanningImg}
                  alt="Strategic Planning"
                  className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold">Strategic Planning</h3>
                  <p className="text-amber-200">Driving Success</p>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-100 rounded-full -z-10"></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-orange-200 rounded-2xl -z-10"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Cost-effectiveness",
                img: AppDevelopmentImg,
                desc: "Manual testing services assist in detecting defects and faults as well as helping to avoid frequent code rewriting. It saves money by allowing us to report aggressively on discovered defects and requirements discrepancies."
              },
              {
                title: "Humanism",
                img: TestPlanningImg,
                desc: "As opposed to automated testing, manual testing is performed by a human and is more customer-centric. A tester can examine the program from the user end and report on what might be improved."
              },
              {
                title: "Paying Close Attention To Details",
                img: BenefitsImg,
                desc: "Our manual testers are detail-oriented and methodological. They are skilled in a wide range of testing techniques, and they aim not only to find errors but also to present clear conclusions."
              },
              {
                title: "Engineers With QA Certification",
                img: QualityAssuranceImg,
                desc: "Our test engineers continually expand their knowledge and abilities by attending professional workshops, courses & conferences. To ensure successful testing, we employ cutting-edge technology in every phase of our implementations."
              }
            ].map((item, index) => (
              <div
                key={index}
                ref={addToCardRefs}
                className="bg-white p-6 rounded-3xl shadow-xl border-l-4 border-orange-500 transform transition-all duration-500 hover:scale-105"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-t-xl -mt-6 -mx-6 mb-4"
                />
                <h3 className="text-xl font-bold text-orange-600 mb-4">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
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

export default Manual;