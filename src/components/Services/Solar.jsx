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

import consultation_planning_image from "../../assets/images/services_img/solar_img/consultation_planning_image.webp";
import maintenance_repair_image from "../../assets/images/services_img/solar_img/maintenance_repair_image.webp";
import solar_panel_image from "../../assets/images/services_img/solar_img/solar_panel_image.webp";

export default function Solar() {
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
      title: "Solar Panel Installation",
      description:
        "Upgrade your home's energy efficiency with our tailored solar installation services. Enjoy reduced energy bills, a lower carbon footprint, and increased property value. Our team manages everything from design to installation for seamless, reliable solar power.",
      image: solar_panel_image,
    },
    {
      title: "Maintenance & Repair",
      description:
        "Ensure your solar system operates at peak efficiency with our maintenance services. We provide inspections, cleaning, and repairs to maximize energy savings and extend the system's lifespan.",
      image: maintenance_repair_image,
    },
    {
      title: "Consultation & Planning",
      description:
        "Start your solar journey with expert consultation and planning. We assess your energy needs and design customized solutions to optimize savings and sustainability.",
      image: consultation_planning_image,
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
          AMS Solar Solutions
        </Heading>
        <Text
          mt={4}
          fontSize={{ base: "lg", md: "xl" }}
          maxW="3xl"
          textAlign="center"
          color="gray.600"
        >
          Harness the power of the sun with our efficient solar energy
          solutions. Save on energy bills, reduce your carbon footprint, and
          enjoy sustainable living with clean, renewable energy for your home or
          business.
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
