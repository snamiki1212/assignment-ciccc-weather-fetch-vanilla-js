import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { PATH } from "./constants";
import { Navigation } from "./components/Navigation";
import { CurrentPage } from "./components/pages/CurrentPage";
import { ForecastPage } from "./components/pages/ForecastPage";
import { HomePage } from "./components/pages/HomePage";

function App() {
  return (
    <Router>
      <Navigation />

      <Switch>
        <Route path={PATH.current}>
          <CurrentPage />
        </Route>
        <Route path={PATH.forecast}>
          <ForecastPage />
        </Route>
        <Route path={PATH.home}>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
