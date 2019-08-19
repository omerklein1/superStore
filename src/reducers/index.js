import { combineReducers } from 'redux'
import change from './change'
import products from './products'
import categoryFilter from './categoryFilter'
import categories from './categories'
import cart from './cart'
import btnStatus from './btnStatus'



const allReducers =combineReducers({
    change,
    products,
    categoryFilter,
    categories,
    cart,
    btnStatus
})

export default allReducers