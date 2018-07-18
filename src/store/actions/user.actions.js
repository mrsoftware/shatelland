import userConstants from '../constants/userConstants';
import userServices from '../services/user.services'


const {USER_LOGIN, LOGIN_REQUEST, SET_USER, MESSAGE_BOX} = userConstants;
export const login=(email,password)=> dispatch => {
    dispatch(_loginRequest(true));
    dispatch(messageBox(true,'لطفا کمی صبر کنید ...'));
    userServices.login(email,password).then(info=>{
        dispatch(_loginRequest(false));
        dispatch(_loggedIn(true));
        dispatch(_setUser(info.User));
        dispatch(messageBox(true,'ورود با موفقت انجام شد.'));
        setTimeout(()=>{
            dispatch(messageBox(false,''));
        },3000);
    }).catch(err=>{
        if (err === 'Login failed.') err="نام کاربر یا رمز عبور اشتباه است";
        setTimeout(()=>{
            dispatch(messageBox(false,''));
        },3000);
        dispatch(_loginRequest(false));
        dispatch(messageBox(true,err));
    })
};
const _loginRequest=(result)=>{
    return {
        type:LOGIN_REQUEST,
        result
    }
};
const messageBox=(show,error)=>{
    return{
        type:MESSAGE_BOX,
        show,
        error
    }
};
const _setUser=(user)=>{
    return {
        type:SET_USER,
        user
    }
};

const _loggedIn=(loggedIn)=>{
    return {
        type:USER_LOGIN,
        loggedIn
    }
};
export default {login, _loginRequest, _setUser, _loggedIn, messageBox}