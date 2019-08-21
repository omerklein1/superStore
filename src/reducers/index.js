import { combineReducers } from 'redux'
import change from './change'
import products from './products'
import categoryFilter from './categoryFilter'
import categories from './categories'
import cart from './cart'
import admin from './admin'
import subCategories from './subCategories'
// import btnStatus from './btnStatus'



const allReducers =combineReducers({
    change,
    products,
    categoryFilter,
    categories,
    cart,
    // btnStatus,
    subCategories,
    admin
})

export default allReducers