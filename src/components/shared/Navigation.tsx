import React from "react";
import { Logo } from "./Logo";
import { Link as ReactRouterLink } from "react-router-dom";
import { PATH, SNS } from "../../constants";
import {
  Box,
  Flex,
  Text,
  Button,
  Link,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
  Switch,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const links = [
  { text: "Weather", to: PATH.current },
  { text: "Forecast", to: PATH.forecast },
] as const;

export function Navigation() {
  const { colorMode, toggleColorMode } = useColorMode();
  const navButtonBg = useColorModeValue("gray.50", "gray.900");
  const navButtonHoverBg = useColorModeValue("pink.50", "pink.900");
  return (
    <Box
      p={2}
      bg={useColorModeValue("gray.50", "gray.900")}
      borderBottomColor={useColorModeValue("gray.100", "gray.700")}
      borderWidth={1}
    >
      <Flex justifyContent="space-between">
        <Box as={"nav"}>
          <Link
            as={ReactRouterLink}
            to={PATH.home}
            _hover={{ textDecoration: "none" }}
          >
            <Logo />
          </Link>
        </Box>
        <HStack>
          {links.map((link) => (
            <Link
              as={ReactRouterLink}
              to={link.to}
              _hover={{ textDecoration: "none" }}
            >
              <Button
                bg={navButtonBg}
                _hover={{
                  bg: navButtonHoverBg,
                }}
              >
                <Text
                  bgClip="text"
                  bgGradient="linear(to-l, #7928CA, #FF0080)"
                  fontWeight="extrabold"
                >
                  {link.text}
                </Text>
              </Button>
            </Link>
          ))}
          <Link href={SNS.THIS_GITHUB} _hover={{ textDecoration: "none" }}>
            <Button
              bg={useColorModeValue("gray.50", "gray.900")}
              color="gray.500"
              _hover={{ bg: useColorModeValue("gray.100", "gray.800") }}
            >
              GitHub
            </Button>
          </Link>
          <HStack p={2} spacing={1.5}>
            <Text>🌙</Text>
            <Switch
              isChecked={colorMode === "light"}
              onChange={toggleColorMode}
              colorScheme="pink"
            />
            <Text>☀️</Text>
          </HStack>
          <Menu>
            <MenuButton as={Button} variant={"link"} cursor={"pointer"}>
              <Avatar size="sm" src={SNS.MY_AVATOR} />
            </MenuButton>
            <MenuList>
              <MenuItem
                as={Link}
                isExternal
                href={SNS.MY_GITHUB}
                _hover={{ textDecor: "none" }}
              >
                GitHub
              </MenuItem>
              <MenuItem
                as={Link}
                isExternal
                href={SNS.MY_LINKEDIN}
                _hover={{ textDecor: "none" }}
              >
                Linkedin
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </Box>
  );
}
