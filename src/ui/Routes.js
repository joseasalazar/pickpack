import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

//Import Screens
import { HomeScreen } from "./screens/HomeScreen";
import { Error404Screen } from "./screens/Errors/Error404Screen";
import LogIn from "./screens/LogIn";
import { SignUp } from "./screens/SignUp";
import { Proveedores } from "./screens/Provedores";
import { Tours } from "./screens/Tours";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/proveedores" component={Proveedores} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/proveedores" component={Proveedores} />
            <Route exact path="/tours" component={Tours} />
            <Route exact path="" component={Error404Screen} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
