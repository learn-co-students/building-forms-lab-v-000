// Add BandInput component
import React, { Component } from 'react'
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addBand } from '../actions/bands';

class BandInput extends Component {
constructor(props) {
    super(props)
    this.state = {
      name: ''
    };
  };

  handleOnChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  };

  handleOnSubmit = event => {
    // Handle Form Submit event default
    event.preventDefault();
    // Create quote object from state 
    const band = {
      id: uuid(),
      name: this.state.name, 
    }
    // Pass quote object to action creator 
    this.props.addBand(quote);
    // Update component state to return to default state
    this.setState({
      content: '',
      author: ''
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea 
                        className="form-control"
                        name="content"
                        value={this.state.content}
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input 
                        className="form-control" 
                        name="author" 
                        type="text" 
                        value={this.state.author}
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, {addBand})(BandInput);