export default function manageBand(state = {
  bands: [], 
}, action) {

  switch (action.type) {
    case 'ADD_BAND': 
      return {...state, bands: [...state.bands, action.band]}
      //return state.bands.concat(action.band)    this doesn't work. not sure why

      default:
        return state;

  }
}