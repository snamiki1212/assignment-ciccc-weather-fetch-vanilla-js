import React from "react";
import { ForecastSection } from "../forecast/ForecastSection";
import { useInput } from "../../hooks/useInput";
import { useFetchForecast } from "../../hooks/useFetchForecast";
import { useInputDays } from "../../hooks/useInputDays";
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

const DEFAULT_CITY_NAME = "Tokyo";

export function ForecastPage() {
  const [cityName, handleChangeCityName] = useInput(DEFAULT_CITY_NAME);
  const [days, handleChangeDays] = useInputDays();
  const { loading, forecast, createFetch } = useFetchForecast();
  const handleClick = React.useMemo(() => createFetch({ days, cityName }), [
    days,
    cityName,
    createFetch,
  ]);

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
