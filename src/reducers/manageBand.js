export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type){
    case 'ADD_TODO':
      return {bands: state.bands.concat(action.payload.text)};
    default:
      return state;
  }
};
