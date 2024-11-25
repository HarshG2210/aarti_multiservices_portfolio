import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  Spinner,
  Stack,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import construction_infrastructure from "../../assets/images/services_img/infrastructure_img/construction_infrastructure.webp";
import designing_infrastructure from "../../assets/images/services_img/infrastructure_img/designing_infrastructure.webp";
import development_infrastructure from "../../assets/images/services_img/infrastructure_img/development_infrastructure.webp";

export default function Infrastructure() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    // Simulating a data fetch with setTimeout
    setTimeout(() => {
      setLoading(false); // Data has loaded, so we set loading to false
    }, 2000); // 2 seconds for demonstration
  }, []);

  if (loading) {
    return (
      <Center height="100vh">
        <Spinner size="xl" color="blue.500" />
      </Center>
    );
  }
  const tabs = [
    {
      title: "Designing",
      description:
        "Our innovative designs are tailored to meet your unique needs, ensuring functionality, aesthetic appeal, and sustainability. We leverage cutting-edge technology and tools to bring your vision to life with precision and creativity. Whether it’s architectural blueprints, interior layouts, or urban planning, our expert team ensures each design is practical, efficient, and visually captivating. Collaboration with our clients at every stage guarantees that their ideas are reflected in the final outcome.",
      image: designing_infrastructure,
    },
    {
      title: "Development",
      description:
        "Our development process ensures seamless project execution from concept to completion. We manage every detail with precision, incorporating the latest industry standards and technologies to deliver efficient and timely results. From project planning and resource allocation to infrastructure implementation, we prioritize quality and client satisfaction. Our development team works collaboratively to address challenges and ensure projects are completed on time and within budget, setting a benchmark in excellence.",
      image: development_infrastructure,
    },
    {
      title: "Construction",
      description:
        "We provide high-quality construction services, adhering to the highest safety standards and delivering exceptional craftsmanship. Our skilled team ensures durable, reliable, and sustainable results for every project, whether residential, commercial, or industrial. Using advanced construction techniques and premium materials, we bring structures to life with efficiency and precision. Our commitment to excellence, attention to detail, and focus on safety ensure that each project exceeds expectations and withstands the test of time.",
      image: construction_infrastructure,
    },
  ];


  return (
    <Box bgGradient="linear(to-b, gray.50, white)" minHeight="100vh" py={10}>
      {/* Page Title */}
      <Center flexDirection="column" mb={8}>
        <Heading
          as="h1"
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight="extrabold"
          color="blue.600"
        >
          Infrastructure
        </Heading>
        <Text
          mt={4}
          fontSize={{ base: "lg", md: "xl" }}
          maxW="3xl"
          textAlign="center"
          color="gray.600"
        >
          Our company&apos;s infrastructure includes the key systems and tools
          that keep our operations running smoothly and help us achieve our
          goals.
        </Text>
        <Divider width="80%" mt={6} borderColor="purple.300" />
      </Center>

      {/* Tab Section */}
      <Box mt={16} px={8}>
        <Tabs variant="unstyled" index={activeTab} onChange={setActiveTab}>
          {/* ButtonGroup for Tabs */}
          <ButtonGroup
            overflowX="scroll"
            spacing={{ base: 4, md: 10 }}
            display="flex"
            pb={4}
            px={2}
            sx={{
              "::-webkit-scrollbar": { height: "8px" },
              "::-webkit-scrollbar-thumb": {
                background: "blue.600",
                borderRadius: "4px",
              },
              "::-webkit-scrollbar-track": { background: "gray.200" },
            }}
          >
            {tabs.map((tab, index) => (
              <Button
                key={index}
                onClick={() => setActiveTab(index)}
                variant={activeTab === index ? "solid" : "outline"}
                colorScheme="blue"
                whiteSpace="nowrap"
                minWidth="150px" // Set a minimum width for each button
                width={{ base: "200px", sm: "auto" }} // Width for mobile and larger screens
              >
                {tab.title}
              </Button>
            ))}
          </ButtonGroup>

          {/* Tab Content */}
          <TabPanels>
            {tabs.map((tab, index) => (
              <TabPanel key={index}>
                <Grid
                  templateColumns={{ base: "1fr", md: "1fr 2fr" }} // Adjust layout
                  alignItems="center"
                  gap={8}
                >
                  {/* Left Section: Image */}
                  <GridItem>
                    <Image
                      src={tab.image} // Use unique images
                      alt={tab.title}
                      borderRadius="lg"
                      shadow="lg"
                      objectFit="cover"
                    />
                  </GridItem>

                  {/* Right Section: Title and Description */}
                  <GridItem>
                    <Stack spacing={6}>
                      <Heading size="lg" color="blue.600">
                        {tab.title}
                      </Heading>
                      <Text fontSize="lg" color="gray.600" lineHeight="1.8">
                        {tab.description}
                      </Text>
                    </Stack>
                  </GridItem>
                </Grid>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}
