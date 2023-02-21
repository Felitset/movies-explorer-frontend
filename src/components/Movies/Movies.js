import React, { useState } from "react";
import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
import Preloader from './Preloader/Preloader';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import InfoTooltip from "../InfoToolTip/InfoToolTip";

function Movies(props) {

    const [isFailModalOpen, setIsFailModalOpen] = useState(false);

    function handleModalClose() {
        setIsFailModalOpen(false)
    }

    const buttonClass = moreButtonEnabled
    ? 'expand_list_btn'
    : 'expand_list_btn_hidden';

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
                    localStorageQueryKey={props.localStorageQueryKey}

                    movies={props.movies} />

                {props.onLoading && <Preloader 
                // customLoading={props.onLoading}
                // time={0}
                />}

                <MoviesCardList
                    movies={props.movies}
                    savedMovies={props.savedMovies}
                    onMoviePicClick={props.onMoviePicClick}
                    onMovieLike={props.onMovieLike}
                />

                <div className='expand_list'>
                    <button
                        type="button"
                        className={buttonClass}
                    // onClick={handleListExtention}
                    >Ещё</button>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Movies