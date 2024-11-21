import {
  Box,
  Center,
  Divider,
  Grid,
  GridItem,
  Heading,
  Icon,
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
  FaCheckCircle,
  FaFileAlt,
  FaHome,
  FaMoneyBillWave,
} from "react-icons/fa";
import {
  MdAccountBalance,
  MdAttachMoney,
  MdBusinessCenter,
  MdDirectionsCar,
  MdHome,
  MdSchool,
} from "react-icons/md";
import { useEffect, useState } from "react";

export default function Loan() {
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
        Loan Services
      </Heading>
      <Text
        mt={4}
        fontSize={{ base: "lg", md: "xl" }}
        maxW="3xl"
        mx="auto"
        color={"black"}
        textAlign={"center"}
      >
        Explore our various loan options tailored to meet your financial needs.
      </Text>

      <Divider my={6} />

      {/* Responsive Tabs */}
      <Tabs variant="enclosed" isFitted mb={6}>
        <TabList
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          gap={4}
          mb={6}
        >
          <Tab>
            <MdAccountBalance size={20} />
            Personal Loan
          </Tab>
          <Tab>
            <MdDirectionsCar size={20} />
            Car Loan
          </Tab>
          <Tab>
            <MdBusinessCenter size={20} />
            Business Loan
          </Tab>
          <Tab>
            <MdHome size={20} />
            Home Loan
          </Tab>
          <Tab>
            <MdSchool size={20} />
            Education Loan
          </Tab>
          <Tab>
            <MdAttachMoney size={20} />
            Payday Loan
          </Tab>
        </TabList>

        <TabPanels>
          {/* Personal Loan */}
          <TabPanel>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={6}
            >
              <GridItem>
                <Stack spacing={4}>
                  <Heading size="sm">Personal Loan</Heading>
                  <Text>
                    Personal loans designed to help with unexpected expenses,
                    debt consolidation, or personal projects. Quick approval and
                    flexible repayment terms.
                  </Text>
                </Stack>
              </GridItem>
              <GridItem>
                <Image
                  src="https://via.placeholder.com/500x300"
                  alt="Personal Loan"
                  borderRadius="lg"
                  objectFit="cover"
                  width="100%"
                  height="auto"
                />
              </GridItem>
            </Grid>
          </TabPanel>

          {/* Car Loan */}
          <TabPanel>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={6}
            >
              <GridItem>
                <Stack spacing={4}>
                  <Heading size="sm">Car Loan</Heading>
                  <Text>
                    Drive your dream car with our affordable car loan options.
                    Enjoy low-interest rates and easy monthly payments.
                  </Text>
                </Stack>
              </GridItem>
              <GridItem>
                <Image
                  src="https://via.placeholder.com/500x300"
                  alt="Car Loan"
                  borderRadius="lg"
                  objectFit="cover"
                  width="100%"
                  height="auto"
                />
              </GridItem>
            </Grid>
          </TabPanel>

          {/* Business Loan */}
          <TabPanel>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={6}
            >
              <GridItem>
                <Stack spacing={4}>
                  <Heading size="sm">Business Loan</Heading>
                  <Text>
                    Fuel your business growth with our flexible business loan
                    solutions, designed to meet small and large financing needs.
                  </Text>
                </Stack>
              </GridItem>
              <GridItem>
                <Image
                  src="https://via.placeholder.com/500x300"
                  alt="Business Loan"
                  borderRadius="lg"
                  objectFit="cover"
                  width="100%"
                  height="auto"
                />
              </GridItem>
            </Grid>
          </TabPanel>

          {/* Home Loan */}
          <TabPanel>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={6}
            >
              <GridItem>
                <Stack spacing={4}>
                  <Heading size="sm">Home Loan</Heading>
                  <Text>
                    Turn your homeownership dreams into reality with competitive
                    home loan rates and flexible terms.
                  </Text>
                </Stack>
              </GridItem>
              <GridItem>
                <Image
                  src="https://via.placeholder.com/500x300"
                  alt="Home Loan"
                  borderRadius="lg"
                  objectFit="cover"
                  width="100%"
                  height="auto"
                />
              </GridItem>
            </Grid>
          </TabPanel>

          {/* Education Loan */}
          <TabPanel>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={6}
            >
              <GridItem>
                <Stack spacing={4}>
                  <Heading size="sm">Education Loan</Heading>
                  <Text>
                    Invest in your future with our education loans. Designed to
                    cover tuition fees, books, and other education-related
                    expenses.
                  </Text>
                </Stack>
              </GridItem>
              <GridItem>
                <Image
                  src="https://via.placeholder.com/500x300"
                  alt="Education Loan"
                  borderRadius="lg"
                  objectFit="cover"
                  width="100%"
                  height="auto"
                />
              </GridItem>
            </Grid>
          </TabPanel>

          {/* Payday Loan */}
          <TabPanel>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={6}
            >
              <GridItem>
                <Stack spacing={4}>
                  <Heading size="sm">Payday Loan</Heading>
                  <Text>
                    Short-term payday loans to cover urgent expenses before your
                    next paycheck, with a simple application process.
                  </Text>
                </Stack>
              </GridItem>
              <GridItem>
                <Image
                  src="https://via.placeholder.com/500x300"
                  alt="Payday Loan"
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

      <Box>
        {/* Existing Loan component code */}

        {/* Simple Loan Process Section */}
        <Box mt={16} textAlign="center">
          <Heading fontSize="2xl" fontWeight="bold" color="black">
            Simple Loan Process
          </Heading>
          <Text mt={2} fontSize="lg" color="gray.600">
            Easy loan process, simple application, quick approval
          </Text>

          <Grid
            templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
            gap={6}
            mt={8}
          >
            <GridItem>
              <Stack spacing={3} align="center">
                <Icon as={FaHome} boxSize={10} color="blue.500" />
                <Heading size="md" color="black">
                  Choose Loan Amount
                </Heading>
                <Text fontSize="sm" color="gray.600" textAlign="center">
                  Choose your loan amount and terms to use loan.
                </Text>
              </Stack>
            </GridItem>

            <GridItem>
              <Stack spacing={3} align="center">
                <Icon as={FaFileAlt} boxSize={10} color="blue.500" />
                <Heading size="md" color="black">
                  Provide Document
                </Heading>
                <Text fontSize="sm" color="gray.600" textAlign="center">
                  Need to provide some basic documents for verification.
                </Text>
              </Stack>
            </GridItem>

            <GridItem>
              <Stack spacing={3} align="center">
                <Icon as={FaCheckCircle} boxSize={10} color="blue.500" />
                <Heading size="md" color="black">
                  Approved Loan
                </Heading>
                <Text fontSize="sm" color="gray.600" textAlign="center">
                  Our loan specialist verifies documents and approves the loan.
                </Text>
              </Stack>
            </GridItem>

            <GridItem>
              <Stack spacing={3} align="center">
                <Icon as={FaMoneyBillWave} boxSize={10} color="blue.500" />
                <Heading size="md" color="black">
                  Get your Money
                </Heading>
                <Text fontSize="sm" color="gray.600" textAlign="center">
                  Once approved, your loan amount is credited to your account.
                </Text>
              </Stack>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
