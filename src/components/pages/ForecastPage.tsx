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
  Text,
  Flex,
  Spinner,
  Box,
} from "@chakra-ui/react";

const DEFAULT_NUMBER_OS_DAYS = 7;
const DEFAULT_CITY_NAME = "tokyo";
const MAX_DAYS = 16;
const isRange = (num: number) => num >= 0 && num <= MAX_DAYS;

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
    if (!isRange(_days)) return;
    setDays(_days);
  }, []);

  const handleClick = React.useCallback(() => {
    if (loading) return;
    setLoading(true);
    const _days = isRange(days) ? days : DEFAULT_NUMBER_OS_DAYS;
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
    <Stack bg="gray.50" p={2}>
      <Text
        bgClip="text"
        bgGradient="linear(to-b, #7928CA, #FF0080)"
        fontSize="3xl"
        fontWeight="extrabold"
      >
        Forecast
      </Text>
      <Stack p={2} m={2} borderRadius={10} borderWidth={1}>
        <Stack flexDir="row" align="center">
          <Text as="label">City Name</Text>
          <Input
            value={cityName}
            onChange={handleChangeCityName}
            placeholder="e.g. Tokyo"
          />
        </Stack>

        <Flex flexDir="row" align="center">
          <Text as="label">Days</Text>
          <NumberInput
            value={days}
            onChange={handleChangeDays}
            placeholder="e.g. 0~16"
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Flex>

        <Button
          onClick={handleClick}
          disabled={loading}
          bg="pink.600"
          color="white"
          _hover={{
            bg: "pink.400",
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
