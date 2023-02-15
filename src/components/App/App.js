import React, { useState, useEffect, useCallback } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

// import api from '../utils/api_config.js';
import { CurrentUserContext } from "../../context/CurrentUserContext.js";
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import NavTab from '../Main/NavTab/NavTab';
import '../../index.css';
import * as mainApi from '../../utils/MainApi';

function App() {

    const [isNavTabOpen, setIsNavTabOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState({});

    const [loggedIn, setLoggedIn] = useState(false);

    const checkToken = useCallback(() => {
        try {
            const jwt = localStorage.getItem('jwt');
            if (!jwt) {
                throw new Error('No token in storage');
            }
            else {
                mainApi.getUserProfile(jwt).then((data) => {
                    setLoggedIn(true);
                })
               
            }
        } catch { }
    }, [loggedIn])

    const authenticateUser = useCallback(async (email, password) => {
        try {
            const { token } = await mainApi.signInUser(email, password);
            if (!token) {
                throw new Error('No token');
            }

            if (!loggedIn) {
                localStorage.setItem('jwt', token);
                setLoggedIn(true);
                return (<Redirect to='/' />)
            }

        } catch { }
    }, [loggedIn]);

    const registerUser = useCallback(async (name, email, password) => {
        try {
            const data = await mainApi.signUpUser(name, email, password);
            if (!data) {
                throw new Error('No data');
            }
            //   setIsSuccessModalOpen(true);
        } catch {
            //   setIsFailModalOpen(true);
        }
    }, []);

    const logout = useCallback(() => {
        localStorage.removeItem('jwt');
        setLoggedIn(false);
    }, [])

    useEffect(() => {
        checkToken()
    }, [checkToken])


    function handleMenuClick() {
        setIsNavTabOpen(true);
    }

    function handleCloseMenuClick() {
        setIsNavTabOpen(false);
    }

    return (
        <>
            <CurrentUserContext.Provider value={currentUser}>
                <div className="page">
                    <Header
                        onMenuOpen={handleMenuClick} />
                    <NavTab
                        isOpen={isNavTabOpen}
                        onClose={handleCloseMenuClick} />
                    <Switch>
                        <ProtectedRoute path="/movies"
                            component={Movies} />

                        <ProtectedRoute path="/saved-movies"
                            component={SavedMovies} />

                        <ProtectedRoute path="/profile"
                            component={Profile}
                            onLogout={logout} />

                        <Route path="/signin">
                            <Login isLoggedIn={loggedIn} onLogin={authenticateUser} />
                        </Route>

                        <Route path="/signup">
                            <Register isLoggedIn={loggedIn} onRegister={registerUser} />
                        </Route>

                        <Route exact path="/">
                            <Main />
                        </Route>

                        <Route path="*">
                            <PageNotFound />
                        </Route>
                    </Switch>

                </div>
            </CurrentUserContext.Provider>
        </>

    );
}

export default withRouter(App);
