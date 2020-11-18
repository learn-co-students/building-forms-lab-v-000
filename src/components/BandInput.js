// Add BandInput component
import React, { Component } from 'react';






class BandInput extends Component {

  state = {
    name: ''
  }


  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: ''
    });
  }

  handleOnChange(event) {
    this.setState({
      name: event.target.value
    });
  }


  render() {
    return(
      <div>
        <div>
          <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <p>
              <input
                type="text"
                onChange={(event) => this.handleOnChange(event)}
                name="name"
                value={this.state.name}
                placeholder="band name" />
            </p>
            <div>
              <button type="submit" >Add</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default BandInput
