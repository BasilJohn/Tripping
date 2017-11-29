import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER,
    LOGIN_USER_SUCESS,
    LOGIN_USER_FAIL,
    UPDATE_SELECTED_PLACE,
    SHOW_MODAL,
    TRIPS_FETCH_SUCCESS,
    SHOW_TRIP_LIST
} from './types';
import firebase from 'firebase';

export const onEmailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const onPasswordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const onLoginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch(() => loginUserFail(dispatch))
            })
    };
};


const loginUserSuccess = (dispatch, user) => {
    dispatch({ type: LOGIN_USER_SUCESS, payload: user });
};

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
};

export const updateSelectedPlace = (placeSelected, source, sp, ep) => {
    return {
        type: UPDATE_SELECTED_PLACE,
        tripStartPlace: source === 'start' ? placeSelected : sp,
        tripEndPlace: source === 'end' ? placeSelected : ep,
        source: source,
    };
};
export const showModal = (visible,source) => {
    return {
        type: SHOW_MODAL,
        payload: visible,
        placeSource:source
    };
};

export const onAddTrip = (tripStartPlace, tripEndPlace) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/Trip/${currentUser.uid}/Trips`)
            .push({ tripStartPlace, tripEndPlace })
            .then(() => { dispatch({ type: SHOW_TRIP_LIST, payload: true }) });
    };
};


export const fetchTripList = ()=>{
    const { currentUser } = firebase.auth();

    return(dispatch)=>{
        firebase.database().ref(`/Trip/${currentUser.uid}/Trips`)
        .on('value',snapshot=>{
          dispatch({type:TRIPS_FETCH_SUCCESS ,payload : snapshot.val() });
        });
    };
};