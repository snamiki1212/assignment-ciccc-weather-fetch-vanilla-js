import React from "react";
import { ForecastWeather } from "../types";

export function ForecastList({ forecast }: { forecast?: ForecastWeather }) {
  if (!forecast) return null;
  return (
    <table>
      <tbody>
        <tr>
          <td>city</td>
          <td>{forecast.city.name}</td>
        </tr>
        {forecast.list.map((item, idx) => (
          <tr key={idx}>
            <td>feelsLike</td>
            <td>{item.main.feels_like}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
