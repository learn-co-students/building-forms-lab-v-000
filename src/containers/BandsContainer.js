import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {

  renderBands = () => this.props.bands.map((band, id) => <li key={id}>{band.name}</li>)

  render() {
    return(
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

const mapDispatchToProps = dispatch => {
  return {
    addBand: band => dispatch({ type: 'ADD_BAND', payload: band })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)


// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import BandInput from '../components/BandInput'
//
// class BandsContainer extends Component {
//
//   renderBands = () => this.props.bands.map((band, id) => <li key={id}>{band.name}</li>)
//
//   render() {
//     return (
//       <div>
//         <BandInput addBand={this.props.addBand}/>
//         {this.renderBands()}
//       </div>
//     )
//   }
// }
//
// const mapStateToProps = state => {
//   return {
//     bands: state.bands
//   }
// }
//
// const mapDispatchToProps = dispatch => {
//   return {
//     addBand: band => dispatch({ type: 'ADD_BAND', payload: band })
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
