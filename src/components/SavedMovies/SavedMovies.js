import React, { useState } from "react";
import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import Preloader from "../Movies/Preloader/Preloader"

function SavedMovies(props) {
    const [isFailModalOpen, setIsFailModalOpen] = useState(false);

    function handleModalClose() {
        setIsFailModalOpen(false)
    }

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