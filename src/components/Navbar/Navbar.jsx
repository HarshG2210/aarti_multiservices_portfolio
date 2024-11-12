// src/components/Navbar.jsx

import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Image,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";

import { FaEnvelope } from "react-icons/fa"; // Import the envelope icon
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useMediaQueryContext } from "../../context/MediaQueryContext";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Chakra hook to handle drawer state
  const { isMobile } = useMediaQueryContext(); // Use both mobile and tablet queries

  const handleGetQuoteClick = () => {
    // Trigger the mailto link when the "Get Quote" button is clicked
    window.location.href =
      "mailto:info@aartimultiservices.com?subject=Request for Quote&body=I would like to discuss my project needs.";
  };

  return (
    <Box as="nav" p={4} bg="transparent">
      <Flex
        align="center"
        justify={"space-between"}
        h="60px"
        position="relative"
        maxW="1200px" // Max width for the navbar container
        mx="auto" // Center the navbar on larger screens
        px={1} // Padding for mobile
      >
        {/* Left: Menu Button */}
        <IconButton
          icon={<HamburgerIcon />}
          aria-label="Menu"
          colorScheme="teal"
          variant="outline"
          onClick={onOpen} // Open the drawer on click
          display={{
            base: "inline-flex",
            md: "inline-flex",
          }} // Show on mobile only
        />

        {/* Center: Company Logo */}
        <Box
          mx={{ base: "auto", md: "0" }} // Center on mobile, align left on desktop
          flex="1" // Allow logo to take up more space on smaller screens
          display="flex"
          justifyContent={{ base: "center", md: "center" }} // Center on mobile, left-align on desktop
        >
          <Image
            src={logo}
            alt="Company Logo"
            boxSize={{ base: "100px", md: "150px" }} // Adjust logo size for mobile
            objectFit="contain"
          />
        </Box>

        {/* Right: Get Quotes Button or Icon based on screen size */}
        <Box display="flex" alignItems="center" onClick={handleGetQuoteClick}>
          {isMobile ? (
            <IconButton
              icon={<FaEnvelope />}
              aria-label="Get Quotes"
              colorScheme="blue"
              size="lg"
              ml="auto" // Push the icon to the far right on mobile
            />
          ) : (
            <Button colorScheme="blue" size="lg" ml="auto">
              Get Quotes
            </Button>
          )}
        </Box>
      </Flex>

      {/* Fullscreen Drawer Menu */}
      <Drawer
        isOpen={isOpen}
        placement="left" // Opens from the left side
        onClose={onClose}
        size="full" // Full-screen drawer
        bg="#E2E8F0"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            {/* Menu items in the drawer */}
            <VStack spacing={6} mt={10} align="center">
              <Button
                as={Link}
                to="/about"
                colorScheme="teal"
                onClick={onClose}
              >
                About Us
              </Button>
              <Button
                as={Link}
                to="/flatProject"
                colorScheme="teal"
                onClick={onClose}
              >
                Flat Projects
              </Button>
              <Button
                as={Link}
                to="/plotProject"
                colorScheme="teal"
                onClick={onClose}
              >
                Plot Projects
              </Button>
              <Button as={Link} to="/blog" colorScheme="teal" onClick={onClose}>
                Blog
              </Button>
              <Button
                as={Link}
                to="/contact"
                colorScheme="teal"
                onClick={onClose}
              >
                Contact Us
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Navbar;
