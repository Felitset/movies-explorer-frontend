import React, { useState, useEffect } from "react";
import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import InfoTooltip from "../InfoToolTip/InfoToolTip";

function SavedMovies(props) {
    const [isFailModalOpen, setIsFailModalOpen] = useState(false);

    function handleModalClose() {
        setIsFailModalOpen(false)
    }


    useEffect(() => {
        props.onFilterMovies('')
    }, [])

    return (
        <>
            <main className="page__saved_movies">
                {isFailModalOpen && <InfoTooltip
                    title="..."
                    onClose={handleModalClose}
                />}
                <SearchForm
                    onFilterMovies={props.onFilterMovies}
                    filterByDuration={props.filterByDuration}
                    shortFilmsToggleButton={props.shortFilmsToggleButton}
                    shortFilmFlag={props.shortFilmFlag}
                    movies={props.movies}
                />

                <MoviesCardList
                    movies={props.movies}
                    onMoviePicClick={props.onMoviePicClick}
                    onMovieDelete={props.onMovieDelete} />
            </main>
            <Footer />
        </>
    )
}

export default SavedMovies