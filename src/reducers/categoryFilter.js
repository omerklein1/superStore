export default (state = '', data) => {
    switch (data.type) {
        case 'SENDING_DATA':
            return data.payload;
    
        default:
            return state;
    };
}