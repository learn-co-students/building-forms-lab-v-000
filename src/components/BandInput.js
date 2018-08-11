import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    text: '',
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addBand(this.state.text);
    this.setState({text: ''});
  }

  render() {
    return(
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <p>
            <label>Band:</label>
            <input type="text" value={this.state.text} onChange={e => this.handleChange(e)}/>
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput;
