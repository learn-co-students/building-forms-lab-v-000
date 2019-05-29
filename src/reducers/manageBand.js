export default function manageBand(state = { bands: [] }, action) {

  switch (action.type) {

    case 'ADD_BAND':
      const newState = {
        ...state,
        bands: [...state.bands, action.band]
      }

      return newState;

    default:
      return state
  }
};
