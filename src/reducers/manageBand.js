export default function manageBand(state = {
  bands: [],
}, action) {
	let index;
	let band;
  switch (action.type) {
  	case 'ADD_BAND':
  		return state.concat(action.band);
  	case 'REMOVE_BAND':
  	  return state.filter(band => band.id !== action.bandId);
  	default:
  		return state;
};
