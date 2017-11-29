import { EMAIL_CHANGED,
         PASSWORD_CHANGED, 
         LOGIN_USER,
         LOGIN_USER_SUCESS,
         LOGIN_USER_FAIL } from '.././actions/types';

const INITIAL_STATE = { email: '', password : '' ,error:'' ,loading :false }

export default (state=INITIAL_STATE,action) => {
   
    switch(action.type) {
        case EMAIL_CHANGED:
        return { ...state, email:action.payload }
        case PASSWORD_CHANGED:
        return { ...state, password:action.payload }
        case LOGIN_USER :
        return { ...state ,error : '', loading:true }
        case LOGIN_USER_SUCESS:
        return { ...state, ...INITIAL_STATE, user: action.payload  }
        case LOGIN_USER_FAIL:
        return { ...state, ...INITIAL_STATE, 
            user: action.payload, 
            error:'Authentication Failed',
            loading:false 
               }
        default:
        return state;
    }
}