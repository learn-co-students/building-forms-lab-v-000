export default function manageBand(state = {
  bands: [],
}, action) {
  switch(action.type){
    case 'ADD_BAND':
      return {
        ...state,
        bands: [
          action.name, 
          ...state.bands
        ]
      }
      default:
        return state
    }
};
