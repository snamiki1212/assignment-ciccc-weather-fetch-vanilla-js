import React from "react";
import { ForecastWeather } from "../types";
import { Icon } from "./Icon";
import { Center, HStack, Box, Text, Flex } from "@chakra-ui/react";

export function ForecastList({ forecast }: { forecast?: ForecastWeather }) {
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

type Props = { item: ForecastWeather["list"][0] };
function ForecastItemCard({ item }: Props) {
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
