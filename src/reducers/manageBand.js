export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type){
    case "ADD_BAND":
      console.log({bands: state.bands.concat(action.x)});
      return {bands: state.bands.concat(action.x)}
    default:
      return state;
  }
};
