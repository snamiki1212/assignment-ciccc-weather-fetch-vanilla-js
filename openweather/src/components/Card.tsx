import React from "react";
import { useWeather } from "../hooks/useWeather";

export function Card() {
  // TODO: not using useState but to handle using useRef because of reducing re-rendering
  const [inputed, setInputed] = React.useState<string>("vancouver");
  const { weather, searchWeather } = useWeather();

  const handleChange = React.useCallback((event) => {
    setInputed(event.target.value);
  }, []);

  const handleClick = React.useCallback(() => {
    console.log("[handleClick]");
    searchWeather(inputed);
  }, [inputed, searchWeather]);

  React.useEffect(() => {
    console.log("[useEffect]");
    searchWeather();
  }, [searchWeather]);

  if (!weather) return <div></div>;

  return (
    <div>
      <input onChange={handleChange} value={inputed} />
      <button onClick={handleClick}>Search</button>
      <div>name: {weather.name}</div>
      <div>description: {weather.weather[0]?.description}</div>
    </div>
  );
}
