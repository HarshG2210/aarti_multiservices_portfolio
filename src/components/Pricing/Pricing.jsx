import { Box, Button, Flex, Heading, Text, VStack, useBreakpointValue } from "@chakra-ui/react";

function Pricing() {
  const priceBoxSize = useBreakpointValue({ base: "full", md: "auto" });

  return (
    <Box py={10} bg="gray.100">
      <VStack spacing={8} textAlign="center" maxW="1200px" mx="auto">
        <Heading as="h2" size="xl" color="blue.700">
          Our Pricing Plans
        </Heading>
        <Text fontSize="lg" color="gray.700" maxW="3xl" mx="auto">
          Choose the perfect plan that suits your needs. Whether you&apos;re just getting started or looking for advanced features, we&apos;ve got you covered.
        </Text>

        {/* Pricing Cards */}
        <Flex direction={{ base: "column", md: "row" }} spacing={6} justify="center" mt={8}>
          <Box
            p={6}
            bg="white"
            shadow="lg"
            borderRadius="lg"
            textAlign="center"
            flex="1"
            maxW={priceBoxSize}
          >
            <Heading as="h3" size="md" color="blue.600" mb={4}>
              Basic Plan
            </Heading>
            <Text fontSize="2xl" fontWeight="bold" color="blue.500" mb={4}>
              $19.99/month
            </Text>
            <Text color="gray.700" mb={4}>
              Perfect for individuals or small businesses just getting started.
            </Text>
            <Box mb={4}>
              <Text color="gray.700">✓ 5 Projects</Text>
              <Text color="gray.700">✓ 10GB Storage</Text>
              <Text color="gray.700">✓ Basic Support</Text>
            </Box>
            <Button colorScheme="blue" size="lg">
              Start Now
            </Button>
          </Box>

          <Box
            p={6}
            bg="white"
            shadow="lg"
            borderRadius="lg"
            textAlign="center"
            flex="1"
            maxW={priceBoxSize}
          >
            <Heading as="h3" size="md" color="blue.600" mb={4}>
              Premium Plan
            </Heading>
            <Text fontSize="2xl" fontWeight="bold" color="blue.500" mb={4}>
              $49.99/month
            </Text>
            <Text color="gray.700" mb={4}>
              Best for growing teams and advanced features.
            </Text>
            <Box mb={4}>
              <Text color="gray.700">✓ 50 Projects</Text>
              <Text color="gray.700">✓ 100GB Storage</Text>
              <Text color="gray.700">✓ Priority Support</Text>
            </Box>
            <Button colorScheme="blue" size="lg">
              Start Now
            </Button>
          </Box>

          <Box
            p={6}
            bg="white"
            shadow="lg"
            borderRadius="lg"
            textAlign="center"
            flex="1"
            maxW={priceBoxSize}
          >
            <Heading as="h3" size="md" color="blue.600" mb={4}>
              Enterprise Plan
            </Heading>
            <Text fontSize="2xl" fontWeight="bold" color="blue.500" mb={4}>
              $99.99/month
            </Text>
            <Text color="gray.700" mb={4}>
              The ultimate solution for large organizations and custom needs.
            </Text>
            <Box mb={4}>
              <Text color="gray.700">✓ Unlimited Projects</Text>
              <Text color="gray.700">✓ 1TB Storage</Text>
              <Text color="gray.700">✓ 24/7 Premium Support</Text>
            </Box>
            <Button colorScheme="blue" size="lg">
              Start Now
            </Button>
          </Box>
        </Flex>
      </VStack>
    </Box>
  );
}

export default Pricing;