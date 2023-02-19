import React, { useState } from "react";
import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
// import Preloader from './Preloader/Preloader';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import InfoTooltip from "../InfoToolTip/InfoToolTip";

function Movies(props) {
    const [isFailModalOpen, setIsFailModalOpen] = useState(false);

    function handleModalClose() {
        setIsFailModalOpen(false)
    }

    return (
        <>
            <main className="page__movies">
                {isFailModalOpen && <InfoTooltip
                    title="Во время запроса произошла ошибка. 
                                Возможно, проблема с соединением или сервер недоступен. 
                                Подождите немного и попробуйте ещё раз"
                    onClose={handleModalClose} />}
                <SearchForm
                    onFilterMovies={props.onFilterMovies}
                    filterByDuration={props.filterByDuration}
                    shortFilmsToggleButton={props.shortFilmsToggleButton}
                    shortFilmFlag={props.shortFilmFlag}

                    movies={props.movies} />

                {/* <Preloader /> */}

                <MoviesCardList
                    movies={props.movies}
                    savedMovies={props.savedMovies}
                    onMoviePicClick={props.onMoviePicClick}
                    onMovieLike={props.onMovieLike}
                />

                <div className='expand_list'>
                    <button
                        type="button"
                        className='expand_list_btn'
                    // onClick={handleListExtention}
                    >Ещё</button>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Movies