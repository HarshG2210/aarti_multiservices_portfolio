// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import logo from "../../assets/images/logo.png";
import { useMediaQueryContext } from "../../context/MediaQueryContext";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Chakra hook to handle drawer state
  const { isMobile, isTablet } = useMediaQueryContext(); // Use both mobile and tablet queries

  // Adjust left position based on screen size (mobile, tablet, desktop)
  const logoLeftPosition = isMobile
    ? "25%" // For mobile
    : isTablet
    ? "45%" // For tablet
    : "50%"; // For desktop

  return (
    <Box as="nav" p={4} bg="#E2E8F0">
      <Flex align="center" justify="space-between" h="60px" position="relative">
        {/* Left: Menu Button */}
        <IconButton
          icon={<HamburgerIcon />}
          aria-label="Menu"
          colorScheme="teal"
          variant="outline"
          onClick={onOpen} // Open the drawer on click
        />

        {/* Center: Company Logo */}
        <Box
          position="absolute"
          left={logoLeftPosition} // Change logo position based on screen size
          transform={isMobile ? "none" : "translateX(-50%)"} // Only apply translate for desktop
        >
          <Image
            src={logo}
            alt="Company Logo"
            boxSize={isMobile ? "100px" : "150px"} // Adjust logo size for mobile
            objectFit="contain"
          />
        </Box>

        {/* Right: Contact Us Button */}
        <Button colorScheme="blue" size="lg">
          Get Quotes
        </Button>
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
