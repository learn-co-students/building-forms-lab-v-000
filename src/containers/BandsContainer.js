import React, { Component } from 'react'
import { connect } from 'react-redux';

import BandInput from '../components/BandInput';
import Band from '../components/Band';
import { addBand } from '../actions/Bands';

class BandsContainer extends Component {

  renderBands = () => this.props.bands.map((band, id) => <Band key={id} band={band} />)

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <div>
          <h3>Bands</h3>
          <ul>
            {this.renderBands()}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}
export default connect(mapStateToProps, {addBand})(BandsContainer)


   

