import * as Location from 'expo-location';
import * as actionTypes from './actionTypes';

export const getLocation = () => {
    return dispatch => {
        dispatch(locationLoading());
        (async () => {
            const { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                dispatch(locationFailure('Permission to access location was denied'));
            } else {
                const location = await Location.getCurrentPositionAsync({});
                dispatch(locationSuccess(location));
            }
        })();
    }
}

export const locationLoading = () => {
    return {
        type: actionTypes.LOCATION_LOADING
    };
};

export const locationSuccess = (location) => {
    return {
        type: actionTypes.LOCATION_SUCCESS,
        coords: location.coords
    };
};

export const locationFailure = (error) => {
    return {
        type: actionTypes.LOCATION_FAILURE,
        error: error
    };
};