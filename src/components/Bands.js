import React, { Component } from 'react';

export default class Bands extends Component {

    renderBands = props => props.bands.map((band, id) => {
        return <li key={id}>Band Name: { band.name }</li>
    })
 
    render() {
        return(
            <div>
                <ul>
                {this.renderBands(this.props)}
                </ul>
            </div>
        );
    }

};