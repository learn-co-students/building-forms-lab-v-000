import types from "../actions/types";

const defaultState = {
  bands: [],
};

export default function manageBand(state = defaultState, action) {
  switch (action.type) {
    case types.ADD_BAND: {
      const bands = state.bands.concat(action.band);
      return { ...state, bands };
    }
    default:
      return state;
  }
}
