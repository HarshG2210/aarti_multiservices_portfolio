import { Box } from "@chakra-ui/react";
import ContactUs from "../components/ContactUs/ContactUs";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Portfolio from "../components/Portfolio/Portfolio";
import QuoteSection from "../components/QuoteSection/QuoteSection";
import Services from "../components/Services/Services";
import Statistics from "../components/Statistics/Statistics";
import TeamSection from "../components/TeamSection/TeamSection";
import Testimonials from "../components/Testimonials/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";

// import Footer from "../components/Footer/Footer";

// import Navbar from "../components/Navbar/Navbar";

function Home() {
  return (
    <Box bg="gray.900">
      {/* Hero */}
      <Hero />

      {/* Services */}
      <Services />

      {/* WhyChooseUs */}
      <WhyChooseUs />

      {/* Portfolio */}
      <Portfolio />

      {/* Testimonials */}
      <Testimonials />

      {/* Statistics */}
      <Statistics />

      {/* TeamSection */}
      <TeamSection />

      {/* QuoteSection */}
      <QuoteSection />

      {/* ContactUs */}
      <ContactUs />

      {/* Footer */}
      <Footer />
    </Box>
  );
}

export default Home;
