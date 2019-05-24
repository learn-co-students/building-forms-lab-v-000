export default function manageBand(
  state = {
    bands: []
  },
  action
) {
  switch (action.type) {
    case "ADD_BAND":
      console.log("reducer received this action:", action);

      console.log({ bands: state.bands.concat(action.band.name) }, "yo");
      return { ...state, bands: [...state.bands, action.band] };

    default:
      return state;
  }
}
