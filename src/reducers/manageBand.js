export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      return { ...state, bands: [...state.bands, action.band] }
    default:
      return state;
  }
};

/*
- manageBand reducer function accepts state and action objects as arguments
- set initial state object = { bands: [] } using default argument
- If an action object with type key = 'ADD_BAND' is dispatched,
- the switch case statement will match, hit
- A new, updated state object is returned, which has:
- all key/value pairs copied over from the previous state object,
- a bands key pointing to an array in which all band object elements are copied over 
- from the previous bands array stored in state,
- and the band object corresponding to the band key in the action object dispatched
- is added to that array
*/