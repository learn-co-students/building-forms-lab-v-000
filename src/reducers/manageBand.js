export default function manageBand(state = {
  bands: [],
  }, action) {

  switch (action.type) {
    case "ADD_BAND":
      let data = action.payload
      console.log("setting as:", action.payload)
      return {
        bands: [...state.bands, data]
      }

    default:
      return state;
  }
};
