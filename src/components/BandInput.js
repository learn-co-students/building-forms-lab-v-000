// Add BandInput component
import React, { Component } from 'react'


class BandInput extends Component {

  state = {
    name: ''
  };

  handleChange = (event) => this.setState( {name: event.target.value}) ; 
 
  handleSubmit = (event) => {
    // console.log("Handle Submit",this.state)
    // console.log("and props",this.props)    
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: '',
    });    
  }
  
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit} >
          <p>
            <label>Band:</label>
            <input type="text" onChange={this.handleChange} value={this.state.name} />
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput;

