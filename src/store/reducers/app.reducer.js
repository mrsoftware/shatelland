import appInitialState from '../states/appInitialsState';
import appConstants from '../constants/appConstants';

const {SAVE_INFO, PROGRESS, UPLOAD_FILE_RESULT, PROGRESS_REQUEST, UPLOADING} = appConstants;
export const appReducer = (state=appInitialState,action)=>{
    switch (action.type) {
        case SAVE_INFO:
            return {
                ...state,
                info:action.info
            };
        case UPLOADING:
            return {
                ...state,
                uploadingFile: action.status
            };
        case PROGRESS:
            return {
                ...state,
                progress: action.progress
            };
        case PROGRESS_REQUEST:
            return {
                ...state,
                progressRequest: action.progressRequest
            };
        case UPLOAD_FILE_RESULT:
            return {
                ...state,
                lastUploadedFileStatus: action.lastUploadedFileStatus
            };
        default :
            return state;
    }
};