import React from 'react'

const Bands = props => {
    const bandsTotal = props.bands.map(x => <li>{x.name}</li>)
    return (
            <ui>{bandsTotal}</ui>
        )
}

export default Bands