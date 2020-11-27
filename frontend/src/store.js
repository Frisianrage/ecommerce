import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {productListReducer, productDetailsReducer} from './reducers/productReducers.js'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer
})

const inititalState = {}

const middleware = [thunk]

const store = createStore(reducer, inititalState, composeWithDevTools(applyMiddleware(...middleware)))

export default store