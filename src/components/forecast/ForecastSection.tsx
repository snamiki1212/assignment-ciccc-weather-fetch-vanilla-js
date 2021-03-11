import React from "react";
import { ForecastWeather } from "../../types";
import { HStack, Box, Text } from "@chakra-ui/react";
import { ForecastItemCard } from "./ForecastItemCard";

export function ForecastSection({ forecast }: { forecast?: ForecastWeather }) {
  if (!forecast) return null;
  return (
    <Box p={4}>
      <Box align="center">
        <Text
          bgClip="text"
          bgGradient="linear(to-b, #7928CA, #FF0080)"
          fontSize="3xl"
          fontWeight="extrabold"
        >
          {forecast.city.name}
        </Text>
      </Box>
      <Box align="center">
        <HStack maxWidth="100vw" overflowX="scroll" spacing={10} p={30}>
          {forecast.list.map((item, idx) => (
            <ForecastItemCard item={item} key={idx} />
          ))}
        </HStack>
      </Box>
    </Box>
  );
}
