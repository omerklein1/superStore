import { combineReducers } from 'redux'
// import countriesList from './countriesList'
import change from './change'
import dataList from './dataList'
import categoryFilter from './categoryFilter'


const allReducers =combineReducers({
    // countriesList,
    change,
    dataList,
    categoryFilter
})

export default allReducers