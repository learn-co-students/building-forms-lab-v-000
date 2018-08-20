import React, {Component} from 'react'
export default class Bands extends Component {

	render() {
		return(
			<ul>
			 {this.props.bands.map((band,index) => {
			 	return <li> key={index}>{band.name}</li>
			 })}
			</ul>
		)
	}
}