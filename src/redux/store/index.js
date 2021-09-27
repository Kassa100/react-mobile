import { createStore, combineReducers } from 'redux'

import index from './reducers/index'
import getUser from "./reducers/login"
import works from './reducers/works'
const store = createStore(
    combineReducers({
        index,
        getUser,
        works
    })
)

export default store