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

import app_development from "../../assets/images/services_img/it_solution_services/app_development.webp";
import data_analysis from "../../assets/images/services_img/it_solution_services/data_analysis.webp";
import database_security from "../../assets/images/services_img/it_solution_services/data_security.webp";
import digital_marketing from "../../assets/images/services_img/it_solution_services/digital_marketing.webp";
import it_consultancy from "../../assets/images/services_img/it_solution_services/it_consultancy.webp";
import it_management from "../../assets/images/services_img/it_solution_services/it_management.webp";
import ui_ux_design from "../../assets/images/services_img/it_solution_services/ui_ux_design.webp";
import web_development from "../../assets/images/services_img/it_solution_services/web_development.webp";

export default function ITSolution() {
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
      title: "Web Development",
      description:
        "We design and develop fast, scalable, and responsive websites tailored to your business needs. Whether it's an e-commerce platform, corporate website, or portfolio, we ensure your site delivers an exceptional user experience. With expertise in the latest technologies and frameworks, we provide end-to-end solutions from design to deployment.",
      image: web_development,
    },
    {
      title: "Database Security",
      description:
        "Secure your critical data with our robust encryption, regular backups, and detailed audits. Our team specializes in protecting sensitive information from cyber threats, ensuring compliance with industry regulations, and implementing disaster recovery solutions. Safeguard your business operations with confidence.",
      image: database_security,
    },
    {
      title: "IT Consultancy",
      description:
        "Leverage our expertise to align technology with your business goals. From strategy planning to system implementation, we help businesses achieve seamless scalability and operational efficiency. Our consultants provide personalized recommendations to optimize your IT infrastructure and drive innovation.",
      image: it_consultancy,
    },
    {
      title: "App Development",
      description:
        "Build powerful cross-platform apps that deliver exceptional performance on iOS and Android. Our developers use modern tools and methodologies to create intuitive, feature-rich applications tailored to your audience. From wireframes to launch, we ensure your app stands out in a competitive market.",
      image: app_development,
    },
    {
      title: "UI/UX Design",
      description:
        "Enhance user engagement with our visually stunning and intuitive design solutions. We craft interfaces that are not only beautiful but also functional, ensuring users enjoy a seamless and enjoyable experience. Our designs prioritize accessibility, responsiveness, and brand consistency to make your digital presence shine.",
      image: ui_ux_design,
    },
    {
      title: "IT Management",
      description:
        "Ensure optimal performance of your systems with our proactive IT management services. We monitor and maintain your infrastructure to prevent downtime and resolve issues quickly. Our services include hardware and software updates, network optimization, and round-the-clock support to keep your business running smoothly.",
      image: it_management,
    },
    {
      title: "Digital Marketing",
      description:
        "Boost your brand’s visibility through data-driven strategies and impactful campaigns. From SEO and content marketing to social media and email campaigns, we help you connect with your target audience. Our approach ensures measurable results, increased engagement, and a higher return on investment.",
      image: digital_marketing,
    },
    {
      title: "Data Analysis",
      description:
        "Unlock valuable insights and drive innovation with our advanced analytics solutions. We help you make data-driven decisions through comprehensive reports, predictive analytics, and visualization tools. Empower your business to identify trends, optimize operations, and uncover new opportunities.",
      image: data_analysis,
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
          IT Solution Services
        </Heading>
        <Text
          mt={4}
          fontSize={{ base: "lg", md: "xl" }}
          maxW="3xl"
          textAlign="center"
          color="gray.600"
        >
          Elevate your business with our cutting-edge IT solutions. From web
          development to data security, we’ve got you covered.
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
