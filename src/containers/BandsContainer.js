import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect} from 'react-redux'


class BandsContainer extends Component {
  render() {

    return (
      
      
      <div>
        BandsContainer 
         
        <BandInput addBand={this.props.addBand}/>

        {/* </BandInput> */}
      </div>
    )
  }
}

const addBand = dispatch => {
  debugger
  return {
    addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData })

  }
}
// export default (BandsContainer)
export default connect(BandInput, addBand)(BandsContainer)
