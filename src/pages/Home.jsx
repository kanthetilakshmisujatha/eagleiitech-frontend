import React from "react";
import Header from "../components/Home/Header";
import ServiceCards from "../components/Home/services";
import Services from "../components/Home/services";
import WhoWeAre from "../components/Home/WhoWeAre";
import ServicesSection from "../components/Home/ServicesSection";
import AboutUs from "../components/Home/AboutUs";
import WhyEagleEyeTech from "../components/Home/WhyEagleEyeTech";
import OurWork from "../components/Home/OurWork";
import Testimonials from "../components/Home/Testimonials";
import ClientsSection from "../components/Home/ClientsSection";
// adjust the path according to your folder structure

const Home = () => {
  return (
    <div>
      {/* Include Header */}
      <Header/>

<WhoWeAre/>
<ServicesSection/>
<AboutUs/>

<WhyEagleEyeTech/>
<Services />
<OurWork/>
<Testimonials/>
<ClientsSection/>
    
    </div>
  );
};

export default Home;
