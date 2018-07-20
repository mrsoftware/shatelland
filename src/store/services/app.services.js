const {ipcRenderer} = require('electron');

const uploadFile=(file)=>{
    return new Promise((resolve,reject)=>{
        const Cookie = localStorage.getItem('Cookie');
        ipcRenderer.send('UPLOAD_FILE',file,Cookie);
        ipcRenderer.once('UPLOAD_FILE',(event,result)=>{
            if (result==null) reject(false);
            else resolve(result);
        });
    });
};
const uploadFileProgress=()=>{
    return new Promise((resolve)=>{
        const result = ipcRenderer.sendSync('UPLOAD_FILE_PROGRESS');
        resolve(result);
    });
};
export default {uploadFile,uploadFileProgress}