export default (state = false, data) => {
    switch (data.type) {
        case 'CHANGE_ADMIN_STATE':
            return data.payload;
    
        default:
            return state;
    };
}