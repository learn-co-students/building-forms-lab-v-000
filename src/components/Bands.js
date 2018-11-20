import React, { Component } from 'react';

const Bands = props => (

	<ul>
	{props.bands.map((band, id) => (
          <li key={id}>{band.name}</li>
  	 )
	)}
	</ul>
)

export default Bands;
