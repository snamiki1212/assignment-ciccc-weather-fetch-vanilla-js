import React from "react";
import { CurrentWeather } from "../types";
import { searchCurrentWeather } from "../logics/api";

const DEFAULT_CITY_NAME = "vancouver";

export const useCurrentWeather = () => {
  const [weather, setWeather] = React.useState<CurrentWeather | undefined>();

  const searchWeather = React.useCallback((cityName = DEFAULT_CITY_NAME) => {
    return searchCurrentWeather(cityName).then((weatherObj) => {
      if (!weatherObj) return;
      setWeather(weatherObj);
    });
  }, []);

  return { weather, searchWeather };
};
