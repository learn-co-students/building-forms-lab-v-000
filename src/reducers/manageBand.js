export default function manageBand(
	state = {bands: []}, 
	action) {

	switch (action.type) {
		case 'ADD_BAND':
			const newObj = { 
				bands: state.bands.concat(action.payload)
			}
			console.log(newObj)
			return newObj

		default:
		  return state
	}
};
