import {
  Avatar,
  Box,
  Center,
  Icon,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import place_holder_img from "../../assets/images/placeholderimage/placeholder_img.png";

const testimonials = [
  {
    name: "John Doe",
    role: "Customer",
    image: place_holder_img,
    text: "I knew I was going to get great service, but they went above and beyond my expectations.",
  },
  {
    name: "Asa Walter",
    role: "Business Owner",
    image: place_holder_img,
    text: "This is the best thing that happened to my small business. They re-branded, re-organized, and re-vamped my company in no time.",
  },
  {
    name: "Zahid Miles",
    role: "Freelancer",
    image: place_holder_img,
    text: "They are great. They did exactly what I needed. The friendly chaps are real problem solvers. Loved working with them.",
  },
  {
    name: "Casper Leigh",
    role: "Entrepreneur",
    image: place_holder_img,
    text: "Awesome services. I am really happy to be here because of their services. I will continue to use their services in the future.",
  },
  {
    name: "John Doe",
    role: "Customer",
    image: place_holder_img,
    text: "I knew I was going to get great service, but they went above and beyond my expectations.",
  },
  {
    name: "Asa Walter",
    role: "Business Owner",
    image: place_holder_img,
    text: "This is the best thing that happened to my small business. They re-branded, re-organized, and re-vamped my company in no time.",
  },
  {
    name: "Zahid Miles",
    role: "Freelancer",
    image: place_holder_img,
    text: "They are great. They did exactly what I needed. The friendly chaps are real problem solvers. Loved working with them.",
  },
  {
    name: "Casper Leigh",
    role: "Entrepreneur",
    image: place_holder_img,
    text: "Awesome services. I am really happy to be here because of their services. I will continue to use their services in the future.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetch
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay for demonstration
  }, []);

  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setSlidesToShow(3); // Desktop: Show 3 cards
      } else if (width >= 768) {
        setSlidesToShow(2); // Tablet: Show 2 cards
      } else {
        setSlidesToShow(1); // Mobile: Show 1 card
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);

    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slidesToShow]);

  if (loading) {
    return (
      <Center height="100vh">
        <Spinner size="xl" color="blue.500" />
      </Center>
    );
  }

  return (
    <Box
      bg="gray.50"
      py={[8, 12, 16]}
      px={[4, 8, 16]}
      rounded="lg"
      boxShadow="sm"
      position="relative"
    >
      {/* Title Section */}
      {/* Title */}
      <VStack spacing={4} mb={12}>
        <Text fontSize="2xl" color="blue.600" fontWeight="bold">
          Testimonials
        </Text>
        <Text color="orange.500" maxW="3xl" textAlign={"center"}>
          Hear from our satisfied clients about how our services have made a
          positive impact on their success and growth.
        </Text>
      </VStack>

      {/* Testimonials Slider */}
      <Box position="relative" maxW="100%" mx="auto" overflow="hidden">
        <motion.div
          style={{
            display: "flex",
            gap: "1rem", // Reduced gap for smaller screens
            transform: `translateX(-${(currentIndex / slidesToShow) * 100}%)`,
            transition: "transform 0.8s ease",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <Box
              key={index}
              flex={`0 0 ${100 / slidesToShow}%`}
              bg="white"
              borderRadius="lg"
              boxShadow="lg"
              p={[6, 8]} // Adjust padding for smaller screens
              textAlign="center"
              position="relative"
              overflow="hidden"
              zIndex={index === currentIndex ? 1 : 0} // Ensure the active testimonial has a higher z-index
            >
              <Icon
                as={FaQuoteLeft}
                boxSize={["100px", "150px", "200px"]}
                color="gray.200"
                position="absolute"
                top={["-20px", "-30px", "-40px"]}
                left={["-20px", "-30px", "-40px"]}
                zIndex="0"
              />
              <VStack spacing={[4, 6]} zIndex="1" position="relative">
                <Avatar
                  src={testimonial.image}
                  size={["md", "lg", "xl"]}
                  boxShadow="md"
                />
                <Text
                  fontWeight="bold"
                  fontSize={["md", "lg"]}
                  color="gray.700"
                >
                  {testimonial.name}
                </Text>
                <Text
                  fontSize={["sm", "md"]}
                  fontWeight="medium"
                  color="gray.500"
                >
                  {testimonial.role}
                </Text>
                <Text
                  fontSize={["sm", "md"]}
                  color="gray.600"
                  lineHeight="tall"
                >
                  {testimonial.text}
                </Text>
              </VStack>
              <Icon
                as={FaQuoteRight}
                boxSize={["100px", "150px", "200px"]}
                color="gray.200"
                position="absolute"
                bottom={["-20px", "-30px", "-40px"]}
                right={["-20px", "-30px", "-40px"]}
                zIndex="0"
              />
            </Box>
          ))}
        </motion.div>
      </Box>
    </Box>
  );
};

export default Testimonials;
