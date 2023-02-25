import React from "react";
import './MoviesCard.css';

function MoviesCard(props) {

    function handleLikeClick(event) {
        props.onMovieLike(props.movie)
    }
    function handleCardClick() {
        props.onMovieCardClick(props.movie.trailerLink);
    }

    function duration(t) {
        let hours = 0;
        let minutes = 0;
        if (t >= 60) {
            hours = ~~(t / 60);
            minutes = t % 60;
        }
        if (t < 60) {
            hours = 0;
            minutes = t;
        }
        return `${hours}ч ${minutes}м`;
    }

    const isSaved = props.savedMovies.find((m) => m.movieId === props.movie.id);
    const movieLikeButtonClassName = (
        `movie_like_btn ${isSaved ? 'movie_like_btn_status_active' : ''}`
    );

    return (

        <li key={props.movie.id}
            className='movie_card'
            onClick={() => {
                handleCardClick()
            }}>
            <div className='movie_card__info' >
                <h2 className='movie_title'>{props.movieTitle}</h2>
                <p className='movie_duration'>{duration(props.movie.duration)}</p>
                <button
                    className={movieLikeButtonClassName}
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation()
                        handleLikeClick()
                    }} ></button>
            </div>
            <img
                className='movie_card__pic'
                src={props.moviePic}
                alt='Афиша фильма'
            />
        </li>

    )
}

export default MoviesCard