import React from "react";
import { inRange } from "../logics/utils";

export const useInputDays = (defaultNumberOfDays = 7) => {
  // TODO: not using useState, but useRef
  const [days, setDays] = React.useState<number>(defaultNumberOfDays);
  const handleChangeDays = React.useCallback((valueStr) => {
    const _days = parseInt(valueStr || 0);
    if (isNaN(_days)) return;
    if (!inRange(_days)) return;
    setDays(_days);
  }, []);
  return [days, handleChangeDays] as const;
};
