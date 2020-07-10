// Add BandInput component
import React, { Component } from 'react'
//import BandsContainer from '../containers/BandsContainer';


class BandInput extends Component {
	state = {
    	name: ''
	}

  handleOnChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const newBand = {...this.state};
    this.props.addBand(newBand);
    this.setState(
      {
     name: '' 
    });
  }

  render() {
    return(
      <div>
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        Band Input: <input type="input" name="input" value={this.state.name} onChange={(event) => this.handleOnChange(event)}
/>
        <input type="submit" value="Submit"/>
       </form>
      </div>
    )
  }
}


export default BandInput
