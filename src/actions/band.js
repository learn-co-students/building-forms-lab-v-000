import types from "./types";

export const addBand = (band) => ({
  type: types.ADD_BAND,
  band,
});
