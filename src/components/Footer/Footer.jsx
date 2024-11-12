import {
  Box,
  Flex,
  Text,
  Link,
  useColorModeValue,
  Icon,
  SimpleGrid,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  Image,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaPaperPlane,
  FaMapMarker,
  FaPhoneAlt,
} from "react-icons/fa";

import logoUrl from "../../assets/images/amslogo.png";
import backgroundImageUrl from "../../assets/images/footer-background.png"; // Import background image

const Footer = () => {
  const textColor = useColorModeValue("gray.700", "gray.200");

  return (
    <Box position="relative" color={textColor} py={10} textAlign="center">
      {/* Background image overlay with opacity */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgImage={`url(${backgroundImageUrl})`} // Set background image
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover" // Ensure the image covers the footer area
        opacity="0.2" // Adjust the image opacity here
        zIndex="1" // Place it behind the content
      />

      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection={{ base: "column", lg: "row" }}
        gap={5}
      >
        <Stack
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          spacing={5}
        >
          <Flex alignItems="center">
            <Image src={logoUrl} alt="TechnoIT Logo" height="40px" />
          </Flex>
          <Text fontSize="sm" color={"#fff"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididuntut consec tetur adipisicing elit,Lorem
            ipsum dolor sit amet.
          </Text>
          <Text fontSize="sm" fontWeight="bold" color={"#fff"}>
            Follow us
          </Text>
          <Flex gap={3}>
            <Link href="#">
              <Icon as={FaTwitter} fontSize="lg" color={"#fff"} />
            </Link>
            <Link href="#">
              <Icon as={FaFacebook} fontSize="lg" color={"#fff"} />
            </Link>
            <Link href="#">
              <Icon as={FaInstagram} fontSize="lg" color={"#fff"} />
            </Link>
            <Link href="#">
              <Icon as={FaLinkedin} fontSize="lg" color={"#fff"} />
            </Link>
          </Flex>
        </Stack>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          <Stack spacing={2}>
            <Text fontSize="lg" fontWeight="bold" color="blue.500">
              Services
            </Text>
            <Link href="#" color={"#fff"}>
              Web Design
            </Link>
            <Link href="#" color={"#fff"}>
              App Development
            </Link>
            <Link href="#" color={"#fff"}>
              Cloud Services
            </Link>
            <Link href="#" color={"#fff"}>
              Domain And Hosting
            </Link>
            <Link href="#" color={"#fff"}>
              SEO Optimization
            </Link>
            <Link href="#" color={"#fff"}>
              Social Media
            </Link>
          </Stack>
          <Stack spacing={2}>
            <Text fontSize="lg" fontWeight="bold" color="blue.500">
              Information
            </Text>
            <Link href="#" color={"#fff"}>
              About
            </Link>
            <Link href="#" color={"#fff"}>
              Pricing
            </Link>
            <Link href="#" color={"#fff"}>
              Team
            </Link>
            <Link href="#" color={"#fff"}>
              Portfolio
            </Link>
            <Link href="#" color={"#fff"}>
              FAQs
            </Link>
            <Link href="#" color={"#fff"}>
              Team
            </Link>
            <Link href="#" color={"#fff"}>
              Blogs
            </Link>
            <Link href="#" color={"#fff"}>
              Blog Details
            </Link>
            <Link href="#" color={"#fff"}>
              Coming Soon
            </Link>
            <Link href="#" color={"#fff"}>
              Terms & Conditions
            </Link>
            <Link href="#" color={"#fff"}>
              Privacy Policy
            </Link>
          </Stack>
          <Stack spacing={2}>
            <Text fontSize="lg" fontWeight="bold" color="blue.500">
              Contacts
            </Text>
            <Link href="#">
              <Icon as={FaMapMarker} fontSize="lg" color={"#fff"} />
              <Text color={"#fff"}>
                101 West Town, PBO 12345, United States
              </Text>
            </Link>
            <Link href="#">
              <Icon as={FaPhoneAlt} fontSize="lg" color={"#fff"} />
              <Text color={"#fff"}>+1 1234 56 789</Text>
            </Link>
            <Link href="#">
              <Icon as={FaEnvelope} fontSize="lg" color={"#fff"} />
              <Text color={"#fff"}>contact@example.com</Text>
            </Link>
            <Text fontSize="lg" fontWeight="bold" color={"#fff"}>
              Newsletter
            </Text>
            <Text fontSize="sm" color="gray.600">
              Don&apos;t miss to subscribe to our new feeds, kindly fill the
              form below.
            </Text>

            <InputGroup>
              <Input placeholder="Email Address" size="md" borderRadius="md" />
              <InputRightElement>
                <Icon as={FaPaperPlane} color={"#fff"} />
              </InputRightElement>
            </InputGroup>
          </Stack>
        </SimpleGrid>
      </Flex>
      <Text fontSize="xs" mt={5} color={"#fff"}>
        Technoit © 2023 - Designed by Zz Themes
      </Text>
    </Box>
  );
};

export default Footer;
