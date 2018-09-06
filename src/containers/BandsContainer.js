import React, { Component } from 'react'
import { connect } from 'react-redux';
import Bands from '../components/Band'
import BandInput from '../components/BandInput'


class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands}/>

      </div>
    )
  }
}
const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

// const mapStateToProps = state => {
//   return {
//     bands: state.bands
//   }
// }
//
// const mapDispatchToProps = dispatch => ({
//   addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData })
// })

export default connect (mapStateToProps, mapDispatchToProps)(BandsContainer)
