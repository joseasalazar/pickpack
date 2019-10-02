import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

//Import Screens
import HomeScreen from "./screens/HomeScreen";
import Error404Screen from "./screens/Errors/Error404Screen";

import Header from "./components/Header";
import Footer from "./components/Footer";

export class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="" component={Error404Screen} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
