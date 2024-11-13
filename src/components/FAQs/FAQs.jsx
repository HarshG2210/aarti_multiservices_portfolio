import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Heading, Text, VStack } from "@chakra-ui/react";

function FAQs() {
  return (
    <Box py={{ base: 10, md: 20 }} px={{ base: 4, md: 10 }} bg="gray.100">
      <VStack spacing={8} textAlign="center" maxW="1200px" mx="auto">
        <Heading as="h2" size="xl" color="blue.700">
          Frequently Asked Questions
        </Heading>
        <Text fontSize="lg" color="gray.700" maxW="3xl" mx="auto">
          Find the answers to some of the most common questions about our services.
        </Text>

        {/* Accordion for FAQs */}
        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text fontSize="lg" fontWeight="bold" color="blue.600">
                    What services do you provide?
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} color="gray.700">
              We offer a range of services including web design, app development, IT solutions, marketing, loans, and advertising.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text fontSize="lg" fontWeight="bold" color="blue.600">
                    How can I get in touch with you?
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} color="gray.700">
              You can contact us through email at info@aartimultiservices.com or call us at +91 9067000315 / +91 9067000316.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text fontSize="lg" fontWeight="bold" color="blue.600">
                    Do you offer custom solutions for businesses?
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} color="gray.700">
              Yes, we provide custom IT solutions, marketing strategies, and more based on your business&apos;s unique needs.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text fontSize="lg" fontWeight="bold" color="blue.600">
                    What is your pricing structure?
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} color="gray.700">
              Our pricing varies depending on the services you choose. We offer flexible plans for different needs, starting from basic packages to premium enterprise solutions.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text fontSize="lg" fontWeight="bold" color="blue.600">
                    How can I get a quote for your services?
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} color="gray.700">
              You can request a quote by contacting us through the form on our website or by reaching out via phone or email.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </VStack>
    </Box>
  );
}

export default FAQs;