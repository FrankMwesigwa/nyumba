import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./modules/layout/Navbar";
import Landing from "./modules/layout/Landing";

import Register from "./modules/auth/Register";
import Login from "./modules/auth/Login";

import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./modules/layout/Dashboard";


class App extends Component {

  render (){
    return (
      <BrowserRouter>
      <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );

  }
  
}

export default App;
