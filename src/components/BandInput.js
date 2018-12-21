import React, { Component } from 'react'
import { connect } from 'react-redux';
import { throws } from 'assert';

class BandInput extends Component {
  constructor(){
    super();
    this.state = {
      name: ''
    }
  }

  handleOnChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state.name);
    this.setState({
      name: ""
    })
  }

  render() {
    return(
      <div className="bandInput">
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type='text' name="bandName" value={this.state.name} 
           onChange={event => this.handleOnChange(event)} />
          <input type="submit" value="submit"/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return { 
    addBand: bandData => dispatch({
      type: "ADD_BAND",
      bandData: bandData
    })
  }
}

export default connect(null, mapDispatchToProps)(BandInput)
 