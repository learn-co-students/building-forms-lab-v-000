import React, { Component } from 'react';

class BandInput extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
  };

  handleChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: ''
    });
  };


  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit} >
          <div>
            <label>Add A Band:</label>
            <input onChange={this.handleChange} type="text" name="band" value={this.state.name} />
          </div>
          <input type="submit" />
        </form>
      </div>
    );
  };
};


export default BandInput;
