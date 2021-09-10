import React from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField, Input } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './styles';

const Auth = () => {

    const classes = useStyles();
    const isSignup = false;
    const handleSubmit = () => {

    };
    const handleChange = () => {

    }
    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar classNAME={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="firstName" label="First Name" handleChange={handleChange} half />
                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                    </Grid>
                </form>
            </Paper>

        </Container >
    )
}

export default Auth
