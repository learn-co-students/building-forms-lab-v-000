import React, { Component } from 'react'
import BandInput from '../components/BandInput';
import { connect } from 'react-redux'

class BandsContainer extends Component {

  // renderBands = () => {
  //   this.props.bands.map(b => b.name)
  // }
  render() {
    return (
      <div>
        BandsContainer
        <BandInput />
        {/* <div>{this.props.bands.map(band =>
          <li>band.name</li>
        )}</div> */}

      </div>
    )
  }
}


// const mapStateToProps = state => {
//   return {
//     name: state.name
//   }
// }

export default connect(state => ({ name: state.name }))(BandsContainer);

// export default BandsContainer
