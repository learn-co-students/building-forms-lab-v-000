import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';
import Band from '../components/Band';

class BandsContainer extends Component {
  
  renderBands = () => this.props.bands.map((name, id) => <Band key={id} name={name} />)

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
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

const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

export default connect(mapStateToProps,mapDispatchToProps)(BandsContainer);