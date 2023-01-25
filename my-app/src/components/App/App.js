import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
// import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
// import Footer from '../Footer/Footer';
import PageNotFound from '../PageNotFound/PageNotFound';
// import './App.css';
import '../../index.css';

function App() {
    return (
        <>
            <div className="page">
                <Header />
                <Switch>
                    {/* <Route path="/" exact>
<Header />
<Main />
<Footer />
    </Route>
    <Route path="/movies">
<Header />
<Movies />
<Footer />
    </Route>
    <Route path="/saved-movies">
<Header />
<SavedMovies />
<Footer />
    </Route>
    <Route path="/profile">
<Header />
<Profile />
<Footer />
    </Route> */}
    <Route path="/404">
        <PageNotFound />
    </Route>
                    <Route path="/signin">
                        <Login />
                    </Route>
                    <Route path="/signup">
                        <Register />
                    </Route>
                </Switch>
                {/* <Footer /> */}
            </div>
        </>

    );
}

export default App;
