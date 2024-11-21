import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";

import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate a form submission (You can replace this with an actual API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      toast({
        title: "Message sent.",
        description:
          "We have received your message and will get back to you soon.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }, 2000);
  };

  return (
    <Box
      bg="gray.50"
      py={16}
      px={8}
      color="white"
      textAlign="center"
      id="contact-us"
    >
      <Text
        fontSize={{ base: "2xl", md: "3xl" }}
        fontWeight="bold"
        color="blue.600"
      >
        Contact Us
      </Text>
      <Text color="orange.400" mb={8} fontSize="sm">
        Lorem ipsum dolor sit amet
      </Text>

      <Box
        maxW="600px"
        mx="auto"
        p={6}
        bg="white"
        borderRadius="md"
        boxShadow="lg"
      >
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <FormControl mb={4} isRequired>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your name"
              size="lg"
              bg="gray.50"
            />
          </FormControl>

          {/* Email Field */}
          <FormControl mb={4} isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your email"
              size="lg"
              bg="gray.50"
            />
          </FormControl>

          {/* Subject Field */}
          <FormControl mb={4} isRequired>
            <FormLabel htmlFor="subject">Subject</FormLabel>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Subject of your message"
              size="lg"
              bg="gray.50"
            />
          </FormControl>

          {/* Message Field */}
          <FormControl mb={6} isRequired>
            <FormLabel htmlFor="message">Message</FormLabel>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your message"
              size="lg"
              bg="gray.50"
              rows={6}
            />
          </FormControl>

          {/* Submit Button */}
          <Button
            type="submit"
            colorScheme="blue"
            size="lg"
            isLoading={isSubmitting}
            loadingText="Sending"
            width="full"
          >
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default ContactUs;
