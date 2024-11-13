import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";

function About() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        bgImage="url('https://source.unsplash.com/random/1600x900?business')" // Placeholder hero image
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        color="white"
        px={{ base: 4, md: 10 }}
        textAlign="center"
      >
        <Heading
          as="h1"
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight="bold"
          color={"black"}
        >
          About Us
        </Heading>
        <Text
          mt={4}
          fontSize={{ base: "lg", md: "xl" }}
          maxW="3xl"
          mx="auto"
          color={"black"}
        >
          Aarti Multi Services Pvt. Ltd. is committed to delivering exceptional
          services across multiple sectors, from real estate to IT solutions.
        </Text>
      </Box>

      {/* Description Section */}
      <Box py={{ base: 10, md: 20 }} px={{ base: 4, md: 10 }} bg="gray.100">
        <VStack spacing={8} maxW="1200px" mx="auto" textAlign="center">
          <Heading as="h2" size="xl" color="blue.700">
            Our Services
          </Heading>
          <Text fontSize="lg" color="gray.700" maxW="3xl" mx="auto">
            Aarti Multi Services Pvt. Ltd. excels in a range of specialized
            fields:
          </Text>
          <VStack align="start" spacing={6} textAlign="left" maxW="3xl">
            <Box>
              <Heading as="h3" size="md" color="blue.600">
                Real Estate (Infrastructure)
              </Heading>
              <Text color="gray.700">
                We specialize in developing robust and innovative infrastructure
                projects, ensuring top-notch quality and sustainability in all
                our real estate ventures.
              </Text>
            </Box>

            <Box>
              <Heading as="h3" size="md" color="blue.600">
                IT Solutions
              </Heading>
              <Text color="gray.700">
                Our cutting-edge IT solutions are designed to meet the diverse
                technological needs of businesses, providing comprehensive and
                customized services for optimal performance.
              </Text>
            </Box>

            <Box>
              <Heading as="h3" size="md" color="blue.600">
                Marketing
              </Heading>
              <Text color="gray.700">
                We offer strategic marketing services that drive brand growth
                and market penetration, utilizing advanced techniques to
                maximize outreach and impact.
              </Text>
            </Box>

            <Box>
              <Heading as="h3" size="md" color="blue.600">
                Loans
              </Heading>
              <Text color="gray.700">
                Our financial services include a range of loan products tailored
                to meet individual and business needs, offering flexible and
                reliable solutions for financial empowerment.
              </Text>
            </Box>

            <Box>
              <Heading as="h3" size="md" color="blue.600">
                Advertisement
              </Heading>
              <Text color="gray.700">
                We create compelling advertisement campaigns that resonate with
                target audiences, enhancing brand visibility and engagement
                through creative and effective strategies.
              </Text>
            </Box>

            <Text fontSize="lg" color="gray.700" fontStyle="italic">
              At Aarti Multi Services Pvt. Ltd., we are committed to delivering
              unparalleled service and value, fostering growth and success for
              our clients and partners.
            </Text>
          </VStack>
        </VStack>
      </Box>

      {/* Core Values Section */}
      <Box py={{ base: 10, md: 20 }} px={{ base: 4, md: 10 }} bg="gray.100">
        <VStack spacing={8} maxW="1200px" mx="auto" textAlign="center">
          <Heading as="h2" size="xl" color="blue.700">
            Our Core Values
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="3xl">
            Integrity, innovation, and a commitment to excellence are at the
            heart of everything we do.
          </Text>
          <Flex
            direction={{ base: "column", md: "row" }}
            spacing={6}
            justifyContent="center"
            mt={6}
          >
            <Box p={6} bg="white" shadow="md" borderRadius="md" flex="1" m={2}>
              <Heading as="h3" size="md" color="blue.700" mb={2}>
                Integrity
              </Heading>
              <Text fontSize="md" color="gray.700">
                We conduct our business with honesty and integrity, building
                trust with clients and partners.
              </Text>
            </Box>
            <Box p={6} bg="white" shadow="md" borderRadius="md" flex="1" m={2}>
              <Heading as="h3" size="md" color="blue.700" mb={2}>
                Innovation
              </Heading>
              <Text fontSize="md" color="gray.700">
                Embracing new ideas and technologies to deliver creative and
                effective solutions.
              </Text>
            </Box>
            <Box p={6} bg="white" shadow="md" borderRadius="md" flex="1" m={2}>
              <Heading as="h3" size="md" color="blue.700" mb={2}>
                Excellence
              </Heading>
              <Text fontSize="md" color="gray.700">
                Dedicated to delivering the highest quality in every aspect of
                our work.
              </Text>
            </Box>
          </Flex>
        </VStack>
      </Box>
    </Box>
  );
}

export default About;
