import userInitialState from '../states/userInitialsState';
import userConstants from '../constants/userConstants';


const {LOGIN_REQUEST,SET_USER,USER_LOGIN} = userConstants;
export const userReducer = (state=userInitialState,action)=>{
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loginRequest:action.result
            };
        case SET_USER:
            return {
                ...state,
                self:action.user
            };
        case USER_LOGIN:
            return {
                ...state,
                loggedIn:action.loggedIn
            };
        default :
            return state;
    }
};