// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

    handleOnChange = event => {
      this.setState({
        name: event.target.value
      })
    }

    handleOnSubmit = event => {
      event.preventDefault();

      this.props.addBand(this.state);

      this.setState({
        name: '',
      });
    }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label htmlFor="band">Band Name:</label>
          <input name="band" type="text" value={this.state.name} onChange={(event) => this.handleOnChange(event)} />
          <button type="submit" className="btn btn-default">Add</button>
        </form>
      </div>
    )
  }
}

export default BandInput
