import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/home/home";
import { PATHS } from "../constants/PATHS";
import NewGift from "../pages/newGift/newGift";

const Routes = () => (
  <Switch>
    <Route exact path={PATHS.HOME}>
      <Home />
    </Route>
    <Route path={PATHS.NEW_GIFT}>
      <NewGift />
    </Route>
    <Redirect to={PATHS.HOME} />
  </Switch>
);

export default Routes;
