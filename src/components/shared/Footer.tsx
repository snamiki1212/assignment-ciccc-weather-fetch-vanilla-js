import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <Box py={10} bg="pink.50" flexGrow={1}>
      <Flex
        align={"center"}
        _before={{
          content: '""',
          borderBottom: "1px solid",
          borderColor: "gray.50",
          flexGrow: 1,
          mr: 8,
        }}
        _after={{
          content: '""',
          borderBottom: "1px solid",
          borderColor: "gray.50",
          flexGrow: 1,
          ml: 8,
        }}
      >
        <Logo />
      </Flex>
      <Text pt={6} fontSize={"sm"} textAlign={"center"} color="pink.700">
        © 2021 Shun Namiki
        <br />
        This page is created by React / TypeScript / ChakraUI.
      </Text>
    </Box>
  );
}
