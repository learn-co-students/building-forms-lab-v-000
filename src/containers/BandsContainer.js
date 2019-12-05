import React, { Component } from 'react'
import { connect } from 'react-redux';
import manageBand from '../reducers/manageBand';
import BandInput from '../components/BandInput';


class BandsContainer extends Component {
  render() {
  	const manageBand = this.props;
    return(
      <div>
        BandsContainer
        <li></li>
        <BandInput addBand={manageBand}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    name: state.name
  })
};

const mapDispatchToProps = dispatch => {
  return {
    addBand: (newName) => {
      dispatch(manageBand(newName))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)