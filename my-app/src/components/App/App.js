import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
// import Footer from '../Footer/Footer';
import PageNotFound from '../PageNotFound/PageNotFound';
import NavTab from '../Main/NavTab/NavTab';
import '../../index.css';

function App() {
    return (
        <>
            <div className="page">
                <Switch>
                    <Route path="/" exact>
                        {/* <Header /> */}
                        <Main />

                    </Route>
                    <Route path="/movies">
                        <Header />
                        <Movies />

                    </Route>
                    <Route path="/saved-movies">
                        <Header />
                        <SavedMovies />

                    </Route>
                    <Route path="/profile">
                        <Header />
                        <Profile />
                    </Route>
                    
                    <Route path="/signin">
                        <Login />
                    </Route>
                    <Route path="/signup">
                        <Register />
                    </Route>
                    <Route path="*">
                        <PageNotFound />
                    </Route>
                </Switch>
                <NavTab />
            </div>
        </>

    );
}

export default App;
