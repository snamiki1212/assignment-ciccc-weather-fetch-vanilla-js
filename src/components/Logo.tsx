import React from "react";
import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
      bgClip="text"
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      fontSize="3xl"
      fontWeight="extrabold"
    >
      OpenWeatherApp
    </Text>
  );
}
