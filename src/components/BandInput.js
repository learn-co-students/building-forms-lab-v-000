// Add BandInput component
import React, { Component } from 'react'
import{connect} from 'react-redux'

class BandInput extends Component {
  constructor(){
    super()
    this.state= {
      name:""
    }
  }

  handleChange=(e)=>{

    this.setState({
      name: e.target.value
    })
    console.log(this.state.name)
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name:''
    })

  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label> Name:</label>
          <input type='text'onChange={this.handleChange} value={this.state.name}/>
          <input type='submit'/>

        </form>

      </div>
    )
  }
}

const mapDispatchToProps= dispatch =>({
   addBand: data=> dispatch({type: 'ADD_BAND', band: data})
})


export default BandInput;
