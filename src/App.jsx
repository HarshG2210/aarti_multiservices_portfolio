import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import ContactUs from "./components/ContactUs/ContactUs";
import FAQs from "./components/FAQs/FAQs";
import Home from "./Home/home";
import Portfolio from "./components/Portfolio/Portfolio";
import Pricing from "./components/Pricing/Pricing";
import PrivacyPolicy from "./components/Privacypolicy/Privacypolicy";
import RootLayout from "./components/RootLayout/Rootlayout";
import Services from "./components/Services/Services";
import TeamSection from "./components/TeamSection/TeamSection";
import Testimonials from "./components/Testimonials/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";

// Import other page components as needed

function App() {
  return (
    <Router>
      <Routes>
        {/* Root route using RootLayout as the wrapper */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} /> {/* Default home page */}
          <Route path="services" element={<Services />} />
          <Route path="whyChooseUs" element={<WhyChooseUs />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="team" element={<TeamSection />} />
          <Route path="contactUs" element={<ContactUs />} />
          <Route path="about" element={<About />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="faqs" element={<FAQs />} />
          <Route path="blog" element={<Blog />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
