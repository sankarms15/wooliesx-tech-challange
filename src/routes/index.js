import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Product from '../pages/product';
import Cart from "../pages/cart";

const Routes = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Product}/>
          <Route path="/cart" component={Cart} />
        </Switch>
    </Router>
  );
}

export default Routes;