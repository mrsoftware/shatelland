const {ipcRenderer} = require('electron');

const login=(Email,Password)=>{
    return new Promise((resolve,reject)=>{
        ipcRenderer.send('USER_LOGIN',{Email,Password,Remember:'true',redirectTo:'~/Upload/Index'});
        ipcRenderer.on('USER_LOGIN',(event, result)=>{
            if (result===false){
                reject(result);
            } else{
                document.cookie = result.Cookie;
                localStorage.setItem('Cookie',result.Cookie);
                localStorage.setItem('User',JSON.stringify(result.User));
                localStorage.setItem('Info',JSON.stringify(result.Info));
                resolve(result);
            }

        });
    });
};
const check=()=>{
    return localStorage.getItem('User') ? {User:JSON.parse(localStorage.getItem('User')),Info:JSON.parse(localStorage.getItem('Info'))} : false;
};
export default {login, check}