import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';
import { addBand } from '../actions/bands'

class BandsContainer extends Component {

  render() {
    const { addBand } = this.props;
    return(
      <div>
        <BandInput addBand={addBand} />
      </div>
    )
  }
}

// const mapDispatchToProps = () => {
//   return {
//     addBand: (name) => {
//       return {
//         type: 'ADD_BAND',
//         name
//       }
//     }
//   }
// }

const mapStateToProps = state => {
  debugger

  return ({
     bands: state.bands
  })
}

export default connect(mapStateToProps, {addBand})(BandsContainer)
