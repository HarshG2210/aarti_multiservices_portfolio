// src/components/Footer.jsx

import {
  Box,
  Flex,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
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
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
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
      minH={{ base: "70vh", md: "60vh", lg: "65vh" }}
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
        opacity="0.3"
        zIndex="-1"
      />
      <Flex
        alignItems={{ base: "flex-start", md: "center" }}
        justifyContent={{ base: "flex-start", md: "center" }}
        flexDirection={{ base: "column", lg: "row" }}
        gap={8}
        width={{ base: "100%", lg: "90%" }}
        margin={{ lg: "auto" }}
        zIndex="2"
      >
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8} textAlign="left">
          <Stack
            spacing={2}
            align="flex-start"
            justify="flex-start"
            alignItems="center"
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
              color={"#000"}
              textAlign={"center"}
              px={{ base: 4, md: 0 }}
            >
              We collaborate with industry leaders to deliver top-notch services
              and innovative solutions, ensuring our clients receive the best in
              infrastructure, IT, marketing, and more.
            </Text>

            <Text fontSize="sm" fontWeight="bold" color={"#000"}>
              Follow us
            </Text>
            <Flex gap={3}>
              <Link href="https://x.com/i/flow/login?redirect_after_login=%2FAarti_pvtltd">
                <Icon as={FaXTwitter} fontSize="lg" color={"#000"} />
              </Link>
              <Link href="https://www.facebook.com/people/Aarti-Multi-Services-Pvt-Ltd/61557349604456/">
                <Icon as={FaFacebook} fontSize="lg" color={"#000"} />
              </Link>
              <Link href="https://www.instagram.com/aartimultiservicespvt.ltd/?igsh=MWIxcHB0ZDlodjAwcg%3D%3D">
                <Icon as={FaInstagram} fontSize="lg" color={"#000"} />
              </Link>
              <Link href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQH4YPdQ0BAoiwAAAZENbYUYCofqYJ-j2Rxpp0z6SW9RUYTFu4ZxQL2tCow09LwFZS_H-s9JQ3zNDA4MOXattkTgA_BX9Ep6sOz078m2aio_ZleNE7YH5lK_TVtB_xRyZqRQX9c=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F102035662%2Fadmin%2Ffeed%2Fposts%2F%3FfeedType%3Dfollowing">
                <Icon as={FaLinkedin} fontSize="lg" color={"#000"} />
              </Link>
            </Flex>
          </Stack>
          <Stack spacing={2} align="flex-start">
            <Text fontSize="lg" fontWeight="bold" color="blue.500">
              Services
            </Text>
            <Link to={"/it-solution"} color="#000" fontWeight="bold">
              <Text fontSize="lg" fontWeight="light" color="black">
                IT Solution
              </Text>
            </Link>
            <Link to={"/loan"} color="#000" fontWeight="bold">
              <Text fontSize="lg" fontWeight="light" color="black">
                Loan
              </Text>
            </Link>
            <Link to={"/advertisement"} color="#000" fontWeight="bold">
              <Text fontSize="lg" fontWeight="light" color="black">
                Advertisement
              </Text>
            </Link>
            <Link to={"/infrastructure"} color="#000" fontWeight="bold">
              <Text fontSize="lg" fontWeight="light" color="black">
                Infrastructure
              </Text>
            </Link>
            <Link to={"/solar"} color="#000" fontWeight="bold">
              <Text fontSize="lg" fontWeight="light" color="black">
                Solar
              </Text>
            </Link>
          </Stack>

          <Stack spacing={2} align="flex-start">
            <Text fontSize="lg" fontWeight="bold" color="blue.500">
              Information
            </Text>
            <Link to={"/about"} color="#000" fontWeight="bold">
              <Text fontSize="lg" fontWeight="light" color="black">
                About
              </Text>
            </Link>
            <Link to={"/pricing"} color="#000" fontWeight="bold">
              <Text fontSize="lg" fontWeight="light" color="black">
                Pricing
              </Text>
            </Link>
            <Link to={"/team"} color="#000" fontWeight="bold">
              <Text fontSize="lg" fontWeight="light" color="black">
                Team
              </Text>
            </Link>
            <Link to={"/portfolio"} color="#000" fontWeight="bold">
              <Text fontSize="lg" fontWeight="light" color="black">
                Portfolio
              </Text>
            </Link>
            <Link to={"/faqs"} color="#000" fontWeight="bold">
              <Text fontSize="lg" fontWeight="light" color="black">
                FAQs
              </Text>
            </Link>
            <Link to={"/blog"} color="#000" fontWeight="bold">
              <Text fontSize="lg" fontWeight="light" color="black">
                Blogs
              </Text>
            </Link>
            <Link to={"#"} color="#000" fontWeight="bold">
              <Text fontSize="lg" fontWeight="light" color="black">
                Coming Soon
              </Text>
            </Link>
            <Link to={"/privacy-policy"} color="#000" fontWeight="bold">
              <Text fontSize="lg" fontWeight="light" color="black">
                Privacy Policy
              </Text>
            </Link>
          </Stack>

          <Stack spacing={2} align="flex-start">
            <Text fontSize="lg" fontWeight="bold" color="blue.500">
              Contacts
            </Text>
            <Flex align="center" color="#000" fontWeight="bold">
              <Icon as={FaMapMarker} mr={2} /> Flat No. 101, Prathamesh Plaza,
              Unthkhana Road, Above Peter England Showroom, Medical sq., Nagpur,
              440009.
            </Flex>
            <Flex align="center" color="#000" fontWeight="bold">
              <Icon as={FaPhoneAlt} mr={2} /> +91 9067000315 / +91 9067000316
            </Flex>
            <Flex align="center" color="#000" fontWeight="bold">
              <Icon as={FaEnvelope} mr={2} /> info@aartimultiservices.com
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
                children={<Icon as={FaPaperPlane} color={"#000"} />}
              />
            </InputGroup>
          </Stack>
        </SimpleGrid>
      </Flex>

      <Text
        fontSize="xs"
        mt={5}
        color={"#000"}
        fontWeight="bold"
        border={"1px sloid red"}
      >
        © Copyright Aarti Multi Services Pvt. Ltd All Rights Reserved Created by
        Aarti Multi Services Team
      </Text>
    </Box>
  );
};

export default Footer;
