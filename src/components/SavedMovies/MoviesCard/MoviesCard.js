import React from "react";
import './MoviesCard.css';
import deleteBtn from '../../../images/close_btn.png';

function MoviesCard(props) {

    function handleCardClick() {
        props.onMovieCardClick(props.trailerLink);
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

    function handleMovieDelete() {
        props.onMovieDelete(props.key_for_deletion)
    }

    return (
        <li className='saved_movies__card' onClick={handleCardClick}>
            <div className='movie_card__info'>
                <h2 className='movie_title'>{props.movieTitle}</h2>
                <p className='movie_duration'>
                    {duration(props.duration)}
                </p>
                <img
                    className='movie_remove_from_list'
                    src={deleteBtn}
                    alt='Знак крест. Убрать из избранного'
                    onClick={() => {
                        handleMovieDelete()
                    }} />
            </div>
            <img
                className='movie_card__pic'
                src={props.moviePic}
                alt='Афиша фильма'
                // onClick={() => { handlePicClick() }} 
                />
        </li>
    )
}

export default MoviesCard