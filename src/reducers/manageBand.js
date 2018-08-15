export default function manageBand(state = {
  bands: [],
}, action) {

  switch (action.type) {
    case 'ADD_BAND':
      //return { bands: state.bands.concat(action.payload.name) };
      //return { bands: state.bands.concat(action.band.name) };
      return { bands: state.bands.concat(action.band) };
      //return { ...state, bands: [...state.bands, action.band] }
    default:
      return state;
    }
};
