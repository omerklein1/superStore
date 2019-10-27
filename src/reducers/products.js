export default (state = null, data) => {
    switch (data.type) {
        case 'DATA_READER':
            return data.payload;

        case 'DATA_ERROR':
            return data.payload;

        default:
            return state;
    };
}