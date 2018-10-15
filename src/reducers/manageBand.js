export default function manageBand(state = {
  bands: [],
}, action) {
  switch(action.type){
    case "ADD_BAND":
      return {...state, bands: state.bands.concat(action.band_data)}

    default:
      return state
  }
};
