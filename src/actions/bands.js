export const addBand = (band) => {
  return {
    type: 'ADD_BAND',
    band  
  };
};

export const removeBand = (bandId) => {
  return {
    type: 'REMOVE_BAND',
    bandId  
  };
};