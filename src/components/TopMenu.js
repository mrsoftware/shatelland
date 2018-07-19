import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from '@material-ui/icons/Menu';


const style = () =>({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -18,
        marginRight: 10,
    },
    title:{
        padding:'0 30px'
    },
    AppBar:{
        background: 'linear-gradient(to left,  #16222a, #3a6073)',
    },
    gutters:{
        paddingRight:5
    }
});
const TopMenu = function (props) {
    return (
        <div className={props.classes.root}>
            <AppBar position="static" className={props.classes.AppBar} >
                <Toolbar variant="dense" classes={{gutters:props.classes.gutters}}>
                    <IconButton className={props.classes.menuButton} color="inherit" aria-label="Menu" onClick={props.menuHandler}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" className={props.classes.title}>شاتل لند</Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
};

export default withStyles(style)(TopMenu);