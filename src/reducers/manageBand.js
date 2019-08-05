export default function manageBand(state = {bands: [],}, action) {
  let band;
  switch (action.type) {

    case 'ADD_BAND':
      return state.concat(action.band);
  }
  return state
};
