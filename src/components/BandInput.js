// Add BandInput component
import React, { Component } from "react";

class BandInput extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: ""
    });
  };

  render() {
    return (
      <div>
        <form action="">
          <label htmlFor="">Add Band: </label>
          <input
            type="text"
            value={this.state.name}
            name="name"
            onChange={this.handleChange}
          />
          <input type="submit" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => {};

// export default connect()(BandInput);
export default BandInput;
