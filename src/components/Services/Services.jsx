import {
  Box,
  Center,
  Link as ChakraLink,
  Grid,
  Heading,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  FaBullseye,
  FaChartLine,
  FaCloud,
  FaLightbulb,
  FaServer,
  FaSolarPanel,
} from "react-icons/fa";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Services() {
  const [loading, setLoading] = useState(true);

  const services = [
    {
      title: "IT Solution",
      description:
        "Improve operational efficiency, drive innovation, and empower data-driven decisions to optimize performance.",
      icon: FaLightbulb,
      path: "/it-solution",
    },
    {
      title: "Infrastructure",
      description:
        "A robust infrastructure fosters future business growth by ensuring scalability and enhancing reliability.",
      icon: FaServer,
      path: "/infrastructure",
    },
    {
      title: "Loan",
      description:
        "Invest capital to drive growth, foster innovation, and expand operations for long-term success.",
      icon: FaBullseye,
      path: "/loan",
    },
    {
      title: "Advertisement",
      description:
        "Increase brand visibility, enhance customer engagement, and expand market presence.",
      icon: FaChartLine,
      path: "/advertisement",
    },
    {
      title: "Marketing",
      description:
        "Build strong brand awareness and unlock growth opportunities for future success.",
      icon: FaCloud,
      path: "/marketing",
    },
    {
      title: "Solar",
      description:
        "Go green and save with sustainable solar energy solutions for your home, reducing costs and your carbon footprint.",
      icon: FaSolarPanel,
      path: "/solar",
    },
  ];

  useEffect(() => {
    // Simulate a data fetch
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay for demonstration
  }, []);

  if (loading) {
    return (
      <Center height="100vh">
        <Spinner size="xl" color="blue.500" />
      </Center>
    );
  }

  return (
    <Box bg="gray.50" p={10} id="services">
      <VStack spacing={4} mb={12} textAlign="center">
        <Heading color="blue.600" fontSize={{ base: "2xl", md: "3xl" }}>
          Our Services
        </Heading>
        <Text color="orange.500" maxW="3xl">
          Explore our wide range of services designed to meet your unique needs
          and help you achieve your goals.
        </Text>
      </VStack>

      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }} // Animation when in view
            initial={{ opacity: 0, y: 50 }} // Initial state
            viewport={{ once: false, margin: "-50px" }} // Animation triggers every time it enters the viewport
            transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered animation
          >
            <ChakraLink
              as={Link}
              to={service.path}
              _hover={{ textDecoration: "none" }}
            >
              <VStack
                p={6}
                bg="white"
                boxShadow="md"
                borderRadius="md"
                textAlign="center"
                spacing={4}
                height="300px" // Set a fixed height for uniformity
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Box as={service.icon} boxSize={10} color="blue.500" />
                <Heading size="md" color="gray.700">
                  {service.title}
                </Heading>
                <Text color="gray.500" flex="1" overflow="hidden">
                  {service.description}
                </Text>
              </VStack>
            </ChakraLink>
          </motion.div>
        ))}
      </Grid>
    </Box>
  );
}

export default Services;
