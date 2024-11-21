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
  MdAnalytics,
  MdAppRegistration,
  MdBuild,
  MdBusinessCenter,
  MdDesignServices,
  MdSecurity,
  MdTrendingUp,
  MdWeb,
} from "react-icons/md";
import { useEffect, useState } from "react";

export default function ITSolution() {
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
    <Box>
      <Heading
        as="h1"
        fontSize={{ base: "3xl", md: "5xl" }}
        fontWeight="bold"
        color={"black"}
        textAlign={"center"}
      >
        IT Solution
      </Heading>
      <Text
        mt={4}
        fontSize={{ base: "lg", md: "xl" }}
        maxW="3xl"
        mx="auto"
        color={"black"}
        textAlign={"center"}
      >
        Our IT solutions encompass a wide range of services designed to
        streamline your business operations, improve security, and enhance your
        technological capabilities.
      </Text>

      <Divider mb={6} />

      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={6}
        alignItems="center"
      >
        {/* Text Content */}
        <GridItem>
          <Stack spacing={4}>
            <Text>
              We offer comprehensive support for your IT infrastructure, custom
              software development, cloud computing, data security, and more.
            </Text>
            <Text>
              Our solutions are tailored to your needs, ensuring that your
              business stays ahead of the curve in a fast-evolving digital
              landscape.
            </Text>
          </Stack>
        </GridItem>

        {/* Image */}
        <GridItem>
          <Image
            src="https://via.placeholder.com/500x300"
            alt="IT Solution"
            borderRadius="lg"
            objectFit="cover"
            width="100%"
            height="auto"
          />
        </GridItem>
      </Grid>

      <Box mt={10}>
        <Heading size="sm" mb={4}>
          Why Choose Our IT Solutions?
        </Heading>

        {/* Responsive Tabs */}
        <Tabs variant="enclosed" isFitted mb={6}>
          <TabList
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            gap={4}
            mb={6}
          >
            <Tab>
              <MdWeb size={20} />
              Web Development
            </Tab>
            <Tab>
              <MdSecurity size={20} />
              Database Security
            </Tab>
            <Tab>
              <MdBusinessCenter size={20} />
              IT Consultancy
            </Tab>
            <Tab>
              <MdAppRegistration size={20} />
              App Development
            </Tab>
            <Tab>
              <MdDesignServices size={20} />
              UI/UX Design
            </Tab>
            <Tab>
              <MdBuild size={20} />
              IT Management
            </Tab>
            <Tab>
              <MdTrendingUp size={20} />
              Digital Marketing
            </Tab>
            <Tab>
              <MdAnalytics size={20} />
              Data Analysis
            </Tab>
          </TabList>

          <TabPanels>
            {/* Web Development Tab */}
            <TabPanel>
              <Grid
                templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                gap={6}
              >
                <GridItem>
                  <Stack spacing={4}>
                    <Heading size="sm">Web Development</Heading>
                    <Text>
                      We offer front-end and back-end development for fast,
                      scalable, and responsive websites using modern frameworks
                      and technologies. Our team ensures a seamless user
                      experience across devices.
                    </Text>
                  </Stack>
                </GridItem>
                <GridItem>
                  <Image
                    src="https://via.placeholder.com/500x300"
                    alt="Web Development"
                    borderRadius="lg"
                    objectFit="cover"
                    width="100%"
                    height="auto"
                  />
                </GridItem>
              </Grid>
            </TabPanel>

            {/* Database Security Tab */}
            <TabPanel>
              <Grid
                templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                gap={6}
              >
                <GridItem>
                  <Stack spacing={4}>
                    <Heading size="sm">Database Security</Heading>
                    <Text>
                      We offer advanced data security solutions that include
                      encryption, firewalls, secure backups, and regular audits
                      to protect your database from breaches and cyber threats.
                    </Text>
                  </Stack>
                </GridItem>
                <GridItem>
                  <Image
                    src="https://via.placeholder.com/500x300"
                    alt="Database Security"
                    borderRadius="lg"
                    objectFit="cover"
                    width="100%"
                    height="auto"
                  />
                </GridItem>
              </Grid>
            </TabPanel>

            {/* IT Consultancy Tab */}
            <TabPanel>
              <Grid
                templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                gap={6}
              >
                <GridItem>
                  <Stack spacing={4}>
                    <Heading size="sm">IT Consultancy</Heading>
                    <Text>
                      Our IT consultants work with you to understand your
                      business objectives and recommend technology solutions
                      that align with your goals, ensuring efficiency and
                      scalability.
                    </Text>
                  </Stack>
                </GridItem>
                <GridItem>
                  <Image
                    src="https://via.placeholder.com/500x300"
                    alt="IT Consultancy"
                    borderRadius="lg"
                    objectFit="cover"
                    width="100%"
                    height="auto"
                  />
                </GridItem>
              </Grid>
            </TabPanel>

            {/* App Development Tab */}
            <TabPanel>
              <Grid
                templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                gap={6}
              >
                <GridItem>
                  <Stack spacing={4}>
                    <Heading size="sm">App Development</Heading>
                    <Text>
                      We specialize in building cross-platform mobile apps for
                      iOS and Android, ensuring a user-friendly experience and
                      seamless performance.
                    </Text>
                  </Stack>
                </GridItem>
                <GridItem>
                  <Image
                    src="https://via.placeholder.com/500x300"
                    alt="App Development"
                    borderRadius="lg"
                    objectFit="cover"
                    width="100%"
                    height="auto"
                  />
                </GridItem>
              </Grid>
            </TabPanel>

            {/* UI/UX Design Tab */}
            <TabPanel>
              <Grid
                templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                gap={6}
              >
                <GridItem>
                  <Stack spacing={4}>
                    <Heading size="sm">UI/UX Design</Heading>
                    <Text>
                      Our design team creates intuitive and visually appealing
                      user interfaces, focusing on the user experience to ensure
                      engagement and ease of use across platforms.
                    </Text>
                  </Stack>
                </GridItem>
                <GridItem>
                  <Image
                    src="https://via.placeholder.com/500x300"
                    alt="UI/UX Design"
                    borderRadius="lg"
                    objectFit="cover"
                    width="100%"
                    height="auto"
                  />
                </GridItem>
              </Grid>
            </TabPanel>

            {/* IT Management Tab */}
            <TabPanel>
              <Grid
                templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                gap={6}
              >
                <GridItem>
                  <Stack spacing={4}>
                    <Heading size="sm">IT Management</Heading>
                    <Text>
                      Ensure smooth operation of your IT infrastructure with our
                      managed services, including network monitoring, technical
                      support, and system optimization.
                    </Text>
                  </Stack>
                </GridItem>
                <GridItem>
                  <Image
                    src="https://via.placeholder.com/500x300"
                    alt="IT Management"
                    borderRadius="lg"
                    objectFit="cover"
                    width="100%"
                    height="auto"
                  />
                </GridItem>
              </Grid>
            </TabPanel>

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
                      Our digital marketing experts help grow your online
                      presence through SEO, social media, and content strategies
                      to increase visibility and drive customer engagement.
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

            {/* Data Analysis Tab */}
            <TabPanel>
              <Grid
                templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                gap={6}
              >
                <GridItem>
                  <Stack spacing={4}>
                    <Heading size="sm">Data Analysis</Heading>
                    <Text>
                      We provide data-driven insights using advanced analytics
                      to help you make informed decisions that lead to business
                      growth and innovation.
                    </Text>
                  </Stack>
                </GridItem>
                <GridItem>
                  <Image
                    src="https://via.placeholder.com/500x300"
                    alt="Data Analysis"
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
    </Box>
  );
}
