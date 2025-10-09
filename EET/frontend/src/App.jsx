// import React from "react";
// import Navbar from "./components/layouts/Navbar";
// import Footer from "./components/layouts/Footer";
// import Home from "./pages/Home";
// import CareersPage from "./pages/CareersPage";

// function App() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Navbar */}
//       <Navbar />

// <Home />
// <CareersPage/>
//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/layouts/Navbar";
// import Footer from "./components/layouts/Footer";
// import Home from "./pages/Home";
// import CareersPage from "./pages/CareersPage";
// import Contact from "./pages/Contac";
// import Blog from "./pages/Blog";
// import BlogPage from "./components/Blog/BlogPage";
// import MissionSection from "./pages/MissionSection";
// import CSR from "./pages/CSR";
// import Med2AI from "./pages/medi2ai/Med2AI";
// import TeaTimeTelugu from "./pages/teatimetelugu/TeaTimeTelugu";
// import ApplicationDevelopment from "./pages/ourservice/ApplicationDevelopment";

// import JobApplicationPages from "./components/Blog/JobApplicationPages.jsx";
// import ScrollToTop from "./components/scrolling/ScrollToTop.jsx";
// import ApplicationIntegration from "./pages/ourservice/ApplicationIntegration.jsx";
// import { DataF } from "@react-google-maps/api";
// import DataMigration from "./pages/ourservice/DataMigration.jsx";
// import Devops from "./pages/ourservice/Devops.jsx";
// import Snowflake from "./pages/ourservice/Snowflake.jsx";
// import ImplementationServices from "./pages/ourservice/ImplementationServices.jsx";
// import PostImplementation from "./pages/ourservice/PostImplementation.jsx";
// import TroubleShooting from "./pages/ourservice/TroubleShooting.jsx";
// import TechnicalSupport from "./pages/ourservice/TechnicalSupport.jsx";
// import Dynamicwebsite from "./pages/ourservice/Dynamicwebsite.jsx";
// import MobileOptimized from "./pages/ourservice/MobileOptimized.jsx";
// import ResponsiveWebDesign from "./pages/ourservice/ResponsiveWebDesign.jsx";
// import MobileApplication from "./pages/ourservice/MobileApplication.jsx";
// import WebsiteHosting from "./pages/ourservice/WebsiteHosting.jsx";
// import WebDesign from "./pages/ourservice/webdesign.jsx";
// import EcommerceWebsiteDesign from "./pages/ourservice/EcommerceWebsiteDesign.jsx";
// import SearchEngine from "./pages/ourservice/SearchEngine.jsx";
// import SocialMedia from "./pages/ourservice/SocialMedia.jsx";
// import OnlineReputation from "./pages/ourservice/OnlineReputation.jsx";
// import Strategy from "./pages/ourservice/Strategy.jsx";
// import Analytics from "./pages/ourservice/Analytics.jsx";
// import MoblieAppTesting from "./pages/ourservice/MoblieAppTesting.jsx";
// import Manual from "./pages/ourservice/Manual.jsx";
// import Automation from "./pages/ourservice/Automation.jsx";
// import DeepLearning from "./pages/ourservice/DeepLearning.jsx";
// import ArtificalIntellgence from "./pages/ourservice/ArtificalIntellgence.jsx";
// import MeachineLearning from "./pages/ourservice/MeachineLearning.jsx";
// import AIChatbots from "./pages/ourservice/AIChatbots.jsx";
// import Technologies from "./pages/ourservice/Technologies.jsx";
// import Competencies from "./pages/ourservice/Competencies.jsx";
// import StaffAugmentation from "./pages/ourservice/StaffAugmentation.jsx";
// import PermanentStaffing from "./pages/ourservice/PermanentStaffing.JSX";
// import ContractStaffing from "./pages/ourservice/ContractStaffing.jsx";
// import ContractToHire from "./pages/ourservice/ContractToHire.jsx";
// import CloudNestPMS from "./pages/medi2ai/CloudNestPMS.jsx";
// import SoftwareTesting from "./pages/ourservice/SoftwareTesting.jsx";

// import BlogCreate from "./pages/BlogCreate.jsx";
// import JobCreate from "./pages/JobCreate.jsx";
// import AdminDashboard from "./pages/AdminDashboard.jsx";


// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen flex flex-col">
//         <ScrollToTop />
//         {/* Navbar */}
//         <Navbar />

