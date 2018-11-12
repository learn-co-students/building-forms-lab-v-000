import React, { Component } from 'react';
import Bands from './components/Bands';
import BandsContainer from './components/BandsContainer';

class App extends Component {
  render() {
    return (
        <div className="App">           
        <BandsContainer store={this.props.store}/>
        <Bands store={this.props.store}/>    
      </div>
    );
  }
};

export default App;
