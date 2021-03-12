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
} from "@chakra-ui/react";

const links = [
  { text: "Current", to: PATH.current },
  { text: "Forecast", to: PATH.forecast },
];

export function Navigation() {
  return (
    <Box p={2} bg={"gray.50"} borderBottomColor="gray.100" borderWidth={1}>
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
        <Flex alignItems="center">
          {links.map((link) => (
            <Link
              as={ReactRouterLink}
              to={link.to}
              _hover={{ textDecoration: "none" }}
            >
              <Button
                bg={"gray.50"}
                _hover={{
                  bg: "pink.50",
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
              bg="gray.50"
              color="gray.600"
              _hover={{ bg: "gray.100" }}
              borderWidth={1}
              borderColor={"gray.300"}
            >
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
