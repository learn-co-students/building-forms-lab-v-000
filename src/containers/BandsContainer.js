import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'

class BandsContainer extends Component {

	handleUpdate = state => {
		this.props.dispatch({type: "ADD_BAND", name: state.name})
	}

  render() {
    return(
      <div>
        <BandInput handleUpdate={this.handleUpdate}/>
        <ul>
        {this.props.state.bands.map(band => <li>{band.name}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
	return {state: state}
}

export default connect(mapStateToProps)(BandsContainer)
