import React from "react";
import { WeatherCard } from "./WeatherCard";
import { useWeather } from "../hooks/useWeather";

// TODO: modifable input
const RETRY_DURATION_MILLISECOND = 1_000 * 2 * 60;

export function Page() {
  // TODO: not using useState but to handle using useRef because of reducing re-rendering
  const [inputed, setInputed] = React.useState<string>("vancouver");
  const [
    lastSearchedCityName,
    setLastSearchedCityName,
  ] = React.useState<string>(inputed);
  const { weather, searchWeather } = useWeather();

  const handleChange = React.useCallback((event) => {
    setInputed(event.target.value);
  }, []);

  const handleClick = React.useCallback(() => {
    console.log("[handleClick]");
    searchWeather(inputed).then(() => setLastSearchedCityName(inputed));
  }, [inputed, searchWeather]);

  // TODO: create useToggle
  const [toggle, setToggle] = React.useState<boolean>(true);
  const handleToggle = React.useCallback(() => {
    setToggle((prev) => !prev);
  }, []);
  //

  React.useEffect(() => {
    console.log("[useEffect:initial-load-feature]");
    searchWeather();
  }, [searchWeather]);

  React.useEffect(() => {
    console.log("[useEffect:interval-feature]");
    const handleInterval = setInterval(() => {
      searchWeather(lastSearchedCityName);
    }, RETRY_DURATION_MILLISECOND);
    return () => clearInterval(handleInterval);
  }, [searchWeather, lastSearchedCityName]);

  if (!weather) return <div></div>;

  return (
    <div>
      <div>
        <input type="checkbox" onChange={handleToggle} checked={toggle} />
        <span>Auto fetch</span>
      </div>

      <div>
        <input onChange={handleChange} value={inputed} />
        <button onClick={handleClick}>Search</button>
        <WeatherCard weather={weather} />
      </div>
    </div>
  );
}
