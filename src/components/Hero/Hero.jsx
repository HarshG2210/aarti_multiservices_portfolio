import {
  Box,
  Button,
  Link as ChakraLink,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Image,
  Text,
  VStack,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { useMemo, useRef } from "react";

import { FaXTwitter } from "react-icons/fa6";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import illustration from "../../assets/images/Illustration.png";
import logo from "../../assets/images/logo.png";
import { useMediaQueryContext } from "../../context/MediaQueryContext";

function LineWaveBackground() {
  const lineRef = useRef();
  const { positions, speeds } = useMemo(() => {
    const numLines = 15; // Increase the number of lines for a denser effect
    const positions = new Float32Array(numLines * 2 * 3); // 2 points per line, 3 coordinates per point
    const speeds = Array.from(
      { length: numLines },
      () => Math.random() * 0.5 + 0.1
    );

    // Initialize line positions
    for (let i = 0; i < numLines; i++) {
      positions[i * 6] = (Math.random() - 0.5) * 20; // x1 position
      positions[i * 6 + 1] = (Math.random() - 0.5) * 10; // y1 position
      positions[i * 6 + 2] = (Math.random() - 0.5) * 20; // z1 position

      positions[i * 6 + 3] = (Math.random() - 0.5) * 20; // x2 position
      positions[i * 6 + 4] = (Math.random() - 0.5) * 10; // y2 position
      positions[i * 6 + 5] = (Math.random() - 0.5) * 20; // z2 position
    }

    return { positions, speeds };
  }, []);

  // Animate the wave effect
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    for (let i = 0; i < speeds.length; i++) {
      positions[i * 6 + 2] = Math.sin(time * speeds[i] + i * 0.1) * 2; // z1 position
      positions[i * 6 + 5] = Math.sin(time * speeds[i] + (i + 1) * 0.1) * 2; // z2 position
    }
    if (lineRef.current) {
      lineRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <>
      {/* Render Lines */}
      <line ref={lineRef}>
        <bufferGeometry>
          <bufferAttribute
            // eslint-disable-next-line react/no-unknown-property
            attach="attributes-position"
            // eslint-disable-next-line react/no-unknown-property
            count={positions.length / 3}
            // eslint-disable-next-line react/no-unknown-property
            array={positions}
            // eslint-disable-next-line react/no-unknown-property
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#00b0ff"
          // eslint-disable-next-line react/no-unknown-property
          linewidth={0.5}
        />
      </line>

      {/* Render Connecting Nodes */}
      {Array.from({ length: 30 }).map((_, i) => (
        <mesh
          key={i}
          // eslint-disable-next-line react/no-unknown-property
          position={[
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 20,
          ]}
        >
          <sphereGeometry
            // eslint-disable-next-line react/no-unknown-property
            args={[0.05, 16, 16]}
          />
          <meshBasicMaterial color="#00b0ff" />
        </mesh>
      ))}
    </>
  );
}

function BackgroundScene() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
      <ambientLight
        // eslint-disable-next-line react/no-unknown-property
        intensity={0.5}
      />
      <LineWaveBackground />
    </Canvas>
  );
}

function Hero() {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Drawer state
  const { isMobile } = useMediaQueryContext(); // Media query context
  const toast = useToast();

  const handleGetQuoteClick = () => {
    // Email redirection for quotes
    window.location.href =
      "mailto:info@aartimultiservices.com?subject=Request for Quote";
  };

  return (
    <Box position="relative" zIndex="10" bg={"black.900"}>
      {/* Background Animation */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        height="100%"
        zIndex="0"
      >
        <BackgroundScene />
      </Box>

      {/* Main Content */}
      <Box position="relative" zIndex="1">
        {/* Navbar */}
        <Box as="nav" p={4} bg="transparent">
          <Flex
            align="center"
            justify={"space-between"}
            h="60px"
            maxW="1200px"
            mx="auto"
          >
            {/* Hamburger Menu for Drawer */}
            <IconButton
              icon={<HamburgerIcon />}
              aria-label="Menu"
              colorScheme="teal"
              variant="outline"
              onClick={onOpen}
            />

            {/* Company Logo */}
            <Box flex="1" display="flex" justifyContent="center">
              <Link to="/">
                <Image
                  src={logo}
                  alt="Logo"
                  boxSize="120px"
                  objectFit="contain"
                />
              </Link>
            </Box>

            {/* Get Quote Button */}
            <Box
              display="flex"
              alignItems="center"
              onClick={handleGetQuoteClick}
            >
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

        {/* Hero Section */}
        <Box
          color="white"
          minH="100vh"
          px={{ base: 6, md: 16 }}
          py={10}
          display="flex"
          alignItems="center"
        >
          <Flex
            direction={{ base: "column", md: "row" }}
            alignItems="center"
            justifyContent="center"
            maxW="1400px"
            mx="auto"
            w="100%"
          >
            {/* Illustration Image */}
            {isMobile ? (
              ""
            ) : (
              <Box
                flex="1"
                textAlign="center"
                mb={{ base: 8, md: 0 }}
                maxW="50%"
                pr={{ md: 10 }} // Adds space between the image and the text
              >
                <Image
                  src={illustration} // Replace with your image URL
                  alt="AI Illustration"
                  borderRadius="10px"
                  boxShadow="lg"
                  maxW="100%" // Ensures the image stays responsive
                />
              </Box>
            )}

            {/* Text Content */}
            <VStack
              align={{ base: "center", md: "flex-start" }}
              spacing={6}
              textAlign={{ base: "center", md: "left" }}
              flex="1"
              maxW={{ base: "100%", md: "50%" }}
            >
              <Heading
                as="h1"
                size="2xl"
                fontWeight="bold"
                lineHeight="shorter"
                maxW="500px"
              >
                Delivering Superior Services
              </Heading>
              <Text fontSize="3xl" color="blue.300" fontWeight="bold">
                IT Solutions.
              </Text>
              <Text fontSize="lg" color="gray.300" maxW="500px">
                You can easily change any design to your own. It is highly
                customizable and SEO-friendly.
              </Text>

              {/* Action Buttons */}
              <HStack spacing={4}>
                <Button
                  size="lg"
                  colorScheme="blue"
                  bg="blue.400"
                  _hover={{ bg: "blue.500" }}
                >
                  Get Quotes
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  colorScheme="blue"
                  borderColor="blue.400"
                  _hover={{ bg: "blue.500", color: "white" }}
                >
                  Get Started
                </Button>
              </HStack>

              {/* Social Icons */}
              <HStack spacing={6} pt={4}>
                {[
                  { icon: FaXTwitter, link: "#" },
                  { icon: FaFacebook, link: "#" },
                  { icon: FaLinkedin, link: "#" },
                  { icon: FaInstagram, link: "#" },
                ].map(({ icon, link }, idx) => (
                  <ChakraLink key={idx} href={link} isExternal>
                    <Icon
                      as={icon}
                      boxSize={6}
                      _hover={{ color: "blue.400" }}
                    />
                  </ChakraLink>
                ))}
              </HStack>
            </VStack>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

export default Hero;
