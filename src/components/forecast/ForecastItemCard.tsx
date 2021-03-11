import React from "react";
import { Icon } from "../Icon";
import { ForecastWeather } from "../../types";
import { Center, Box, Text } from "@chakra-ui/react";

type Props = { item: ForecastWeather["list"][0] };
export function ForecastItemCard({ item }: Props) {
  const _date = new Date(item.dt_txt);
  const day = _date.toDateString();
  const time = `${String(_date.getHours()).padStart(2, "0")}:${String(
    _date.getMinutes()
  ).padStart(2, "0")}`;

  return (
    <Center bg="gray.50">
      <Box boxShadow="2xl" align="center" rounded={"lg"} p={12}>
        <Box>
          <Icon icon={item.weather[0]?.icon} width={55} />
        </Box>
        <Box align="center">
          <Text w={130}>{day}</Text>
          <Text>{time}</Text>
          {/* <Text>{item.main.feels_like}</Text> */}
        </Box>
      </Box>
    </Center>
  );
}
