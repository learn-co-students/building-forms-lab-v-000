import { connect } from 'react-redux'
import React, { Component } from 'react'

export class BandInput extends Component {
  //
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  handleSubmit = event => {
    debugger
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
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Add Band</label>
            <input name="name" type="text" onChange={this.handleChange} value={this.state.name}/>
          </p>
          <input type="submit" />
        </form>
        {this.state.name}
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
    return {
        addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData })
    };
};

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandInput)
