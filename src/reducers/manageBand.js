export default function manageBand(state = {
  bands: [],
}, action) {
  switch(action.type) {
    case 'ADD_BAND':
      // return {bands: [state.bands.concat(action.nameObj)]}
      return {...state, bands: [...state.bands, action.nameObj]}
    default:
      return state
  }
};
