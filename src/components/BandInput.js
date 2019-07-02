// Add BandInput component
import React, { Component } from 'react';


class BandInput extends Component {

  state = {
    name: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const bandName = this.state.name;
    this.props.addBand(bandName);
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          <input type="submit" value="add band" />
        </form>
      </div>
    )
  }
}


export default BandInput;
