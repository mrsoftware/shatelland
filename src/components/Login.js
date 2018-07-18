import React from 'react';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import RTL from "../RTL";
import Button from "@material-ui/core/Button";

const style = theme =>({
    root: {
        flexGrow: 1,
        position:'relative',
    },
    login:{
        marginTop:'calc(30vh / 2 )',
        width:'100%',
        height:'500px',
        background:'#fff',
    },
    loginLeft:{
        background:'url("/images/login_bg.png")'
    },
    description:{
        height:'500px',
        textAlign:'center',
        padding:10,
        '& h2':{
            color:'#fff',
        },
        '& p':{
            color:'#fff'
        }
    },
    logo:{
        margin:'50px auto 0',
        background:'#ff',
        width:100,
        height:100,
        '& img':{
            width:'100%',
            borderRadius:'50%',
            border:'5px solid #fff',
        }
    },
    input:{
        textAlign:'left',
    },
});
const Login = function (props){
    return (
        <Grid container justify={"center"} className={props.classes.root}>
            <Grid item xs={10} md={8} lg={6}>
                <Paper className={props.classes.login}>
                    <Grid container className={props.classes.root}>
                        <Grid item xs={4} className={classNames(props.classes.loginLeft,props.classes.description)}>
                            <div className={props.classes.logo}>
                                <img src='/images/logo.png'/>
                            </div>
                            <h2>ورود</h2>
                            <p> به نرم افزار شاتل لند نسخه دسکتاب خوش آمدید .<br/> لطفا در نظر داشته باشید که این برنامه نسخه غیر رسیمی از برنامه اصلی است و تحت لیسانس MIT در گیتهاپ قرار داره. </p>
                            <a href='https://github.com/mrsoftware/shatelland'><img src='/images/github.png' style={{width:30,position:'absolute',right:10,bottom:10}}/></a>
                        </Grid>
                        <Grid item xs={8} className={props.classes.description}>
                            <div style={{clear:'both',marginTop:100}}></div>
                            <RTL>
                                <form onSubmit={(e)=>{
                                    e.preventDefault();
                                    const email = document.getElementById('email').value;
                                    const password = document.getElementById('password').value;
                                    props.loginHandler(email,password);
                                }}>
                                    <TextField
                                        className={props.classes.input}
                                        id="email"
                                        name='email'
                                        label="آدرس ایمیل"
                                        type='email'
                                    />
                                    <div style={{clear:'both',marginTop:30}}></div>
                                    <TextField
                                        className={props.classes.input}
                                        id="password"
                                        name='password'
                                        label="رمز"
                                        type='password'
                                    />
                                    <div style={{clear:'both',marginTop:30}}></div>
                                    <Button type='submit' variant='contained' color="primary" > ثبت نام </Button>
                                </form>
                            </RTL>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
};

export default withStyles(style)(Login);