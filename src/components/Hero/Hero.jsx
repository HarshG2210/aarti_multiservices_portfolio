import {
  Box,
  Button,
  Link as ChakraLink,
  Flex,
  HStack,
  Heading,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Canvas, useFrame } from "@react-three/fiber";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useMemo, useRef } from "react";

import { FaXTwitter } from "react-icons/fa6";

// 3D Background Component
function WaveBackground() {
  const meshRef = useRef();
  const { position, speed } = useMemo(() => {
    const position = new Float32Array(5000 * 3); // 5000 points
    const speed = Array.from({ length: 5000 }, () => Math.random() * 0.5 + 0.1);
    for (let i = 0; i < 5000; i++) {
      position[i * 3] = (Math.random() - 0.5) * 20; // x position
      position[i * 3 + 1] = (Math.random() - 0.5) * 20; // y position
      position[i * 3 + 2] = (Math.random() - 0.5) * 20; // z position
    }
    return { position, speed };
  }, []);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    for (let i = 0; i < 5000; i++) {
      position[i * 3 + 2] = Math.sin(time * speed[i] + i * 0.1) * 2; // move z
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          // eslint-disable-next-line react/no-unknown-property
          attach="attributes-position"
          // eslint-disable-next-line react/no-unknown-property
          count={5000}
          // eslint-disable-next-line react/no-unknown-property
          array={position}
          // eslint-disable-next-line react/no-unknown-property
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="lightblue"
        size={0.1}
        // eslint-disable-next-line react/no-unknown-property
        sizeAttenuation
      />
    </points>
  );
}

function BackgroundScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <ambientLight
        // eslint-disable-next-line react/no-unknown-property
        intensity={0.5}
      />
      <WaveBackground />
    </Canvas>
  );
}

function Hero() {
  return (
    <>
      <Box
        bg="blue.900"
        color="white"
        minH={{ base: "80vh", md: "85vh", lg: "90vh" }} // Smaller height for desktop and tablet
        py={{ base: 10, md: 16, lg: 12 }} // Adjust padding accordingly
        px={{ base: 4, md: 20 }}
        position="relative"
        overflow="hidden"
      >
       
        {/* 3D Background */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          zIndex="0"
          opacity="0.5"
        >
          <BackgroundScene />
        </Box>

        {/* Foreground Content */}
        <Flex
          alignItems="center"
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
          maxW="1200px"
          mx="auto"
          position="relative"
          zIndex="1"
        >
          {/* Right Section: Text Content */}
          <VStack
            flex="1"
            align="start"
            spacing={5}
            textAlign={{ base: "center", md: "left" }}
          >
            <Heading as="h1" size="2xl" lineHeight="1.2" fontWeight="bold">
              Delivering Superior Services
            </Heading>
            <Text fontSize="3xl" color="blue.300" fontWeight="bold">
              IT Solutions.
            </Text>
            <Text fontSize="lg" maxW="500px" color="gray.300">
              You can easily change any design to your own. It is also highly
              customizable SEO-friendly template.
            </Text>

            {/* Buttons */}
            <HStack spacing={4} mt={4}>
              <Button colorScheme="blue" size="lg">
                Get Quotes
              </Button>
              <Button colorScheme="blue" variant="outline" size="lg">
                Get Started
              </Button>
            </HStack>

            {/* Social Icons */}
            <HStack spacing={4} mt={4}>
              <ChakraLink
                href="https://x.com/i/flow/login?redirect_after_login=%2FAarti_pvtltd"
                isExternal
              >
                <Icon as={FaXTwitter} boxSize={6} />
              </ChakraLink>
              <ChakraLink
                href="https://www.facebook.com/people/Aarti-Multi-Services-Pvt-Ltd/61557349604456/"
                isExternal
              >
                <Icon as={FaFacebook} boxSize={6} />
              </ChakraLink>
              <ChakraLink
                href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQH4YPdQ0BAoiwAAAZENbYUYCofqYJ-j2Rxpp0z6SW9RUYTFu4ZxQL2tCow09LwFZS_H-s9JQ3zNDA4MOXattkTgA_BX9Ep6sOz078m2aio_ZleNE7YH5lK_TVtB_xRyZqRQX9c=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F102035662%2Fadmin%2Ffeed%2Fposts%2F%3FfeedType%3Dfollowing"
                isExternal
              >
                <Icon as={FaLinkedin} boxSize={6} />
              </ChakraLink>
              <ChakraLink
                href="https://www.instagram.com/aartimultiservicespvt.ltd/?igsh=MWIxcHB0ZDlodjAwcg%3D%3D"
                isExternal
              >
                <Icon as={FaInstagram} boxSize={6} />
              </ChakraLink>
            </HStack>
          </VStack>
        </Flex>
      </Box>
    </>
  );
}

export default Hero;
