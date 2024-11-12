// src/components/Footer.jsx

import {
  Box,
  Flex,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarker,
  FaPaperPlane,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

import backgroundImageUrl from "../../assets/images/footer-background.png";
import logoUrl from "../../assets/images/amslogo.png";

const Footer = () => {
  const textColor = useColorModeValue("gray.700", "gray.200");

  return (
    <Box
      position="relative"
      color={textColor}
      py={10}
      textAlign="center"
      minH={{ base: "70vh", md: "60vh", lg: "75vh" }}
    >
      {/* Background image overlay with opacity */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgImage={`url(${backgroundImageUrl})`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        opacity="0.2"
        zIndex="1"
      />

      <Flex
        alignItems={{ base: "flex-start", md: "center" }}
        justifyContent={{ base: "flex-start", md: "center" }}
        flexDirection={{ base: "column", lg: "row" }}
        gap={8}
        width={{ base: "100%", lg: "80%" }}
        margin={{ lg: "auto" }}
        zIndex="2"
      >
        <Stack
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          spacing={3}
        >
          <Flex alignItems="center">
            <Image
              src={logoUrl}
              alt="TechnoIT Logo"
              height={{ base: "40px", md: "50px" }}
            />
          </Flex>

          <Text
            fontSize="sm"
            fontWeight="bold"
            color={"#fff"}
            px={{ base: 4, md: 0 }}
          >
            We collaborate with industry leaders to deliver top-notch services
            and innovative solutions, ensuring our clients receive the best in
            infrastructure, IT, marketing, and more.
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

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} textAlign="left">
          <Stack spacing={2} align="flex-start">
            <Text fontSize="lg" fontWeight="bold" color="blue.500">
              Services
            </Text>
            <Link color="#fff" fontWeight="bold">
              Web Design
            </Link>
            <Link color="#fff" fontWeight="bold">
              App Development
            </Link>
            <Link color="#fff" fontWeight="bold">
              Cloud Services
            </Link>
            <Link color="#fff" fontWeight="bold">
              Domain And Hosting
            </Link>
            <Link color="#fff" fontWeight="bold">
              SEO Optimization
            </Link>
            <Link color="#fff" fontWeight="bold">
              Social Media
            </Link>
          </Stack>

          <Stack spacing={2} align="flex-start">
            <Text fontSize="lg" fontWeight="bold" color="blue.500">
              Information
            </Text>
            <Link color="#fff" fontWeight="bold">
              About
            </Link>
            <Link color="#fff" fontWeight="bold">
              Pricing
            </Link>
            <Link color="#fff" fontWeight="bold">
              Team
            </Link>
            <Link color="#fff" fontWeight="bold">
              Portfolio
            </Link>
            <Link color="#fff" fontWeight="bold">
              FAQs
            </Link>
            <Link color="#fff" fontWeight="bold">
              Blogs
            </Link>
            <Link color="#fff" fontWeight="bold">
              Blog Details
            </Link>
            <Link color="#fff" fontWeight="bold">
              Coming Soon
            </Link>
            <Link color="#fff" fontWeight="bold">
              Terms & Conditions
            </Link>
            <Link color="#fff" fontWeight="bold">
              Privacy Policy
            </Link>
          </Stack>

          <Stack spacing={2} align="flex-start">
            <Text fontSize="lg" fontWeight="bold" color="blue.500">
              Contacts
            </Text>
            <Flex align="center" color="#fff" fontWeight="bold">
              <Icon as={FaMapMarker} mr={2} /> Flat No. 101, Prathamesh Plaza,
              Unthkhana Road, Above Peter England Showroom, Medical sq., Nagpur,
              440009.
            </Flex>
            <Flex align="center" color="#fff" fontWeight="bold">
              <Icon as={FaPhoneAlt} mr={2} /> Phone: +91 9067000315 / +91
              9067000316
            </Flex>
            <Flex align="center" color="#fff" fontWeight="bold">
              <Icon as={FaEnvelope} mr={2} /> Email: info@aartimultiservices.com
            </Flex>
            <Text fontSize="lg" fontWeight="bold" color="blue.500">
              Newsletter
            </Text>
            <Text color="gray.400" fontSize="sm" fontWeight="bold">
              Don&apos;t miss to subscribe to our new feeds.
            </Text>
            <InputGroup>
              <Input placeholder="Email Address" size="md" borderRadius="md" />
              <InputRightElement
                // eslint-disable-next-line react/no-children-prop
                children={<Icon as={FaPaperPlane} color={"#fff"} />}
              />
            </InputGroup>
          </Stack>
        </SimpleGrid>
      </Flex>

      <Text fontSize="xs" mt={5} color={"#fff"} fontWeight="bold">
        © Copyright Aarti Multi Services Pvt. Ltd All Rights Reserved Created by
        Aarti Multi Services Team
      </Text>
    </Box>
  );
};

export default Footer;
