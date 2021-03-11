import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Text, Box, Button, HStack, Link } from "@chakra-ui/react";
import { PATH } from "../../constants";

const pages = [
  {
    title: "Weather",
    description:
      "Access current weather data for any location including over 200,000 cities.",
    path: PATH.current,
  },
  {
    title: "Forecast",
    description:
      "5 day forecast including weather data every 3 hours is available at any location or city.",
    path: PATH.forecast,
  },
] as const;

export function HomePage() {
  return (
    <Box bg="gray.50" px={10}>
      <Box py={10}>
        <Text
          bgClip="text"
          bgGradient="linear(to-b, #7928CA, #FF0080)"
          fontSize={100}
          lineHeight="90px"
          fontWeight="extrabold"
        >
          Open
          <br />
          Weather
          <br />
          App
          <br />
        </Text>
      </Box>
      <HStack align="center" py={10}>
        {pages.map((page, idx) => (
          <Box
            key={idx}
            p={10}
            borderColor={"gray.300"}
            borderWidth={1}
            borderRadius="10px"
          >
            <Text
              bgClip="text"
              bgGradient="linear(to-b, #7928CA, #FF0080)"
              fontSize={50}
              fontWeight="extrabold"
            >
              {page.title}
            </Text>
            <Text color="pink.600">{page.description}</Text>
            <Link
              to={page.path}
              as={ReactRouterLink}
              _hover={{ textDecoration: "none" }}
            >
              <Button
                mt={4}
                bg="pink.500"
                _hover={{ bg: "pink.300" }}
                color={"white"}
              >
                Goto Page!
              </Button>
            </Link>
          </Box>
        ))}
      </HStack>
    </Box>
  );
}
