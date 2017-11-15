import React from 'react'

export default class Band extends React.Component {
  render(){
    return <li key={index}>{this.props.name}</li>
  }
}