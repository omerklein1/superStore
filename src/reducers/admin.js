export default (state = true, data) => {
    switch (data.type) {
        case 'CHANGE_ADMIN_STATE':
            return data.payload;
    
        default:
            return state;
    };
}