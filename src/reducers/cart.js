export default (state = [], data) => {
    switch (data.type) {
        case 'ADD_TO_CART':
                const product = state.findIndex(p => p.id === data.payload.id)
                console.log(product)
                if(product >= 0) {
                    state[product].amount++
                    return [...state]
                }else {
                
            data.payload.amount = 1
            return [data.payload, ...state]};

        case 'REMOVE_FROM_CART':
       const prod = state.findIndex(p => p.id === data.payload.id)
            state[prod].amount--
            console.log(state[prod].amount)
            if(state[prod].amount <= 0){
                state.splice(prod,1)
            }
            return [...state];

        // case 'REMOVE_FROM_CART':
        //     return error.message.payload;

        case 'EMPTY_CART':
            return state = [];

        default:
            return state;
    };
}