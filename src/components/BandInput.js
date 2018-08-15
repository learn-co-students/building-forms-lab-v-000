// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: ''
        }
    }
    
    handleChange(event) {
        this.setState({
            name: event.target.value
        })
    }
     
    handleOnSubmit(event) {
        event.preventDefault();
        this.props.addBand(this.state)
        this.setState({
            name: ''
        })
    }
    
    render() {
        return(
            <div>
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your Band Name: </label>
                    <input type="text"  onChange={(event) => this.handleChange(event)} value={this.state.name} />
            
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default BandInput
