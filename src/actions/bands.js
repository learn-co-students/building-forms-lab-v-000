// here export functions that return actions
// i.e export action creators

export const addBand = band => {
    console.log("generating action to add band")
    return {
        type: 'ADD_BAND',
        band: band
    }
};