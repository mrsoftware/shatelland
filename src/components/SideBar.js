import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import classNames from 'classnames';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AppsIcon  from '@material-ui/icons/Apps';
import FolderIcon  from '@material-ui/icons/Folder';
import FolderOpenIcon  from '@material-ui/icons/FolderOpen';
import CloudDownloadIcon  from '@material-ui/icons/CloudDownload';
import CloudIcon  from '@material-ui/icons/Cloud';
import DeleteIcon  from '@material-ui/icons/Delete';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import Collapse from "@material-ui/core/Collapse";
import md5 from 'md5';

const drawerWidth = 300;
const style = theme => ({
    sideBar:{
        background: 'linear-gradient(to bottom,  #085078, #85d8ce)',
        height: '100%',
        width:'100%',
        float:'left'
    },
    Drawer:{
        float:'right'
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        height: 'calc(100vh - 48px)',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    logo:{
        width:'100%',
        float:'left',
        height:87,
        borderBottom:'1px solid rgba(255,255,255, 0.2)',
        color:'#fff',
        padding:7,
    },
    List:{
        float:'right',
        width:'100%',
        transition: theme.transitions.create('display', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    name:{
      color:'#fff',
      textAlign:'right'
    },
    email:{
      color:'#fff',
        textAlign:'right'
    },
    ListItem:{
        padding:'20px 15px',
    },
    ListItemText:{
        marginRight:15,
        textAlign:'right',
        color:'#fff'
    },
});

class SideBar extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            downloadOpen:false,
            fileOpen:false,
        }
    }
    downloadMenu=()=>{
        this.setState({downloadOpen:!this.state.downloadOpen})
    };
    fileMenu=()=>{
        this.setState({fileOpen:!this.state.fileOpen})
    };
    render(){
        const {classes} = this.props;
        return (
            <Drawer
                variant="persistent"
                elevation={2}
                className={classes.Drawer}
                classes={{
                    paper: classNames(classes.drawerPaper),
                }}
                open={this.props.menuOpen}
            >
                <div className={classes.sideBar}>
                    <List component={'nav'} className={classNames(classes.List,classes.logo)}>
                        <ListItem className={classes.ListItem}>
                                <Avatar alt="Remy Sharp" src={"https://www.gravatar.com/avatar/"+md5(this.props.user.email)+'?size=300'} className={classes.avatar} />
                            <ListItemText
                                classes={{primary:classes.name,secondary:classes.email}}
                                primary={this.props.user.name.first+' '+this.props.user.name.last}
                                secondary={this.props.user.email}
                            />
                        </ListItem>
                    </List>
                    <List component={'nav'} className={classes.List}>
                        <ListItem button className={classes.ListItem}>
                            <ListItemIcon>
                                <AppsIcon style={{color:'#fff'}}/>
                            </ListItemIcon>
                            <ListItemText
                                classes={{primary:classes.ListItemText}}
                                primary='بخش اصلی'
                            />
                        </ListItem>
                        <ListItem button className={classes.ListItem} onClick={this.fileMenu}>
                            <ListItemIcon>
                                {this.state.fileOpen ? <FolderOpenIcon style={{color:'#fff'}}  /> : <FolderIcon style={{color:'#fff'}} />}
                            </ListItemIcon>
                            <ListItemText classes={{primary:classes.ListItemText}}  primary='مدیریت فایل ها'/>
                            {this.state.fileOpen ? <ExpandLess style={{color:'#fff'}}  /> : <ExpandMore style={{color:'#fff'}} />}
                        </ListItem>
                        <Collapse in={this.state.fileOpen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem button>
                                    <ListItemIcon>
                                        <FolderIcon style={{color:'#fff'}} />
                                    </ListItemIcon>
                                    <ListItemText inset primary="فیلم ها" classes={{primary:classes.ListItemText}} />
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <FolderIcon style={{color:'#fff'}} />
                                    </ListItemIcon>
                                    <ListItemText inset primary="آهنگ ها" classes={{primary:classes.ListItemText}} />
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <FolderIcon style={{color:'#fff'}} />
                                    </ListItemIcon>
                                    <ListItemText inset primary="عکس ها" classes={{primary:classes.ListItemText}} />
                                </ListItem>
                            </List>
                        </Collapse>
                        <ListItem button className={classes.ListItem} onClick={this.downloadMenu}>
                            <ListItemIcon>
                                <CloudDownloadIcon style={{color:'#fff'}}/>
                            </ListItemIcon>
                            <ListItemText classes={{primary:classes.ListItemText}} primary='دانلود ها' />
                            {this.state.downloadOpen ? <ExpandLess style={{color:'#fff'}}  /> : <ExpandMore style={{color:'#fff'}} />}
                        </ListItem>
                        <Collapse in={this.state.downloadOpen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem button>
                                    <ListItemIcon>
                                        <CloudIcon style={{color:'#fff'}} />
                                    </ListItemIcon>
                                    <ListItemText inset primary="همه دانلود ها" classes={{primary:classes.ListItemText}} />
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <DeleteIcon style={{color:'#fff'}} />
                                    </ListItemIcon>
                                    <ListItemText inset primary="حذف شده" classes={{primary:classes.ListItemText}} />
                                </ListItem>
                            </List>
                        </Collapse>
                    </List>
                </div>
            </Drawer>
        )
    }
}
export default withStyles(style)(SideBar);