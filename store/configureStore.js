import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import profileReducer from './reducers/profileReducer'
import swipeReducer from "./reducers/swipeReducer";
import locationReducer from "./reducers/locationReducer";

const rootReducer = combineReducers({
    profile: profileReducer,
    swipe: swipeReducer,
    loc: locationReducer,
})

const configureStore = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
))

export default configureStore