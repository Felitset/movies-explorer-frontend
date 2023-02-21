import React, { useState } from "react";
import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
import Preloader from './Preloader/Preloader';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import InfoTooltip from "../InfoToolTip/InfoToolTip";
import { filteredAllMoviesKey } from "../../utils/const";

function Movies(props) {
    const [isFailModalOpen, setIsFailModalOpen] = useState(false);

    const nothingFoundShow = ` ${localStorage.getItem(filteredAllMoviesKey) === [] ? 'nothing_found_hide' : 'nothing_found_show' }`;

    const pageStep = 7;
    const [lastItemIndex, setLastItemIndex] = useState(pageStep);

    function handleModalClose() {
        setIsFailModalOpen(false);
    }

    function handleListExtention() {
        setLastItemIndex(lastItemIndex + pageStep);
    }

    function onFilterMovies(searchQuery) {
        setLastItemIndex(pageStep);
        props.onFilterMovies(searchQuery);
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
                    onFilterMovies={onFilterMovies}
                    filterByDuration={props.filterByDuration}
                    shortFilmsToggleButton={props.shortFilmsToggleButton}
                    shortFilmFlag={props.shortFilmFlag}
                    localStorageQueryKey={props.localStorageQueryKey}
                    movies={props.movies} />

                {<div className={nothingFoundShow}>
                    Ничего не найдено</div>}

                {props.onLoading && <Preloader
                    time={5000}
                />}

                <MoviesCardList
                    movies={props.movies.slice(0, lastItemIndex)}
                    savedMovies={props.savedMovies}
                    onMoviePicClick={props.onMoviePicClick}
                    onMovieLike={props.onMovieLike}
                />

                <div className='expand_list'>
                    <button
                        type="button"
                        className={lastItemIndex >= props.movies.length ? 'expand_list_btn_hidden' : 'expand_list_btn'}
                        onClick={handleListExtention}
                    >Ещё</button>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Movies