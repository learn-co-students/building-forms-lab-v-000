import React from 'react'
import BandInput from './BandInput'


class BandsContainer extends React.Component{
    render(){
        return(
            <div>
            <BandInput store={this.props.store} />    
            </div>
        )
    }
    
}

export default BandsContainer
