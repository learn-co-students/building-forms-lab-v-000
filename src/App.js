import React, { Component } from 'react';
import BandInput from './components/BandInput';
import Bands from './components/Bands';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Bands store={this.props.store} />
        <BandInput store={this.props.store} />        
      </div>
    );
  }
}