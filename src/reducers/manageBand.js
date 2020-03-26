export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
  case 'ADD_BAND':
    console.log({...state, bands: [...state.bands, action.band]})
    // let newBandsState = [...state.bands, action.band];
    // let newStateObject = {bands: newBandsState}
    return {...state, bands: [...state.bands, action.band.name]}
  default:
    return state
  }
};
