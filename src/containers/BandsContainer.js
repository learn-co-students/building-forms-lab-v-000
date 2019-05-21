import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import Bands from '../components/Bands';
import {connect} from 'react-redux'


class BandsContainer extends Component {

  // renderBands = () => {this.props.}

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands} />
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     name: state.name
//   }
// }
const mapStateToProps = ({ bands }) => ({ bands })


// const mapDispatchToProps = dispatch => ({
//     addBand: formData => dispatch({ type: "ADD_BAND", payload: formData })
// })
const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })



export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
