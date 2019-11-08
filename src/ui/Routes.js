import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

//Import Screens
import { HomeScreen } from "./screens/HomeScreen";
import { Error404Screen } from "./screens/Errors/Error404Screen";
import LogIn from "./screens/LogIn";
import SignUp from "./screens/SignUp";
import { Proveedores } from "./screens/Provedores";
import { ComoFunciona } from "./screens/ComoFunciona";
import { CartScreen } from "./screens/ShoppingCart";
import { TourScreen } from "./screens/Tours";
import { TourDescriptionScreen } from "./screens/TourDescription";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import RegisterTour from "./screens/RegisterTour";
import { RoleManager } from "./RoleManager";

export class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="bodyDiv">
            <Switch>
              <Route exact path="/" component={HomeScreen} />
              <Route exact path="/login" component={LogIn} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/proveedores" component={Proveedores} />
              <Route exact path="/como-funciona" component={ComoFunciona} />
              <Route exact path="/compras" component={CartScreen} />
              <Route exact path="/tours" component={TourScreen} />
              <Route
                exact
                path="/tours/info"
                component={TourDescriptionScreen}
              />
              <Route exact path="/registrar-tour" component={RegisterTour} />
              <Route exact path="" component={Error404Screen} />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
