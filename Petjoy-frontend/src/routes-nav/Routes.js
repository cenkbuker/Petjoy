import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import LoginForm from "../login/LoginForm";
import RegisterForm from "../login/RegisterForm";
import ProductDetail from "../product/ProductDetail";
import Product from "../product/Product";
import PrivateRoute from "./PrivateRoute";

function Routes({ login, signup }) {

  return (
      <div className="pt-5">
        <Switch>

          <Route exact path="/">
            <Homepage />
          </Route>

          <Route exact path="/login">
            <LoginForm login={login} />
          </Route>

          <Route exact path="/signup">
            <RegisterForm signup={signup} />
          </Route>

          <Route exact path="/products">
            <Product/>
          </Route>

          <PrivateRoute exact path="/products/:name">
            <ProductDetail />
          </PrivateRoute>
          
          <Redirect to="/" />
        </Switch>
      </div>
  );
}

export default Routes;
