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
  Text,
  VStack,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

import { FaBars } from "react-icons/fa"; // Import FaBars icon
import { FaEnvelope } from "react-icons/fa"; // Import the envelope icon
import { Link } from "react-router-dom";
import amslogo from "../../assets/images/amslogo.png";
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
    <Box
      as="nav"
      p={4}
      bg="rgba(23, 24, 35, 0.8)"
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
          icon={<FaBars />} // Use FaBars instead of HamburgerIcon
          aria-label="Menu"
          colorScheme="blue" // Change colorScheme to blue (or any other color you prefer)
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

      {/* Fullscreen Drawer Menu */}
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        size={{ base: "sm", md: "md", lg: "lg" }}
      >
        <DrawerOverlay bg="rgba(23, 24, 35, 0.8)" />
        <DrawerContent
          m={{ base: "0", md: "10px" }}
          maxW={{ base: "80%", md: "400px", lg: "500px" }}
          rounded="lg"
          boxShadow="xl"
          overflow="hidden"
        >
          {/* Logo Section with Close Button */}
          <Box
            textAlign="center"
            py={10}
            bg="rgba(0, 0, 0)"
            color="white"
            position="relative"
            roundedTop="lg"
          >
            <DrawerCloseButton
              position="absolute"
              top="8px"
              right="8px"
              color="white"
              size={5}
            />
            <Image src={amslogo} alt="Logo" mx="auto" />
          </Box>

          {/* Drawer Body Section */}
          <DrawerBody
            bg="gray.50"
            px={6}
            py={8}
            css={{
              overflowY: "scroll",
              scrollbarWidth: "none", // Firefox
              "-ms-overflow-style": "none", // IE 10+
            }}
            sx={{
              "::-webkit-scrollbar": {
                display: "none", // Chrome, Safari, Webkit browsers
              },
            }}
          >
            <VStack spacing={8} align="stretch">
              {/* First Category */}
              <Box>
                <Text
                  fontSize="lg"
                  fontWeight="semibold"
                  mb={4}
                  color="gray.700"
                >
                  Navigation
                </Text>
                <VStack spacing={4} align="stretch">
                  {[
                    "Services",
                    "WhyChooseUs",
                    "Portfolio",
                    "Testimonials",
                    "Team",
                  ].map((item, idx) => (
                    <Button
                      as={Link}
                      to={`/${item.toLowerCase().replace(" ", "")}`}
                      variant="outline"
                      colorScheme="teal"
                      key={idx}
                      w="50%"
                      justifyContent="start"
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
              </Box>

              {/* Second Category */}
              <Box>
                <Text
                  fontSize="lg"
                  fontWeight="semibold"
                  mb={4}
                  color="gray.700"
                >
                  Resources
                </Text>
                <VStack spacing={4} align="stretch">
                  {[
                    "Pricing",
                    "FAQs",
                    "Blog",
                    "Privacy-Policy",
                    "Contact Us",
                  ].map((item, idx) => (
                    <Button
                      as={Link}
                      to={`/${item.toLowerCase().replace(" ", "")}`}
                      variant="outline"
                      colorScheme="teal"
                      key={idx}
                      w="50%"
                      justifyContent="start"
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
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Navbar;
