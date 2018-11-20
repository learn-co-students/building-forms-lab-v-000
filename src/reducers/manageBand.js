export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      // make copy of state object, change band key to copy of bands plus payload
      return { ...state, bands: [...state.bands, action.band ] }
    default:
      return state;
  }
};
