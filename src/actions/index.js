import { EMAIL_CHANGED, 
    PASSWORD_CHANGED, 
    LOGIN_USER, 
    LOGIN_USER_SUCESS, 
    LOGIN_USER_FAIL,
    SET_SELECTED_PLACE } from './types';
import firebase from 'firebase';

export const onEmailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
};

export const onPasswordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
};

export const onLoginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email,password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch(() => loginUserFail(dispatch))
            })
    }
};


const loginUserSuccess = (dispatch, user) => {
    dispatch({ type: LOGIN_USER_SUCESS, payload: user });
}

const loginUserFail = (dispatch) => {

    dispatch({ type: LOGIN_USER_FAIL });
}


