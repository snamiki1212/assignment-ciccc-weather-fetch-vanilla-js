import React from "react";
import { MemoryRouter as Router, Switch, Route } from "react-router-dom";
import { PATH } from "./constants";
import { Navigation } from "./components/shared/Navigation";
import { Footer } from "./components/shared/Footer";
import { WeatherPage } from "./components/pages/WeatherPage";
import { ForecastPage } from "./components/pages/ForecastPage";
import { HomePage } from "./components/pages/HomePage";
import { ChakraProvider, Flex } from "@chakra-ui/react";

function Body() {
  return (
    <Switch>
      <Route path={PATH.current}>
        <WeatherPage />
      </Route>
      <Route path={PATH.forecast}>
        <ForecastPage />
      </Route>
      <Route path={PATH.home}>
        <HomePage />
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Flex minHeight="100vh" flexDir="column">
          <Navigation />
          <Body />
          <Footer />
        </Flex>
      </Router>
    </ChakraProvider>
  );
}

export default App;
