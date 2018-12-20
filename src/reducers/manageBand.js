let initState = {
  bands: []
}

export default function manageBand(state = initState, action) {
  switch (action.type) {

    case 'ADD_BAND':
      return {
        ...state,
        bands: [ ...state.bands, action.band ]
      }

    default:
      return state;
  }
};
