export default function manageBand(state = {
  bands: [],
}, action) {
  //add switch statement for something like ADD_BAND, which will update the bands property
  switch (action.type) {
    case 'ADD_BAND':
      return {...state, bands: [...state.bands, action.band]}
    default:
      return state
  }

};
