import React, {Component} from 'react';
import SideBar from './SideBar';
import TopMenu from './TopMenu'
import {Route, Switch} from "react-router-dom";
import {withStyles} from '@material-ui/core/styles';

const style =() =>({
    main:{
        float:'left',
        width:'100%'
    }
});
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state={
            menuOpen:true
        }
    }
    menuHandler=()=>{
        this.setState({menuOpen: !this.state.menuOpen});
    };
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <TopMenu menuHandler={this.menuHandler}/>
                <SideBar user={this.props.user} menuOpen={this.state.menuOpen}/>
                <main className={classes.main}>
                    <Switch >
                        <Route exact path={`${this.props.match.url}/`} render={()=>(
                            <div>Dash Items</div>
                        )}/>
                    </Switch>
                </main>
            </React.Fragment>
        );
    }
}
export default withStyles(style)(Dashboard);
