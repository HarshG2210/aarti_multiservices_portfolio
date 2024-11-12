import { Box, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import {
  FaLightbulb,
  FaServer,
  FaBullseye,
  FaChartLine,
  FaCloud,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      title: "Application Design",
      description:
        "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: FaLightbulb,
    },
    {
      title: "Web Hosting",
      description:
        "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: FaServer,
    },
    {
      title: "Social Media",
      description:
        "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: FaBullseye,
    },
    {
      title: "SEO Optimization",
      description:
        "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: FaChartLine,
    },
    {
      title: "Cloud Server",
      description:
        "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: FaCloud,
    },
  ];

  return (
    <Box bg="gray.50" p={10}>
      <Heading textAlign="center" mb={10} color="blue.600">
        Our Services
      </Heading>
      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
        {services.map((service, index) => (
          <VStack
            key={index}
            p={6}
            bg="white"
            boxShadow="md"
            borderRadius="md"
            textAlign="center"
            spacing={4}
          >
            <Box as={service.icon} boxSize={10} color="blue.500" />
            <Heading size="md" color="gray.700">
              {service.title}
            </Heading>
            <Text color="gray.500">{service.description}</Text>
          </VStack>
        ))}
      </Grid>
    </Box>
  );
}

export default Services;
