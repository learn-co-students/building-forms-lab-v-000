import React, { Component } from 'react';
import {connect} from 'react-redux';
import BandInput from '../components/BandInput';
import Band from '../components/Band';

class BandsContainer extends Component {
  render() {
    
    const listBands = () => 
        this.props.bands.map((band,id) => <Band key={id} name={band.name} />)
        
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        {listBands()}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

const mapStateToProps = ({ bands }) => ({ bands })

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)