import React, { Component } from 'react';

class Bands extends Component {
    
    render() {
           let liBands = this.props.bands.map((band, i) => <li key={i}>{band.name}</li> )
        return (
            <ul>
                {liBands}
            </ul>
        );
    }
}

export default Bands;