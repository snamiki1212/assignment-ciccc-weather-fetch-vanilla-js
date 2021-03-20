import React from "react";
import { ForecastWeather } from "../../types";
import { HStack, Box, Text } from "@chakra-ui/react";
import { WeatherItemCard } from "../shared/WeatherItemCard";

export function ForecastSection({ forecast }: { forecast?: ForecastWeather }) {
  if (!forecast) return null;
  return (
    <Box p={7}>
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
        <HStack
          maxWidth="100vw"
          overflowX="scroll"
          spacing={10}
          px={30}
          py={70}
        >
          {forecast.list.map((item, idx) => (
            <WeatherItemCard item={item} key={idx} />
          ))}
        </HStack>
      </Box>
    </Box>
  );
}
