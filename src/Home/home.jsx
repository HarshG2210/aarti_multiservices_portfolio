import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Box } from "@chakra-ui/react";

function Home() {
  return (
    <Box bg="gray.900">
      {/* Navbar */}
      <Navbar />

      {/* Footer */}
      <Footer />
    </Box>
  );
}

export default Home;
