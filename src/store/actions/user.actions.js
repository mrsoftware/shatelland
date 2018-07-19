import { push } from 'connected-react-router';
import userConstants from '../constants/userConstants';
import userServices from '../services/user.services'
import appActions from '../actions/app.actions';

const {USER_LOGIN, LOGIN_REQUEST, SET_USER, MESSAGE_BOX} = userConstants;
export const login=(email,password)=> dispatch => {
    dispatch(_loginRequest(true));
    dispatch(messageBox(true,'لطفا کمی صبر کنید ...'));
    userServices.login(email,password).then(info=>{
        dispatch(_loginRequest(false));
        dispatch(_loggedIn(true));
        dispatch(_setUser(info.User));
        dispatch(appActions.saveInfo(info.Info));
        dispatch(messageBox(true,'ورود با موفقت انجام شد.'));
        dispatch(push('/dashboard'));
        setTimeout(()=>{
            dispatch(messageBox(false,''));
        },3000);
    }).catch(err=>{
        if (err === false) err="نام کاربر یا رمز عبور اشتباه است.";
        setTimeout(()=>{
            dispatch(messageBox(false,''));
        },3000);
        dispatch(_loginRequest(false));
        dispatch(messageBox(true,err));
    })
};
const check = ()=>dispatch=>{
    dispatch(messageBox(true,'لطفا کمی صبر کنید ...'));
    dispatch(_loginRequest(true));
    const checkResult = userServices.check();
    if (checkResult){
        dispatch(messageBox(true,'ورود با موفقت انجام شد.'));
        dispatch(_loggedIn(true));
        dispatch(_setUser(checkResult.User));
        dispatch(appActions.saveInfo(checkResult.Info));
        dispatch(push('/dashboard'));
    }else{
        dispatch(messageBox(true,'از حساب کاربری خود خارج شده اید.'));
    }
    dispatch(_loginRequest(false));
    setTimeout(()=>{
        dispatch(messageBox(false,''));
    },3000);
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
export default {login, _loginRequest, _setUser, _loggedIn, messageBox, check}