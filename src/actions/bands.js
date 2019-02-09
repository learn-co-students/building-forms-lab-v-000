export const addBand = band => {
    return {
        type: 'ADD_BAND',
        payload: { name: band.name }
    }
}