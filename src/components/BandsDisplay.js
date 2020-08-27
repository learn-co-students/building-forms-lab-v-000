import React, { Component } from 'react';
import BandCard from './BandCard'

class BandsDisplay extends Component {
    render() {
        return(
        <div>
            {this.props.bands.map(band => <BandCard band={band} />)}
        </div>
        )
        // the above line of code results in an array, and React knows to automatically render each element
        // of the array.
    }
}

export default BandsDisplay
