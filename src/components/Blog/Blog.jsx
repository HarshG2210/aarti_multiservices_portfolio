import {
  Box,
  Button,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

function Blog() {
  // Array of blog posts
  const blogPosts = [
    {
      title: "How to Improve Your Website's Performance",
      description:
        "Learn the best practices for optimizing your website for speed and performance, from compressing images to minimizing JavaScript.",
      imageUrl: "https://source.unsplash.com/random/1600x900?technology",
      link: "/blog/1",
    },
    {
      title: "Understanding SEO in 2024",
      description:
        "A comprehensive guide to SEO strategies that work in 2024. Learn the latest tactics to boost your website's ranking on search engines.",
      imageUrl: "https://source.unsplash.com/random/1600x900?seo",
      link: "/blog/2",
    },
    {
      title: "The Future of Web Development",
      description:
        "Web development is evolving rapidly. This post explores upcoming trends, tools, and technologies that will shape the future of the web.",
      imageUrl: "https://source.unsplash.com/random/1600x900?web-development",
      link: "/blog/3",
    },
    {
      title: "Why Choose Cloud Hosting for Your Business",
      description:
        "Cloud hosting offers numerous benefits, including scalability, cost-effectiveness, and reliability. Here's why it's the right choice for your business.",
      imageUrl: "https://source.unsplash.com/random/1600x900?cloud-hosting",
      link: "/blog/4",
    },
  ];

  return (
    <Box py={{ base: 10, md: 20 }} px={{ base: 4, md: 10 }} bg="gray.100">
      <VStack spacing={8} maxW="1200px" mx="auto" textAlign="center">
        <Heading as="h2" size="xl" color="blue.700">
          Latest Blog Posts
        </Heading>
        <Text fontSize="lg" color="gray.700" maxW="3xl" mx="auto">
          Stay updated with the latest trends, tips, and insights from our
          industry experts.
        </Text>

        {/* Blog Post Grid */}
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={8}
          textAlign="left"
        >
          {blogPosts.map((post, index) => (
            <Box
              key={index}
              bg="white"
              borderRadius="md"
              boxShadow="md"
              overflow="hidden"
              _hover={{ boxShadow: "xl" }}
            >
              <Image
                src={post.imageUrl}
                alt={post.title}
                height="200px"
                width="100%"
                objectFit="cover"
              />
              <Box p={4}>
                <Heading as="h3" size="lg" color="blue.600" mb={2}>
                  <Link
                    href={post.link}
                    _hover={{ textDecoration: "underline" }}
                  >
                    {post.title}
                  </Link>
                </Heading>
                <Text color="gray.700" mb={4}>
                  {post.description}
                </Text>
                <Link href={post.link}>
                  <Button colorScheme="blue">Read More</Button>
                </Link>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
}

export default Blog;
