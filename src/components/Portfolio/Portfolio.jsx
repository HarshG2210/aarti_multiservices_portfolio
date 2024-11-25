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

import PropTypes from "prop-types";
import ams_website from "../../assets/images/portfolio/ams_website.png";
import android_pb_1 from "../../assets/images/portfolio/android_pb_1.png";
import android_pb_2 from "../../assets/images/portfolio/android_pb_2.png";
import android_pb_3 from "../../assets/images/portfolio/android_pb_3.png";
import android_pb_4 from "../../assets/images/portfolio/android_pb_4.png";
import employee_management from "../../assets/images/portfolio/employee_management.png";
import ios_pb_1 from "../../assets/images/portfolio/ios_pb_1.png";
import ios_pb_2 from "../../assets/images/portfolio/ios_pb_2.png";
import ios_pb_3 from "../../assets/images/portfolio/ios_pb_3.png";
import ios_pb_4 from "../../assets/images/portfolio/ios_pb_4.png";
import property_bhandar from "../../assets/images/portfolio/property_bhandar.png";
import shiva_fireworks from "../../assets/images/portfolio/shiva_fireworks.png";

function Portfolio() {
  const categories = [
    "Web Development",
    "Android Development",
    "IOS Development",
  ];
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => setLoading(false), 1500);
  }, []);

  if (loading) {
    return (
      <Center height="100vh">
        <Spinner size="xl" color="blue.500" />
      </Center>
    );
  }

  const portfolioItems = [
    // Web Development Items
    {
      id: 1,
      category: "Web Development",
      name: "Aarti Multi Services",
      image: ams_website,
      link: "https://www.aartimultiservices.com/",
      description:
        "Aarti Multi Services offers strategic marketing solutions tailored to client goals. From innovative digital marketing campaigns to comprehensive business strategies, this platform empowers businesses to achieve growth and success. Check out our impactful solutions for businesses!",
    },
    {
      id: 2,
      category: "Web Development",
      name: "Property Bhandar",
      image: property_bhandar,
      link: "https://www.propertybhandar.com/",
      description:
        "Property Bhandar is your one-stop solution for buying and selling properties online. Featuring a user-friendly interface and advanced search filters, it simplifies the property buying and selling process. Explore property listings, connect with agents, and manage your real estate needs with ease.",
    },
    {
      id: 3,
      category: "Web Development",
      name: "Shiva's Fireworks",
      image: shiva_fireworks,
      link: "#",
      description:
        "Shiva's Fireworks is a platform designed to showcase a vibrant collection of fireworks products with an intuitive user experience. This project highlights modern web development practices to deliver engaging and visually appealing online shopping features.",
    },
    {
      id: 4,
      category: "Web Development",
      name: "Employee Management",
      image: employee_management,
      link: "#",
      description:
        "An Employee Management System designed to streamline organizational workflows. This project focuses on efficient employee data management, task allocation, and performance tracking to enhance productivity and simplify HR processes.",
    },
    // Android Development
    {
      id: 5,
      category: "Android Development",
      name: "Android App",
      images: [
        android_pb_1, // Replace with actual URLs
        android_pb_2,
        android_pb_3,
        android_pb_4,
      ],
      link: "https://play.google.com/store/apps/details?id=com.ams.propertybhandar",
      description:
        "This Android app delivers a seamless and engaging user experience for managing properties on the go. Designed with performance and usability in mind, the app includes features like property search, real-time updates, and push notifications, ensuring users stay informed and connected.",
    },
    // IOS Development
    {
      id: 6,
      category: "IOS Development",
      name: "iOS App",
      images: [
        ios_pb_1, // Replace with actual URLs
        ios_pb_2,
        ios_pb_3,
        ios_pb_4,
      ],
      link: "https://apps.apple.com/in/app/property-bhandar/id6727008703",
      description:
        "The Property Bhandar iOS app provides a comprehensive mobile solution for property management and browsing. With sleek design and intuitive navigation, the app allows users to explore property listings, connect with agents, and manage preferences with ease, all optimized for iOS devices.",
    },
  ];
  

  const filteredItems = portfolioItems.filter(
    (item) => item.category === activeCategory
  );

  const ImageSlider = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Change image every 3 seconds
      return () => clearInterval(interval);
    }, [images]);

    return (
      <Box position="relative" width="100%" height="100%" overflow="hidden">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Slide ${index}`}
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            objectFit="contain"
            opacity={index === currentImageIndex ? 1 : 0}
            transition="opacity 0.5s ease-in-out"
          />
        ))}
        {/* Circle pagination
        <Flex
          justifyContent="center"
          position="absolute"
          bottom="2px" // Adjusted space between images and pagination
          width="100%"
          gap={2}
          mb={0}
        >
          {images.map((_, index) => (
            <Circle
              key={index}
              size="10px"
              bg={index === currentImageIndex ? "blue.500" : "gray.300"}
              onClick={() => setCurrentImageIndex(index)}
              cursor="pointer"
            />
          ))}
        </Flex> */}
      </Box>
    );
  };
  ImageSlider.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  const renderWebDevelopment = () => (
    <Grid
      templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
      gap={12}
      justifyContent="center"
      alignItems="center"
      py={12}
    >
      {filteredItems.map((item, index) => (
        <Box
          key={item.id}
          position="relative"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="lg"
          transform={index === 1 ? "scale(1.05)" : "scale(1)"}
          transition="transform 0.3s ease"
          _hover={{ transform: "scale(1.08)", zIndex: 1 }}
          h={"sm"}
        >
          {/* Background Image */}
          <Image
            src={item.image}
            alt={item.category}
            objectFit="cover"
            width="100%"
            height="300px"
            filter="brightness(100%)"
          />

          {/* Overlay Content */}
          <VStack
            position="absolute"
            bottom="0"
            left="0"
            right="0"
            padding={4}
            color="white"
            bg="rgba(0, 0, 0, 0.6)"
            spacing={4}
          >
            <Heading size="md">{item.name}</Heading>
            <Text textAlign="center" fontSize="sm">
              {item.description}
            </Text>
            <Button
              size="sm"
              colorScheme="teal"
              variant="solid"
              onClick={() => window.open(item.link, "_blank")}
            >
              Visit Us
            </Button>
          </VStack>
        </Box>
      ))}
    </Grid>
  );

  const renderAndroidDevelopment = () => (
    <Grid
      templateColumns={{ base: "1fr", lg: "1fr 1fr 1fr" }}
      gap={6}
      py={12}
      justifyContent="center"
      alignItems="center"
    >
      {filteredItems.map((item) => (
        <Box
          key={item.id}
          p={6}
          borderRadius="lg"
          boxShadow="lg"
          textAlign="center"
          width="100%"
          maxWidth="400px" // Restrict max width for alignment
          mx="auto" // Center the box
        >
          {/* Image Section */}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            overflow="hidden"
            height="400px"
            mb={4}
            position="relative"
          >
            {/* Sliding Images */}
            {/* Sliding Images */}
            <ImageSlider images={item.images} />
          </Box>

          {/* Text Section */}
          <Heading size="sm" color="blue.600" mb={2}>
            {item.name}
          </Heading>
          <Text fontSize="sm" color="gray.600" mb={4}>
            {item.description}
          </Text>

          {/* Button */}
          <Button
            size="sm"
            colorScheme="purple"
            onClick={() => window.open(item.link, "_blank")}
          >
            View on Play Store
          </Button>
        </Box>
      ))}
    </Grid>
  );

  const renderIosDevelopment = () => (
    <Grid
      templateColumns={{ base: "1fr", lg: "1fr 1fr 1fr" }}
      gap={6}
      py={12}
      justifyContent="center"
      alignItems="center"
    >
      {filteredItems.map((item) => (
        <Box
          key={item.id}
          p={6}
          borderRadius="lg"
          boxShadow="lg"
          textAlign="center"
          width="100%"
          maxWidth="400px" // Restrict max width for alignment
          mx="auto" // Center the box
        >
          {/* Image Section */}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            overflow="hidden"
            height="400px"
            mb={4}
            position="relative"
          >
            {/* Sliding Images */}
            {/* Sliding Images */}
            <ImageSlider images={item.images} />
          </Box>

          {/* Text Section */}
          <Heading size="sm" color="blue.600" mb={2}>
            {item.name}
          </Heading>
          <Text fontSize="sm" color="gray.600" mb={4}>
            {item.description}
          </Text>

          {/* Button */}
          <Button
            size="sm"
            colorScheme="purple"
            onClick={() => window.open(item.link, "_blank")}
          >
            View on Play Store
          </Button>
        </Box>
      ))}
    </Grid>
  );

  return (
    <Box bg="gray.50" py={12} px={{ base: 4, md: 12 }}>
      <VStack spacing={2} mb={8} textAlign="center">
        <Heading color="blue.600" fontSize={{ base: "2xl", md: "4xl" }}>
          Portfolio
        </Heading>
        <Text color="gray.600" fontSize={{ base: "md", md: "lg" }}>
          Explore our work and see how we&apos;ve delivered impact across
          various domains.
        </Text>
      </VStack>

      {/* Category Filters */}
      <Box
        overflowX="auto"
        mb={8}
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
          {categories.map((category) => (
            <Button
              key={category}
              colorScheme={activeCategory === category ? "blue" : "gray"}
              variant={activeCategory === category ? "solid" : "outline"}
              minWidth="180px" // Set a minimum width for each button
              width={{ base: "250px", sm: "auto" }} // Width for mobile and larger screens
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </ButtonGroup>
      </Box>

      {/* Render Based on Category */}
      {activeCategory === "Web Development" && renderWebDevelopment()}
      {activeCategory === "Android Development" && renderAndroidDevelopment()}
      {activeCategory === "IOS Development" && renderIosDevelopment()}
    </Box>
  );
}

export default Portfolio;
