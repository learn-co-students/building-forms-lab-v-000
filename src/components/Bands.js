import React from 'react'

const Bands = props => {
    const bands = props.bands.map((bandName, index) => {
        return <li key={index}> {bandName.name}</li>;
    });

    return (
        <div>
            {bands}
        </div>
    )
}



export default Bands