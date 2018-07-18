import React, {Component} from 'react';
import Login from './components/Login';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import { connect } from 'react-redux';
import userActions from './store/actions/user.actions';

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
    render() {
        return (
            <MuiThemeProvider theme={theme} >
                <CssBaseline />
                <Login loginHandler={this.loginHandler}/>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = (state) =>{
    return state;
};

export default connect(mapStateToProps)(App);
