import {
  Box,
  Text,
  Button,
} from "@chakra-ui/react";

const QuoteSection = () => {
  const handleGetQuoteClick = () => {
    // Trigger the mailto link when the "Get Quote" button is clicked
    window.location.href =
      "mailto:your-email@example.com?subject=Request for Quote&body=I would like to discuss my project needs.";
  };

  return (
    <Box bg="blue.900" py={16} px={8} color="white" textAlign="center">
      {/* Heading */}
      <Text
        fontSize={{ base: "3xl", md: "4xl" }}
        fontWeight="bold"
        color="white"
        mb={4}
      >
        Let&apos;s Discuss Your Projects
      </Text>

      {/* Description */}
      <Text fontSize="xl" color="gray.300" mb={8}>
        We pride ourselves with our ability to perform and deliver results. Use
        the form below to discuss your project needs with our team, we will get
        back asap.
      </Text>

      {/* Get Quote Button */}
      <Button
        onClick={handleGetQuoteClick}
        colorScheme="blue"
        size="lg"
        variant="solid"
      >
        Get Quote
      </Button>
    </Box>
  );
};

export default QuoteSection;
