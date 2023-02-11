import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
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


function App() {

    const [isNavTabOpen, setIsNavTabOpen] = useState(false);

    function handleMenuClick() {
        setIsNavTabOpen(true);
    }

    function handleCloseMenuClick() {
        setIsNavTabOpen(false);
    }

    return (
        <>
            <div className="page">
                <Header
                    onMenuOpen={handleMenuClick} />
                <NavTab
                    isOpen={isNavTabOpen}
                    onClose={handleCloseMenuClick} />
                <Switch>
                    <Route path="/movies">
                        <Movies />
                    </Route>

                    <Route path="/saved-movies">
                        <SavedMovies />
                    </Route>

                    <Route path="/profile">
                        <Profile />
                    </Route>

                    <Route path="/signin">
                        <Login />
                    </Route>

                    <Route path="/signup">
                        <Register />
                    </Route>

                    <Route exact path="/">
                        <Main />
                    </Route>

                    <Route path="*">
                        <PageNotFound />
                    </Route>
                </Switch>

            </div>
        </>

    );
}

export default App;
