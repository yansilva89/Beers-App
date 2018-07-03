import React, { Component } from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';

import './../App.scss';

import BeersContainer from './sub-components/BeersContainer';
import BeersDetails from './sub-components/BeersDetails';

class App extends Component {
  render() {
    return (
      <Router history={this.props.history}>
          <Switch>
              <Route exact path="/" component={BeersContainer}/>
              <Route path='/beer-details' component={BeersDetails}/>              
          </Switch>
      </Router>
    );
  }
}

export default App;