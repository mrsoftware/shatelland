import appConstants from '../constants/appConstants';
import appServices from '../services/app.services';
import userActions from '../actions/user.actions';

const {SAVE_INFO, PROGRESS, UPLOAD_FILE_RESULT, PROGRESS_REQUEST, UPLOADING} = appConstants;
const saveInfo=(info)=>{
    return {
        type:SAVE_INFO,
        info
    }
};
const uploadFile=({name, path, size, type})=> dispatch =>{
    const file = {name, path, size, type};
    const progress = setInterval(()=>dispatch(_uploadFileProgress()), 1000);
    dispatch(_setUploading(true));
    appServices.uploadFile(file).then(uploadResult=>{
        dispatch(_setUploading(false));
        dispatch(_uploadFileStatus(uploadResult));
        clearInterval(progress);
        dispatch(userActions.messageBox(true,'فایل مورد نظر با موفقت آپلود شد.'));
        setTimeout(()=>dispatch(userActions.messageBox(false,'')),2000);
    }).catch(()=>{
        dispatch(_setUploading(false));
        dispatch(userActions.messageBox(true,'خطا در آپلود فایل.'));
        setTimeout(()=>dispatch(userActions.messageBox(false,'')),2000);
        clearInterval(progress);
    })
};
const _uploadFileStatus=(lastUploadedFile)=>({
        type: UPLOAD_FILE_RESULT,
        lastUploadedFile
});
const _uploadFileProgress=()=>(dispatch,getState)=>{
    if (getState().appReducer.progressRequest) return false;
    dispatch(_progressRequest(true));
    appServices.uploadFileProgress().then(progress=>{
        dispatch(_progressRequest(false));
        dispatch(_setProgress(progress))
    }).catch(err=>{
        dispatch(userActions.messageBox(true,'خطا در دریافت وضعیت آپلود فایل.'));
        setTimeout(()=>dispatch(userActions.messageBox(false,'')),2000);
        console.log(err);
    });
};
const _setProgress=(progress)=>({
    type: PROGRESS,
    progress
});
const _setUploading=(status)=>({
    type: UPLOADING,
    status
});
const _progressRequest=(progressRequest)=>({
    type: PROGRESS_REQUEST,
    progressRequest
});
export default {saveInfo, uploadFile, _setUploading}