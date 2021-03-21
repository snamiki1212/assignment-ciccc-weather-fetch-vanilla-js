import React from "react";

const RETRY_DURATION_MILLISECOND = 1_000 * 2 * 60;

export const useSetInterval = ({
  on,
  callback: searchCurrentWeather,
}: {
  on: boolean;
  callback: Function;
}) => {
  React.useEffect(() => {
    if (!on) return;
    const handleInterval = setInterval(
      searchCurrentWeather,
      RETRY_DURATION_MILLISECOND
    );
    return () => clearInterval(handleInterval);
  }, [on, searchCurrentWeather]);
};
