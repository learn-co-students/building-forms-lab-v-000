import React, { Component } from 'react'
import BandInput from "../components/BandInput"
import Bands from "../components/Bands"


class BandsContainer extends Component {
  render() {

const container = {
  	display: 'flex',
  	width: '100%',
  	height: '100%',
  	justifyContent: 'center',
  	alignItems: 'center',
  	textAlign: 'center',
  	flexDirection: 'row',
  	flexWrap: "wrap"
  }

    return(
      <div>
       <div style={container}>
   		 <BandInput />
   		 <Bands />
       </div>
      </div>
    )
  }
}

export default BandsContainer;
