import axios from '../axios/axios-config';
import  * as actionTypes from './actionTypes';

export const onSwipe = ({id, rating}) => {
    console.log(id, rating)
    return dispatch => {
        dispatch(swipeStart());
        axios.post( '/profiles/swipe',  {homeId: id, rating})
            .then( response => {
                console.log(response);
                dispatch(swipeSuccess());
            } )
            .catch( error => {
                console.log(error);
                dispatch(swipeFailure(error));
            } );
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
