export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      console.log(action.band)
      return { ...state, bands: [...state, action.band] };
    
    default:
      return state
  }
};
