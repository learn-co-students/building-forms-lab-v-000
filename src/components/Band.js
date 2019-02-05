import React from 'react'

 const Bands= (props)=>{
   return props.bands.map((band, key)=>{
    {console.log(band)}
      return (<li key={key}>{band.name}</li>)
    });

}

export default Bands
