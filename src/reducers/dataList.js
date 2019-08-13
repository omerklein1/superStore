    export default (state = null, data) => {
    switch (data.type) {
        case 'DATA_READER':
            return data.payload;
    
        default:
            return state;
    };
}