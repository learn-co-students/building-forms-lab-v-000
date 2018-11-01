import React, { Component } from 'react';
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';

class BandsContainer extends Component {

   render() {
    const renderBands = this.props.bands.map((band, index) => {
      return <li key={index}>{band.name}</li>;
    });
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        {renderBands}
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
})


export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
