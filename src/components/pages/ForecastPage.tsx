import React from "react";
import { fetchForecastWeather } from "../../api/weather";
import { ForecastWeather } from "../../types";
import { ForecastSection } from "../forecast/ForecastSection";

import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  Input,
  Stack,
  HStack,
  Text,
  Spinner,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";

const DEFAULT_NUMBER_OS_DAYS = 7;
const DEFAULT_CITY_NAME = "Tokyo";
const MAX_DAYS = 16;
const inRange = (num: number) => num >= 0 && num <= MAX_DAYS;

export function ForecastPage() {
  const [cityName, setCityName] = React.useState<string>(DEFAULT_CITY_NAME);
  const [days, setDays] = React.useState<number>(DEFAULT_NUMBER_OS_DAYS);
  const [forecast, setForecst] = React.useState<ForecastWeather | undefined>(
    undefined
  );
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleChangeCityName = React.useCallback((event) => {
    setCityName(event.target.value);
  }, []);

  const handleChangeDays = React.useCallback((valueStr) => {
    const _days = parseInt(valueStr || 0);
    if (isNaN(_days)) return;
    if (!inRange(_days)) return;
    setDays(_days);
  }, []);

  const handleClick = React.useCallback(() => {
    if (loading) return;
    setLoading(true);
    const _days = inRange(days) ? days : DEFAULT_NUMBER_OS_DAYS;
    console.log("cityname", cityName, "days", _days);
    fetchForecastWeather(cityName, _days)
      .then((data) => {
        if (!data) return;
        setForecst(data);
      })
      .catch((err) => console.log("oh, err", err))
      .finally(() => setLoading(false));
  }, [days, cityName, loading]);

  return (
    <Stack bg={useColorModeValue("gray.50", "gray.900")} p={2}>
      <Text
        align="center"
        bgClip="text"
        bgGradient="linear(to-b, #7928CA, #FF0080)"
        fontSize="3xl"
        fontWeight="extrabold"
      >
        Forecast
      </Text>
      <Stack p={10} m={2} borderRadius={10} borderWidth={1}>
        <HStack align="center" justifyContent="space-between">
          <Text as="label" color="pink.800">
            City Name
          </Text>
          <Input
            value={cityName}
            onChange={handleChangeCityName}
            placeholder="e.g. Tokyo"
            width="80%"
            color="pink.800"
          />
        </HStack>

        <HStack align="center" justifyContent="space-between">
          <Text as="label" color="pink.800">
            Items
          </Text>
          <NumberInput
            value={days}
            onChange={handleChangeDays}
            placeholder="e.g. 0~16"
            width="80%"
            color="pink.800"
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </HStack>

        <Button
          onClick={handleClick}
          disabled={loading}
          bg="pink.600"
          color="white"
          _hover={{
            bg: "pink.500",
          }}
        >
          Get Forecast
        </Button>
      </Stack>

      {loading ? (
        <Box align="center">
          <Spinner color="pink" />
        </Box>
      ) : (
        <ForecastSection forecast={forecast} />
      )}
    </Stack>
  );
}
