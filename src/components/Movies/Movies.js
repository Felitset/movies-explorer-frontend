import React, { useEffect, useState, useCallback } from "react";
import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
import Preloader from './Preloader/Preloader';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import { filteredAllMoviesKey } from "../../utils/const";
import { pageStep } from '../../utils/const';

function Movies(props) {
    const [isFailModalOpen, setIsFailModalOpen] = useState(false);
    const [nothingFoundShow, setNothingFoundShow] = useState('nothing_found_hide');

    // const nothingFoundShow = ` ${localStorage.getItem(filteredAllMoviesKey) === [] ? 'nothing_found_hide' : 'nothing_found_show'}`;

    const [lastItemIndex, setLastItemIndex] = useState(pageStep);
    const [wasFiltered, setWasFiltered] = useState(localStorage.getItem(props.localStorageQueryKey)!==null && localStorage.getItem(props.localStorageQueryKey) !=='');

    useEffect(() => {
        wasFiltered && props.movies.length === 0 ?
            setNothingFoundShow('nothing_found_show') : setNothingFoundShow('nothing_found_hide')
    }
        , [props.movies])

    function handleModalClose() {
        setIsFailModalOpen(false);
    }

    function handleListExtention() {
        setLastItemIndex(lastItemIndex + pageStep);
    }

    function onFilterMovies(searchQuery) {
        setWasFiltered(true)
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
                    movies={props.movies}
                    onLoading={props.onLoading} />

                {<div className={nothingFoundShow}>
                    Ничего не найдено</div>}

                {props.loading ? <Preloader /> :
                    <MoviesCardList
                        movies={props.movies.slice(0, lastItemIndex)}
                        savedMovies={props.savedMovies}
                        onMovieCardClick={props.onMovieCardClick}
                        onMovieLike={props.onMovieLike}
                    />
                }
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