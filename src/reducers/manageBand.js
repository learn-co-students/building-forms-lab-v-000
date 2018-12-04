export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
 
      // console.log({ todos: state.todos.concat(action.payload.text) });
 
      return { bands: state.bands.concat(action.payload) };
 
    default:
      return state;
  }
}