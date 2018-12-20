// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'net';


class BandInput extends React.Component{
constructor(props) {
  super(props)
  this.state={
    name: ''
  }
}

handleChange(event){
  this.setState({
    name: event.target.value
  });
}

handleSubmit= event => {
  event.preventDefault();
  this.props.addBand(this.state)
  this.setState({
    name: '',
  })
}

  render() {
    return(
      <div>
        Band Input
        <form onSubmit={(event) => this.handleSubmit(event)}>
        <label>Add Band</label>
        <input type='text' onChange={(event) => this.handleChange(event)} valut="this.state.name"/>
        <input type='submit'/>
        </form>
      </div>
    )
  }
}

export default BandInput
/*
const mapDispatchToProps = dispatch =>({
  addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData })

})
export default connect(null, {addBand})(BandInput)

export default connect(null, mapDispatchToProps)(BandInput)
*/