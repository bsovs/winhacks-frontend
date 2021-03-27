import {SET_PROFILE} from "./actionTypes";

export function setProfile(profile = {}) {
    return {
        type: SET_PROFILE,
        payload: profile
    }
}
