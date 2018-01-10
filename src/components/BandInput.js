import React, { Component } from 'react';

class BandInput extends Component {

  constructor(){
    super()
    this.state = {
      text: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }


  render() {
    return (
      <div>
        <form>
          <input type='text' onChange={this.handleChange} value={this.state.text} />
          <input type='submit' />
        </form>
        {this.state.text}
      </div>
    );
  }
};

export default BandInput;
