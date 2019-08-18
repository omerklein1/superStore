    export default (state = [], data, error) => {
    switch (data.type) {
        case 'DATA_READER':
            return data.payload;
    
            case 'DATA_ERROR':
                return error.message.payload;

        default:
            return state;
    };
}