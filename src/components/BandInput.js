// Add BandInput component
import React, { Component } from 'react'


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
    event.preventDefault()  
    this.props.addBand(this.state)
    this.setState({
      name: '',
    });
  }

  //can also do handleOnChange & handleOnSubmit by passing in event as argument. 
  //would not do arrow function 
  //ie: handleOnChange(event){ 
    //this.setState({
    //  name: event.target.value
    //});
    //}
  
  //the onSubmit below would then be {(event) => this.handleOnChange(event)}.

 render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleOnChange}
          />
          <button type="submit">Add Band</button>
        </form>
      </div>
      
    );
  }
};

export default BandInput