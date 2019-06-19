export default function manageBand(state = {
  bands: [],
}, action) {
      switch (action.type){

      case 'ADD_BAND':
    console.log("action in reducer", action.band.name)
        return { ...state, bands: [...state.bands, action.band]}

      default:
        return state
    }
};
