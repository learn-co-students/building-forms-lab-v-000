export default function manageBand(state = {
  bands: [],
}, action) {
  console.log('Reducer received this action: ', action)
  switch(action.type) {
    case 'ADD_BAND':
      console.log({bands: state.bands.concat(action.band)})
      return {bands: state.bands.concat(action.band)}
    
    default:
      return state
  }
};
