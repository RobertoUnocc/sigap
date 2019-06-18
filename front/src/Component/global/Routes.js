import React from "react";
import { Route, Switch } from "react-router-dom";

import CheckCollection from "../CheckCollection";
import NewCollection from "../NewCollection";
import Login from "../Login";
import NotFound from "./NotFound";

export default () =>
  <Switch>
              <Route path="/collection" component={CheckCollection} />
              <Route exact path="/" component={Login} />
               <Route path="/nueva" component={NewCollection} />
               <Route component={NotFound} />
          </Switch>;
