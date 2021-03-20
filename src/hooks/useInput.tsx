import React from "react";

export const useInput = (defaultValue = "") => {
  // TODO: not using useState but to handle using useRef because of reducing re-rendering
  const [inputed, setInputed] = React.useState<string>(defaultValue);
  const handleChange = React.useCallback((event) => {
    setInputed(event.target.value);
  }, []);
  return [inputed, handleChange] as const;
};
