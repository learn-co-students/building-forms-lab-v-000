import React from 'react'


const Band = props => {
  console.log("props.name Band is:", props.name)
  console.log("props in Band is:", props)
  console.log("props.text.name in Band is:", props.text.name)


  return <li>{props.text.name}</li>
}


export default Band;
