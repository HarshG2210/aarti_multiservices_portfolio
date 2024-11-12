import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  Heading,
  Text,
  Image,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

function Portfolio() {
  const categories = [
    "All",
    "App Design",
    "App Development",
    "Branding",
    "IT Solutions",
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  const portfolioItems = [
    { id: 1, category: "App Design", image: "https://via.placeholder.com/300" },
    {
      id: 2,
      category: "App Development",
      image: "https://via.placeholder.com/300",
    },
    { id: 3, category: "Branding", image: "https://via.placeholder.com/300" },
    {
      id: 4,
      category: "IT Solutions",
      image: "https://via.placeholder.com/300",
    },
    { id: 5, category: "App Design", image: "https://via.placeholder.com/300" },
    {
      id: 6,
      category: "App Development",
      image: "https://via.placeholder.com/300",
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
          Lorem ipsum dolor sit amet
        </Text>
      </VStack>

      {/* Responsive Filter Buttons with Center Alignment on Desktop and Hidden Scrollbar on Mobile */}
      <Box
        overflowX="auto"
        mb={12}
        pb={2}
        sx={{
          "::-webkit-scrollbar": { display: "none" }, // Hide scrollbar in WebKit-based browsers
          "-ms-overflow-style": "none", // Hide scrollbar in IE and Edge
          "scrollbar-width": "none", // Hide scrollbar in Firefox
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
              flexShrink={0} // Prevent shrinking for scrollability on mobile
            >
              {category}
            </Button>
          ))}
        </ButtonGroup>
      </Box>

      {/* Portfolio Grid */}
      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
        {filteredItems.map((item) => (
          <Box key={item.id} borderRadius="md" overflow="hidden" boxShadow="md">
            <Image src={item.image} alt={item.category} w="100%" />
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

export default Portfolio;
