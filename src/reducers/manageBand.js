export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case 'ADD_BAND':

      console.log({ bands: state.bands.concat(action.payload.text) });

      return { bands: state.bands.concat({name: action.payload}) };

    default:
      return state;
  }
};
