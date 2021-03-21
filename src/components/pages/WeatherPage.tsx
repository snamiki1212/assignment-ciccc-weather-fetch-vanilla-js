import React from "react";
import { WeatherItemCard } from "../shared/WeatherItemCard";
import { useCurrentWeather } from "../../hooks/useCurrentWeather";
import { useToggle } from "../../hooks/useToggle";
import { useInput } from "../../hooks/useInput";
import { useSetInterval } from "../../hooks/useSetInterval";
import {
  Box,
  Button,
  Input,
  Checkbox,
  HStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const DEFAULT_CITY_NAME = "Vancouver";

export function WeatherPage() {
  const [inputed, handleChange] = useInput(DEFAULT_CITY_NAME);
  const { on, toggle: handleToggle } = useToggle();
  const { weather, searchWeather } = useCurrentWeather();
  const [
    lastSearchedCityName,
    setLastSearchedCityName,
  ] = React.useState<string>(inputed);

  const handleClick = React.useCallback(() => {
    searchWeather(inputed).then(() => setLastSearchedCityName(inputed));
  }, [inputed, searchWeather]);

  const searchCurrentWeather = React.useCallback(() => {
    searchWeather(lastSearchedCityName);
  }, [searchWeather, lastSearchedCityName]);

  React.useEffect(() => {
    searchWeather();
  }, [searchWeather]);

  useSetInterval({ on, callback: searchCurrentWeather });

  const bg = useColorModeValue("gray.50", "gray.900");
  if (!weather) return <div></div>;

  return (
    <Box bg={bg} p={2}>
      <Text
        align="center"
        bgClip="text"
        bgGradient="linear(to-b, #7928CA, #FF0080)"
        fontSize="3xl"
        fontWeight="extrabold"
      >
        Current Weather
      </Text>
      <Box p={5}>
        <HStack>
          <Input onChange={handleChange} value={inputed} />
          <Button
            onClick={handleClick}
            bg="pink.600"
            color="white"
            _hover={{
              bg: "pink.500",
            }}
          >
            Search
          </Button>
        </HStack>
        <Checkbox onChange={handleToggle} isChecked={on} colorScheme={"pink"}>
          Auto fetch
        </Checkbox>
      </Box>

      <Box p={10} align="center">
        <Text
          bgClip="text"
          bgGradient="linear(to-b, #7928CA, #FF0080)"
          fontSize="3xl"
          fontWeight="extrabold"
        >
          {lastSearchedCityName}
        </Text>
        <WeatherItemCard item={weather} />
      </Box>
    </Box>
  );
}
