export default function manageBand(state = {
  bands: [],
}, action) {
    switch (action.type) {
      case 'ADD_BAND':
        console.log(state.bands.concat(action.payload.name))
        return { bands: state.bands.concat(action.payload.name) };
  
      default:
      console.log("Not added")
        return state;
    }
  };

  