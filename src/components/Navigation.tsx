import React from "react";
import { Logo } from "./Logo";
import { Link as ReactRouterLink } from "react-router-dom";
import { PATH } from "../constants";
import {
  Box,
  Flex,
  Text,
  Button,
  HStack,
  Link,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

const THIS_GITHUB =
  "https://github.com/snamiki1212/assignment-ciccc-weather-fetch-vanilla-js";
const MY_GITHUB = "https://github.com/snamiki1212";
const MY_LINKEDIN = "https://www.linkedin.com/in/snamiki1212/";
const MY_AVATOR =
  "https://avatars.githubusercontent.com/u/26793088?s=460&u=7cd8858ef043c328a3b729553c5ad81498bd65c4&v=4";

export function Navigation() {
  return (
    <Box p={2} bg={"pink.50"}>
      <Flex justifyContent="space-between">
        <HStack as={"nav"} spacing={7}>
          <Link
            as={ReactRouterLink}
            to={PATH.home}
            _hover={{ textDecoration: "none" }}
          >
            <Logo />
          </Link>
          <Button bg={"pink.50"} _hover={{ bg: "pink.100" }}>
            <Link
              as={ReactRouterLink}
              to={PATH.forecast}
              _hover={{ textDecoration: "none" }}
            >
              <Text
                bgClip="text"
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                fontWeight="extrabold"
              >
                Forecast
              </Text>
            </Link>
          </Button>
          <Button bg={"pink.50"} _hover={{ bg: "pink.100" }}>
            <Link
              as={ReactRouterLink}
              to={PATH.current}
              _hover={{ textDecoration: "none" }}
            >
              <Text
                bgClip="text"
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                fontWeight="extrabold"
              >
                Current
              </Text>
            </Link>
          </Button>
        </HStack>
        <Flex alignItems="center">
          <Link href={THIS_GITHUB} _hover={{ textDecoration: "none" }}>
            <Button>GitHub</Button>
          </Link>
          <Menu>
            <MenuButton as={Button} variant={"link"} cursor={"pointer"}>
              <Avatar size="sm" src={MY_AVATOR} />
            </MenuButton>
            <MenuList>
              <MenuItem as={Link} isExternal href={MY_GITHUB}>
                GitHub
              </MenuItem>
              <MenuItem as={Link} isExternal href={MY_LINKEDIN}>
                Linkedin
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
}
