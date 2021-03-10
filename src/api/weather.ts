import { CurrentWeather, ForecastWeather } from "../types";

// APIs
const API_KEY = "b2b86779f50b9bf6a8c0808905029f25";
const PREFIX_URL = "https://api.openweathermap.org/data/2.5";
const SUFFIX_URL = `&appid=${API_KEY}`;

// urls
const getCurrentWeatherUrl = (cityName: string) =>
  PREFIX_URL + `/weather?q=${cityName}` + SUFFIX_URL;
const getForecastWeatherUrl = (cityName: string, days: number) =>
  PREFIX_URL + `/forecast?q=${cityName}&cnt=${days}` + SUFFIX_URL;

// fetchers
export const searchCurrentWeather = async (cityName: string) => {
  const url = getCurrentWeatherUrl(cityName);
  try {
    const res = await fetch(url);
    if (res.status === 404) {
      alert("maybe, city not found"); // TODO: Don't alert here
      return;
    }
    if (res.status !== 200) {
      console.error(res?.body);
      throw new Error("Unexpected status");
    }

    const weatherObj: CurrentWeather = await res.json(); // TODO: improve type
    return weatherObj;
  } catch (err) {
    console.error("SOMETHING ERROR HAPPEN: ", err);
  }
};

export const fetchForecastWeather = async (cityName: string, days: number) => {
  const url = getForecastWeatherUrl(cityName, days);
  try {
    const res = await fetch(url);
    if (res.status === 404) {
      alert("maybe, city not found"); // TODO: Don't alert here
      return;
    }
    if (res.status !== 200) {
      console.error(res?.body);
      throw new Error("Unexpected status");
    }

    const weatherObj: ForecastWeather = await res.json(); // TODO: improve type
    return weatherObj;
  } catch (err) {
    console.error("SOMETHING ERROR HAPPEN: ", err);
  }
};
