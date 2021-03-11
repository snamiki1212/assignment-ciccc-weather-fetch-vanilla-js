import React from "react";
import { WeatherItemCard } from "../shared/WeatherItemCard";
import { useCurrentWeather } from "../../hooks/useCurrentWeather";
import { useToggle } from "../../hooks/useToggle";
import { Box, Button, Input, Checkbox, HStack, Text } from "@chakra-ui/react";

// TODO: modifable input
const RETRY_DURATION_MILLISECOND = 1_000 * 2 * 60;

export function CurrentPage() {
  // TODO: not using useState but to handle using useRef because of reducing re-rendering
  const [inputed, setInputed] = React.useState<string>("Vancouver");
  const [
    lastSearchedCityName,
    setLastSearchedCityName,
  ] = React.useState<string>(inputed);
  const { weather, searchWeather } = useCurrentWeather();

  const handleChange = React.useCallback((event) => {
    setInputed(event.target.value);
  }, []);

  const handleClick = React.useCallback(() => {
    console.log("[handleClick]");
    searchWeather(inputed).then(() => setLastSearchedCityName(inputed));
  }, [inputed, searchWeather]);

  const { on, toggle: handleToggle } = useToggle();

  React.useEffect(() => {
    console.log("[useEffect:initial-load-feature]");
    searchWeather();
  }, [searchWeather]);

  const searchCurrentWeather = React.useCallback(() => {
    searchWeather(lastSearchedCityName);
  }, [searchWeather, lastSearchedCityName]);

  React.useEffect(() => {
    console.log("[useEffect:interval-feature]");
    if (!on) return;
    const handleInterval = setInterval(
      searchCurrentWeather,
      RETRY_DURATION_MILLISECOND
    );
    return () => clearInterval(handleInterval);
  }, [on, searchCurrentWeather]);

  if (!weather) return <div></div>;

  return (
    <Box bg="gray.50" p={2}>
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
        <Checkbox onChange={handleToggle} isChecked={on}>
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
