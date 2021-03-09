import React from "react";
import { Weather } from "../types";

// options
export const DEFAULT_CITY_NAME = "vancouver";
const API_KEY = "b2b86779f50b9bf6a8c0808905029f25";

// APIs
const PREFIX_URL = "https://api.openweathermap.org/data/2.5";
const SUFFIX_URL = `&appid=${API_KEY}`;
const getWeatherUrl = (cityName: string) =>
  PREFIX_URL + `/weather?q=${cityName}` + SUFFIX_URL;

const doSearchWeather = async (cityName: string) => {
  const url = getWeatherUrl(cityName);

  try {
    const res = await fetch(url);
    if (res.status === 404) {
      alert("maybe, city not found");
      return;
    }
    if (res.status !== 200) {
      console.error(res?.body);
      throw new Error("Unexpected status");
    }

    const weatherObj: Weather = await res.json(); // TODO: improve type
    return weatherObj;
  } catch (err) {
    console.error("SOMETHING ERROR HAPPEN: ", err);
  }
};

export const useWeather = () => {
  const [weather, setWeather] = React.useState<Weather | undefined>();

  const searchWeather = React.useCallback((cityName = DEFAULT_CITY_NAME) => {
    doSearchWeather(cityName).then((weatherObj) => {
      console.log("[after search]");
      if (!weatherObj) return;
      setWeather(weatherObj);
    });
  }, []);

  return { weather, searchWeather };
};
