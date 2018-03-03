export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
    //return {state.bands.concat(action.band.text)}
       return Object.assign({}, state, { bands: state.bands.concat(action.band) });
    default:
      return state;
  }
};
