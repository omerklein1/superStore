export default (state = [], data, error) => {
    switch (data.type) {
        case 'SUBCATEGORIES_READER':
            return data.payload;
    
            case 'SUBCATEGORIES_ERROR':
                return error.message.payload;

        default:
            return state;
    };
}