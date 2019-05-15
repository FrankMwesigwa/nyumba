import React , { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from "./layout/Navbar";
import Landing from "./layout/Landing";

import Register from "./auth/Register";
import Login from "./auth/Login";

class App extends Component {

  render (){
    return (
      <BrowserRouter>
      <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </div>
      </BrowserRouter>
    );

  }
  
}

export default App;
