const {ipcRenderer} = require('electron');

const login=(Email,Password)=>{
    return new Promise((resolve,reject)=>{
        ipcRenderer.send('USER_LOGIN',{Email,Password,Remember:'true',redirectTo:'~/Upload/Index'});
        ipcRenderer.on('USER_LOGIN',(event, result)=>{
            if (result==='login failed'){
                reject(result);
            } else{
                document.cookie = result.Cookie;
                localStorage.setItem('Cookie',result.Cookie);
                localStorage.setItem('User',JSON.stringify(result.User));
                resolve(result);
            }

        });
    });
};
export default {login}