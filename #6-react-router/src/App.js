import React from 'react';

import { Home } from "./componentes/home";
import { Page } from "./componentes/page";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container mt-5">
        <h2>Call for papers</h2>
        <Router>
          <Switch>
            <Route path="/" exact={true} component={Home}></Route>
            <Route path="/page" component={Page}></Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
