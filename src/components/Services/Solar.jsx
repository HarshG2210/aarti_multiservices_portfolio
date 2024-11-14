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
import { MdBuild, MdEventAvailable, MdSolarPower } from "react-icons/md";

export default function Solar() {
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
        AMS Solar Solutions
      </Heading>
      <Text
        fontSize={{ base: "lg", md: "xl" }}
        color="gray.600"
        textAlign="center"
        mb={8}
      >
        Harness the power of the sun with our efficient solar energy solutions.
        Save on energy bills, reduce your carbon footprint, and enjoy
        sustainable living with clean, renewable energy for your home or
        business.
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
            <MdSolarPower size={20} />
            Solar Panel Installation
          </Tab>
          <Tab>
            <MdBuild size={20} />
            Maintenance & Repair
          </Tab>
          <Tab>
            <MdEventAvailable size={20} />
            Consultation & Planning
          </Tab>
        </TabList>

        <TabPanels>
          {/* Solar Panel Installation Tab */}
          <TabPanel>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={6}
            >
              <GridItem>
                <Stack spacing={4}>
                  <Heading size="sm">Residential Solar Installation</Heading>
                  <Text>
                    Elevate your home&apos;s energy efficiency with our
                    residential solar installation services. We provide a
                    personalized approach to designing and installing a solar
                    system tailored to your home&apos;s energy needs and roof
                    specifications. Enjoy significant savings on your energy
                    bills, reduce your carbon footprint, and increase your
                    property&apos;s value with clean, renewable energy. Our
                    expert team handles every step of the process—from initial
                    consultation and design to professional installation and
                    maintenance—to ensure you experience seamless, reliable
                    solar power for years to come.
                  </Text>
                </Stack>
              </GridItem>
              <GridItem>
                <Image
                  src="https://via.placeholder.com/500x300"
                  alt="Solar Panel Installation"
                  borderRadius="lg"
                  objectFit="cover"
                  width="100%"
                  height="auto"
                />
              </GridItem>
            </Grid>
          </TabPanel>

          {/* Maintenance & Repair Tab */}
          <TabPanel>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={6}
            >
              <GridItem>
                <Stack spacing={4}>
                  <Heading size="sm">Commercial Solar Setup</Heading>
                  <Text>
                    Transform your business with a tailored commercial solar
                    setup designed to optimize energy efficiency and reduce
                    operational costs. Our service includes a comprehensive
                    analysis of your energy needs, customized solar panel
                    installation, and integration with your existing
                    infrastructure. Benefit from substantial savings on energy
                    bills, enhance your company&apos;s sustainability, and take
                    advantage of available incentives and tax benefits. Our
                    expert team ensures a smooth installation process and
                    ongoing support, helping your business harness the power of
                    solar energy for a greener, more cost-effective future.
                  </Text>
                </Stack>
              </GridItem>
              <GridItem>
                <Image
                  src="https://via.placeholder.com/500x300"
                  alt="Maintenance & Repair"
                  borderRadius="lg"
                  objectFit="cover"
                  width="100%"
                  height="auto"
                />
              </GridItem>
            </Grid>
          </TabPanel>

          {/* Consultation & Planning Tab */}
          <TabPanel>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={6}
            >
              <GridItem>
                <Stack spacing={4}>
                  <Heading size="sm">Solar Maintenance</Heading>
                  <Text>
                    Regular solar maintenance is essential to ensure your system
                    operates at peak efficiency and delivers maximum energy
                    savings. Our comprehensive maintenance services include
                    routine inspections, cleaning of solar panels, and system
                    performance checks to prevent potential issues and extend
                    the lifespan of your investment. By keeping your panels free
                    from dirt, debris, and any technical faults, we help you get
                    the most out of your solar system while reducing energy
                    costs and maintaining sustainability. Let us take care of
                    your solar maintenance needs for long-term, reliable energy
                    performance.
                  </Text>
                </Stack>
              </GridItem>
              <GridItem>
                <Image
                  src="https://via.placeholder.com/500x300"
                  alt="Consultation & Planning"
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
