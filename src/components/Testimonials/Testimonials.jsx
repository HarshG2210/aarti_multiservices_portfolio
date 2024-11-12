import { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Avatar,
  VStack,
  HStack,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Fizzi Brandon",
    role: "Freelancer",
    image: "https://via.placeholder.com/150",
    text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.",
  },
  {
    name: "Jhonne Doe",
    role: "CFO",
    image: "https://via.placeholder.com/150",
    text: "Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam.",
  },
  {
    name: "Afa Rose",
    role: "Web Designer",
    image: "https://via.placeholder.com/150",
    text: "Maecen aliquam donec porttitora entum suscipit rhoncus. Accusantium quam.",
  },
  {
    name: "Emily Stone",
    role: "Product Manager",
    image: "https://via.placeholder.com/150",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies.",
  },
  {
    name: "Daniel Lee",
    role: "UI/UX Designer",
    image: "https://via.placeholder.com/150",
    text: "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.",
  },
  {
    name: "Sophia Brown",
    role: "Engineer",
    image: "https://via.placeholder.com/150",
    text: "Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales.",
  },
];

function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0);

  // Update the current page every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % testimonials.length);
    }, 2000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <Box textAlign="center" py={10} px={5} bg="gray.50">
      <Heading color="blue.600" fontSize="3xl">
        Testimonials
      </Heading>
      <Text color="orange.400" fontSize="md" mb={6}>
        Lorem ipsum dolor sit amet
      </Text>

      {/* Testimonials Grid with Slide Animation */}
      <SimpleGrid
        columns={{ base: 1, md: 1, lg: 1 }}
        spacing={10}
        maxW="1000px"
        mx="auto"
      >
        <AnimatePresence initial={false}>
          {testimonials
            .slice(currentPage, currentPage + 1)
            .map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <VStack
                  bg="white"
                  borderRadius="lg"
                  boxShadow="md"
                  p={6}
                  spacing={4}
                  align="center"
                >
                  <Avatar src={testimonial.image} size="xl" />
                  <VStack spacing={1} textAlign="center">
                    <Text fontWeight="bold" fontSize="xl" color="blue.700">
                      {testimonial.name}
                    </Text>
                    <Text fontSize="sm" color="gray.500">
                      {testimonial.role}
                    </Text>
                    <HStack spacing={1} color="yellow.400">
                      {Array(5)
                        .fill("")
                        .map((_, i) => (
                          <Icon as={FaStar} key={i} />
                        ))}
                    </HStack>
                  </VStack>
                  <HStack color="blue.500">
                    <Icon as={FaQuoteLeft} boxSize={5} />
                    <Text fontSize="md" color="gray.600" textAlign="center">
                      {testimonial.text}
                    </Text>
                    <Icon as={FaQuoteRight} boxSize={5} />
                  </HStack>
                </VStack>
              </motion.div>
            ))}
        </AnimatePresence>
      </SimpleGrid>

      {/* Pagination Dots */}
      <HStack justify="center" mt={8}>
        {testimonials.map((_, index) => (
          <Box
            key={index}
            w={3}
            h={3}
            borderRadius="full"
            bg={currentPage === index ? "blue.600" : "gray.300"}
            mx={1}
            onClick={() => setCurrentPage(index)}
            cursor="pointer"
          />
        ))}
      </HStack>
    </Box>
  );
}

export default Testimonials;
