export default function manageBand(state = { bands: [] }, action) {

  switch (action.type) {

    case 'ADD_BAND':
      state.bands.push({name: action.name})
      return state
    default:
      return state

  }
};
