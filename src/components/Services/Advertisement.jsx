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

import fleet_advertisement from "../../assets/images/services_img/advertisement_img/fleet_advertisement.webp";
import ooh_advertisement from "../../assets/images/services_img/advertisement_img/ooh_advertisement.webp";
import retail_advertisement from "../../assets/images/services_img/advertisement_img/retail_advertising.webp";
import way_finding_advertisement from "../../assets/images/services_img/advertisement_img/way_finding_signal.webp";

export default function Advertisement() {
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
      title: "Retail Advertisement",
      description:
        "We help brands establish a strong presence in retail environments. From in-store branding to point-of-purchase displays, our retail advertising solutions are designed to captivate attention, build trust, and convert shoppers into loyal customers. Whether you're launching a new product or strengthening your brand identity, we deliver impactful designs that leave a lasting impression.",
      image: retail_advertisement,
    },
    {
      title: "OOH Advertisement",
      description:
        "Maximize your brand's visibility with our Out-Of-Home (OOH) advertising services. We specialize in billboards, transit advertising, and digital signage located in prime areas to reach a diverse audience. Our creative campaigns ensure your brand stands out in high-traffic areas, delivering measurable impact and increased awareness.",
      image: ooh_advertisement,
    },
    {
      title: "Fleet Advertisement",
      description:
        "Turn your fleet into a powerful marketing tool with our fleet advertising services. Whether you have delivery vans, buses, or trucks, we design vibrant, attention-grabbing graphics that transform your vehicles into mobile billboards. This cost-effective solution increases brand exposure wherever your fleet goes.",
      image: fleet_advertisement,
    },
    {
      title: "Way-Finding Signals",
      description:
        "Enhance visitor experience with our professionally designed way-finding signals. Perfect for malls, corporate offices, hospitals, and event spaces, our clear, intuitive signage ensures easy navigation in complex environments. With a focus on aesthetics and functionality, our signals are crafted to align with your brand's identity.",
      image: way_finding_advertisement,
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
          Advertisement
        </Heading>
        <Text
          mt={4}
          fontSize={{ base: "lg", md: "xl" }}
          maxW="3xl"
          textAlign="center"
          color="gray.600"
        >
          Discover the wide range of advertising solutions we offer, tailored to
          meet your brand’s unique needs. Whether you&apos;re looking to captivate
          shoppers in retail spaces, increase visibility on the road, or guide
          visitors with professional signage, our innovative services are
          designed to help you stand out and succeed.
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