//         {/* Pages */}
//         <div className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/careers" element={<CareersPage />} />
//             <Route path="/blog/job-application/:title" element={<JobApplicationPages />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/blog" element={<Blog />} />
//             <Route path="/blog/:id" element={<BlogPage />} />
//             <Route path="/mission" element={<MissionSection />} />
//             <Route path="/csr" element={<CSR />} />
//             <Route path="/med2ai" element={<Med2AI />} />
//             <Route path="/ttt" element={<TeaTimeTelugu />} />
//             <Route path="/applicationdev" element={<ApplicationDevelopment />} />
//             <Route path="/applicationint" element={<ApplicationIntegration />} />
//             <Route path="/datamigration" element={<DataMigration />} />
//             <Route path="/devops" element={<Devops />} />
//             <Route path="/snow" element={<Snowflake />} />
//             <Route path="/implementation" element={<ImplementationServices />} />
//             <Route path="/post" element={<PostImplementation />} />
//             <Route path="/trouble" element={<TroubleShooting />} />
//             <Route path="/tech" element={<TechnicalSupport />} />
//             <Route path="/dynamic" element={<Dynamicwebsite />} />
//             <Route path="/mobile" element={<MobileOptimized />} />
//             <Route path="/responsive" element={<ResponsiveWebDesign />} />
//             <Route path="/Mapplication" element={<MobileApplication />} />
//             <Route path="/website" element={<WebsiteHosting />} />
//             <Route path="/webdesign" element={<WebDesign />} />
//             <Route path="/ecommerceWebsiteDesign" element={<EcommerceWebsiteDesign />} />
//             <Route path="/searchengine" element={<SearchEngine />} />
//             <Route path="/socialmedia" element={<SocialMedia />} />
//             <Route path="/onlinereputation" element={<OnlineReputation />} />
//             <Route path="/strategy" element={<Strategy />} />
//             <Route path="/analytics" element={<Analytics />} />
//             <Route path="/Moblieapptesting" element={<MoblieAppTesting />} />
//             <Route path="/Manual" element={<Manual />} />
//             <Route path="/automation" element={<Automation />} />
//             <Route path="/deeplearning" element={<DeepLearning />} />
//             <Route path="/artificalintellgence" element={<ArtificalIntellgence />} />

//             <Route path="/MeachineLearning" element={<MeachineLearning />} />
//             <Route path="/aichatbots" element={<AIChatbots />} />
//             <Route path="/technologies" element={<Technologies />} />
//             <Route path="/competencies" element={<Competencies />} />
//             <Route path="/staffaugmentation" element={<StaffAugmentation />} />
//             <Route path="/permanentstaffing" element={<PermanentStaffing />} />
//             <Route path="/contractstaffing" element={<ContractStaffing />} />
//             <Route path="/contracttohire" element={<ContractToHire />} />
//             <Route path="/Cloudnestpms" element={<CloudNestPMS />} />
//             <Route path="/Software-Testing" element={<SoftwareTesting />} />
//              <Route path="/createblog" element={<BlogCreate/>} />
//                  <Route path="/jobcreate" element={<JobCreate/>} />
//                   <Route path="/admindashboard" element={<AdminDashboard/>} />



//           </Routes>
//         </div>

//         {/* Footer */}
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Home from "./pages/Home";
import CareersPage from "./pages/CareersPage";
import Contact from "./pages/Contac";
import Blog from "./pages/Blog";
import BlogPage from "./components/Blog/BlogPage";
import MissionSection from "./pages/MissionSection";
import CSR from "./pages/CSR";
import Med2AI from "./pages/medi2ai/Med2AI";
import TeaTimeTelugu from "./pages/teatimetelugu/TeaTimeTelugu";
import ApplicationDevelopment from "./pages/ourservice/ApplicationDevelopment";

