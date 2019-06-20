import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
	printBands = (bands) => (bands.map((band, idx) => (<li key={idx}>{band.name}</li>) ))
	
  render() {
    return(
      <div>
				<div>
					BandsContainer
					{<BandInput addBand={this.props.addBand}/>}
				</div>
				<div>
					<ul>
						{this.printBands(this.props.bands)}
					</ul>
				</div>
			</div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addBand: formData => dispatch({ type: 'ADD_BAND', band: formData })
})

export default connect(state => ({bands: state.bands}), mapDispatchToProps)(BandsContainer)
