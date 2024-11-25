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

import branding_marketing from "../../assets/images/services_img/marketing/branding_marketing.webp";
import content_marketing from "../../assets/images/services_img/marketing/content_marketing.webp";
import digital_marketing from "../../assets/images/services_img/marketing/digital_marketing.webp";
import email_marketing from "../../assets/images/services_img/marketing/email_marketing.webp";

export default function Marketing() {
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
      title: "Digital Marketing",
      description:
        "We provide a comprehensive digital marketing strategy tailored to your unique business needs. From enhancing your website's search engine ranking through cutting-edge SEO techniques to leveraging social media platforms for maximum engagement, we ensure your brand achieves a strong online presence. Our data-driven approach helps attract, convert, and retain customers while maximizing ROI.",
      image: digital_marketing,
    },
    {
      title: "Content Marketing",
      description:
        "Our content marketing services focus on creating and distributing high-quality, valuable content that resonates with your target audience. From blog posts and infographics to videos and whitepapers, we craft engaging materials that drive traffic, generate leads, and build long-term customer relationships. Let us help you establish your brand as a thought leader in your industry.",
      image: content_marketing,
    },
    {
      title: "Email Marketing",
      description:
        "Reach your customers directly with our expertly designed email marketing campaigns. From personalized email templates to strategic scheduling, we deliver messages that inform, engage, and convert. Whether you're announcing a new product or nurturing leads, our campaigns are optimized for high open rates, click-throughs, and conversions.",
      image: email_marketing,
    },
    {
      title: "Branding Marketing",
      description:
        "Establish a powerful brand identity with our comprehensive branding marketing services. We focus on creating a consistent, memorable image across all channels that reflects your values and resonates with your audience. From logo design and messaging to brand guidelines, we ensure your brand stands out in a competitive market.",
      image: branding_marketing,
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
          Marketing Services
        </Heading>
        <Text
          mt={4}
          fontSize={{ base: "lg", md: "xl" }}
          maxW="3xl"
          textAlign="center"
          color="gray.600"
        >
          Our marketing services are designed to help you reach your target
          audience effectively and boost your brand visibility through strategic
          and innovative campaigns.
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
