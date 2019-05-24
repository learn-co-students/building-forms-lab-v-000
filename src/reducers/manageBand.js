export default function manageBand(
  state = {
    bands: []
  },
  action
) {
  switch (action.type) {
    case "ADD_BAND":
      console.log({ bands: state.bands.concat(action.band.name) });
      return { ...state, bands: state.bands.concat(action.band.name) };
  }
  console.log("reducer received this action:", action);
  return state;
}
