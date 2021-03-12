import React from "react";
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <Box
      py={30}
      bgGradient={useColorModeValue(
        "linear(to-b, gray.50, pink.100)",
        "linear(to-b, gray.900, pink.900)"
      )}
      flexGrow={1}
    >
      <Flex justifyContent="center">
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
