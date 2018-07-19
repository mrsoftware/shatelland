import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'

const  style = () =>({
    root:{
        width:'100%',
        height:'100%',
        padding:20,
    },
    Paper:{
        margin:10,
        textAlign:'center',
        padding:10
    }
});
const DashItems = function ({classes}) {
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item md={6}>
                    <Paper className={classes.Paper}>
                        نمایش اطلاعاتی در مورد حساب کاربری و ..
                    </Paper>
                </Grid>
                <Grid item md={6}>
                    <Paper className={classes.Paper}>
                        آپلواد سریع فایل
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
};

export default withStyles(style)(DashItems);