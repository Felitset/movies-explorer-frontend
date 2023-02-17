import React from "react";
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';

function MoviesCardList(props) {
    return (
        <section className='main__movies movies'>
            <ul className='movies__card_list'>
                {props.movies.map((movie) => <MoviesCard
                    key={movie.id}
                    movie={movie}
                    savedMovies={props.savedMovies}
                    movieTitle={movie.nameRU}
                    moviePic={`https://api.nomoreparties.co${movie.image.url}`}
                    onMoviePicClick={props.onMoviePicClick}
                    onMovieLike={props.onMovieLike}
                    onMovieDislike={props.onMovieDislike} />)}

            </ul>
        </section>
    )
}

export default MoviesCardList