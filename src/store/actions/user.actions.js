import userConstants from '../constants/userConstants';
import userServices from '../services/user.services'


const {USER_LOGIN, LOGIN_REQUEST, SET_USER} = userConstants;
export const login=(email,password)=> dispatch => {
    userServices.login(email,password).then();
};
const _loginRequest=(result)=>{
    return {
        type:LOGIN_REQUEST,
        result
    }
};
const _setUser=(user)=>{
    return {
        type:LOGIN_REQUEST,
        user
    }
};

const _loggedIn=(loggedIn)=>{
    return {
        type:LOGIN_REQUEST,
        loggedIn
    }
};
export default {login, _loginRequest, _setUser, _loggedIn}