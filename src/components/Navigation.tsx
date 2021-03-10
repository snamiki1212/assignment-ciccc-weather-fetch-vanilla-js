import React from "react";
import { Link } from "react-router-dom";
import { PATH } from "../constants";

export function Navigation() {
  return (
    <nav>
      <li>
        <Link to={PATH.home}>Home</Link>
      </li>
      <li>
        <Link to={PATH.forecast}>Forecast</Link>
      </li>
      <li>
        <Link to={PATH.current}>Current</Link>
      </li>
    </nav>
  );
}
