import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {

        let bands = this.props.bands.map(band => <li key={band.id}>{band.name}</li>);

    return(
      <div>
        BandsContainer
        <BandInput
          addBand={this.props.addBand}
        />
        <ul>
          {bands}
        </ul>
      </div>
    )
  }
}

// mapStateToProps - filters the things in the box(store - the entire apps state) is needed for
//.. the component
const mapStateToProps = state => {
  return { bands: state.bands }
};

//     this.props.addBand({ type: 'ADD_BAND', payload: this.state});
const mapDispatchToProps = dispatch => {
  return { addBand: band => dispatch({type: 'ADD_BAND', band})};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BandsContainer);

// NOTE:
// connect() -
// The connect function knows where the box
// is located and passes it to the mapStateToProps function so it can grab what it needs.

// resources:
// Explain Redux's connect() and mapStateToProps like I'm 5
// https://dev.to/domitriusanthony/explain-reduxs-connect-and-mapstatetoprops-like-im-5--4f0a
