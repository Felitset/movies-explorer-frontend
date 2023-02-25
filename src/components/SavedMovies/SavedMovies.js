import React, { useEffect } from "react";
import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from "../Movies/Preloader/Preloader"

function SavedMovies(props) {

    useEffect(() => {
        if (props.movies.length === 0 || localStorage.getItem(props.localStorageQueryKey)===''){
            props.onFilterMovies('')
        } else if (localStorage.getItem(props.localStorageQueryKey)!==null && localStorage.getItem(props.localStorageQueryKey)!==''){
            props.onFilterMovies(localStorage.getItem(props.localStorageQueryKey))
        }
    }, [])

    return (
        <>
            <main className="page__saved_movies">

                <SearchForm
                    onFilterMovies={props.onFilterMovies}
                    filterByDuration={props.filterByDuration}
                    shortFilmsToggleButton={props.shortFilmsToggleButton}
                    shortFilmFlag={props.shortFilmFlag}
                    movies={props.movies}
                    localStorageQueryKey={props.localStorageQueryKey}
                />
                {props.loading ? <Preloader /> :
                    <MoviesCardList
                        movies={props.movies}
                        onMovieCardClick={props.onMovieCardClick}
                        onMovieDelete={props.onMovieDelete} />}
            </main>
            <Footer />
        </>
    )
}

export default SavedMovies