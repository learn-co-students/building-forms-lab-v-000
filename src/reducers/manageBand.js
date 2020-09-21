export default function manageBand(state = {
  bands: [],
}, action) {
  switch(action.type) {
    case 'ADD_BAND':
      return { ...state, bands: [...state.bands, action.newBand] }
      // concatenate a new band each time the action is dispatched
    default:
      return state
  }
};
