import React, {Component} from 'react';
import SideBar from './SideBar';
import TopMenu from './TopMenu'


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
        return (
            <React.Fragment>
                <TopMenu menuHandler={this.menuHandler}/>
                <SideBar user={this.props.user} menuOpen={this.state.menuOpen}/>
            </React.Fragment>
        );
    }
}
export default Dashboard;
