export default function manageBand(state = {
  bands: [],
}, action) {
  console.log("Reducer recieved stuff: %", action)
  switch (action.type) {
    case "ADD_BAND":
      return {bands: state.bands.concat(action.band)}
  
    default:
      return state;
  }
};
