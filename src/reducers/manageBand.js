export const addBandName = (bandName) => {
  return {type: 'ADD_BAND',bandName}
}
export default function manageBand(state = {bands: []}, action) {
  switch(action.type){
    case 'ADD_BAND':
      return {...state,bands: [...state.bands,{name: action.bandName}]}

    default: return state
  }
};
