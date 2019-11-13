import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'
import ListBands from '../components/ListBands'



class BandsContainer extends Component {


  render() {
  

    return (
      
      
      <div>
         
        Input band here 
        
        <BandInput addBand={this.props.addBand} />
        {/*  render band input with a props with is depact.. */}

       
        

        <ul>
          <p>List bands from the Store </p>
      
            <ListBands bands={this.props.bands} />
          {/* ListBands is a components=== no access to store,,so it need a props to work. */}
              
      
        </ul>
      
      </div>
    )
  }
}


const mapStateToProps = (state) => {
 return {
        bands: state.bands
    }
}

const mapDispatchToProps = dispatch => ({
  addBand: band => dispatch(
    { type: "ADD_BAND", band })
}) 


export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
// export default connect(null, addBand)(BandsContainer,)
