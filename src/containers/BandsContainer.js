import React, { Component } from 'react'
import BandInput from '../components/BandInput';
import { connect } from 'react-redux';

class BandsContainer extends Component {
  renderBands = () => {
      return this.props.bands.map(band => <li>{band.name}</li>);
  }
  render() {
    return(
      <div>
        <React.Fragment>
          <BandInput />
            <ul>
            { this.renderBands()}
            </ul>
          </React.Fragment>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { bands: [...state.bands] }
}

export default connect(mapStateToProps)(BandsContainer)
 