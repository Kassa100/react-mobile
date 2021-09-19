import { createStore, combineReducers } from 'redux'

import index from './reducers/index'
import getUser from "./reducers/login"
const store = createStore(
    combineReducers({
        index,
        getUser
    })
)

export default store