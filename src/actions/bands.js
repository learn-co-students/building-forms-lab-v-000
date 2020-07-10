export const addBand = band => {
  return {
    type: 'ADD_BAND',
    //bands: Object.assign({}, band)
	band
  }; //creates a copy of the object 
};