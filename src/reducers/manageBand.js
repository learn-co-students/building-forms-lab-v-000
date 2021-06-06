export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      return { bands: state.bands.concat(action.band) }
      // // solution did a spread on this, likely anticipating more state in the future, my version from the lessons
      // return { ...state, bands: [...state.bands, action.band] } 
    default:
      return state
  }
};
