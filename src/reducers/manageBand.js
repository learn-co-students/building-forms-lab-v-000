export default function manageBand(state = {
  bands: [],
}, action) {
  // Check comments but the instructions say that this needs to respond to the action of type "ADD_BAND" and return a new state or "concatenate" a new band each time the action is dispatched
  switch (action.type) {
    case 'ADD_BAND':
      return Object.assign({}, state, { bands: state.bands.concat(action.band) });
    default:
      return state;
  }
};
