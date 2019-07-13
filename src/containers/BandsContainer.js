import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'

const BandDisplay = props => {
  const ListBands = props.bands.map((band, index) => {
    return <li key={index}> {band.name} </li>
  });

  return (
    <div>
      <ul>
        {ListBands}
      </ul>
    </div>
    );
};

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <BandDisplay bands={this.props.bands}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addBand: band => dispatch({ type: "ADD_BAND", band })
});

const mapStateToProps = ({ bands }) => ({ bands });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BandsContainer);
