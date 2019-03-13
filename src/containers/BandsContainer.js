// Get bands from the store for display
import React, { Component } from 'react'
import {connect} from "react-redux"
import Band from "./Band"

class BandsContainer extends Component {
  // Map over the bands received from Redux and  pass the value of each band into a Band child component 
  // Band in this case doesn't have any Redux related code, and is a regular, functional component.	
  renderBands = () => this.props.bands.map((band, id) => <Band key={id} name={band} />)

  render() {
    return(
      <div>
        {this.renderBands()}
      </div>
    )
  }
}

const mapStateToProps = state => {
	return {
		bands: state.bands
	}
}
// the mapStateToProps function is the first argument passed to connect
export default connect(mapStateToProps)(BandsContainer)
