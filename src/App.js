import { Route, Link, Switch, NavLink, Redirect } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

import Welcome from "./components/Welcome";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import Product from "./components/Product";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <ul>
        <li>
          <NavLink activeClassName={'App-link'} to="/" exact>Welcome</NavLink>
        </li>
        <li>
          <NavLink activeClassName={'App-link'} to="/product">Products</NavLink>
        </li>
        <li>
          <NavLink activeClassName={'App-link'} to="/about-us">About us</NavLink>
        </li>
      </ul>

      <div>
        <Switch>

          <Route path='/home'>
            <Redirect to='/' />
          </Route>


          <Route path="/" exact>
            <Welcome />
          </Route>

          <Route path="/about-us">
            <AboutUs />
          </Route>

          <Route path="/product" exact>
            <Products />
          </Route>

          <Route path="/product/:id">
            <Product />
          </Route>

        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
