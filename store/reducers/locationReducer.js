import {
    LOCATION_FAILURE,
    LOCATION_LOADING,
    LOCATION_SUCCESS,
} from "../actions/actionTypes";

const swipeDefaultState = {
    loading: true,
    error: null,
    location: {},
}

export default (state = swipeDefaultState, action) => {
    switch (action.type) {
        case LOCATION_LOADING:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case  LOCATION_SUCCESS:
            return {
                ...state,
                loading: false,
                location: action.coords,
            }
        case LOCATION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            }
        default:
            return state
    }
}