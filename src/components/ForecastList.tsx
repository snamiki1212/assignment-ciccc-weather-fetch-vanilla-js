import React from "react";
import { ForecastWeather } from "../types";
import { Icon } from "./Icon";

export function ForecastList({ forecast }: { forecast?: ForecastWeather }) {
  if (!forecast) return null;
  return (
    <div>
      <div>
        <li>{forecast.city.name}</li>
      </div>
      <table>
        <thead>
          <tr>
            <td>Date</td>
            <td>Feels Like</td>
            <td>Weather</td>
          </tr>
        </thead>
        <tbody>
          {forecast.list.map((item, idx) => (
            <tr key={idx}>
              <td>{item.dt_txt}</td>
              <td>{item.main.feels_like}</td>
              <td>
                <Icon icon={item.weather[0]?.icon} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
