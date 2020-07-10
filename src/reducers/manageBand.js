export default function manageBand(state = {
  bands: [],
       }, action) {

  switch (action.type) {
   
    case 'ADD_BAND':

// we are adding to the store here
      return { ...state, bands: [...state.bands, action.band] };

    default:
      return state;

  }
};
