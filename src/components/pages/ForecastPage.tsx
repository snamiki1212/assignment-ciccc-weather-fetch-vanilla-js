import React from "react";
import { fetchForecastWeather } from "../../api/weather";
import { ForecastWeather } from "../../types";
import { ForecastList } from "../ForecastList";

const DEFAULT_NUMBER_OS_DAYS = 7;
const DEFAULT_CITY_NAME = "tokyo";
const MAX_DAYS = 16;
const isRange = (num: number) => num >= 0 && num <= MAX_DAYS;

export function ForecastPage() {
  const [cityName, setCityName] = React.useState<string>(DEFAULT_CITY_NAME);
  const [days, setDays] = React.useState<number>(DEFAULT_NUMBER_OS_DAYS);
  const [forecast, setForecst] = React.useState<ForecastWeather | undefined>(
    undefined
  );

  const handleChangeCityName = React.useCallback((event) => {
    setCityName(event.target.value);
  }, []);

  const handleChangeDays = React.useCallback((event) => {
    console.log("event.target.value", event.target.value, "event", event);
    const _days = parseInt(event.target.value || 0);
    if (isNaN(_days)) return;
    if (!isRange(_days)) return;
    setDays(_days);
  }, []);

  const handleClick = React.useCallback(() => {
    const _days = isRange(days) ? days : DEFAULT_NUMBER_OS_DAYS;
    console.log("cityname", cityName, "days", _days);
    fetchForecastWeather(cityName, _days)
      .then((data) => {
        if (!data) return;
        setForecst(data);
      })
      .catch((err) => console.log("oh, err", err));
  }, [days, cityName]);

  return (
    <div>
      <input
        value={cityName}
        onChange={handleChangeCityName}
        placeholder="e.g. Tokyo"
      />
      <input
        type="number"
        value={days}
        onChange={handleChangeDays}
        placeholder="e.g. 0~16"
      />
      <button onClick={handleClick}>Get Forecast</button>

      <ForecastList forecast={forecast} />
    </div>
  );
}
