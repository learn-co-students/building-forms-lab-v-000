import React from 'react'
import Band from './Band'

const Bands = (props) => {
    const renderBands = props.bands.map((band, id) => <Band key={id} name={band.name}/>)
    return(
        <ul>
            {renderBands}
        </ul>
    )
}
export default Bands
