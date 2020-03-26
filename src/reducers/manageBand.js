export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
  case 'ADD_BAND':
    let newBandsState = [...state, action.band];
    state.bands = newBandsState;
    return state
  default:
    return state
  }
};
