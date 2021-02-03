


import React, { Component } from 'react';
// import BandInput from './src/components/BandInput.js'
// just putting one dot means go up one folder, into the folder that this
// file is in. two dots would take you to src.
import BandInput from '../components/BandInput.js';
import Band from '../components/Band.js';


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
  // {this.renderBands}


    renderBands = () => this.props.bands.map((band, id) => <Band key={id} text={band} />)


  render() {
    console.log("this.props.addBand in BandsContainer.......", this.props.addBand)
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        {this.renderBands()}
      </div>
    )
  }

}


const mapStateToProps = state => {
  return {
    bands: state.bands
  }
};




// const mapDispatchToProps = dispatch => {
//   console.log("mapDispatchToProps in BandsContainer................")
//    {
//     addBand: formData => dispatch({type: 'ADD_BAND', formData})
//   }
// };

// more succint version

const mapDispatchToProps = dispatch => ({
  addBand: band => dispatch({type: 'ADD_BAND', band})
});




// <BandInput addBand={this.addBand} />

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
