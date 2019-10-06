export default (state = false, action) => {
    switch (action.type) {
        case 'Chenge':
            return state = !state;
        case 'set':
            return state = action.payload;
        default:
            return state;
    }
}