import React from 'react';

// here, we'll create a simple component to import the bands into the BandsContainer render()
const Bands = props => {
    return (
        <ul>
            {props.bands.map((band, index) => <li key={index}>{band.name}</li>)}
        </ul>
    );
};

export default Bands;