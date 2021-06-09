// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
    state={
        name: ""
    }
    handleOnChange=(event)=>this.setState({[event.target.name]:event.target.value})
    handleOnSubmit=(event)=>{
        event.preventDefault();
        this.props.addBand(this.state);
    }

    render() {
        return(
            <div>
            <form onSubmit={this.handleOnSubmit} >
                <input 
                type="text" 
                name="name" 
                onChange={this.handleOnChange}
                />
                <button type="submit">Submit</button>
            </form>
            </div>
        )
    }
}

export default BandInput
