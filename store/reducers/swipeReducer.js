import {ON_SWIPE, SWIPE_FAILURE, SWIPE_SUCCESS} from "../actions/actionTypes";

const swipeDefaultState = {
    loading: false,
    error: null,
}

export default (state = swipeDefaultState, action) => {
    switch (action.type) {
        case ON_SWIPE:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case SWIPE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
            }
        case SWIPE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}