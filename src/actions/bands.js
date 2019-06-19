export const addBand = band => {
  return {
    type: "ADD_BAND",
    band
  }
}

// can also use the this structure
// export function addBand(band){
//   return {
//     type: "ADD_BAND",
//     band
//   }
// }
