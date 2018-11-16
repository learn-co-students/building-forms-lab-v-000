import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ''
  }

  handleChange = (event) => {
    let field = event.target.name
    let state = this.state
    //variables above copy entire objects so they won't get rewritten
    state[field] = event.target.value
    this.setState(state);
  };

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
    // this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name='name' onChange={this.handleChange} value={this.state.name}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

// const mapDispatchToProps = dispatch => ({
//   addBand: formData => dispatch({ type: 'ADD_BAND', band: formData })
// })

// export default connect()(BandInput)
export default BandInput
