// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
    state={
        bandName: ""
    }
    handleChange=(event)=>this.setState({[event.target.name]:event.target.value})

    render() {
        return(
            <div>
            {/* Band Input */}
            <form onSubmit={this.handleSubmit} >
                <input 
                type="text" 
                name="bandName" 
                onChange={this.handleChange}
                />
                <button type="submit">Submit</button>
            </form>
            </div>
        )
    }
}

export default BandInput
