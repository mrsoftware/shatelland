import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Avatar from "@material-ui/core/Avatar";
import Typography from '@material-ui/core/Typography';
import ListItem from "@material-ui/core/es/ListItem/ListItem";
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";
import List from "@material-ui/core/es/List/List";
import {byteFormatTo} from "../helpers/utils";
import CircularProgress from "@material-ui/core/es/CircularProgress/CircularProgress";
import {green} from '@material-ui/core/colors';
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/es/Tabs/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableViews from 'react-swipeable-views';
import InputLabel from "@material-ui/core/InputLabel";

const  style = theme =>({
    root:{
        width:'100%',
        height:'100%',
        padding:20,
    },
    Paper:{
        margin:10,
        textAlign:'center',
        padding:0,
        overflow:'hidden',
    },
    header:{
        position:'relative',
        textAlign:'right',
        width:'100%',
        padding:'10px 30px',

        '&:after':{
            width:50,
            height:50,
            borderRadius:'50%',
            right:'-25px',
            top:'-10px',
            content:'""',
            position:'absolute',
            background:'#93f9b9'
        }
    },
    profileImage:{
        width:'100%',
        height:'500px',
        float:'left',
        filter: 'grayscale(100%)'
    },
    information:{

    },
    name:{
        textAlign:'right'
    },
    email:{
        textAlign:'right',
        background:'#ebebeb',
        borderRadius:5,
        padding:5,
        overflow:"hidden"
    },
    phone:{
        paddingLeft:20,
        marginTop:5,
        borderBottom:'1px solid #ebebeb'
    },
    wrapper: {
        margin: theme.spacing.unit,
        position: 'relative',
    },
    fabProgress: {
        color: green[500],
        position: 'absolute',
        top: -5,
        left: -5,
        zIndex: 1,
    },
    percentage:{
/*        position: 'absolute',
        top: '30%',
        left: '30%',
        zIndex: 1,
        width:30,
        height:30,
        textAlign:'center',
        paddingTop:5,
        background: 'rgba(255,255,255,0.5)',
        border:'1px solid ' + green[500],
        borderRadius:'50%'*/
        position: 'absolute',
        top: '100%',
        left:-7,
        zIndex: 2,
        width:40,
        height:40,
        textAlign:'center',
        paddingTop:10,
        background: green[500],
        color: '#fff',
        borderRadius:'50%',
        fontSize:14
    },
    normalUploadBox:{
        padding:10,
        borderRadius:5,
        background:'#ebebeb',
        float:'right',
        width:'100%'
    }
});
class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value:0
        }
    }
    handleChange = (event, value) => {
        this.setState({ value });
    };
    handleChangeIndex = index => {
        this.setState({ value: index });
    };
    handleUploadFile=()=>{
        const file = document.getElementById('normalUpload').files[0];
        this.props.uploadFile(file);
    };
    render(){
        const {classes, user, info} = this.props;
        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item md={6}>
                        <Paper className={classes.Paper}>
                            <Grid container>
                                <Grid item xs={6}>
                                    <div className={classes.header}><Typography variant={"title"}>اطلاعات کاربری</Typography></div>
                                    <div className={classes.information}>
                                        <List>
                                            <ListItem style={{paddingRight:5}} className={classes.ListItem} disableGutters title={user.name.first+' '+user.name.last + ' ' +user.email}>
                                                <div className={classes.wrapper}>
                                                    <Avatar style={{width:80,height:80}} alt={user.name.first + ' ' + user.name.last} src={user.avatar+'?size=80'} />
                                                    <div title='مصرف شده' className={classes.percentage}>% {Math.round(100 - (info.AccountLength / info.OffsetLength  * 100))}</div>
                                                    <CircularProgress thickness={1.6} value={100 - (info.AccountLength / info.OffsetLength  * 100)} size={90} className={classes.fabProgress} variant={"static"} />
                                                </div>
                                                <ListItemText
                                                    style={{borderBottom:'1px solid #ebebeb',paddingBottom:10}}
                                                    classes={{primary:classes.name,secondary:classes.email}}
                                                    primary={user.name.first+' '+user.name.last}
                                                    secondary={user.email}
                                                />
                                            </ListItem>
                                            <ListItem style={{padding:10}} className={classes.ListItem} disableGutters title={user.name.first+' '+user.name.last + ' ' +user.email}>
                                                <ListItemText
                                                    style={{marginTop:10}}
                                                    classes={{primary:classes.name,secondary:classes.phone}}
                                                    primary='موبایل'
                                                    secondary={user.callPhone}
                                                />
                                            </ListItem>
                                            <ListItem style={{padding:10}} className={classes.ListItem} disableGutters title={user.name.first+' '+user.name.last + ' ' +user.email}>
                                                <ListItemText
                                                    style={{marginTop:10}}
                                                    classes={{primary:classes.name,secondary:classes.phone}}
                                                    primary='شماره ثابت'
                                                    secondary={user.phone}
                                                />
                                            </ListItem>
                                            <ListItem style={{padding:10}} className={classes.ListItem} disableGutters title={user.name.first+' '+user.name.last + ' ' +user.email}>
                                                <ListItemText
                                                    style={{marginTop:10}}
                                                    classes={{primary:classes.name,secondary:classes.phone}}
                                                    primary='فضای کل'
                                                    secondary={byteFormatTo(info.OffsetLength).replace('GB','گیگابایت')}
                                                />
                                            </ListItem>
                                            <ListItem style={{padding:10}} className={classes.ListItem} disableGutters title={user.name.first+' '+user.name.last + ' ' +user.email}>
                                                <ListItemText
                                                    style={{marginTop:10}}
                                                    classes={{primary:classes.name,secondary:classes.phone}}
                                                    primary='فضای مصرف شده'
                                                    secondary={byteFormatTo(info.OffsetLength - info.AccountLength,undefined,'FA')}
                                                />
                                            </ListItem>
                                        </List>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div className={classes.profileImage} style={{background:`url('${user.avatar}?size=500') center`}}></div>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item md={6}>
                        <Paper className={classes.Paper} style={{paddingBottom:20}}>
                            <AppBar position="static" color="default">
                                <Tabs
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    fullWidth
                                >
                                    <Tab label="آپلود فایل" />
                                    <Tab label="انتقال فایل" />
                                    <Tab label="انتقال از یوتوب" />
                                </Tabs>
                            </AppBar>

                            <SwipeableViews
                                axis={'x-reverse'}
                                index={this.state.value}
                                onChangeIndex={this.handleChangeIndex}
                            >
                                <Typography component="div" dir='rtl' style={{ padding: 8 * 3 }}>
                                    <div className={classes.normalUploadBox}>
                                        <form>
                                            <InputLabel style={{float:'right',background:'#2ec4d9',padding:10,borderRadius:10,color:'#fff',cursor:'pointer'}} htmlFor="normalUpload">انتخاب فایل</InputLabel>
                                            <input onChange={this.handleUploadFile} type='file' id='normalUpload' style={{display:'none'}}/>
                                        </form>
                                    </div>
                                </Typography>
                                <Typography component="div" dir='rtl' style={{ padding: 8 * 3 }}>انتقال فایل</Typography>
                                <Typography component="div" dir='rtl' style={{ padding: 8 * 3 }}>انتقال فایل از یوتوب</Typography>
                            </SwipeableViews>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(style)(Home);