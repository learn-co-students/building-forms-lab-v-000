export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      return { bands: state.bands.concat(action.band) }
    default:
      return state;
  }
};

// export default function manageTodo(state = {
//   todos: [],
// }, action) {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return { todos: state.todos.concat(action.todo) }
//     default:
//       return state;
//   }
// }
