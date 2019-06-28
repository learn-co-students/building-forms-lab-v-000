import React, { Component } from 'react'
import { connect } from 'react-redux';
import Band from '../components/Band'
import BandInput from "../components/BandInput"
class BandsContainer extends Component {

  renderBands = () => this.props.bands.map(
    (name, id) => <Band key={id} name={name} />
  )

  render() {
    return(
      <div>
        <BandInput />
        {console.log(this.props.bands)}
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

export default connect(mapStateToProps)(BandsContainer);
