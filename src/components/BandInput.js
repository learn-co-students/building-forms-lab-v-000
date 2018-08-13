// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandInput extends Component {
  state = {
      text: ''
    }

    handleChange = event => {
      this.setState({
        text: event.target.value
      });
    }

    handleSubmit = event => {
      event.preventDefault()
      this.props.dispatch({ type: 'ADD_BAND', payload: formData })
    }

    render() {
      return(
        <div>
          <form onSubmit={ (event) => this.handleSubmit(event) }>
            <p>
              <label>Add Band</label>
              <input type="text" onChange={ (event) => this.handleChange(event) } value={ this.state.text }/>
            </p>
            <input type="submit" />
         </form>
       </div>
     );
    }
  };



export default connect()(BandInput);
