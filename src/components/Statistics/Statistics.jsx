import {
  Box,
  Flex,
  Text,
  Icon,
  VStack,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import { FaUsers, FaChartBar, FaClock } from "react-icons/fa";

// Statistics Data
const statistics = [
  {
    id: 1,
    icon: FaUsers,
    number: "232",
    title: "Happy Clients",
    description: "consequuntur quae diredo",
  },
  {
    id: 2,
    icon: FaChartBar,
    number: "521",
    title: "Completed Projects",
    description: "adipisci atque quia aut",
  },
  {
    id: 3,
    icon: FaClock,
    number: "453",
    title: "Hours of Support",
    description: "aut commodi quaerat",
  },
];

// Company Logos (Replace with actual logo URLs)
const logos = [
  "https://via.placeholder.com/100",
  "https://via.placeholder.com/100",
  "https://via.placeholder.com/100",
  "https://via.placeholder.com/100",
  "https://via.placeholder.com/100",
  "https://via.placeholder.com/150",
];

const StatsSection = () => {
  return (
    <Box bg="blue.900" py={16} px={8} color="white">
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={6}
        alignItems="center"
        justifyContent="center"
        maxW="1200px"
        mx="auto"
      >
        {statistics.map((stat) => (
          <GridItem key={stat.id} textAlign="center">
            <VStack spacing={4}>
              <Icon as={stat.icon} boxSize={10} color="blue.300" />
              <Text fontSize="3xl" fontWeight="bold" color="blue.400">
                {stat.number}
              </Text>
              <Text fontSize="xl" fontWeight="bold">
                {stat.title}
              </Text>
              <Text fontSize="sm" color="gray.300">
                {stat.description}
              </Text>
            </VStack>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

const LogoCarousel = () => {
  return (
    <Box bg="white" py={8}>
      <Flex justify="center" gap={8} wrap="wrap" maxW="1200px" mx="auto">
        {logos.map((logo, index) => (
          <Box key={index} p={4}>
            <Image src={logo} alt={`Company Logo ${index}`} w={24} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

const Statistics = () => {
  return (
    <>
      <StatsSection />
      <LogoCarousel />
    </>
  );
};

export default Statistics;
