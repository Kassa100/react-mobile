import { createStore, combineReducers } from 'redux'

import index from './reducers/index'
import getUser from "./reducers/login"
import works from './reducers/works'
import lectures from "./reducers/lectures"
import work from './reducers/work'
import good from './reducers/good'
import messageList from './reducers/messageList'
const store = createStore(
    combineReducers({
        index,
        getUser,
        works,
        lectures,
        work,
        good,
        messageList
    })
)

export default store