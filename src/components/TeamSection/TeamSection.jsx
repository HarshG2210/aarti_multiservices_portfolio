import {
  Avatar,
  Box,
  Grid,
  GridItem,
  HStack,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaGithub,
  FaGlobe,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import ambala from "../../assets/images/teams/thameshwari.jpg";
import dipikaji_img from "../../assets/images/teams/Deepika.webp";
import gaurav_sir from "../../assets/images/teams/Gaurav_sir.webp";
import harsh from "../../assets/images/teams/harsh.png"
import khushi from "../../assets/images/teams/khushi.jpg";
import mayur_img from "../../assets/images/teams/mayur.jpg";
import pankaj_bhai from "../../assets/images/teams/Pankaj_bhaiya.png";
import shiva_sir_img from "../../assets/images/teams/Siva_sir2.webp";
import shubham_sir from "../../assets/images/teams/Shubham_sir.webp";
import taniya_mam from "../../assets/images/teams/Taniya2.webp";

// Team Data
const teamMembers = [
  {
    id: 1,
    name: "SHIVANAND OMPRAKASH SINGH",
    role: "Director",
    image: shiva_sir_img,
    socials: {
      portfolio: "https://portfolio.example.com",
      linkedin:
        "https://www.linkedin.com/in/shivanand-singh-34bb45209?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      facebook: "https://www.facebook.com/shiva.singh.790256?mibextid=LQQJ4d",
      instagram:
        "https://www.instagram.com/shiva.singh__._?igsh=MWd2d3ljbXA5YzBkbg==",
      github: "https://github.com/example",
    },
  },
  {
    id: 2,
    name: "TANIYA SUKHDEVE",
    role: "Civil Engineer",
    image: taniya_mam,
    socials: {
      portfolio: "https://portfolio.example.com",
      linkedin:
        "https://www.linkedin.com/in/taniya-sukhdeve-9286151a3/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      facebook:
        "https://www.facebook.com/taniya.sukhdeve?mibextid=LQQJ4d&rdid=H18uRVrzxEYkupZz&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FZ9VjG9ypNeQfMYqv%2F%3Fmibextid%3DLQQJ4d",
      instagram:
        "https://www.instagram.com/t_a_n_i_y_a0208/?igsh=MWdqbGExZWJiN200NA%3D%3D",
      github: "https://github.com/example",
    },
  },
  {
    id: 3,
    name: "GAURAV BHONGADE",
    role: "Sr. Software Developer",
    image: gaurav_sir,
    socials: {
      portfolio: "https://gaurav-portfolio-nu.vercel.app/",
      linkedin: "https://www.linkedin.com/in/gaurav-bhongade-381a212aa/",
      facebook: "https://www.facebook.com/gaurav.bhongade.1",
      instagram:
        "https://www.instagram.com/gaurav_bhongade_/?igsh=MXc3dDVzd2sxdnB1Mw%3D%3D&utm_source=qr",
      github: "https://github.com/gaurav-bhongade",
    },
  },
  {
    id: 4,
    name: "SHUBHAM GHARDE",
    role: "Sr. Software Developer",
    image: shubham_sir,
    socials: {
      portfolio: "https://shubhams-portfolio-gamma.vercel.app/",
      linkedin:
        "https://www.linkedin.com/in/shubham-gharde-ba8a1b2aa/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      facebook:
        "https://www.facebook.com/people/Shubh-Gharde/pfbid02MzezxTyJJY4f4KbHXt1vC7RKY4ckHxqW4xWDQ2SGoDoNSuhZbuB4jmu7tfZPXqsEl/?mibextid=LQQJ4d&rdid=sJLNfMNdxsgsBKOK&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fua3qVXQTCsPXvuQ2%2F%3Fmibextid%3DLQQJ4d",
      instagram:
        "https://www.instagram.com/ghardeshubh/?igsh=dW5kb3ZkMndwcXdw&utm_source=qr",
      github: "https://github.com/shubhamgharde",
    },
  },
  {
    id: 5,
    name: "HARSH GOUR",
    role: "React Developer",
    image: harsh,
    socials: {
      portfolio: "https://portfolio.example.com",
      linkedin: "https://www.linkedin.com/in/harsh-gour-052874190/",
      facebook: "https://www.facebook.com/home.php",
      instagram: "https://www.instagram.com/_harsh_gour_4.2.0/",
      github: "https://github.com/HarshG2210",
    },
  },
  {
    id: 6,
    name: "PANKAJ SHAHU",
    role: "Marketing",
    image: pankaj_bhai,
    socials: {
      portfolio: "",
      linkedin:
        "https://www.linkedin.com/in/pankaj-shahu-8a8972312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      facebook:
        "https://www.facebook.com/pankaj.s.g.31?mibextid=qi2Omg&rdid=di0pA7Q9Ss5YvV0q&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FtLPWcjsAFYTc5xe3%2F%3Fmibextid%3Dqi2Omg",
      instagram:
        "https://www.instagram.com/pankaj_dsp_official?igsh=bmJjYjlwbGdiYmYx",
      github: "",
    },
  },
  {
    id: 7,
    name: "DEEPIKA PATLE",
    role: "Backend Developer",
    image: dipikaji_img,
    socials: {
      portfolio: "https://portfolio.example.com",
      linkedin:
        "https://www.linkedin.com/in/deepika-patle-597a4b320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      facebook: "https://twitter.com/example",
      instagram:
        "https://www.instagram.com/deepp_atle/?utm_source=qr&igsh=Y2UwdDlxaXcxYnA3",
      github: "https://github.com/example",
    },
  },
  {
    id: 8,
    name: "Mayur Dhomne",
    role: "Android Developer",
    image: mayur_img,
    socials: {
      portfolio: "https://mayur2005portfolio.netlify.app/",
      linkedin:
        "https://www.linkedin.com/in/mayur-dhomne-2b0a60270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      facebook: "https://twitter.com/example",
      instagram:
        "https://www.instagram.com/mayur__dhomne/profilecard/?igsh=MTlraHg0eWNzOHowcQ==",
      github: "https://github.com/mayurdhomne",
    },
  },
  {
    id: 9,
    name: "Thameshwari Ambala",
    role: "Android Developer",
    image: ambala,
    socials: {
      portfolio: "https://portfolio.example.com",
      linkedin:
        "https://www.linkedin.com/in/thameshwari-ambala?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      facebook: "https://twitter.com/example",
      instagram:
        "https://www.instagram.com/thaamuu_26/profilecard/?igsh=MXhrajVobHNhcjd4cw==",
      github: "https://github.com/Thameshwari26",
    },
  },
  {
    id: 10,
    name: "Khushi Raykundaliya",
    role: "Android Developer",
    image: khushi,
    socials: {
      portfolio: "https://portfolio.example.com",
      linkedin: "https://linkedin.com/in/example",
      facebook: "https://facebook.com/example",
      instagram: "https://instagram.com/example",
      github: "https://github.com/example",
    },
  },





];

// Component
const TeamSection = () => {
  return (
    <Box py={16} px={8} bg="gray.50">
      {/* Title Section */}
      <VStack spacing={4} mb={12} textAlign="center">
        <Text fontSize="4xl" fontWeight="bold" color="blue.500">
          Our Best Team
        </Text>
      </VStack>

      {/* Team Member Cards */}
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={10}
        maxW="1200px"
        mx="auto"
      >
        {teamMembers.map((member) => (
          <GridItem key={member.id} textAlign="center">
            <Box
              position="relative"
              p={6}
              bg="white"
              borderRadius="md"
              boxShadow="lg"
              _hover={{
                transform: "translateY(-10px)",
                boxShadow: "2xl",
              }}
              transition="transform 0.3s ease, box-shadow 0.3s ease"
              border="1px solid"
              borderColor="gray.200"
            >
              {/* Diamond Shape */}
              <Box
                bg="white"
                boxShadow="lg"
                transform="rotate(45deg)"
                w="150px"
                h="150px"
                mx="auto"
                mb={6}
                overflow="hidden"
                border="2px solid"
                borderColor="blue.400"
                _hover={{ borderColor: "blue.500" }}
                transition="border-color 0.3s ease"
              >
                <Avatar
                  src={member.image}
                  size="full"
                  position="absolute"
                  top={0}
                  left={0}
                  bottom={0}
                  right={0}
                  transform="rotate(-45deg)"
                />
              </Box>
              {/* Details */}
              <VStack spacing={2}>
                <Text fontSize="lg" fontWeight="bold" color="blue.600">
                  {member.name}
                </Text>
                <Text fontSize="lg" color="gray.500" fontWeight={"bold"}>
                  {member.role}
                </Text>
                {/* Social Media Icons */}
                <HStack spacing={3} mt={2}>
                  <IconButton
                    as="a"
                    href={member.socials.portfolio}
                    target="_blank"
                    aria-label="Portfolio"
                    icon={<FaGlobe />}
                    size="lg"
                    variant="ghost"
                    colorScheme="blue"
                  />
                  <IconButton
                    as="a"
                    href={member.socials.linkedin}
                    target="_blank"
                    aria-label="LinkedIn"
                    icon={<FaLinkedin />}
                    size="lg"
                    variant="ghost"
                    colorScheme="blue"
                  />
                  <IconButton
                    as="a"
                    href={member.socials.facebook}
                    target="_blank"
                    aria-label="Facebook"
                    icon={<FaFacebook />}
                    size="lg"
                    variant="ghost"
                    colorScheme="blue"
                  />
                  <IconButton
                    as="a"
                    href={member.socials.instagram}
                    target="_blank"
                    aria-label="Instagram"
                    icon={<FaInstagram />}
                    size="lg"
                    variant="ghost"
                    colorScheme="pink"
                  />
                  <IconButton
                    as="a"
                    href={member.socials.github}
                    target="_blank"
                    aria-label="GitHub"
                    icon={<FaGithub />}
                    size="lg"
                    variant="ghost"
                    colorScheme="gray"
                  />
                </HStack>
              </VStack>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default TeamSection;
