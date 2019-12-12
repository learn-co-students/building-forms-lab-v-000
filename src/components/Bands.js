import React, {Component} from 'react'
import Band from './Band'

export default class Bands extends Component {

    render() {
        const renderBand = this.props.bands.map(band => <Band band={band}/>)
        return(
            <div>
                <ul>
                    {renderBand}
                </ul>
            </div>
        )
    }
}