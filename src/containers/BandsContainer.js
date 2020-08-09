import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandCard from '../components/BandCard';

class BandsContainer extends Component {
		render() {
		    const { bands, removeBamd } = this.props;
		    return (
		      <div>
		        <hr />
		        <div className="row justify-content-center">
		          <h2>Bands</h2>
		        </div>
		        <hr />
		        <div className="container">
		          <div className="row">
		            <div className="col-md-4">
		              {bands.map(band => <BandCard key={band.id} removeBand={removeBamd} band={band} />)}
		            </div>
		          </div>
		        </div>
		      </div>
		    );
		  }
}

const mapStateToProps = state => {
  return { bands: state.bands }
}

export default connect(mapStateToProps, { removeBand})(Bands); 
