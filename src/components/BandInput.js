// Add BandInput component
import React, { Component } from "react";

class BandInput extends Component {
  state = {
    name: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addBand(this.state);

    this.setState({
      name: "",
    });
  };

  handleOnChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    return (
      <div className="panel-body">
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="author" className="col-md-4 control-label">
              Add Band
            </label>
            <div className="col-md-5">
              <input
                name="name"
                className="form-control"
                type="text"
                value={this.state.name}
                onChange={this.handleOnChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-md-6 col-md-offset-4">
              <button type="submit" className="btn btn-default">
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default BandInput;
