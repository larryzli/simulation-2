import React from "react";
import {Switch, Route} from "react-router-dom";

import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Wizard from './components/Wizard/Wizard';

export default(
    <Switch>
        <Route component={Login} path="/" exact/>
        <Route component={Dashboard} path='/dashboard'/>
        <Route component={Wizard} path='/wizard'/>
    </Switch>
)