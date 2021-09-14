import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';


import useStyles from './Styles'

import blocks from '../../images/blocks.png';

const Navbar = () => {

    const classes = useStyles();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: 'LOGOUT' })

        history.push('/')
        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Blockdash</Typography>
                <img className={classes.image} src={blocks} alt="icon" height="50" />
            </div>
            <Toolbar className={classes.toolbar}>
                {user?.result ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}> Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
            <Button component={Link} to="/crypto" variant="contained" color="primary">Crypto Track</Button>
        </AppBar>
    );
};

export default Navbar
