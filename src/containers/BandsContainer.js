// import React, { Component } from 'react'
//
// class BandsContainer extends Component {
//   render() {
//     return(
//       <div>
//         BandsContainer
//       </div>
//     )
//   }
// }
//
// export default BandsContainer




import React, { Component } from 'react';
// import BandInput from './src/components/BandInput.js'
// just putting one dot means go up one folder, into the folder that this
// file is in. two dots would take you to src.
import BandInput from '../components/BandInput.js';

import { connect } from 'react-redux';

class BandsContainer extends Component {

  // const useBandsRender = this.props.bands.map((band, id) => <Todo key={id} text={band} />)

  //
  // const bandsRender = props => {
  //   console.log("props", this.props)
  //   return(
  //     // this.props.bands.map((band, id) => <Band key={id} id={band} />
  //     <li>{props.name}</li>
  //   );
  // };


  // const useBandsRender = this.props.bands.map((band, id) => <Band key={id} ={band} />)
  // {BandsRender(this.props)}

  // i took this out of the return below to tst something
  // <BandInput addBand={this.props.addBand} />


  render() {
    console.log("this.props.addBand in BandsContainer.......", this.props.addBand)
    return(
      <div>
        hi
      </div>
    )
  }

}


const mapStateToProps = state => {
  return {
    bands: state.bands
  }
};




const mapDispatchToProps = dispatch => {
  console.log("mapDispatchToProps in BandsContainer................")
  return {
    addBand: formData => dispatch({type: 'ADD_BAND', formData})
  }
};





// <BandInput addBand={this.addBand} />

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
