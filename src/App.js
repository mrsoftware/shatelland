import React, {Component} from 'react';
import Login from './components/Login';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import { connect } from 'react-redux';
import Snackbar from "@material-ui/core/Snackbar";
import userActions from './store/actions/user.actions';
import {ConnectedRouter} from "connected-react-router";
import {Route, Switch, Redirect} from "react-router-dom";
import history from './store/history';
import Dashboard from './components/Dashboard';

const theme=createMuiTheme({
    direction: "rtl",
    typography : {
        fontFamily : ['IRANSans',"tahoma", "Helvetica", "Arial", "sans-serif"].join(',')
    },
});

class App extends Component {
    loginHandler = (email,password) =>{
        const { dispatch } = this.props;
        dispatch(userActions.login(email,password));
    };
    componentDidMount(){
        const { dispatch } = this.props;
        dispatch(userActions.check());
    }
    render() {
        return (
            <MuiThemeProvider theme={theme} >
                <CssBaseline />
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}}
                    open={this.props.showMessageBox}
                    autoHideDuration={6000}
                    ContentProps={{'aria-describedby': 'message-id' }}
                    message={this.props.error}
                />
                {this.props.loggedIn ? (
                    <ConnectedRouter history={history}>
                        <Switch >
                            <Route exact path='/' render={(routeProps)=>{
                               return this.props.loggedIn ? (<Login {...routeProps} loginHandler={this.loginHandler}/>) : (<Redirect to={'/dashboard'}/>)
                            }}/>
                            <Route exact path='/dashboard' render={(routeProps)=> <Dashboard user={this.props.self} {...routeProps}/>}/>
                            <Route render={()=>(<div> Not Found </div>)}/>
                        </Switch>
                    </ConnectedRouter>
                ) : (<Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'right'}}
                    open={true}
                    autoHideDuration={6000}
                    ContentProps={{'aria-describedby': 'message-id' }}
                    message="در حال بررسی اعتبار صبور باشید"
                />)}


            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = (state) =>{
    const { error, showMessageBox, loggedIn, self } = state.userReducer;
    return {error, showMessageBox, loggedIn, self };
};

export default connect(mapStateToProps)(App);
