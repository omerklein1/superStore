export default (state = [], data, error) => {
    switch (data.type) {
        case 'CATEGORIES_READER':
            return data.payload;
    
            case 'CATEGORIES_ERROR':
                return error.message.payload;

        default:
            return state;
    };
}