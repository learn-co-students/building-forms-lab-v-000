// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state)
    this.setState({text: ''})
  }


  render() {
    return(
      <div>
        <form>
          <input type="text" value={this.state.name} onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
