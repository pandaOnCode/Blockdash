import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
//EXPORT COMPONENT HERE
import Crypto from './components/Coins/Crypto';
import NewsDisplay from './components/News/NewsDisplay';
import ErrorPage from './components/Errors/ErrorPage';
const App = () => {
    return (
        <BrowserRouter>
            <Container maxWidth="lg">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/auth" exact component={Auth} />
                    <Route path="/crypto" exact component={Crypto} />
                    <Route path="/news" exact component={NewsDisplay} />
                    <Route path="/error" exact component={ErrorPage} />

                </Switch>
            </Container>
        </BrowserRouter >
    )

};

export default App;
