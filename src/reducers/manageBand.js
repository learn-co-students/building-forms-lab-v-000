export default function manageBand (state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
    debugger
      return Object.assign({}, state, { bands: state.bands.concat(action.text) })
    default:
      return state
  }
};
