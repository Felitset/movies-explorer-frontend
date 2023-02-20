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
import InfoTooltip from '../InfoToolTip/InfoToolTip';

function App() {

    const [isNavTabOpen, setIsNavTabOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState({});

    const [loggedIn, setLoggedIn] = useState(false);

    const [allMovies, setAllMovies] = useState([]);
    const [savedMovies, setSavedMovies] = useState([]);
    const [isFailModalOpen, setIsFailModalOpen] = useState(false);

    const [shortFilmFlag, setShortFilmFlag] = useState(false);
    const [searchedAllMovies, setSearchedAllMovies] = useState([]);
    const [searchedSavedMovies, setSearchedSavedMovies] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

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
            console.log('успех регистрации')
        } catch {
            setIsFailModalOpen(true)
            console.log('ошибка регистрации')
        }
    }, []);

    const logout = useCallback(() => {
        localStorage.clear();
        setLoggedIn(false);
    }, [])

    function getSavedMovies() {
        if (loggedIn) {
            // setIsLoading(true)
            let token = localStorage.getItem('jwt')
            mainApi.getSavedMovies(token)
                .then((res) => {
                    localStorage.setItem("savedMoviesList", JSON.stringify(res));
                    setSavedMovies(res)
                    // setIsLoading(false)
                    // console.log(isLoading)
                }
                )
        }
    }

    const getMovies = async () => {
        // setIsLoading(true)
        console.log(isLoading)
        if (loggedIn) {
            await api.getAllMovies()
                .then((res) => {
                    localStorage.setItem("moviesList", JSON.stringify(res));
                    setAllMovies(res.slice(0, 6), ...allMovies);
                    getSavedMovies()
                    // setIsLoading(false)
                    // console.log(isLoading)
                    return res
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    // function getMovies() {
    //     if (loggedIn) {
    //         api.getAllMovies()
    //             .then((res) => {
    //                 localStorage.setItem("moviesList", JSON.stringify(res));
    //                 // localStorage.setItem("moviesList", JSON.stringify(res));
    //                 setMovies(res.slice(0, 6), ...movies);
    //                 getSavedMovies()
    //                 return res
    //             })
    //             .catch((err) => {
    //                 console.log(err)
    //             })
    //     }
    // }

    function displayMovies(array, n) {
        let [...arr] = array;
        var res = [];
        while (arr.length) {
            res.push(arr.splice(0, n));
        }
        return res;
    }

    function handleMoviePicClick(link) {
        window.open(`${link}`)
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

            getSavedMovies()
        }
    }

    function handleMovieDelete(movieId) {
        if (loggedIn) {
            console.log('deleting movie from saved list')
            let token = localStorage.getItem('jwt')
            mainApi.deleteMovie(movieId, token)
                .then(() => {
                    getSavedMovies()
                })
        }
    }

    function handleMenuClick() {
        setIsNavTabOpen(true);
    }

    function handleCloseMenuClick() {
        setIsNavTabOpen(false);
    }

    function handleModalClose() {
        setIsFailModalOpen(false)
    }

    async function getAndFilterAllMovies(query) {
        // setIsLoading(true)
        // console.log(isLoading)
        let moviesList = localStorage.getItem('moviesList')
        if (!moviesList) {
            moviesList = getMovies()
        }
        let searchedMovies = filterMovies(JSON.parse(localStorage.getItem('moviesList')), query)
        setSearchedAllMovies(searchedMovies)

    }

    async function getAndFilterSavedMovies(query) {
        let moviesList = localStorage.getItem('savedMoviesList')
        if (!moviesList) {
            moviesList = getSavedMovies()
        }
        let searchedMovies = filterMovies(JSON.parse(localStorage.getItem('savedMoviesList')), query)
        setSearchedSavedMovies(searchedMovies)
    }

    function filterMovies(arr, query) {
        let searchedMovies = arr
        if (shortFilmFlag) {
            searchedMovies = filterByDuration(searchedMovies)
        }

        const movies_by_en = searchedMovies.filter((el) => el.nameEN.toLowerCase().includes(query.toLowerCase()));
        const movies_by_ru = searchedMovies.filter((el) => el.nameRU.toLowerCase().includes(query.toLowerCase()));
        // setIsLoading(false)
        // console.log(isLoading)
        return [...new Set([...movies_by_en, ...movies_by_ru])];
                
    }

    function filterByDuration(arr) {
        let shortMovies = arr.filter((el) => el.duration <= 40);
        if (shortMovies.length === 0) {
            setIsFailModalOpen(true)
        }
        return shortMovies;
    }

    function shortFilmsToggleButton() {
        if (shortFilmFlag) {
            setShortFilmFlag(false)
        } else {
            setShortFilmFlag(true)
        }
    }

    function handleUpdateUser() {
        if (loggedIn) {
const token = localStorage.getItem('jwt');
        mainApi.updateUserProfile(token)
          .then((res) => {
            setCurrentUser(res)
          })
          .catch((err) => {
            console.log(err)
          })}
      }

    return (
        <>
            <CurrentUserContext.Provider value={currentUser}>
                <div className="page">
                    <Header
                        onMenuOpen={handleMenuClick} isLoggedIn={loggedIn}/>
                    <NavTab
                        isOpen={isNavTabOpen}
                        onClose={handleCloseMenuClick} />
                    <Switch>
                        <ProtectedRoute path="/movies"
                            loggedIn={loggedIn}
                            component={Movies}
                            movies={searchedAllMovies}
                            savedMovies={savedMovies}
                            onMoviesProlong={displayMovies}
                            onMoviePicClick={handleMoviePicClick}
                            onMovieLike={handleMovieLike}
                            onFilterMovies={getAndFilterAllMovies}
                            shortFilmFlag={shortFilmFlag}
                            shortFilmsToggleButton={shortFilmsToggleButton}
                            onLoading={isLoading}
                        />

                        <ProtectedRoute path="/saved-movies"
                            loggedIn={loggedIn}
                            component={SavedMovies}
                            movies={searchedSavedMovies}
                            onMoviesProlong={displayMovies}
                            onMoviePicClick={handleMoviePicClick}
                            onMovieDelete={handleMovieDelete}
                            onFilterMovies={getAndFilterSavedMovies}
                            shortFilmFlag={shortFilmFlag}
                            shortFilmsToggleButton={shortFilmsToggleButton}

                            getSavedMovies={getSavedMovies}
                        />

                        <ProtectedRoute path="/profile"
                            loggedIn={loggedIn}
                            component={Profile}
                            onUpdateProfile={handleUpdateUser}
                            onLogout={logout}
                        />

                        <Route path="/signin">
                            <Login isLoggedIn={loggedIn} onLogin={authenticateUser} />
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
