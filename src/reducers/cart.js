export default (state = [], data) => {
    switch (data.type) {
        case 'ADD_TO_CART':
            data.payload.amount = 1
            return [data.payload, ...state];

        case 'REMOVE_FROM_CART':
            let product = state.findIndex(data.payload.id)
            state[product].amount--
            if(state[product].amount <= 0){
                state.pop(state[product])
            }
            return data.payload;

        // case 'REMOVE_FROM_CART':
        //     return error.message.payload;

        case 'EMPTY_CART':
            return state = [];

        default:
            return state;
    };
}