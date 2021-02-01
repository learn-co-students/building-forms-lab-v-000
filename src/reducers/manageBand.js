// export default function manageBand(state = {
//   bands: [],
// }, action) {
//   return state
// };


export default function manageBand(state = {
bands: [],
}, action) {
switch (action.type) {
  case 'ADD_BAND':
      console.log("state.bands.........", {bands: state.bands})
      return { bands: state.bands.concat(action.payload.name)}

  default:

}
return state
};
