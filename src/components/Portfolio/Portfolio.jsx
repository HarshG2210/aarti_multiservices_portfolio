import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Grid,
  Heading,
  Image,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import ams_website from "../../assets/images/portfolio/ams_website.png";
import ios_pb from "../../assets/images/portfolio/ios_pb.png";
import property_bhandar from "../../assets/images/portfolio/property_bhandar.png";

function Portfolio() {
  const categories = [
    "All",
    "Web Development",
    "Android Development",
    "IOS Development",
  ];
  const [activeCategory, setActiveCategory] = useState("All");

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

  const portfolioItems = [
    {
      id: 1,
      category: "Web Development",
      image: ams_website,
      link: "https://www.aartimultiservices.com/",
    },
    {
      id: 2,
      category: "Web Development",
      image: property_bhandar,
      link: "https://www.propertybhandar.com/",
    },
    {
      id: 3,
      category: "Web Development",
      image: "https://via.placeholder.com/300",
      link: "#",
    },
    {
      id: 4,
      category: "Web Development",
      image: "https://via.placeholder.com/300",
      link: "#",
    },
    {
      id: 5,
      category: "Android Development",
      image: "https://via.placeholder.com/300",
      link: "#",
    },
    {
      id: 6,
      category: "IOS Development",
      image: ios_pb,
      link: "https://apps.apple.com/in/app/property-bhandar/id6727008703",
    },
  ];

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <Box bg="gray.50" py={16} px={{ base: 6, md: 12 }}>
      <VStack spacing={2} mb={12} textAlign="center">
        <Heading color="blue.600" fontSize="3xl">
          Our Portfolio
        </Heading>
        <Text color="orange.500" fontSize="lg">
          Browse through our portfolio to see the successful projects we&apos;ve
          delivered and the impact we&apos;ve made.
        </Text>
      </VStack>

      {/* Responsive Filter Buttons with Center Alignment on Desktop and Hidden Scrollbar on Mobile */}
      <Box
        overflowX="auto"
        mb={12}
        pb={2}
        sx={{
          "::-webkit-scrollbar": { display: "none" },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        }}
      >
        <ButtonGroup
          spacing={4}
          display="flex"
          justifyContent={{ base: "flex-start", md: "center" }}
        >
          {categories.map((category, index) => (
            <Button
              key={index}
              colorScheme={activeCategory === category ? "blue" : "gray"}
              variant={activeCategory === category ? "solid" : "outline"}
              onClick={() => setActiveCategory(category)}
              flexShrink={0}
            >
              {category}
            </Button>
          ))}
        </ButtonGroup>
      </Box>

      {/* Portfolio Grid */}
      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
        {filteredItems.map((item) => (
          <Box
            key={item.id}
            borderRadius="lg"
            borderColor={"#000"}
            overflow="hidden"
            boxShadow="md"
            position="relative"
            height="300px"
            _hover={{
              "& .overlay": { opacity: 1 },
              "& img": { filter: "blur(2px)" },
            }}
          >
            <Image
              src={item.image}
              alt={item.category}
              w="100%"
              h="100%"
              objectFit="cover"
            />
            <Box
              className="overlay"
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              opacity={0}
              transition="opacity 0.3s ease"
              zIndex={1}
            >
              <Button
                as="a"
                href={item.link}
                colorScheme="blue"
                variant="solid"
                size="lg"
                px={8}
                py={6}
                target="_blank"
              >
                Visit our project
              </Button>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

export default Portfolio;
