export default function manageBand(state = {
  bands: [],
}, action) {
	let index;
	let band;
  switch (action.type) {
  	case 'ADD_BAND':
      return {...state, bands: [...state.bands, action.band]}
  	default:
  		return state;
  };
};
