import React from "react";
import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';


function SavedMovies() {
    return (
        <>
            <main className="page__saved_movies">
                <SearchForm />
                <MoviesCardList />
            </main>
            <Footer />
        </>
    )
}

export default SavedMovies