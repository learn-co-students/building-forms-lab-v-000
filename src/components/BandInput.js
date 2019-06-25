// import { connect } from 'react-redux'
import React, { Component } from 'react'

export class BandInput extends Component {

  state = { name : ''}

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state)
  }

  handleChange = event => {
    this.setState({
        name: event.target.value
    });
  };

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>Add Band</label>
            <input name="name" type="text" onChange={(event) => this.handleChange(event)} value={this.state.name}/>
          </p>
          <input type="submit" />
        </form>
        {this.state.name}
      </div>
    )
  }
}

export default BandInput
