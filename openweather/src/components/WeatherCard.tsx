import React from "react";
import { Weather } from "../types";

type Props = { weather: Weather };

export function WeatherCard({ weather }: Props) {
  return (
    <div>
      <div>feels_like: {weather.main.feels_like}</div>
      <div>name: {weather.name}</div>
      <div>description: {weather.weather[0]?.description}</div>
    </div>
  );
}
