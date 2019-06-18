import React, { Component } from 'react'; 
import './global/css/App.css';

import { Switch, Route } from "react-router-dom";
import CheckCollection from "./CheckCollection";
import NewCollection from "./NewCollection";
import Login from "./Login";
import NotFound from './global/NotFound';
import GuardarRuta from './global/guardarRuta';
import Routes from './global/Routes';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Routes />
      </div>
    );
  }
}

export default App;
