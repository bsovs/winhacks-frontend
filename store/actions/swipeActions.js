import axios from '../axios/axios-config';
import * as actionTypes from './actionTypes';

export const getCards = (location) => {
    return dispatch => {
        dispatch(cardsLoading());
        axios.post('/homes/fetch', {lat: location.latitude, lon: location.longitude})
            .then(response => {
                dispatch(cardsSuccess(response.data));
            })
            .catch(error => {
                console.log(error);
                dispatch(cardsFailure(error));
            });
    };
};

export const cardsLoading = () => {
    return {
        type: actionTypes.CARDS_LOADING
    };
};

export const cardsSuccess = (cards) => {
    return {
        type: actionTypes.CARDS_SUCCESS,
        cards: cards
    };
};

export const cardsFailure = (error) => {
    return {
        type: actionTypes.CARDS_FAILURE,
        error: error
    };
};

export const onSwipe = ({id, rating}) => {
    return dispatch => {
        dispatch(swipeStart());
        axios.post('/profiles/swipe', {homeId: id, rating})
            .then(response => {
                dispatch(swipeSuccess());
            })
            .catch(error => {
                console.log(error);
                dispatch(swipeFailure(error));
            });
    };
};

export const swipeStart = () => {
    return {
        type: actionTypes.ON_SWIPE
    };
};

export const swipeSuccess = () => {
    return {
        type: actionTypes.SWIPE_SUCCESS,
    };
};

export const swipeFailure = (error) => {
    return {
        type: actionTypes.SWIPE_FAILURE,
        error: error
    };
};
