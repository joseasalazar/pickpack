import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

//Import Screens
import { HomeScreen } from "./screens/HomeScreen";
import { Error404Screen } from "./screens/Errors/Error404Screen";
import LogIn from "./screens/LogIn";
import { SignUp } from "./screens/SignUp";
import { Proveedores } from "./screens/Provedores";
import { TourScreen } from "./screens/Tours";
import { TourDescriptionScreen } from "./screens/TourDescription";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Registertourtrial from "./screens/RegisterTourTrial";

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
            <Route exact path="/tours" component={TourScreen} />
            <Route exact path="/tours/info" component={TourDescriptionScreen} />
            <Route exact path="/registertourtrial" component={Registertourtrial} />
            <Route exact path="" component={Error404Screen} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
