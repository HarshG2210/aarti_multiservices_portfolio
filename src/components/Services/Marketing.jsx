import {
  Box,
  Center,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  Spinner,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import {
  MdBrandingWatermark,
  MdContentPaste,
  MdEmail,
  MdOutlinePublic,
} from "react-icons/md";
import { useEffect, useState } from "react";

export default function Marketing() {
    
  const [loading, setLoading] = useState(true);
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
  return (
    <Box maxW="4xl" mx="auto" p={6}>
      {/* Main Heading */}
      <Heading
        as="h1"
        fontSize={{ base: "3xl", md: "5xl" }}
        fontWeight="bold"
        color="black"
        textAlign="center"
        mb={4}
      >
        Marketing Services
      </Heading>
      <Text
        fontSize={{ base: "lg", md: "xl" }}
        color="gray.600"
        textAlign="center"
        mb={8}
      >
        Our marketing services are designed to help you reach your target
        audience effectively and boost your brand visibility through strategic
        and innovative campaigns.
      </Text>

      <Divider mb={6} />

      <Tabs variant="enclosed" isFitted mb={6}>
        <TabList
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          gap={4}
          mb={6}
        >
          <Tab>
            <MdOutlinePublic size={20} />
            Digital Marketing
          </Tab>
          <Tab>
            <MdContentPaste size={20} />
            Content Marketing
          </Tab>
          <Tab>
            <MdEmail size={20} />
            Email Marketing
          </Tab>
          <Tab>
            <MdBrandingWatermark size={20} />
            Branding and Identity
          </Tab>
        </TabList>

        <TabPanels>
          {/* Digital Marketing Tab */}
          <TabPanel>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={6}
            >
              <GridItem>
                <Stack spacing={4}>
                  <Heading size="sm">Digital Marketing</Heading>
                  <Text>
                    We provide a comprehensive digital marketing strategy that
                    includes SEO, social media marketing, and content creation.
                    Our team leverages the latest tools to help your brand grow
                    online.
                  </Text>
                </Stack>
              </GridItem>
              <GridItem>
                <Image
                  src="https://via.placeholder.com/500x300"
                  alt="Digital Marketing"
                  borderRadius="lg"
                  objectFit="cover"
                  width="100%"
                  height="auto"
                />
              </GridItem>
            </Grid>
          </TabPanel>

          {/* Content Marketing Tab */}
          <TabPanel>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={6}
            >
              <GridItem>
                <Stack spacing={4}>
                  <Heading size="sm">Content Marketing</Heading>
                  <Text>
                    Our content marketing services focus on creating engaging,
                    valuable content tailored to your audience, driving traffic,
                    and building long-term customer relationships.
                  </Text>
                </Stack>
              </GridItem>
              <GridItem>
                <Image
                  src="https://via.placeholder.com/500x300"
                  alt="Content Marketing"
                  borderRadius="lg"
                  objectFit="cover"
                  width="100%"
                  height="auto"
                />
              </GridItem>
            </Grid>
          </TabPanel>

          {/* Email Marketing Tab */}
          <TabPanel>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={6}
            >
              <GridItem>
                <Stack spacing={4}>
                  <Heading size="sm">Email Marketing</Heading>
                  <Text>
                    We design email campaigns that resonate with your audience,
                    providing valuable information and promoting your services
                    effectively. Our team ensures high open rates and
                    engagement.
                  </Text>
                </Stack>
              </GridItem>
              <GridItem>
                <Image
                  src="https://via.placeholder.com/500x300"
                  alt="Email Marketing"
                  borderRadius="lg"
                  objectFit="cover"
                  width="100%"
                  height="auto"
                />
              </GridItem>
            </Grid>
          </TabPanel>

          {/* Branding and Identity Tab */}
          <TabPanel>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={6}
            >
              <GridItem>
                <Stack spacing={4}>
                  <Heading size="sm">Branding and Identity</Heading>
                  <Text>
                    Establish a strong brand identity with our branding
                    services. We create a consistent and compelling image that
                    sets you apart from the competition.
                  </Text>
                </Stack>
              </GridItem>
              <GridItem>
                <Image
                  src="https://via.placeholder.com/500x300"
                  alt="Branding and Identity"
                  borderRadius="lg"
                  objectFit="cover"
                  width="100%"
                  height="auto"
                />
              </GridItem>
            </Grid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
