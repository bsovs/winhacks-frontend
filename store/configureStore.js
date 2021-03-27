import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import profileReducer from './reducers/profileReducer'

const rootReducer = combineReducers({
    profile: profileReducer,
})

const configureStore = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
))

export default configureStore