import React from "react";

const getIconUrl = (icon: string) =>
  `http://openweathermap.org/img/wn/${icon}@2x.png`;

type Props = {
  icon: string;
};

export function Icon({ icon }: Props) {
  return (
    <div>
      <img src={getIconUrl(icon)} />
    </div>
  );
}
