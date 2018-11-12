import React, { Component } from 'react';
import {connect} from 'react-redux'


class BandInput extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }


  handleSubmit(event){
    event.preventDefault()
    this.props.addBand(this.state.text)
    this.setState({
      text: '',
    }); 
  }

  handleChange(event){
    this.setState({ 
      text: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>add band </label>
            <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.text} />
          </p>
          <input type="submit" value='submit'/>
        </form>
        
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
      addBand: (band) => dispatch({ type: 'ADD_BAND', band: band })
  };
};

export default connect(null,mapDispatchToProps)(BandInput);
