import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBand } from '../actions/bands'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleOnChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleOnSubmit = e => {
    e.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={event => this.handleOnChange(event)}
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default connect(state => ({ name: state.name }), { addBand })(BandInput);


// const mapDispatchToProps = dispatch => {
//   return {
//     addBand: () => {
//       dispatch(addBand())
//     }
//   };
// };
// export default connect(null, { addBand })(BandInput)
