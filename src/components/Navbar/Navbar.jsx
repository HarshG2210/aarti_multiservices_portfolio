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
  useToast,
} from "@chakra-ui/react";

import { FaEnvelope } from "react-icons/fa"; // Import the envelope icon
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useMediaQueryContext } from "../../context/MediaQueryContext";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Chakra hook to handle drawer state
  const { isMobile } = useMediaQueryContext(); // Use both mobile and tablet queries
  const toast = useToast();

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
          <Link to="/">
            {/* Wrap the logo in a Link */}
            <Image
              src={logo}
              alt="Company Logo"
              boxSize={{ base: "100px", md: "150px" }} // Adjust logo size for mobile
              objectFit="contain"
            />
          </Link>
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
        placement="left"
        onClose={onClose}
        size={{ base: "sm", md: "sm", lg: "lg" }}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack spacing={6} mt={10} align="center">
              {[
                "Services",
                "WhyChooseUs",
                "Portfolio",
                "Testimonials",
                "Team",
                "Contact Us",
                "About",
                "Pricing",
                "FAQs",
                "Blog",
                "Privacy-Policy",
              ].map((item, idx) => (
                <Button
                  as={Link}
                  to={`/${item.toLowerCase().replace(" ", "")}`}
                  colorScheme="teal"
                  key={idx}
                  onClick={() => {
                    onClose();
                    toast({
                      title: `${item} Clicked`,
                      status: "info",
                      duration: 2000,
                      isClosable: true,
                    });
                  }}
                >
                  {item}
                </Button>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Navbar;
