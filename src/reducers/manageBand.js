export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
  case 'ADD_BAND':
    let newBandsState = [...state, action.band];
    let newStateObject = {bands: newBandsState}
    state.bands = newBandsState;
    console.log(newStateObject)
    return newStateObject
  default:
    return state
  }
};
