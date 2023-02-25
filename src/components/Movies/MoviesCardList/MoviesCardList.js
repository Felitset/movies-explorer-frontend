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
                    onMovieCardClick={props.onMovieCardClick}
                    onMovieLike={props.onMovieLike}
                    onMovieDislike={props.onMovieDislike} 
                    />)}
            </ul>
        </section>
    )
}

export default MoviesCardList