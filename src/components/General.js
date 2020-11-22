import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import  AppBar  from '@material-ui/core/AppBar';
import { orange } from '@material-ui/core/colors';


const General=()=>{
    const useStyles = makeStyles({
        root: {
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          border: 0,
          borderRadius: 3,
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          color: 'white',
          height: 48,
          padding: '0 30px',
        },
        root1:{
            height:'70px',
            backgroundColor: 'orange',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
            
        }
    })
    const classes = useStyles();
    
    return(
        <>
            
            <Button className={classes.root}>Hook</Button>
            <AppBar className={classes.root1}> 
                <div>Home Page</div>
            </AppBar>
           
        </>
    )
        }

export default General;