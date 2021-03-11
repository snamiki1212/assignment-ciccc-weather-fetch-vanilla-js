import React from "react";
import { WeatherCard } from "../WeatherCard";
import { useCurrentWeather } from "../../hooks/useCurrentWeather";
import { useToggle } from "../../hooks/useToggle";
import { Box } from "@chakra-ui/react";

// TODO: modifable input
const RETRY_DURATION_MILLISECOND = 1_000 * 2 * 60;

export function CurrentPage() {
  // TODO: not using useState but to handle using useRef because of reducing re-rendering
  const [inputed, setInputed] = React.useState<string>("vancouver");
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
    <Box bg="gray.50">
      <div>
        <input type="checkbox" onChange={handleToggle} checked={on} />
        <span>Auto fetch</span>
      </div>

      <div>
        <input onChange={handleChange} value={inputed} />
        <button onClick={handleClick}>Search</button>
        <WeatherCard weather={weather} />
      </div>
    </Box>
  );
}
