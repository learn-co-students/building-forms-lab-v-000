import { connect } from 'react-redux'
// import { addBand } from '../reducers/manageBand'
import React, { Component } from 'react'

class BandInput extends Component {
  //
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

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
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Add Band</label>
            <input type="text" onChange={this.handleChange} value={this.state.name}/>
          </p>
          <input type="submit" />
        </form>
        {this.state.name}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  };
};

const mapDispatchToProps = dispatch => {
    return {
        addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BandInput)
