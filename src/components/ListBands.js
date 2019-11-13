
import React from 'react'
// import BandsContainer from '../containers/BandsContainer'
// Once you've got a 
// form successfully dispatching actions and adding
//  bands to your Redux store, write the necessary
//   code to display each band name from the store. 
//   Band names should be 
// listed in individual li elements.


//  .....
//  Call this in Bands Container to render all the band in the Store. 
const ListBands = props => {
    
        
    return (
        props.bands.map((band) => 
        

        <li>
            {band.name}
        </li >
    ))
}

export default ListBands;