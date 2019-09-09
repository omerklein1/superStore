import { combineReducers } from 'redux'
import change from './change'
import products from './products'
import categoryFilter from './categoryFilter'
import categories from './categories'
import cart from './cart'
import admin from './admin'
import subCategories from './subCategories'



const allReducers =combineReducers({
    change,
    products,
    categoryFilter,
    categories,
    cart,
    subCategories,
    admin
})

export default allReducers