import React, { Component } from 'react'

class BandList extends Component {

  render(){
    return(
      <div>
        <ul>
          {
            this.props.bands.map((band,i) =>{
              return (<li key={i}>{band.name}</li>)
          })
          }
        </ul>
      </div>
    )
  }

  }


export default BandList
