// RootLayout.jsx
import { Box } from "@chakra-ui/react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <Box>
      {/* Navbar at the top */}
      <Navbar />
      <Breadcrumbs />

      {/* Outlet for nested routes */}
      <Box as="main">
        <Outlet />
      </Box>

      {/* Footer at the bottom */}
      <Footer />
    </Box>
  );
}

export default RootLayout;
