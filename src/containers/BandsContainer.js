import React, { Component } from 'react';
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';

class BandsContainer extends Component {

  renderBands = () => {
    return this.props.bands.map((band, id) => <li key={id}> {band.name} </li> )
  }

  render() {
    return(
      <div>
        <section>
          <BandInput addBand={this.props.addBand}/>
        </section>
        <p>
          {this.renderBands()}
        </p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: 'ADD_BAND', name })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
