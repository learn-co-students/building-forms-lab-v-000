import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux';

class BandsContainer extends Component {
  
  renderBands = () => this.props.bands.map((band, id) => <li>{band.name} </li>)

  
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>
          {this.renderBands()}
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData })
  };
};

const mapStateToProps = ({bands}) => ({bands})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);

//  state => ({ bands: state.bands })