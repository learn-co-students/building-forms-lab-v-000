import React, { Component } from 'react'
import { connect } from 'react-redux';
import Band from '../components/Band'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  renderBands = () => {
    this.props.bands.map((name, index) => <Band key={index} band={name} />)
  };

  render() {
    console.log({props: this.props})
    console.log({state: this.state})
    return(
      <div>
        
        <BandInput addBand={this.props.addBand} />
        <ul>
          {this.renderBands()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })
const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })
export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
