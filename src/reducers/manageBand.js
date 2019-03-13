// Reducer
export default function manageBand(state = {
  bands: [],
}, action) {
	switch(action.type) {
		case "ADD_BAND":
		// Concatenate the payload into the array of bands   
		 	// console.log({ bands: state.bands.concat(action.payload.bandName) })
		 	return { bands: state.bands.concat(action.payload.name) }
		default:
			return state
	}
};
