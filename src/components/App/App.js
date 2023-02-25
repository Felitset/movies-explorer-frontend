import React, { useState, useEffect, useCallback } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

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
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import asyncLocalStorage from '../../utils/async_local_storage.js'
import {
    jwtLSKey, localStorageQueryAllMoviesKey, localStorageQuerySavedMoviesKey,
    filteredAllMoviesKey, filteredSavedMoviesKey,
    allMoviesListKey, savedMoviesListKey,
    toggleStateAllMoviesKey, toggleStateSavedMoviesKey
} from "../../utils/const.js"

function App() {
    const [isNavTabOpen, setIsNavTabOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState({});

    const [loggedIn, setLoggedIn] = useState(false);

    const [allMovies, setAllMovies] = useState([]);
    const [savedMovies, setSavedMovies] = useState([]);
    const [isFailModalOpen, setIsFailModalOpen] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    const [shortFilmAllMoviesFlag,
        setShortFilmAllMoviesFlag] = useState(localStorage.getItem(toggleStateAllMoviesKey) === 'true');
    const [shortFilmSavedMoviesFlag,
        setShortFilmSavedMoviesFlag] = useState(localStorage.getItem(toggleStateSavedMoviesKey) === 'true');

    const [filteredAllMovies, setFilteredAllMovies] = useState([])
    const [filteredSavedMovies, setFilteredSavedMovies] = useState([])

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        checkToken()
    }, [])

    const checkToken = useCallback(() => {
        try {
            const jwt = localStorage.getItem(jwtLSKey);
            if (!jwt) {
                throw new Error('No token in storage');
            }
            else {
                mainApi.getUserProfile(jwt)
                .then((data) => {
                    setLoggedIn(true);
                    setCurrentUser({
                        name: data.name,
                        email: data.email
                    })
                })
            }
        } catch {
            console.log('ошибка проверки токена')
        }
    }, [])

    useEffect(() => {
        if (localStorage.getItem(filteredAllMoviesKey)) {
            setFilteredAllMovies(JSON.parse(localStorage.getItem(filteredAllMoviesKey)))
        }
        if (localStorage.getItem(filteredSavedMoviesKey)) {
            setFilteredSavedMovies(JSON.parse(localStorage.getItem(filteredSavedMoviesKey)))
        }
        if (localStorage.getItem(savedMoviesListKey)) {
            setSavedMovies(JSON.parse(localStorage.getItem(savedMoviesListKey)))
        }
    }, [])

    const authenticateUser = useCallback(async (email, password) => {
        try {
            const { token } = await mainApi.signInUser(email, password);
            if (!token) {
                setIsFailModalOpen(true);
                throw new Error('No token');
            }

            if (!loggedIn) {
                setLoggedIn(true);
                await asyncLocalStorage.setItem(jwtLSKey, token);
                await asyncLocalStorage.setItem('isAuthenticated', true);
                checkToken();
            }
        } catch {
            setIsFailModalOpen(true);
        }
    }, [loggedIn]);

    const registerUser = useCallback(async (name, email, password) => {
        try {
            const data = await mainApi.signUpUser(name, email, password)

            if (!data) {
                setIsFailModalOpen(true);
                throw new Error('No data');
            }
            authenticateUser(email, password)
        } catch {
            setIsFailModalOpen(true);
        }
    }, []);

    const logout = useCallback(() => {
        Object.entries(localStorage).forEach(([key, val]) => {
            if (!val.includes(allMoviesListKey)) delete localStorage[key];
        });

        setLoggedIn(false);
        setCurrentUser({});
        setAllMovies([]);
        setSavedMovies([]);
        setIsFailModalOpen(false);
        setShortFilmAllMoviesFlag(false);
        setShortFilmSavedMoviesFlag(false);
        setFilteredAllMovies([]);
        setFilteredSavedMovies([]);
        setLoading(false);
    }, [])

    function getSavedMovies() {
        if (loggedIn) {
            let token = localStorage.getItem(jwtLSKey)
            return mainApi.getSavedMovies(token)
                .then((res) => {
                    setSavedMovies(res)
                    localStorage.setItem(savedMoviesListKey, JSON.stringify(res));
                    setFilteredSavedMovies(res)
                }
                )
        }
    }

    function getMovies() {
        if (loggedIn) {
            if (!localStorage.getItem(savedMoviesListKey)) {
                getSavedMovies()
            }
            return api.getAllMovies()
                .then((res) => {
                    localStorage.setItem(allMoviesListKey, JSON.stringify(res));
                    setAllMovies(res.slice(0, 6), ...allMovies);
                    return res
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    function displayMovies(array, n) {
        let [...arr] = array;
        var res = [];
        while (arr.length) {
            res.push(arr.splice(0, n));
        }
        return res;
    }

    function handleMovieCardClick(link) {
        window.open(`${link}`)
    }

    function handleMovieLike(movie) {
        let movieIsSaved = savedMovies.find((m) => m.movieId === movie.id);
        if (loggedIn) {
            let token = localStorage.getItem(jwtLSKey)
            if (!movieIsSaved) {
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
                    .then((res) => {
                        let newSavedMovies = [...savedMovies, res]
                        setSavedMovies(newSavedMovies)
                        localStorage.setItem(savedMoviesListKey, JSON.stringify(newSavedMovies))
                    })
            } else {
                mainApi.deleteMovie(movieIsSaved._id, token)
                let newSavedMovies = savedMovies.filter((movie) => movie._id !== movieIsSaved._id)
                setSavedMovies(newSavedMovies);
                localStorage.setItem(savedMoviesListKey, JSON.stringify(newSavedMovies))
            }
        }
    }

    function handleMovieDelete(movieId) {
        if (loggedIn) {
            let token = localStorage.getItem(jwtLSKey)
            mainApi.deleteMovie(movieId, token)
            let newSavedMovies = savedMovies.filter((movie) => movie._id !== movieId)
            setSavedMovies(newSavedMovies);
            localStorage.setItem(savedMoviesListKey, JSON.stringify(newSavedMovies))
            let newFilteredSavedMovies = filteredSavedMovies.filter((movie) => movie._id !== movieId)
            setFilteredSavedMovies(newFilteredSavedMovies);
            localStorage.setItem(filteredSavedMoviesKey, JSON.stringify(newFilteredSavedMovies))
        }
    }

    function handleMenuClick() {
        setIsNavTabOpen(true);
    }

    function handleCloseMenuClick() {
        setIsNavTabOpen(false);
    }

    function handleModalClose() {
        setIsFailModalOpen(false);
        setIsSuccessModalOpen(false);
    }

    const getAndFilterAllMovies = async (query) => {
        setLoading(true)
        let moviesList = localStorage.getItem(allMoviesListKey)
        if (!moviesList) {
            moviesList = await getMovies()
        }
        let filteredMovies = filterMovies(
            JSON.parse(localStorage.getItem(allMoviesListKey)),
            query,
            localStorage.getItem(toggleStateAllMoviesKey))
        setFilteredAllMovies(filteredMovies)
        await asyncLocalStorage.setItem(filteredAllMoviesKey, JSON.stringify(filteredMovies))
        await asyncLocalStorage.setItem(localStorageQueryAllMoviesKey, query)
        setLoading(false)
    }

    const getAndFilterSavedMovies = async (query) => {
        setLoading(true)
        let moviesList = localStorage.getItem(savedMoviesListKey)
        if (!moviesList || moviesList.length === 0) {
            moviesList = await getSavedMovies()
        }
        let filteredMovies = filterMovies(
            JSON.parse(localStorage.getItem(savedMoviesListKey)),
            query,
            localStorage.getItem(toggleStateSavedMoviesKey))
        setFilteredSavedMovies(filteredMovies)

        localStorage.setItem(filteredSavedMoviesKey, JSON.stringify(filteredMovies))
        localStorage.setItem(localStorageQuerySavedMoviesKey, query)
        setLoading(false)
    }

    function filterMovies(arr, query, shortMoviesFlag) {
        let filteredMovies = arr
        if (shortMoviesFlag === 'true') {
            filteredMovies = filterByDuration(filteredMovies)
        }

        const movies_by_en = filteredMovies.filter((el) => el.nameEN.toLowerCase().includes(query.toLowerCase()));
        const movies_by_ru = filteredMovies.filter((el) => el.nameRU.toLowerCase().includes(query.toLowerCase()));


        return [...new Set([...movies_by_en, ...movies_by_ru])];
    }

    function filterByDuration(arr) {
        let shortMovies = arr.filter((el) => el.duration <= 40);
        if (shortMovies.length === 0) {
            setIsFailModalOpen(true)
        }
        return shortMovies;
    }

    const shortFilmsAllMoviesToggleButton = async () => {
        if (shortFilmAllMoviesFlag) {
            setShortFilmAllMoviesFlag(false)
            await asyncLocalStorage.setItem(toggleStateAllMoviesKey, false)
        } else {
            setShortFilmAllMoviesFlag(true)
            await asyncLocalStorage.setItem(toggleStateAllMoviesKey, true)
        }
        getAndFilterAllMovies(localStorage.getItem(localStorageQueryAllMoviesKey))
    }

    function shortFilmsSavedMoviesToggleButton() {
        if (shortFilmSavedMoviesFlag) {
            setShortFilmSavedMoviesFlag(false)
            localStorage.setItem(toggleStateSavedMoviesKey, false)
        } else {
            setShortFilmSavedMoviesFlag(true)
            localStorage.setItem(toggleStateSavedMoviesKey, true)
        }
        getAndFilterSavedMovies(localStorage.getItem(localStorageQuerySavedMoviesKey))
    }

    function handleUpdateUser(userInfo) {
        if (loggedIn) {
            const token = localStorage.getItem('jwt');
            mainApi.updateUserProfile(token, userInfo)
                .then((res) => {
                    setIsSuccessModalOpen(true)
                    setCurrentUser(res)
                })
                .catch((err) => {
                    setIsFailModalOpen(true);
                })
        }
    }

    return (
        <>
            <CurrentUserContext.Provider value={currentUser}>
                <div className="page">
                    <Header
                        onMenuOpen={handleMenuClick} isLoggedIn={loggedIn} />
                    <NavTab
                        isOpen={isNavTabOpen}
                        onClose={handleCloseMenuClick} />
                    <Switch>
                        <ProtectedRoute path="/movies"
                            loggedIn={loggedIn}
                            component={Movies}
                            loading={loading}
                            movies={filteredAllMovies}
                            savedMovies={savedMovies}
                            onMoviesProlong={displayMovies}
                            onMovieCardClick={handleMovieCardClick}
                            onMovieLike={handleMovieLike}
                            onFilterMovies={getAndFilterAllMovies}
                            shortFilmFlag={shortFilmAllMoviesFlag}
                            shortFilmsToggleButton={shortFilmsAllMoviesToggleButton}
                            localStorageQueryKey={localStorageQueryAllMoviesKey}
                        />

                        <ProtectedRoute path="/saved-movies"
                            loggedIn={loggedIn}
                            component={SavedMovies}
                            movies={filteredSavedMovies}
                            onMoviesProlong={displayMovies}
                            onMovieCardClick={handleMovieCardClick}
                            onMovieDelete={handleMovieDelete}
                            onFilterMovies={getAndFilterSavedMovies}
                            shortFilmFlag={shortFilmSavedMoviesFlag}
                            shortFilmsToggleButton={shortFilmsSavedMoviesToggleButton}
                            localStorageQueryKey={localStorageQuerySavedMoviesKey}
                            getSavedMovies={getSavedMovies}
                            loading={loading}
                        />

                        <ProtectedRoute path="/profile"
                            loggedIn={loggedIn}
                            component={Profile}
                            onUpdateProfile={handleUpdateUser}
                            onLogout={logout}
                            isSuccessModalOpen={isSuccessModalOpen}
                            onClose={handleModalClose}
                        />

                        <Route path="/signin">
                            <Login isLoggedIn={loggedIn} onLogin={authenticateUser} />
                            {isFailModalOpen && <InfoTooltip
                                title="Что-то пошло не так! Попробуйте ещё раз."
                                onClose={handleModalClose} />}
                        </Route>

                        <Route path="/signup">
                            <Register isLoggedIn={loggedIn} onRegister={registerUser} />
                            {isFailModalOpen && <InfoTooltip
                                title="Что-то пошло не так! Попробуйте ещё раз."
                                onClose={handleModalClose} />}
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
