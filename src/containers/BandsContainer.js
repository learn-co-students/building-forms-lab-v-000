
import React, { Component } from 'react'
import {connect} from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {

  renderBands = () => this.props.bands.map((band, id) => <li key={id}>{band.name}</li>)

  render() {
    return(
      <div>
        <div>
        <BandInput/>
        </div>
        <ul>
        {this.renderBands()}
        </ul>
      </div>
    );
  }
};

	const mapStateToProps = state => {
	  return {
	    bands: state.bands
	  }
	}


export default connect(mapStateToProps)(BandsContainer)
