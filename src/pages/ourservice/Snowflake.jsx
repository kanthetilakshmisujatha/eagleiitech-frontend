import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Database, ArrowUpRight, Workflow, BarChart, DollarSign, ArrowRight, Layers, Shield } from "lucide-react";
import cisco from '../../assets/cisco.png';
import verizon from '../../assets/version.png';
import wells from '../../assets/wells.png';
import fidelity from '../../assets/fidelity.png';
import hcl from '../../assets/hcl.png';
import infosys from '../../assets/infosys.png';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Snowflake = () => {
  const clients = [
    { name: 'Cisco', logo: cisco },
    { name: 'Verizon', logo: verizon },
    { name: 'Wells Fargo', logo: wells },
    { name: 'Fidelity', logo: fidelity },
    { name: 'HCL', logo: hcl },
    { name: 'Infosys', logo: infosys },
  ];

  const services = [
    {
      title: "Snowflake as a Service",
      desc: "Snowflake as a Service for our clients who are looking to upgrade to a modern data architecture on cloud service. We provide Snowflake as a fully managed Cloud Data Warehouse that is offered as Software-as-a-Service (SaaS) or Database-as-a-Service (DaaS). At Eagle Eye Tech, our services include launching Snowflake on your network, migrating on-premises Data Warehouses, building pipelines with Airflow, connecting BI tools, and optimizing storage and compute costs.",
      icon: <Database className="w-6 h-6 text-orange-600" />,
      img: "/s1.png",
    },
    {
      title: "Data Migration",
      desc: "Our certified Snowflake developers handle migration projects from on-premises to the Snowflake cloud platform. We outline project timelines, identify required data sources, and redesign architectures that align with Snowflake’s capabilities. Using advanced tools, we ensure smooth transformations with rigorous AB testing to validate data quality, ensuring migrations meet client expectations.",
      icon: <ArrowUpRight className="w-6 h-6 text-orange-600" />,
      img: "/s2.png",
    },
    {
      title: "Big Data Pipeline",
      desc: "Our certified Data Engineers build robust and scalable pipelines using Snowflake connectors and ETL tools. Leveraging Apache Airflow, Python, and PySpark, we design ETL workflows that handle huge structured and unstructured data sets, transforming them efficiently. These pipelines ensure high availability of critical data within Snowflake for business operations.",
      icon: <Workflow className="w-6 h-6 text-orange-600" />,
      img: "/s5.jpg",
    },
    {
      title: "Data Analytics and BI",
      desc: "Our Data Scientists resolve business problems by leveraging Snowflake’s data lakes and warehouses. We design BI dashboards using Tableau, Power BI, and other visualization tools connected to Snowflake. With enterprise-wide data access, organizations gain actionable insights, enabling data-driven decision-making and accelerated problem resolution.",
      icon: <BarChart className="w-6 h-6 text-orange-600" />,
      img: "/s3.jpg",
    },
    {
      title: "Cost Optimization",
      desc: "Our Snowflake experts specialize in tuning and optimizing storage and compute costs. We build dashboards to track Snowflake credit utilization, eliminate redundant data, and optimize queries. With strategic cost reduction measures, Eagle Eye Tech helps clients maximize ROI on their Snowflake investments while reducing operational overhead.",
      icon: <DollarSign className="w-6 h-6 text-orange-600" />,
      img: "/s4.jpg",
    },
  ];

  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const sectionRefs = useRef([]);
  const clientsRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
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

    // Services Section animations
    gsap.fromTo(
      titleRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      subtitleRef.current,
      { y: -40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

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
            <span className="text-orange-600 font-semibold">Snowflake Excellence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Snowflake Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Unlock the full potential of modern cloud data architecture with
            Eagle Eye Tech’s Snowflake solutions. From migration to cost
            optimization, we empower your organization with scalable,
            high-performance data warehousing.
          </p>
          <button className="group bg-gradient-to-r from-orange-500 to-amber-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center mx-auto">
            Get Started
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-4 py-2 mb-6">
              <Shield className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-600 font-semibold">Our Services</span>
            </div>
            <h2
              ref={titleRef}
              className="text-4xl md:text-5xl font-bold mb-6 text-orange-600"
            >
              Our Snowflake Services
            </h2>
            <h3
              ref={subtitleRef}
              className="text-xl md:text-2xl font-semibold text-gray-700 mb-16"
            >
              Modernize • Scale • Optimize
            </h3>
          </div>
          {services.map((service, idx) => (
            <div
              key={idx}
              ref={addToSectionRefs}
              className={`flex flex-col md:flex-row items-center gap-12 py-12 ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="w-full md:w-1/2 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Found"; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-400/20"></div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="bg-white p-8 rounded-3xl shadow-2xl border border-orange-100">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-2xl font-bold text-orange-600 ml-3">{service.title}</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
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

export default Snowflake;