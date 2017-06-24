import React, { Component } from 'react';

class BandInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text,
    });
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>add band</label>
            <input type="text" value={this.state.text} onChange={(event) => this.handleChange(event)} />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default BandInput;

/*
You will need to write the BandInput component. The component should have a form with a text input and submit button. We would like to update the component's state each time the user types a new character in the input. However, we only update the store's state when the user hits the submit button.
Note: To have access to the store's dispatch method, we pass through the entire store as a prop.
*/
