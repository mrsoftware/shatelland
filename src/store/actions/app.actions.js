import appConstants from '../constants/appConstants';

const {SAVE_INFO} = appConstants;
const saveInfo=(info)=>{
    return {
        type:SAVE_INFO,
        info
    }
};
export default {saveInfo}