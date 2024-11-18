import {
  Box,
  Grid,
  HStack,
  Heading,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  FaClock,
  FaDollarSign,
  FaFileAlt,
  FaHeadset,
  FaLightbulb,
  FaUserFriends,
} from "react-icons/fa";

function WhyChooseUs() {
  const leftItems = [
    {
      title: "Experience",
      description:
        "With years of industry expertise, we bring in-depth knowledge and proven strategies to deliver reliable and innovative solutions for our clients.",
      icon: FaFileAlt,
    },
    {
      title: "Products",
      description:
        "Our products are crafted with the highest quality standards, ensuring performance, durability, and satisfaction for all your needs.",
      icon: FaLightbulb,
    },
    {
      title: "Approach",
      description:
        "We take a customer-centric approach, focusing on understanding your unique requirements to provide tailored solutions that drive results.",
      icon: FaUserFriends,
    },
  ];

  const rightItems = [
    {
      title: "Pricing",
      description:
        "We offer competitive pricing without compromising quality, making our services accessible and cost-effective for businesses of all sizes.",
      icon: FaDollarSign,
    },
    {
      title: "Delivery",
      description:
        "Our efficient processes ensure timely delivery, so you can rely on us to meet your project deadlines and keep your operations running smoothly.",
      icon: FaClock,
    },
    {
      title: "Support",
      description:
        "Our dedicated support team is available to assist you at every step, providing prompt and reliable service whenever you need it.",
      icon: FaHeadset,
    },
  ];

  return (
    <Box bg="gray.50" py={16} px={{ base: 6, md: 12 }} >
      <VStack spacing={2} mb={12} textAlign="center">
        <Heading color="blue.600" fontSize="3xl">
          Why Choose Us
        </Heading>
      </VStack>

      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
        gap={8}
        alignItems="center"
      >
        {/* Left Column */}
        <VStack
          spacing={8}
          align="flex-end"
          textAlign="right"
          maxW={{ base: "xs", md: "sm", lg: "xs" }} // Adjusted maxWidth
        >
          {leftItems.map((item, index) => (
            <HStack key={index} spacing={4}>
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
        <VStack
          spacing={8}
          align="flex-start"
          textAlign="left"
          maxW={{ base: "xs", md: "sm", lg: "xs" }} // Adjusted maxWidth
        >
          {rightItems.map((item, index) => (
            <HStack key={index} spacing={4}>
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
