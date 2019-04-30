import React, { Component } from 'react'



class BandInput extends Component {

    constructor(){
      super()
       this.state = {
        name: '',
      };
    }


  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      name: '',
    });
  }

  handleChange(event){
    this.setState({
      name: event.target.value
    });
  }


  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add Band</label>
          <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.name}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};





export default BandInput;
