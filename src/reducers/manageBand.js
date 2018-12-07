export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      return { bands: [...state.bands, { name: action.name }] };
    default:
      return state;
  }
}
