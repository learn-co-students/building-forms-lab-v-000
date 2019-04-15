import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return(
      <div>
    	{this.props.bands.map( (band, id) => (<li key={id}>{band}</li>))}    
      </div>
    )
  }
}

const mapStateToProps = state => {
	return {
		bands: state.bands
	}
}

export default connect(mapStateToProps)(BandsContainer)
