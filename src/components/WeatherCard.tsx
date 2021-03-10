import React from "react";
import { CurrentWeather } from "../types";

type Props = { weather: CurrentWeather };

export function WeatherCard({ weather }: Props) {
  return (
    <div>
      <div>feels_like: {weather.main.feels_like}</div>
      <div>name: {weather.name}</div>
      <div>description: {weather.weather[0]?.description}</div>
    </div>
  );
}
