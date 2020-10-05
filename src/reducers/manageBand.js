export default function manageBand(state = {bands: []}, action) {
  
  switch(action.type) {
    
    case('ADD_BAND'):
      // return [...state.bands, action.band]
    return state.bands.concat(action.band)
    // console.log(action.band)
    // console.log([...state.bands, action.band])

    default:
      return state;
  };
};
