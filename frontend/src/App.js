import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/servicios" component={Services} />
          <Route exact path="/contacto" component={Contact} />
        </Switch>
      </Router>
    )
  }
}

export default App;
