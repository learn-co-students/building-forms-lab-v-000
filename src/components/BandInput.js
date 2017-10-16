import React, { Component } from 'react';

class BandInput extends Component {
  constructor() {
    super();

    this.state = { text: '' }
  }

  change(e) {

    this.setState({
      text: e.target.value
    })

  }

  submit(e) {
    e.preventDefault();

    this.props.store.dispatch({
       type: 'ADD_BAND',
       band: this.state.text
     })
  }


  render() {
    return (
      <div>
        bands component

        <form onSubmit={(e) => this.submit(e)}>

          <input
            type='text'
            value={this.state.text}
            onChange={(e) => this.change(e) } />


        </form>
      </div>
    );
  }
};

export default BandInput;
