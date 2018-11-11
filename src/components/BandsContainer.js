import React from 'react'
import BandInput from './BandInput'
import {connect} from 'react-redux'

class BandsContainer extends React.Component{
    render(){
        return(
            <div>
            <BandInput store={this.props.bands} />    
            </div>
        )
    }
    
}

const mapStateToProps=state=>{
    return {
        bands: state.bands
      }
}

export default connect(mapStateToProps)(BandsContainer)
