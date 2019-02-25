import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import Bands from '../components/Bands';
import { connect } from 'react-redux';

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        <Bands bands={this.props.bands} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: band => dispatch({ type: 'ADD_BAND', band })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);

/*
// mapStateToProps is passed as the first argument to connect() function
// mapStateToProps is called every single time the Redux store state changes
// mapStateToProps accepts the ENTIRE Redux store state as its argument
// When invoked, mapStateToProps function returns an object
// This object contains the portion of the Redux store state that we want to update
// It's used to determine which part, if any, of the DOM should be re-rendered, if changes occurred
// The bands key in this returned object = the name of the bands prop passed to BandsContainer React component
// From within render method of BandsContainer connected React component,
// we access the array of band objects stored in the Redux store state as this.props.bands
// When the Bands component is rendered from the BandsContainer component, it's passed this object as its props:
// { bands: array of band objects stored in Redux store state }
// Each band object element in the bands array stored in the Redux store state looks like this: { name: "Band Name Here" }

// mapDispatchToProps is the second argument passed to connect() function
// mapDispatchToProps accepts the dispatch function as its argument
// When invoked, mapDispatchToProps function returns an object
// The addBand key in this returned object points to an action-dispatching arrow function object
// The addBand key name in this object = name of action-dispatching arrow function prop
// that is passed to the BandsContainer React component
// From within the render method of the BandsContainer React component,
// we access the action-dispatching arrow function object as this.props.addBand
// When BandInput React component is rendered from BandsContainer component,
// it receives the following object as its props:
// { addBand: action-dispatching arrow function }
*/