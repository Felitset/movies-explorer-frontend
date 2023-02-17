import React from "react";
import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';


function SavedMovies(props) {
    return (
        <>
            <main className="page__saved_movies">
                <SearchForm />
                <MoviesCardList 
                savedMovies={props.savedMovies}
                loadSavedMovies={props.loadSavedMovies}
                onMoviePicClick={props.onMoviePicClick}
                onMovieDelete={props.onMovieDelete}/>
            </main>
            <Footer />
        </>
    )
}

export default SavedMovies