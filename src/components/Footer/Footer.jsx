import {
  Box,
  Grid,
  Heading,
  Text,
  Icon,
  VStack,
  Link as ChakraLink,
  HStack,
  Button,
} from "@chakra-ui/react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      {/* Banner Section */}
      <Box bg="#CBD5E0" p={6} color="white" textAlign="center">
        <Text fontSize="xl" fontWeight="bold">
          Demo Day Live! Wednesday, October 23rd, 10-11 AM PDT | Virtual Event
        </Text>
        <Button
          mt={4}
          bg="gray.700"
          _hover={{ bg: "gray.600" }}
          size="lg"
          color="#fff"
        >
          REGISTER NOW
        </Button>
      </Box>

      {/* Footer Section */}
      <Box as="footer" bg="gray.900" p={8} color="gray.400">
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(5, 1fr)" }}
          gap={8}
          textAlign={{ base: "center", md: "left" }}
        >
          {/* Column 1: Company Info */}
          <VStack align={{ base: "center", md: "flex-start" }} spacing={4}>
            <Heading size="md" color="white">
              Aarti Multi Services Pvt Ltd
            </Heading>
            <Text>A Life to enjoy an eternity filled with joy.</Text>
            <HStack spacing={4}>
              <Icon as={FaTwitter} boxSize={5} color="white" />
              <Icon as={FaFacebook} boxSize={5} color="white" />
              <Icon as={FaInstagram} boxSize={5} color="white" />
            </HStack>
          </VStack>

          {/* Column 2: Community */}
          <VStack align={{ base: "center", md: "flex-start" }} spacing={4}>
            <Heading size="md" color="white">
              Community
            </Heading>
            <ChakraLink color="gray.400" href="#">
              Search Properties
            </ChakraLink>
            <ChakraLink color="gray.400" href="#">
              For Agents
            </ChakraLink>
            <ChakraLink color="gray.400" href="#">
              Reviews
            </ChakraLink>
            <ChakraLink color="gray.400" href="#">
              FAQs
            </ChakraLink>
          </VStack>

          {/* Column 3: About Us */}
          <VStack align={{ base: "center", md: "flex-start" }} spacing={4}>
            <Heading size="md" color="white">
              About Us
            </Heading>
            <ChakraLink color="gray.400" href="#">
              Our Story
            </ChakraLink>
            <ChakraLink color="gray.400" href="#">
              Meet the Team
            </ChakraLink>
            <ChakraLink color="gray.400" href="#">
              Careers
            </ChakraLink>
          </VStack>

          {/* Column 4: Company */}
          <VStack align={{ base: "center", md: "flex-start" }} spacing={4}>
            <Heading size="md" color="white">
              Company
            </Heading>
            <ChakraLink color="gray.400" href="#">
              About Us
            </ChakraLink>
            <ChakraLink color="gray.400" href="#">
              Press
            </ChakraLink>
            <ChakraLink color="gray.400" href="#">
              Contact
            </ChakraLink>
            <ChakraLink color="gray.400" href="#">
              Careers
            </ChakraLink>
          </VStack>

          {/* Column 5: Contact Info */}
          <VStack align={{ base: "center", md: "flex-start" }} spacing={4}>
            <Heading size="md" color="white">
              Have a Question?
            </Heading>
            <HStack spacing={3}>
              <Icon as={FaMapMarkerAlt} color="white" />
              <Text color="gray.400">
                203 Fake St. Mountain View, San Francisco, California, USA
              </Text>
            </HStack>
            <HStack spacing={3}>
              <Icon as={FaPhone} color="white" />
              <Text color="gray.400">+2 392 3929 210</Text>
            </HStack>
            <HStack spacing={3}>
              <Icon as={FaEnvelope} color="white" />
              <Text color="gray.400">info@yourdomain.com</Text>
            </HStack>
          </VStack>
        </Grid>

        {/* Footer Bottom Text */}
        <Box textAlign="center" mt={8}>
          <Text fontSize="sm" color="gray.500">
            Copyright ©2024 All rights reserved | This website is made with{" "}
            <span style={{ color: "pink" }}>❤️</span> by{" "}
            <ChakraLink
              href="https://www.aartimultiservices.com/"
              isExternal
              color="gray.400"
            >
              Aarti Multi Services Pvt. Ltd.
            </ChakraLink>
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
