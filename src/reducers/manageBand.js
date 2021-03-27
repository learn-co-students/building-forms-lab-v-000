export default function manageBand(state = {
  bands: [],
}, action) {
  console.log(action)
  console.log(state)
  switch(action.type) {
    case "ADD_BAND":
      return {bands: [...state.bands, action.band]}
    default:
    break;
  }
  return state
};
