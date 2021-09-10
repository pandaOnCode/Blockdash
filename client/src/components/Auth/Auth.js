import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import Icon from './Icon';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './styles';
import Input from './Input';
import { useHistory } from 'react-router-dom';
const Auth = () => {

    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const handleSubmit = () => {

    };
    const handleChange = () => {

    }
    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        handleShowPassword(false);
    }

    const googleSuccess = async (res) => {
        const result = res?.profileObj; //undefined
        const token = res?.tokenId;
        try {
            dispatch({ type: 'AUTH', data: { result, token } });
            history.push('/')
        } catch (error) {
            console.log(error)
        }
    }
    const googleFailure = (error) => {
        console.log(error);
        console.log('Something is not right. Try again Later');
    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                    </Grid>


                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
                            </Button>
                            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                                {isSignup ? 'Sign Up' : 'Sign In'}
                            </Button>
                            <GoogleLogin
                                clientId="1042808790275-tvlrk8vel3lbpds5oen3vuhumugoj0qr.apps.googleusercontent.com"
                                render={(renderProps) => (
                                    <Button className={classes.googleButton} color='primary' fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant='contained'>
                                        Sign in with Google
                                    </Button>
                                )}
                                onSuccess={googleSuccess}
                                onFailiure={googleFailure}
                                cookiePolicy="single_host_origin"
                            />

                        </Grid>
                    </Grid>
                </form>
            </Paper>

        </Container >
    )
}

export default Auth
