export default (state = true, data) => {
    switch (data.type) {
        case 'BTN_CHANGE':
            return data.payload;
    
        default:
            return state;
    };
}