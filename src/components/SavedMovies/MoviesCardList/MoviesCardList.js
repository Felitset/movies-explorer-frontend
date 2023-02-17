import React from "react";
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
    console.log(props.savedMovies)
    return (
        <section className='main__saved_movies saved_movies'>
            <ul className="saved_movies__card_list">
                {props.savedMovies.map((savedMovie) => <MoviesCard
                    key_for_deletion={savedMovie._id}
                    duration = {savedMovie.duration}
                    loadSavedMovies={props.loadSavedMovies}
                    movieTitle={savedMovie.nameRU}
                    moviePic={savedMovie.image}
                    onMoviePicClick={props.onMoviePicClick}
                    onMovieLike={props.onMovieLike}
                    onMovieDelete={props.onMovieDelete} />)}

            </ul>
            <div className="saved_movies__blank_space"></div>
        </section>
    )
}

export default MoviesCardList