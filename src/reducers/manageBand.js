export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      return {...state, bands: [...state.bands, action.band] }

    //console.log({ bands: state.bands.concat(action.payload.text) });

    default:
      return state;
  }
};
