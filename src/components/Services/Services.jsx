import {
  Box,
  Link as ChakraLink,
  Grid,
  Heading,
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

import { Link } from "react-router-dom";

function Services() {
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

  return (
    <Box bg="gray.50" p={10}>
      <Heading textAlign="center" mb={10} color="blue.600">
        Our Services
      </Heading>
      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
        {services.map((service, index) => (
          <ChakraLink
            as={Link}
            to={service.path}
            key={index}
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
        ))}
      </Grid>
    </Box>
  );
}

export default Services;
