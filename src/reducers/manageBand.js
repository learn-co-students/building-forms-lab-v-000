export default function manageBand(state = {
  bands: [],
}, action) {

  console.log("reducer received this action:", action);

  switch(action.type){
    case 'ADD_BAND':
      console.log({ bands: state.bands.concat(action.band.name) });
      return {
        ...state, bands: [...state.bands, action.band]
        //bands: state.bands.concat(action.band.name)
      }

    default:
    return state
  }
};
