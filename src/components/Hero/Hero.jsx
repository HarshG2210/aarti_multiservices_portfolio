import {
  Box,
  Button,
  Center,
  Link as ChakraLink,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Canvas, useFrame } from "@react-three/fiber";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useEffect, useMemo, useRef, useState } from "react";

import { FaXTwitter } from "react-icons/fa6";
import { Link as ScrollLink } from "react-scroll"; // Import ScrollLink from react-scroll
import illustration from "../../assets/images/Illustration.png";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { useMediaQueryContext } from "../../context/MediaQueryContext";

const services = [
  "IT Solutions",
  "Infrastructure",
  "Marketing",
  "Solar",
  "Advertisement",
  "Loan",
];

function LineWaveBackground() {
  const lineRef = useRef();
  const { positions, speeds } = useMemo(() => {
    const numLines = 15;
    const positions = new Float32Array(numLines * 2 * 3);
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
  const { isMobile } = useMediaQueryContext(); // Media query context
  const [currentService, setCurrentService] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulating a data fetch with setTimeout
    setTimeout(() => {
      setLoading(false); // Data has loaded, so we set loading to false
    }, 2000); // 2 seconds for demonstration
  }, []);

  // Change the service text every 2 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  if (loading) {
    return (
      <Center height="100vh">
        <Spinner size="xl" color="blue.500" />
      </Center>
    );
  }

  return (
    <Box position="relative" zIndex="10" bg={"gray.fg"}>
      {/* Background Animation */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        height="100%"
        zIndex="0"
        width="100%"
      >
        <BackgroundScene />
      </Box>

      {/* Main Content */}
      <Box position="relative" zIndex="1">
        {/* Hero Section */}
        <Box
          color="white"
          minH="90vh"
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
            {!isMobile && (
              <Box
                flex="1"
                textAlign="center"
                mb={{ base: 8, md: 0 }}
                maxW="50%"
                pr={{ md: 10 }} // Adds space between the image and the text
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0], // Move up and back to original position
                  }}
                  transition={{
                    duration: 1.5, // Time for one bounce
                    repeat: Infinity, // Repeat the animation infinitely
                    repeatType: "loop", // Smooth looping
                  }}
                >
                  <Image
                    src={illustration} // Replace with your image URL
                    alt="AI Illustration"
                    borderRadius="10px"
                    boxShadow="lg"
                    maxW="100%" // Ensures the image stays responsive
                  />
                </motion.div>
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
              <motion.div
                key={currentService}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 1, type: "spring", stiffness: 50 }}
              >
                <Text fontSize="3xl" color="blue.300" fontWeight="bold">
                  {services[currentService]}
                </Text>
              </motion.div>
              <Text fontSize="lg" color="gray.300" maxW="500px">
                Transform your business with innovative IT solutions, strong
                infrastructure, effective marketing, sustainable solar energy,
                impactful advertising, and seamless loan processes.
              </Text>

              {/* Action Buttons */}
              <HStack spacing={4}>
                <ScrollLink
                  to="contact-us"
                  smooth={true}
                  offset={-70}
                  duration={5000}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    colorScheme="blue"
                    borderColor="blue.400"
                    _hover={{ bg: "transparent", color: "blue.500" }}
                    bg={"#2f83cf"}
                    color={"white"}
                  >
                    Contact Us
                  </Button>
                </ScrollLink>
                <ScrollLink
                  to="services"
                  smooth={true}
                  offset={-70}
                  duration={1000}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    colorScheme="blue"
                    borderColor="blue.400"
                    _hover={{ bg: "blue.500", color: "white" }}
                  >
                    Get Started
                  </Button>
                </ScrollLink>
              </HStack>

              {/* Social Icons */}
              <HStack spacing={6} pt={4}>
                {[
                  {
                    icon: FaXTwitter,
                    link: "https://x.com/i/flow/login?redirect_after_login=%2FAarti_pvtltd",
                  },
                  {
                    icon: FaFacebook,
                    link: "https://www.facebook.com/people/Aarti-Multi-Services-Pvt-Ltd/61557349604456/",
                  },
                  {
                    icon: FaLinkedin,
                    link: "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQH4YPdQ0BAoiwAAAZENbYUYCofqYJ-j2Rxpp0z6SW9RUYTFu4ZxQL2tCow09LwFZS_H-s9JQ3zNDA4MOXattkTgA_BX9Ep6sOz078m2aio_ZleNE7YH5lK_TVtB_xRyZqRQX9c=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F102035662%2Fadmin%2Ffeed%2Fposts%2F%3FfeedType%3Dfollowing",
                  },
                  {
                    icon: FaInstagram,
                    link: "https://www.instagram.com/aartimultiservicespvt.ltd/?igsh=MWIxcHB0ZDlodjAwcg%3D%3D",
                  },
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
