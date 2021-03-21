import React from "react";
import { Icon } from "./Icon";
import { ForecastWeather, CurrentWeather } from "../../types";
import { Center, Box, Text, useColorModeValue } from "@chakra-ui/react";

type Props = { item: ForecastWeather["list"][0] | CurrentWeather };

const createDateFromUnixTime = (dt: number) => new Date(dt * 1_000); // REF: https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript

const renderYYMM = (date: Date) =>
  `${String(date.getHours()).padStart(2, "0")}:${String(
    date.getMinutes()
  ).padStart(2, "0")}`;

export function WeatherItemCard({ item }: Props) {
  const date = createDateFromUnixTime(item.dt);
  const day = date.toDateString();
  const time = renderYYMM(date);

  return (
    <Center>
      <Box
        boxShadow="2xl"
        align="center"
        rounded={"lg"}
        p={12}
        borderWidth={1}
        borderColor={useColorModeValue("gray.50", "gray.700")}
      >
        <Box>
          <Icon icon={item.weather[0]?.icon} width={55} />
        </Box>
        <Box align="center">
          <Text w={130}>{day}</Text>
          <Text>{time}</Text>
        </Box>
      </Box>
    </Center>
  );
}
