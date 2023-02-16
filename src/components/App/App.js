import React, { useState, useEffect, useCallback } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import api from '../../utils/api_config';
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

    const [movies, setMovies] = useState([]);
    const [savedMovies, setSavedMovies] = useState([]);

    const checkToken = useCallback(() => {
        try {
            const jwt = localStorage.getItem('jwt');
            if (!jwt) {
                throw new Error('No token in storage');
            }
            else {
                mainApi.getUserProfile(jwt).then((data) => {
                    setLoggedIn(true);
                    setCurrentUser({
                        name: data.name,
                        email: data.email
                    })
                })

            }
        } catch { }
    }, [])
    useEffect(() => {
        checkToken()
    }, [checkToken])
    const authenticateUser = useCallback(async (email, password) => {
        try {
            const { token } = await mainApi.signInUser(email, password);
            if (!token) {
                throw new Error('No token');
            }

            if (!loggedIn) {
                localStorage.setItem('jwt', token);
                localStorage.setItem('isAuthenticated', true);
                setLoggedIn(true);
                // console.log(loggedIn);
                // return (<Redirect to='/movies' />)
            }

            // if (localStorage.getItem('jwt')) {
            //     setLoggedIn(true);
            //     console.log(loggedIn);
            // }
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

    function getMovies() {
        if (loggedIn) {
            api.getAllMovies()
                .then((res) => {
                    console.log(res)
                    setMovies(res.slice(0, 6), ...movies);
                })
                .catch((err) => {
                    console.log(err)
                })
            let token = localStorage.getItem('jwt')
            mainApi.getSavedMovies(token)
                .then((res) => {
                    setSavedMovies(res)
                }
                )
        }
        console.log('запрос на фильмы')
    }

    function handleMoviePicClick(movie) {
        window.open(`${movie.trailerLink}`)
    }

    function handleMovieLike(movie) {
        console.log('Список сохраненок', savedMovies)
        let movieIsSaved = savedMovies.find((m) => m.movieId === movie.id);
        console.log('Сохранен ли фильм?', movieIsSaved)
        console.log('Мой фильм?', movie)
        if (loggedIn) {

            let token = localStorage.getItem('jwt')
            if (!movieIsSaved) {
                console.log('save that shit')

                let movieMsg = {
                    country: movie.country,
                    director: movie.director,
                    duration: movie.duration,
                    year: movie.year,
                    description: movie.description,
                    trailerLink: movie.trailerLink,
                    thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
                    movieId: movie.id,
                    nameRU: movie.nameRU,
                    nameEN: movie.nameEN,
                    image: `https://api.nomoreparties.co${movie.image.url}`,
                }

                mainApi.saveMovie(movieMsg, token)
            } else {
                console.log('delete that crap')
                mainApi.deleteMovie(movieIsSaved._id, token)
            }

            // .then((res) => {
            //     setSavedMovies.push(res)
            // })

            mainApi.getSavedMovies(token)
                .then((res) => {
                    console.log('обновить дерьмо',res)

                    setSavedMovies(res)
                }
                )
        }
    }

    // useEffect(() => {
    //     if (loggedIn) {
    //     api.getMovies()
    //       .then((data) => {
    //         setMovies(data);
    //       })
    //       .catch((err) => {
    //         console.log(err)
    //       })}
    //   },
    //     [loggedIn])

    // useEffect(() => {
    //     checkToken()
    // }, [checkToken])

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
                            loggedIn={loggedIn}
                            component={Movies}
                            movies={movies}
                            savedMovies={savedMovies}
                            onMoviesSearch={getMovies}
                            onMoviePicClick={handleMoviePicClick}
                            onMovieLike={handleMovieLike} />

                        <ProtectedRoute path="/saved-movies"
                            loggedIn={loggedIn}
                            component={SavedMovies} />

                        <ProtectedRoute path="/profile"
                            loggedIn={loggedIn}
                            component={Profile}
                            onLogout={logout}
                        />

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
