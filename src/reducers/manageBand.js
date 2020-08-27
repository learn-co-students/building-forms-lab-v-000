export default function manageBand(state = {
  bands: [],
}, action) {

  switch (action.type) {
    case 'ADD_BAND':
      // console.log("in action add_band")
      // return Object.assign({}, state, {bands: state.bands.concat(action.band)}) 
      return { bands: [...state.bands.concat(action.band)] }
    default:
      return state;
  }
};


// {
//   ...state, bands: [...state.bands, action.band]
// }