import JobApplicationPages from "./components/Blog/JobApplicationPages.jsx";
import ScrollToTop from "./components/scrolling/ScrollToTop.jsx";
import ApplicationIntegration from "./pages/ourservice/ApplicationIntegration.jsx";
import { DataF } from "@react-google-maps/api";
import DataMigration from "./pages/ourservice/DataMigration.jsx";
import Devops from "./pages/ourservice/Devops.jsx";
import Snowflake from "./pages/ourservice/Snowflake.jsx";
import ImplementationServices from "./pages/ourservice/ImplementationServices.jsx";
import PostImplementation from "./pages/ourservice/PostImplementation.jsx";
import TroubleShooting from "./pages/ourservice/TroubleShooting.jsx";
import TechnicalSupport from "./pages/ourservice/TechnicalSupport.jsx";
import Dynamicwebsite from "./pages/ourservice/Dynamicwebsite.jsx";
import MobileOptimized from "./pages/ourservice/MobileOptimized.jsx";
import ResponsiveWebDesign from "./pages/ourservice/ResponsiveWebDesign.jsx";
import MobileApplication from "./pages/ourservice/MobileApplication.jsx";
import WebsiteHosting from "./pages/ourservice/WebsiteHosting.jsx";
import WebDesign from "./pages/ourservice/webdesign.jsx";
import EcommerceWebsiteDesign from "./pages/ourservice/EcommerceWebsiteDesign.jsx";
import SearchEngine from "./pages/ourservice/SearchEngine.jsx";
import SocialMedia from "./pages/ourservice/SocialMedia.jsx";
import OnlineReputation from "./pages/ourservice/OnlineReputation.jsx";
import Strategy from "./pages/ourservice/Strategy.jsx";
import Analytics from "./pages/ourservice/Analytics.jsx";
import MoblieAppTesting from "./pages/ourservice/MoblieAppTesting.jsx";
import Manual from "./pages/ourservice/Manual.jsx";
import Automation from "./pages/ourservice/Automation.jsx";
import DeepLearning from "./pages/ourservice/DeepLearning.jsx";
import ArtificalIntellgence from "./pages/ourservice/ArtificalIntellgence.jsx";
import MeachineLearning from "./pages/ourservice/MeachineLearning.jsx";
import AIChatbots from "./pages/ourservice/AIChatbots.jsx";
import Technologies from "./pages/ourservice/Technologies.jsx";
import Competencies from "./pages/ourservice/Competencies.jsx";
import StaffAugmentation from "./pages/ourservice/StaffAugmentation.jsx";
import PermanentStaffing from "./pages/ourservice/PermanentStaffing.JSX";
import ContractStaffing from "./pages/ourservice/ContractStaffing.jsx";
import ContractToHire from "./pages/ourservice/ContractToHire.jsx";
import CloudNestPMS from "./pages/medi2ai/CloudNestPMS.jsx";
import SoftwareTesting from "./pages/ourservice/SoftwareTesting.jsx";

import BlogCreate from "./pages/BlogCreate.jsx";
import JobCreate from "./pages/JobCreate.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        {/* Navbar */}
        <Navbar />

        {/* Pages */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/blog/job-application/:title" element={<JobApplicationPages />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPage />} />
            <Route path="/mission" element={<MissionSection />} />
            <Route path="/csr" element={<CSR />} />
            <Route path="/med2ai" element={<Med2AI />} />
            <Route path="/ttt" element={<TeaTimeTelugu />} />
            <Route path="/applicationdev" element={<ApplicationDevelopment />} />
            <Route path="/applicationint" element={<ApplicationIntegration />} />
            <Route path="/datamigration" element={<DataMigration />} />
            <Route path="/devops" element={<Devops />} />
            <Route path="/snow" element={<Snowflake />} />
            <Route path="/implementation" element={<ImplementationServices />} />
            <Route path="/post" element={<PostImplementation />} />
            <Route path="/trouble" element={<TroubleShooting />} />
            <Route path="/tech" element={<TechnicalSupport />} />
            <Route path="/dynamic" element={<Dynamicwebsite />} />
            <Route path="/mobile" element={<MobileOptimized />} />
            <Route path="/responsive" element={<ResponsiveWebDesign />} />
            <Route path="/Mapplication" element={<MobileApplication />} />
            <Route path="/website" element={<WebsiteHosting />} />
            <Route path="/webdesign" element={<WebDesign />} />
            <Route path="/ecommerceWebsiteDesign" element={<EcommerceWebsiteDesign />} />
            <Route path="/searchengine" element={<SearchEngine />} />
            <Route path="/socialmedia" element={<SocialMedia />} />
            <Route path="/onlinereputation" element={<OnlineReputation />} />
            <Route path="/strategy" element={<Strategy />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/Moblieapptesting" element={<MoblieAppTesting />} />
            <Route path="/Manual" element={<Manual />} />
            <Route path="/automation" element={<Automation />} />
            <Route path="/deeplearning" element={<DeepLearning />} />
            <Route path="/artificalintellgence" element={<ArtificalIntellgence />} />

            <Route path="/MeachineLearning" element={<MeachineLearning />} />
            <Route path="/aichatbots" element={<AIChatbots />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/competencies" element={<Competencies />} />
            <Route path="/staffaugmentation" element={<StaffAugmentation />} />
            <Route path="/permanentstaffing" element={<PermanentStaffing />} />
            <Route path="/contractstaffing" element={<ContractStaffing />} />
            <Route path="/contracttohire" element={<ContractToHire />} />
            <Route path="/Cloudnestpms" element={<CloudNestPMS />} />
            <Route path="/Software-Testing" element={<SoftwareTesting />} />
            
            {/* Updated Admin Routes - These match navigation in AdminDashboard, BlogCreate, JobCreate */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/blog-create" element={<BlogCreate />} />
            <Route path="/admin/blog-edit/:id" element={<BlogCreate />} />
            <Route path="/admin/job-create" element={<JobCreate />} />
            <Route path="/admin/job-edit/:id" element={<JobCreate />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;