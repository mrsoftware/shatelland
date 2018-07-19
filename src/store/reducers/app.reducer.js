import appInitialState from '../states/appInitialsState';
import appConstants from '../constants/appConstants';

const {SAVE_INFO} = appConstants;
export const appReducer = (state=appInitialState,action)=>{
    switch (action.type) {
        case SAVE_INFO:
            return {
                ...state,
                info:action.info
            };
        default :
            return state;
    }
};