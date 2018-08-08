import React, { Component } from 'react';
import BandsContainer from './containers/BandsContainer';
import { Connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BandsContainer />
      </div>
    );
  }
};

export default App;
