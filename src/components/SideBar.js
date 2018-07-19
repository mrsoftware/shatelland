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
import CloudDownloadIcon  from '@material-ui/icons/CloudDownload';
import Avatar from '@material-ui/core/Avatar';
import md5 from 'md5';

const drawerWidth = 300;
const style = theme => ({
    sideBar:{
        background: 'linear-gradient(to bottom,  #085078, #85d8ce)',
        height: '100%',
        width:'100%',
        float:'left'
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
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 10,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 10,
        },
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
    ListItem2:{
        paddingRight:'40px',
    },
    ListItemText:{
        marginRight:15,
        textAlign:'right',
        color:'#fff'
    },
    triangle:{
        width: 0,
        height: 0,
        borderTop: '60px solid transparent',
        borderBottom: '60px solid transparent',
        borderLeft: '60px solid green',
    }
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
                variant="permanent"
                elevation={2}
                classes={{
                    paper: classNames(classes.drawerPaper, !this.props.menuOpen && classes.drawerPaperClose),
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
                                <FolderIcon style={{color:'#fff'}}/>
                            </ListItemIcon>
                            <ListItemText
                                classes={{primary:classes.ListItemText}}
                                primary='فایل ها'
                            />
                        </ListItem>
                        <List component={'nav'} className={classes.List} style={{borderRight:'10px solid #fff',display:this.state.fileOpen ? 'block' : 'none'}}>
                            <ListItem button className={classes.ListItem2}>
                                <ListItemText
                                    classes={{primary:classes.ListItemText}}
                                    primary='فیلم ها'
                                />
                            </ListItem>
                            <ListItem button className={classes.ListItem2}>
                                <ListItemText
                                    classes={{primary:classes.ListItemText}}
                                    primary='آهنگ ها'
                                />
                            </ListItem>
                            <ListItem button className={classes.ListItem2}>
                                <ListItemText
                                    classes={{primary:classes.ListItemText}}
                                    primary='mostafa'
                                />
                            </ListItem>
                        </List>
                        <ListItem button className={classes.ListItem} onClick={this.downloadMenu}>
                            <ListItemIcon>
                                <CloudDownloadIcon style={{color:'#fff'}}/>
                            </ListItemIcon>
                            <ListItemText
                                classes={{primary:classes.ListItemText}}
                                primary='دانلود ها'
                            />
                        </ListItem>
                        <List component={'nav'} className={classes.List} style={{borderRight:'10px solid #fff',display:this.state.downloadOpen ? 'block' : 'none'}}>
                            <ListItem button className={classes.ListItem2}>
                                <ListItemText
                                    classes={{primary:classes.ListItemText}}
                                    primary='همه دانلود ها'
                                />
                            </ListItem>
                            <ListItem button className={classes.ListItem2}>
                                <ListItemText
                                    classes={{primary:classes.ListItemText}}
                                    primary='حذف شده'
                                />
                            </ListItem>
                        </List>
                    </List>
                </div>
            </Drawer>
        )
    }
}
export default withStyles(style)(SideBar);