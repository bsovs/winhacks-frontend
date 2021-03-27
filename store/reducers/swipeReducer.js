import {
    CARDS_FAILURE,
    CARDS_LOADING,
    CARDS_SUCCESS,
    ON_SWIPE,
    SWIPE_FAILURE,
    SWIPE_SUCCESS
} from "../actions/actionTypes";

const swipeDefaultState = {
    loading: true,
    error: null,
    cards: null,
}

export default (state = swipeDefaultState, action) => {
    switch (action.type) {
        case CARDS_LOADING:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case CARDS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                cards: action.cards,
            }
        case CARDS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            }
        case ON_SWIPE:
            return {
                ...state,
                error: null,
            }
        case SWIPE_SUCCESS:
            return {
                ...state,
                error: null,
            }
        case SWIPE_FAILURE:
            return {
                ...state,
                error: action.error,
            }
        default:
            return state
    }
}