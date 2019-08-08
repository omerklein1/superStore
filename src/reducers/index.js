import { combineReducers } from 'redux'
import countriesList from './countriesList'
import change from './change'

const allReducers =combineReducers({
    countriesList,
    change
})

export default allReducers