import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import history from "./history";
import {userReducer} from './reducers/user.reducer';

const rootReducer = combineReducers({userReducer});

export default createStore(
    connectRouter(history)(rootReducer),
    compose(
        applyMiddleware(thunk, routerMiddleware(history)),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ),
);
