import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const FormUserDetails=(props)=>{
    const conti = e => {
        e.preventDefault();
        props.nextStep();
      };
    
    const back = e => {
        e.preventDefault();
        props.prevStep();
      };

    const { values, handleChange } = props;
    console.log(handleChange)

    return(
        <>
        <MuiThemeProvider>
        <>
            {/* <AppBar title="enter user detials"/> */}
            <TextField
              placeholder="Enter Your First Name"
              label="First Name"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              margin="normal"
              fullWidth/>
            
            <br/>

            <TextField
              placeholder="Enter Your First Name"
              label="First Name"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              margin="normal"
              fullWidth/>

            <TextField
              placeholder="Enter Your Bio"
              label="Bio"
              onChange={handleChange('bio')}
              defaultValue={values.bio}
              margin="normal"
              fullWidth
            />
            <br />


            <Button
              color="secondary"
              variant="contained"
              onClick={back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={conti}
            >Continue</Button>
        </>

        </MuiThemeProvider>

        </>
    )
}
export default FormUserDetails;