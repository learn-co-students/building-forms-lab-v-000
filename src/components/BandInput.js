// Add BandInput component
import React, { Component } from 'react'


export class BandInput extends Component {
    state = {
      name: '',
    };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: '', 
    });
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  render() {
    return(
      <div>
          <form onSubmit={(event) => this.handleSubmit(event)}> 
            <label>band name </label>
            <input 
              type="text" 
              onChange={(event) => this.handleChange(event)} 
              value = {this.state.name} />
            <br/>
            <input type="Submit" /><br/>  
          </form>  
      </div>
    )
  }
}



export default BandInput;

