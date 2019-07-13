import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import BandsDisplay from '../components/BandsDisplay';
import { addBand } from '../actions/bands'
import { connect } from 'react-redux'


class BandsContainer extends Component {
  render() {
    return(
      <div>
      <BandInput addBand={this.props.addBand} />
      <BandsDisplay bands={this.props.bands}/>
      </div>
    )
  }
}

/*
ownProps ( optional )

If your mapDispatchToProps function is declared as taking two parameters, it will be called with dispatch as the first parameter and the props passed to the connected component as the second parameter, and will be re-invoked whenever the connected component receives new props.

This means, instead of re-binding new props to action dispatchers upon component re-rendering, you may do so when your component's props change.

// binds on component re-rendering
;<button onClick={() => this.props.toggleTodo(this.props.todoId)} />

// binds on `props` change
const mapDispatchToProps = (dispatch, ownProps) => {
  toggleTodo: () => dispatch(toggleTodo(ownProps.todoId))
}
*/

/*
The mapDispatchToProps function will be called with dispatch as the first argument. You will normally make use of this by returning new functions that call dispatch() inside themselves, and either pass in a plain action object directly or pass in the result of an action creator:
*/

/*
const mapDispatchToProps = dispatch => ({
  addBand: band => dispatch({ type: "ADD_BAND", band })
});
*/

const mapStateToProps = ({ bands }) => ({ bands })

export default connect(mapStateToProps, { addBand})(BandsContainer)
