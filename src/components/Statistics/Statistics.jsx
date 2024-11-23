import {
  Box,
  Flex,
  Grid,
  GridItem,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaChartBar, FaClock, FaUsers } from "react-icons/fa";
import { useEffect, useState } from "react";

import bg_cover from "../../assets/images/bg_statistics/bg_statistics.png";
import pb_logo from "../../assets/images/bg_statistics/pb_logo.png";
import percept from "../../assets/images/bg_statistics/percept.png";
import shiva_firework from "../../assets/images/bg_statistics/shiva_firework.png";

// Statistics Data
const statistics = [
  {
    id: 1,
    icon: FaUsers,
    number: 25,
    title: "Happy Clients",
    description: "consequuntur quae diredo",
  },
  {
    id: 2,
    icon: FaChartBar,
    number: 12,
    title: "Completed Projects",
    description: "adipisci atque quia aut",
  },
  {
    id: 3,
    icon: FaClock,
    number: 453,
    title: "Hours of Support",
    description: "aut commodi quaerat",
  },
];

// Function to handle number animation
const useCountUp = (targetNumber, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = targetNumber / (duration / 10); // Divide total number by total frames
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= targetNumber) {
        setCount(targetNumber);
        clearInterval(interval); // Stop animation when target is reached
      } else {
        setCount(Math.ceil(current)); // Round up to show smooth animation
      }
    }, 10); // Update every 10ms

    return () => clearInterval(interval); // Cleanup when component unmounts
  }, [targetNumber, duration]); // Run the animation every time this hook is called

  return count;
};

const StatsSection = () => {
  return (
    <Box
      position="relative"
      bgImage={bg_cover}
      bgSize="cover"
      bgPosition="center"
      py={16}
      px={8}
      color="white"
    >
      {/* Overlay for background opacity */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="black"
        opacity={0.7}
        zIndex={1}
      />

      {/* Content */}
      <Box position="relative" zIndex={2} py={12} px={4}>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={8}
          alignItems="center"
          justifyContent="center"
          maxW="1200px"
          mx="auto"
        >
          {statistics.map((stat) => (
            <GridItem key={stat.id} textAlign="center">
              <VStack spacing={4}>
                <Icon as={stat.icon} boxSize={12} color="blue.300" />
                <Text fontSize="4xl" fontWeight="bold" color="blue.400">
                  {useCountUp(stat.number)}
                </Text>
                <Text fontSize="xl" fontWeight="bold">
                  {stat.title}
                </Text>
                <Text fontSize="md" color="gray.300">
                  {stat.description}
                </Text>
              </VStack>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

const LogoCarousel = () => {
  const logos = [pb_logo, percept, shiva_firework];

  return (
    <Box bg="white" py={8}>
      <Flex justify="center" gap={10} wrap="wrap" maxW="1200px" mx="auto">
        {logos.map((logo, index) => (
          <Box key={index} p={4} alignContent={"center"}>
            <Image
              src={logo}
              alt={`Company Logo ${index}`}
              w={{ base: "40", md: "54" }}
            />
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
