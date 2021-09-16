import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducers from './RootReducer'

let middleware = [thunk]

if (process.env.NODE_ENV === 'development') {
    middleware = [...middleware, logger]

} else {
    middleware = [...middleware]
}

const store = createStore(rootReducers, compose(applyMiddleware(...middleware)));
export default store;