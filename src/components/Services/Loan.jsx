import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Divider,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  Spinner,
  Stack,
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
import { useEffect, useState } from "react";

import business_loan from "../../assets/images/services_img/loan_img/business_loan.webp";
import car_loan from "../../assets/images/services_img/loan_img/car_loan.webp";
import education_loan from "../../assets/images/services_img/loan_img/education_loan.webp";
import home_loan from "../../assets/images/services_img/loan_img/home_loan.webp";
import payday_loan from "../../assets/images/services_img/loan_img/payday_loan.webp";
import personal_loan from "../../assets/images/services_img/loan_img/personal_loan.webp";

export default function Loan() {
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
      title: "Personal Loan",
      description:
        "Our personal loans are tailored to help you manage life's unexpected expenses, whether it's medical bills, home renovations, or a much-needed vacation. With quick approval, competitive interest rates, and flexible repayment terms, you can achieve your goals without financial stress. Simplified application processes and minimal documentation make it easier for you to access funds when you need them the most.",
      image: personal_loan,
    },
    {
      title: "Car Loan",
      description:
        "Drive your dream car today with our affordable car loan options. Enjoy low-interest rates, flexible repayment plans, and fast approval to make owning a vehicle easier than ever. Whether it's a new car or a pre-owned one, our tailored loan solutions help you hit the road in style. With hassle-free application procedures and expert guidance, we ensure a smooth financing experience.",
      image: car_loan,
    },
    {
      title: "Business Loan",
      description:
        "Fuel your business ambitions with our flexible business loan solutions. Whether you're starting a new venture, expanding operations, or managing cash flow, our loans are designed to cater to small and large-scale financial needs. Benefit from attractive interest rates, tailored repayment plans, and expert support to drive sustainable growth for your business.",
      image: business_loan,
    },
    {
      title: "Home Loan",
      description:
        "Turn your home ownership dreams into reality with our competitive home loan offerings. Enjoy low-interest rates, long-term repayment options, and personalized support throughout the process. Whether you're purchasing your first home, building a new one, or refinancing an existing mortgage, our hassle-free home loans are designed to make your journey seamless and rewarding.",
      image: home_loan,
    },
    {
      title: "Education Loan",
      description:
        "Invest in your future with our education loans that cover a wide range of academic needs. From tuition fees to books, accommodation, and other education-related expenses, our loans are designed to support students and their aspirations. With flexible repayment terms, affordable interest rates, and quick disbursement, you can focus on achieving your academic goals without financial worry.",
      image: education_loan,
    },
    {
      title: "Payday Loan",
      description:
        "Access quick and reliable short-term payday loans to cover urgent expenses before your next paycheck. Our simple application process, quick approvals, and transparent terms make managing unforeseen financial situations stress-free. Whether it's utility bills, emergency repairs, or unexpected costs, our payday loans are here to provide immediate assistance.",
      image: payday_loan,
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
          Loan Services
        </Heading>
        <Text
          mt={4}
          fontSize={{ base: "lg", md: "xl" }}
          maxW="3xl"
          textAlign="center"
          color="gray.600"
        >
          Explore our various loan options tailored to meet your financial
          needs.
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
      {/* Simple Loan Process Section */}
      <Box mt={16} textAlign="center">
        <Heading fontSize="2xl" fontWeight="bold" color="black">
          Simple Loan Process
        </Heading>
        <Text mt={2} fontSize="lg" color="gray.600">
          Experience a hassle-free loan process with simple steps, transparent
          terms, and quick approval.
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
                Select the loan amount and repayment terms that suit your
                financial needs. Use our loan calculator to determine the best
                option for your budget.
              </Text>
            </Stack>
          </GridItem>

          <GridItem>
            <Stack spacing={3} align="center">
              <Icon as={FaFileAlt} boxSize={10} color="blue.500" />
              <Heading size="md" color="black">
                Provide Documents
              </Heading>
              <Text fontSize="sm" color="gray.600" textAlign="center">
                Upload basic documents like ID proof, income verification, and
                address proof securely through our portal. Our team ensures a
                quick and seamless verification process.
              </Text>
            </Stack>
          </GridItem>

          <GridItem>
            <Stack spacing={3} align="center">
              <Icon as={FaCheckCircle} boxSize={10} color="blue.500" />
              <Heading size="md" color="black">
                Loan Approval
              </Heading>
              <Text fontSize="sm" color="gray.600" textAlign="center">
                Our loan specialists will thoroughly review your application and
                documents. Once verified, your loan is approved with minimal
                delay, keeping you updated throughout the process.
              </Text>
            </Stack>
          </GridItem>

          <GridItem>
            <Stack spacing={3} align="center">
              <Icon as={FaMoneyBillWave} boxSize={10} color="blue.500" />
              <Heading size="md" color="black">
                Receive Your Money
              </Heading>
              <Text fontSize="sm" color="gray.600" textAlign="center">
                Once approved, your loan amount is disbursed directly into your
                account. Enjoy quick access to funds and focus on achieving your
                goals.
              </Text>
            </Stack>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
