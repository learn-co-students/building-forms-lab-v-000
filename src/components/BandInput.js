// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux';

class BandInput extends Component {

  state = {
    name: ''
  }

    handleChange = (e) => {
      this.setState({
        name: e.target.value
      });
    }

    handleSubmit = event => {
      event.preventDefault();

    }
  render() {
    return(
      <div>
        <form handleSubmit={this.handleSubmit}>
          <input type="text" handleChange={this.handleChange}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

mapStateToDispatch = () => {

}
export default connect(null, mapStateToDispatch)(BandInput)
