import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux';
import Bands from '../components/Bands'

//connection to the Redux store 
//child of App component
class BandsContainer extends Component {
 
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <Bands bands={this.props.bands}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { bands: state.bands };
};

const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);

//This component should act as your connection to the Redux store 
//and should be a child of the App component. 
//Any values we want to use from Redux as well as any actions we want to dispatch 
//should be set up and available in BandsContainer 
//so they can be passed down to other components.