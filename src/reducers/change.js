export default (state = '', data) => {
    switch (data.type) {
        case 'TEXT_READED':
            return data.payload;  
    
        default:
            return state;
    };
    }