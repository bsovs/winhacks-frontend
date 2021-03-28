import { SET_PROFILE } from "../actions/actionTypes"

const profileDefaultState = {
    firstName: '',
    lastName: '',
    email: '',
    uid: '',
}

export default (state = profileDefaultState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}