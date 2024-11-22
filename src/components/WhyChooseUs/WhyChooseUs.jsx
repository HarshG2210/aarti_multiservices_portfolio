import {
  Box,
  Center,
  Grid,
  HStack,
  Heading,
  Icon,
  Image,
  Spinner,
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
import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import why_choose_us from "../../assets/images/why_choose_us.png";

function WhyChooseUs() {
  const [loading, setLoading] = useState(true);

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

  const leftItems = [
    {
      title: "Experience",
      description:
        "Years of expertise and proven strategies for innovative, reliable solutions tailored to your needs.",
      icon: FaFileAlt,
    },
    {
      title: "Products",
      description:
        "High-quality products crafted with precision to ensure excellent performance and satisfaction.",
      icon: FaLightbulb,
    },
    {
      title: "Approach",
      description:
        "Customer-first solutions designed to align with your goals and deliver results.",
      icon: FaUserFriends,
    },
  ];

  const rightItems = [
    {
      title: "Pricing",
      description:
        "Competitive pricing without compromising on quality, offering great value for every budget.",
      icon: FaDollarSign,
    },
    {
      title: "Delivery",
      description:
        "Efficient processes ensure on-time delivery while maintaining top-notch quality.",
      icon: FaClock,
    },
    {
      title: "Support",
      description:
        "Dedicated support team offering reliable assistance whenever you need it.",
      icon: FaHeadset,
    },
  ];

  return (
    <Box
      bg="gray.50"
      py={16}
      px={{ base: 6, md: 12 }}
      key={Math.random()} // Forces remount to replay animations
    >
      <VStack spacing={4} mb={12} textAlign="center">
        <Heading color="blue.600" fontSize={{ base: "2xl", md: "3xl" }}>
          Why Choose Us
        </Heading>
        <Text color="orange.500" maxW="3xl">
          Discover what makes us the trusted choice for delivering exceptional
          solutions.
        </Text>
      </VStack>

      <Grid
        templateColumns={{
          base: "1fr", // Mobile: Single column
          md: "1fr auto 1fr", // Tablet and Desktop: Three columns
        }}
        gap={{ base: 6, md: 8, lg: 12 }}
        alignItems="center"
        maxW="7xl"
        mx="auto"
      >
        {/* Left Column */}
        <VStack
          spacing={8}
          align="flex-end"
          textAlign="right"
          maxW={{ base: "xs", md: "lg" }}
        >
          {leftItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
              whileInView={{ opacity: 1, x: 0 }} // Animate to the center when in view
              viewport={{ once: false, margin: "-50px" }} // Trigger animation when in the viewport
              transition={{ duration: 0.6, delay: index * 0.2 }} // Staggered animation
            >
              <HStack spacing={4}>
                <Box>
                  <Heading size="md" color="gray.700">
                    {item.title}
                  </Heading>
                  <Text color="gray.500">{item.description}</Text>
                </Box>
                <Icon as={item.icon} boxSize={8} color="blue.500" />
              </HStack>
            </motion.div>
          ))}
        </VStack>

        {/* Center Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Start from bottom and move upwards
          whileInView={{ opacity: 1, y: 0 }} // Move to the center when in view
          viewport={{ once: false, margin: "-50px" }} // Triggers when the element enters the viewport
          transition={{ duration: 1 }} // Duration for the animation
        >
          <Image
            src={why_choose_us}
            alt="Why Choose Us"
            borderRadius="md"
            boxSize={{ base: "250px", md: "200px" }}
            mx="auto"
          />
        </motion.div>

        {/* Right Column */}
        <VStack
          spacing={8}
          align="flex-start"
          textAlign="left"
          maxW={{ base: "xs", md: "lg" }}
        >
          {rightItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
              whileInView={{ opacity: 1, x: 0 }} // Animate to the center when in view
              viewport={{ once: false, margin: "-50px" }} // Trigger animation when in the viewport
              transition={{ duration: 0.6, delay: index * 0.2 }} // Staggered animation
            >
              <HStack spacing={4}>
                <Icon as={item.icon} boxSize={8} color="blue.500" />
                <Box>
                  <Heading size="md" color="gray.700">
                    {item.title}
                  </Heading>
                  <Text color="gray.500">{item.description}</Text>
                </Box>
              </HStack>
            </motion.div>
          ))}
        </VStack>
      </Grid>
    </Box>
  );
}

export default WhyChooseUs;
