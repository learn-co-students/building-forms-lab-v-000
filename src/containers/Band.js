// return each band as a list item
import React from "react"

const Band = props => {
	return (
		props.name !== "" ?
		<li>
			{props.name}
		</li>
		: null
	)
}

export default Band