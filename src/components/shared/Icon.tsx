import React from "react";
import { Image } from "@chakra-ui/react";

const getIconUrl = (icon: string) =>
  `http://openweathermap.org/img/wn/${icon}@2x.png`;

type Props = {
  icon: string;
  [key: string]: any;
};

export function Icon({ icon, ...rest }: Props) {
  return <Image src={getIconUrl(icon)} {...rest} />;
}
