import { combineReducers } from 'redux'
// import countriesList from './countriesList'
import change from './change'
import products from './products'
import categoryFilter from './categoryFilter'
import categories from './categories'
import cart from './cart'


const allReducers =combineReducers({
    // countriesList,
    change,
    products,
    categoryFilter,
    categories,
    cart
})

export default allReducers