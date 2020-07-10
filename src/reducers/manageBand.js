export default function manageTodo(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case 'ADD_BAND':

    return { ...state, bands: [...state.bands, action.band] }

    default:
      return state;
  }
}
