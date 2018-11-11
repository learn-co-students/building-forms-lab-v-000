import React, { Component } from 'react';
import Bands from './components/Bands';
import BandsContainer from './components/BandsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">           
        <BandsContainer />
        <Bands />    
      </div>
    );
  }
};

export default App;
