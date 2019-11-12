export default function manageBand(state = {
  bands: [],
       }, action) {
debugger
  switch (action.type) {
   
    case 'ADD_BAND':
debugger
      console.log({ bands: state });

      return { bands: state.bands.concat(action.payload.text) };
      
    default:
      return state;

  }
};
