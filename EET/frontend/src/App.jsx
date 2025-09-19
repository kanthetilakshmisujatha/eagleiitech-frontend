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

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <ScrollToTop/>
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
                 <Route path="/med2ai" element={<Med2AI/>} />
                      <Route path="/ttt" element={<TeaTimeTelugu/>} />
                      <Route path="/applicationdev" element={<ApplicationDevelopment/>} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;