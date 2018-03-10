import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home_container from './Home_container';
import SignIn from './SignIn';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path= "/" component={Home_container}/>
      <Route path = "/login" component={SignIn} />
    </Switch>
  </BrowserRouter>
)

export default Router;
