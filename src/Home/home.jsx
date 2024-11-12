import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Box } from "@chakra-ui/react";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Portfolio from "../components/Portfolio/Portfolio";
import Testimonials from "../components/Testimonials/Testimonials";
import Statistics from "../components/Statistics/Statistics";
import TeamSection from "../components/TeamSection/TeamSection";
import QuoteSection from "../components/QuoteSection/QuoteSection";
import ContactUs from "../components/ContactUs/ContactUs";

function Home() {
  return (
    <Box bg="gray.900">
      {/* Navbar */}
      <Navbar />

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
