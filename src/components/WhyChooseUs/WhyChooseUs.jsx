import {
  Box,
  Grid,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";
import {
  FaFileAlt,
  FaLightbulb,
  FaUserFriends,
  FaDollarSign,
  FaClock,
  FaHeadset,
} from "react-icons/fa";

function WhyChooseUs() {
  const leftItems = [
    {
      title: "Experience",
      description:
        "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: FaFileAlt,
    },
    {
      title: "Products",
      description:
        "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: FaLightbulb,
    },
    {
      title: "Approach",
      description:
        "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: FaUserFriends,
    },
  ];

  const rightItems = [
    {
      title: "Pricing",
      description:
        "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: FaDollarSign,
    },
    {
      title: "Delivery",
      description:
        "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: FaClock,
    },
    {
      title: "Support",
      description:
        "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: FaHeadset,
    },
  ];

  return (
    <Box bg="gray.50" py={16} px={{ base: 6, md: 12 }}>
      <VStack spacing={2} mb={12} textAlign="center">
        <Heading color="blue.600" fontSize="3xl">
          Why Choose Us
        </Heading>
        <Text color="orange.500" fontSize="lg">
          Lorem ipsum dolor sit amet
        </Text>
      </VStack>

      <Grid
        templateColumns={{ base: "1fr", lg: "1fr auto 1fr" }}
        gap={8}
        alignItems="center"
      >
        {/* Left Column */}
        <VStack spacing={8} align="flex-end" textAlign="right">
          {leftItems.map((item, index) => (
            <HStack key={index} spacing={4} maxW="xs">
              <Box>
                <Heading size="md" color="gray.700">
                  {item.title}
                </Heading>
                <Text color="gray.500">{item.description}</Text>
              </Box>
              <Icon as={item.icon} boxSize={8} color="blue.500" />
            </HStack>
          ))}
        </VStack>

        {/* Center Image */}
        <Image
          src="https://via.placeholder.com/300"
          alt="Why Choose Us"
          boxSize="300px"
          borderRadius="md"
        />

        {/* Right Column */}
        <VStack spacing={8} align="flex-start" textAlign="left">
          {rightItems.map((item, index) => (
            <HStack key={index} spacing={4} maxW="xs">
              <Icon as={item.icon} boxSize={8} color="blue.500" />
              <Box>
                <Heading size="md" color="gray.700">
                  {item.title}
                </Heading>
                <Text color="gray.500">{item.description}</Text>
              </Box>
            </HStack>
          ))}
        </VStack>
      </Grid>
    </Box>
  );
}

export default WhyChooseUs;
