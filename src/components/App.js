import React, { Component } from 'react';
import './../App.scss';
import BeersContainer from './sub-components/BeersContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BeersContainer></BeersContainer>
      </div>
    );
  }
}

export default App;

