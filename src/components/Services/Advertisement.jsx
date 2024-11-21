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
  MdDirectionsCar,
  MdLocalMall,
  MdOutlineLocationOn,
  MdSignpost,
} from "react-icons/md";
import { useEffect, useState } from "react";

export default function Advertisement() {
    
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
        Infrastructure
      </Heading>
      <Text
        mt={4}
        fontSize={{ base: "lg", md: "xl" }}
        maxW="3xl"
        mx="auto"
        color={"black"}
        textAlign={"center"}
      >
        Our company&apos;s infrastructure includes the key systems and tools
        that keep our operations running smoothly and help us achieve our goals.
      </Text>

      <Divider mb={6} />

      {/* Responsive Tabs */}
      <Tabs variant="enclosed" isFitted mb={6}>
        <TabList
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          gap={4}
          mb={6}
        >
          <Tab>
            <MdLocalMall size={20} />
            RETAIL BRANDING
          </Tab>
          <Tab>
            <MdOutlineLocationOn size={20} />
            OOH ADVERTISING
          </Tab>
          <Tab>
            <MdDirectionsCar size={20} />
            FLEET ADVERTISING
          </Tab>
          <Tab>
            <MdSignpost size={20} />
            WAY FINDING SIGNALS
          </Tab>
        </TabList>

        <TabPanels>
          {/* Retail Branding Tab */}
          <TabPanel>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={6}
            >
              <GridItem>
                <Stack spacing={4}>
                  <Heading size="sm">Retail Branding</Heading>
                  <Text>
                    We help brands establish a strong presence in retail
                    environments. Our retail branding solutions focus on
                    creating visually appealing displays that attract customers
                    and drive engagement.
                  </Text>
                </Stack>
              </GridItem>
              <GridItem>
                <Image
                  src="https://via.placeholder.com/500x300"
                  alt="Retail Branding"
                  borderRadius="lg"
                  objectFit="cover"
                  width="100%"
                  height="auto"
                />
              </GridItem>
            </Grid>
          </TabPanel>

          {/* OOH Advertising Tab */}
          <TabPanel>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={6}
            >
              <GridItem>
                <Stack spacing={4}>
                  <Heading size="sm">OOH Advertising</Heading>
                  <Text>
                    Our Out-Of-Home advertising services cover billboards,
                    transit advertising, and digital displays to maximize
                    visibility and reach your target audience in high-traffic
                    areas.
                  </Text>
                </Stack>
              </GridItem>
              <GridItem>
                <Image
                  src="https://via.placeholder.com/500x300"
                  alt="OOH Advertising"
                  borderRadius="lg"
                  objectFit="cover"
                  width="100%"
                  height="auto"
                />
              </GridItem>
            </Grid>
          </TabPanel>

          {/* Fleet Advertising Tab */}
          <TabPanel>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={6}
            >
              <GridItem>
                <Stack spacing={4}>
                  <Heading size="sm">Fleet Advertising</Heading>
                  <Text>
                    Turn your vehicles into moving billboards with our fleet
                    advertising services. We design and implement eye-catching
                    graphics that promote your brand on the go.
                  </Text>
                </Stack>
              </GridItem>
              <GridItem>
                <Image
                  src="https://via.placeholder.com/500x300"
                  alt="Fleet Advertising"
                  borderRadius="lg"
                  objectFit="cover"
                  width="100%"
                  height="auto"
                />
              </GridItem>
            </Grid>
          </TabPanel>

          {/* Way Finding Signals Tab */}
          <TabPanel>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={6}
            >
              <GridItem>
                <Stack spacing={4}>
                  <Heading size="sm">Way Finding Signals</Heading>
                  <Text>
                    We create way-finding signals that guide visitors through
                    your space effectively. Our clear and intuitive designs
                    enhance the user experience in complex environments.
                  </Text>
                </Stack>
              </GridItem>
              <GridItem>
                <Image
                  src="https://via.placeholder.com/500x300"
                  alt="Way Finding Signals"
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