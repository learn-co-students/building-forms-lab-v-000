import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';


class BandsContainer extends Component {

 addBand = (band) => {
    console.log(band)
    this.props.dispatch({type: 'ADD_BAND', band: band})
  }

  render() {

    // let listbands = this.props.store.bands.map(band => <li>{band.name}</li>);
    let listbands = this.props.bands.map( band => <li>{band.name}</li>);
    return(
      <div>
        <BandInput addBand={this.addBand}/>
        {listbands}
      </div>
    );
  }
}



const mapStateToProps = state => {
  return { bands: state.bands }
}



export default connect(mapStateToProps)(BandsContainer)