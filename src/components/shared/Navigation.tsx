import React from "react";
import { Logo } from "./Logo";
import { Link as ReactRouterLink } from "react-router-dom";
import { PATH, SNS } from "../../constants";
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

export function Navigation() {
  return (
    <Box p={2} bg={"pink.100"}>
      <Flex justifyContent="space-between">
        <HStack as={"nav"} spacing={7}>
          <Link
            as={ReactRouterLink}
            to={PATH.home}
            _hover={{ textDecoration: "none" }}
          >
            <Logo />
          </Link>
          <Link
            as={ReactRouterLink}
            to={PATH.forecast}
            _hover={{ textDecoration: "none" }}
          >
            <Button bg={"pink.100"} _hover={{ bg: "pink.50" }}>
              <Text
                bgClip="text"
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                fontWeight="extrabold"
              >
                Forecast
              </Text>
            </Button>
          </Link>
          <Link
            as={ReactRouterLink}
            to={PATH.current}
            _hover={{ textDecoration: "none" }}
          >
            <Button bg={"pink.100"} _hover={{ bg: "pink.50" }}>
              <Text
                bgClip="text"
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                fontWeight="extrabold"
              >
                Current
              </Text>
            </Button>
          </Link>
        </HStack>
        <Flex alignItems="center">
          <Link href={SNS.THIS_GITHUB} _hover={{ textDecoration: "none" }}>
            <Button bg="pink.400" color="white" _hover={{ bg: "pink.300" }}>
              GitHub
            </Button>
          </Link>
          <Menu>
            <MenuButton as={Button} variant={"link"} cursor={"pointer"}>
              <Avatar size="sm" src={SNS.MY_AVATOR} />
            </MenuButton>
            <MenuList>
              <MenuItem as={Link} isExternal href={SNS.MY_GITHUB}>
                GitHub
              </MenuItem>
              <MenuItem as={Link} isExternal href={SNS.MY_LINKEDIN}>
                Linkedin
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
}
