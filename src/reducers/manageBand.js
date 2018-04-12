export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      return Object.assign({}, state, { bands: state.bands.concat(action.band.text) });
      //Or could do the below:
      // return { bands: state.bands.concat(action.band.text) };
    default:
      return state;
  }
};
