// Add BandInput component
import React, { Component } from 'react'
import uuid from 'uuid'
import { connect } from 'react-redux'
//? do i need to do this? create a file for action? import { addBand} from ''

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
          <button type="submit" >Add</button>
        </form>
      </div>
    )
  }
}


// const mapDispatchToProps = dispatch => {
//   return {
//     addBand: () => {
//       dispatch(addBand())
//     }
//   };
// };

// export default connect(null, mapDispatchToProps)(BandInput)
export default BandInput

