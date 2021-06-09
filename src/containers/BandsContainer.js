import React, { Component } from 'react'
import {connect} from 'react-redux'

import BandInput from '../components/BandInput'
import Band from '../components/band'

class BandsContainer extends Component {

    renderBands=()=>this.props.bands.map((band, idx) => <Band band={band} key={idx}/>);

    render() {
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


const mapStateToProps = (state)=>({
    bands: state.bands
});
const mapDispatchToProps = (dispatch)=>({
    addBand: band=>dispatch({type: "ADD_BAND", band})
});

export default connect (mapStateToProps,mapDispatchToProps)(BandsContainer)
