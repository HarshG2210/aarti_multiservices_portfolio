import {
  Box,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { MdDesignServices, MdDeveloperMode, MdHomeRepairService } from "react-icons/md";

export default function Infrastructure() {
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
            <MdDesignServices size={20} />
            Designing
          </Tab>
          <Tab>
            <MdDeveloperMode size={20} />
            Development
          </Tab>
          <Tab>
            <MdHomeRepairService size={20} />
            Construction
          </Tab>
        </TabList>

        <TabPanels>
          {/* Designing Tab */}
          <TabPanel>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={6}
            >
              <GridItem>
                <Stack spacing={4}>
                  <Heading size="sm">Designing</Heading>
                  <Text>
                    Our innovative designs are tailored to meet your unique
                    needs, ensuring functionality and aesthetic appeal. We
                    leverage cutting-edge technology to bring your vision to
                    life with precision and creativity.
                  </Text>
                </Stack>
              </GridItem>
              <GridItem>
                <Image
                  src="https://via.placeholder.com/500x300"
                  alt="Designing"
                  borderRadius="lg"
                  objectFit="cover"
                  width="100%"
                  height="auto"
                />
              </GridItem>
            </Grid>
          </TabPanel>

          {/* Development Tab */}
          <TabPanel>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={6}
            >
              <GridItem>
                <Stack spacing={4}>
                  <Heading size="sm">Development</Heading>
                  <Text>
                    Our development process ensures seamless project execution
                    from start to finish. We manage every detail with precision,
                    delivering efficient and timely results.
                  </Text>
                </Stack>
              </GridItem>
              <GridItem>
                <Image
                  src="https://via.placeholder.com/500x300"
                  alt="Development"
                  borderRadius="lg"
                  objectFit="cover"
                  width="100%"
                  height="auto"
                />
              </GridItem>
            </Grid>
          </TabPanel>

          {/* Construction Tab */}
          <TabPanel>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={6}
            >
              <GridItem>
                <Stack spacing={4}>
                  <Heading size="sm">Construction</Heading>
                  <Text>
                    We provide high-quality construction services, adhering to
                    the highest safety standards. Our skilled team ensures
                    durable and reliable results for every project.
                  </Text>
                </Stack>
              </GridItem>
              <GridItem>
                <Image
                  src="https://via.placeholder.com/500x300"
                  alt="Construction"
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