import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
	printBands = (bands) => (bands.map((band, idx) => (<li key={idx}>{band}</li>) ))

  render() {
    return(
      <div>
				<div>
					BandsContainer
					{<BandInput />}
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

export default connect(state => ({bands: state.bands}))(BandsContainer)
