import {
  Badge,
  Box,
  Flex,
  IconButton,
  Image,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import {
  FaBell,
  FaBookmark,
  FaBox,
  FaCogs,
  FaFileAlt,
  FaFlag,
  FaHome,
  FaTag,
  FaUsers,
} from "react-icons/fa";

import { FiMenu } from "react-icons/fi";
import logo from "../../assets/images/logo.png"; // Replace with your logo path
import { useState } from "react";

const menuItems = [
  { icon: FaHome, label: "Dashboard" },
  { icon: FaBox, label: "Models" },
  { icon: FaBookmark, label: "Bookmarks" },
  { icon: FaFlag, label: "Milestones" },
  { icon: FaTag, label: "Labels" },
  { icon: FaFileAlt, label: "Documents" },
  { icon: FaUsers, label: "Members" },
  { icon: FaBell, label: "Notifications", badge: 8 },
  { icon: FaCogs, label: "Settings" },
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  return (
    <Box
      as="nav"
      bg="gray.800"
      color="white"
      h="100vh"
      p={4}
      position="sticky"
      top="0"
      w={isCollapsed ? "60px" : "200px"}
      transition="width 0.3s ease-in-out"
      shadow="lg"
    >
      {/* Logo and Toggle Button */}
      <Flex
        align="center"
        justify={isCollapsed ? "center" : "space-between"}
        mb={8}
      >
        {!isCollapsed && (
          <Image
            src={logo}
            alt="Logo"
            boxSize="40px"
            objectFit="contain"
            mx="auto"
          />
        )}
        <IconButton
          icon={<FiMenu />}
          aria-label="Toggle Menu"
          onClick={handleToggle}
          bg="transparent"
          _hover={{ bg: "gray.700" }}
          color="white"
        />
      </Flex>

      {/* Menu Items */}
      <VStack spacing={4} align={isCollapsed ? "center" : "stretch"}>
        {menuItems.map((item, idx) => (
          <Tooltip
            key={idx}
            label={isCollapsed ? item.label : ""}
            placement="right"
            hasArrow
          >
            <Flex
              align="center"
              bg="gray.700"
              _hover={{ bg: "gray.600" }}
              p={2}
              rounded="md"
              w="100%"
              cursor="pointer"
            >
              <item.icon size={20} />
              {!isCollapsed && (
                <Text ml={4} fontSize="sm" whiteSpace="nowrap">
                  {item.label}
                </Text>
              )}
              {item.badge && (
                <Badge ml="auto" colorScheme="red" rounded="full" px={2} py={1}>
                  {item.badge}
                </Badge>
              )}
            </Flex>
          </Tooltip>
        ))}
      </VStack>
    </Box>
  );
};

export default Sidebar;
