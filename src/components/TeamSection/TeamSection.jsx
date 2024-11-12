import {
  Box,
  Text,
  Grid,
  GridItem,
  Avatar,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

// Team Data
const teamMembers = [
  {
    id: 1,
    name: "Jhone Bi",
    role: "Application Manager",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Sani Awesome",
    role: "Social Media",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Andrio Willi",
    role: "Content Writer",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Afa Jonson",
    role: "Business Manager",
    image: "https://via.placeholder.com/150",
  },
];

const TeamSection = () => {
  return (
    <Box py={16} px={8} bg="gray.50">
      {/* Title Section */}
      <VStack spacing={4} mb={12} textAlign="center">
        <Text fontSize="4xl" fontWeight="bold" color="blue.500">
          Team
        </Text>
        <Text color="gray.500">Lorem ipsum dolor sit amet</Text>
      </VStack>

      {/* Team Member Cards */}
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={10}
        maxW="1200px"
        mx="auto"
      >
        {teamMembers.map((member) => (
          <GridItem
            key={member.id}
            bg="white"
            boxShadow="md"
            borderRadius="md"
            p={6}
            textAlign="center"
          >
            <VStack spacing={4}>
              <Avatar src={member.image} size="xl" />
              <Text fontSize="xl" fontWeight="bold" color="blue.600">
                {member.name}
              </Text>
              <Text fontSize="md" color="gray.500">
                {member.role}
              </Text>
              {/* Social Media Icons */}
              <HStack spacing={4} justify="center">
                <Icon
                  as={FaTwitter}
                  boxSize={5}
                  color="blue.400"
                  cursor="pointer"
                />
                <Icon
                  as={FaFacebookF}
                  boxSize={5}
                  color="blue.600"
                  cursor="pointer"
                />
                <Icon
                  as={FaLinkedinIn}
                  boxSize={5}
                  color="blue.700"
                  cursor="pointer"
                />
                <Icon
                  as={FaInstagram}
                  boxSize={5}
                  color="pink.500"
                  cursor="pointer"
                />
              </HStack>
            </VStack>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default TeamSection;
