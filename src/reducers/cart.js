export default (state = null, data, error) => {
    switch (data.type) {
        case 'ADD_TO_CART':
            return [data.payload, ...state];

        case 'REMOVE_FROM_CART':
            let product = state.findIndex(data.payload.id)
            state[product].amount--
            
            return;

        case 'REMOVE_FROM_CART':
            return error.message.payload;

        case 'EMPTY_CART':
            return data.payload;

        default:
            return state;
    };
}