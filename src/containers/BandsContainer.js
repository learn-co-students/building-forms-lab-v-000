import React, { Component } from 'react';
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';

class BandsContainer extends Component {
  renderBands = () => this.props.bands.map((band, id) => <li key={id}>{band.name}</li>);
  
  render() {
    return(
      <div>
        <BandInput />
        <ul>
          {console.log(this.props.bands)}
          {this.renderBands()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps)(BandsContainer);
