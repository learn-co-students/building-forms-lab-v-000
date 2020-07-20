export default function manageBand(state = {
  bands: [],
}, action) {
  console.log(action.type)
  console.log(action.payload)
  switch (action.type) {
    
    case 'ADD_BAND':
      return { ...state, bands: [...state.bands, action.payload] }

      default: return state
  }
};
