import React from "react";

export const useToggle = (init = true) => {
  const [on, setOn] = React.useState<boolean>(init);
  const toggle = React.useCallback(() => {
    setOn((prev) => !prev);
  }, []);
  return { on, toggle };
};
