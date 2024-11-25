import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Image,
  Spinner,
  Text,
  Tooltip,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import {
  FaBars,
  FaBlog,
  FaCogs,
  FaComments,
  FaEnvelope,
  FaFileAlt,
  FaInfo,
  FaListAlt,
  FaMoneyBill,
  FaQuestionCircle,
  FaUsers,
} from "react-icons/fa";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import amslogo from "../../assets/images/amslogo.png";
import logo from "../../assets/images/logo.png";
import sidebar_video from "../../assets/images/sidebar_video.webm"
import { useMediaQueryContext } from "../../context/MediaQueryContext";

// Import icons

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isMobile } = useMediaQueryContext();
  const [loading, setLoading] = useState(true);
  const [isCollapsed] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <Center height="100vh">
        <Spinner size="xl" color="blue.500" />
      </Center>
    );
  }

  const handleGetQuoteClick = () => {
    window.location.href =
      "mailto:info@aartimultiservices.com?subject=Request for Quote&body=I would like to discuss my project needs.";
  };

  // Menu items with labels, icons, and routing
  const menuItems = [
    { label: "Services", icon: FaCogs, to: "/services" },
    { label: "Why Choose Us", icon: FaInfo, to: "/whyChooseUs" },
    { label: "Portfolio", icon: FaListAlt, to: "/portfolio" },
    { label: "Testimonials", icon: FaComments, to: "/testimonials" },
    { label: "Team", icon: FaUsers, to: "/team" },
    { label: "Pricing", icon: FaMoneyBill, to: "/pricing" },
    { label: "FAQs", icon: FaQuestionCircle, to: "/faqs" },
    { label: "Blog", icon: FaBlog, to: "/blog" },
    { label: "Privacy Policy", icon: FaFileAlt, to: "/privacy-policy" },
    { label: "Contact Us", icon: FaEnvelope, to: "/contactUs" },
  ];

  return (
    <Box
      as="nav"
      p={4}
      position="sticky"
      top="0"
      zIndex="10"
      backdropFilter="blur(5px)"
    >
      <Flex
        align="center"
        justify={"space-between"}
        h="60px"
        maxW="1200px"
        mx="auto"
      >
        <IconButton
          icon={<FaBars />}
          aria-label="Menu"
          colorScheme="blue"
          variant="outline"
          onClick={onOpen}
        />

        {/* Company Logo */}
        <Box flex="1" display="flex" justifyContent="center">
          <Link to="/">
            <Image src={logo} alt="Logo" boxSize="120px" objectFit="contain" />
          </Link>
        </Box>

        {/* Get Quote Button */}
        <Box display="flex" alignItems="center" onClick={handleGetQuoteClick}>
          {isMobile ? (
            <IconButton
              icon={<FaEnvelope />}
              aria-label="Get Quotes"
              colorScheme="blue"
            />
          ) : (
            <Button colorScheme="blue" size="lg">
              Get Quotes
            </Button>
          )}
        </Box>
      </Flex>

      {/* Sidebar Drawer */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          {/* Sidebar Header */}
          <Box
            bg="#e7eaf6"
            color="white"
            p={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
          >
            <Image
              src={amslogo}
              alt="AMS Logo"
              width="350px"
              height="120px"
              objectFit="contain"
            />
            <DrawerCloseButton
              size="lg"
              color="black"
              position="absolute"
              top="10px"
              right="10px"
            />
          </Box>

          <DrawerBody p={0} position="relative" overflow="hidden">
            {/* Background Video */}
            <Box
              as="video"
              autoPlay
              loop
              muted
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              objectFit="cover"
              opacity="0.4" // Adjust opacity as needed
              zIndex="0"
            >
              <source src={sidebar_video} type="video/webm" />
              Your browser does not support the video tag.
            </Box>

            {/* Menu Items */}
            <VStack
              align="stretch"
              spacing={1}
              py={4}
              position="relative"
              zIndex="1"
            >
              {menuItems.map((item, idx) => (
                <Tooltip
                  key={idx}
                  label={isCollapsed ? item.label : ""}
                  placement="right"
                  hasArrow
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent={isCollapsed ? "center" : "start"}
                    px={4}
                    py={2}
                    _hover={{ bg: "gray.100" }}
                  >
                    {/* Icon */}
                    <Box
                      as={item.icon}
                      fontSize="xl"
                      mr={isCollapsed ? 0 : 4}
                      color="blue.500"
                    />

                    {/* Label with Link */}
                    {!isCollapsed && (
                      <Link to={item.to} onClick={onClose}>
                        <Text
                          flex="1"
                          fontSize="lg"
                          fontWeight="medium"
                          color="gray.700"
                        >
                          {item.label}
                        </Text>
                      </Link>
                    )}
                  </Box>
                </Tooltip>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Navbar;
