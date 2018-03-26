// import React, { Component } from "react"
import React from "react"

class BandInput extends React.Component {
  // nameRef = React.createRef()
  constructor(props) {
    super(props)
    this.state = {
      text: ""
    }
  }

  handleKeydown = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.store.dispatch({
      type: "ADD_BAND",
      band: this.state.text
    })
  }

  render() {
    return (
      <div>
        <form ref="bandForm" className="add-band" onSubmit={this.handleSubmit}>
          <input
            type="text"
            ref="band"
            placeholder="band name"
            onChange={this.handleKeydown}
          />
          <button> Submit </button>
        </form>
      </div>
    )
  }
}

export default BandInput
