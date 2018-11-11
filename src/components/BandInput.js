import React, { Component } from 'react';


class BandInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }


  handleSubmit(event){

  }

  handleChange(event){

  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>add band </label>
            <input type="text" onChange={(event) => this.handleChange(event)} />
          </p>
          <input type="submit" value='submit'/>
        </form>
        {this.state.text}
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
      addBand: () => dispatch({ type: 'ADD_BAND' })
  };
};

export default connect(null,mapDispatchToProps)(BandInput);
