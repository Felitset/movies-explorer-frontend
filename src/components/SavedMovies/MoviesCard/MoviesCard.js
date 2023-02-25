import React from "react";
import './MoviesCard.css';
import deleteBtn from '../../../images/close_btn.png';
import { duration } from '../../../utils/const';

function MoviesCard(props) {

    function handleCardClick() {
        props.onMovieCardClick(props.trailerLink);
    }

    function handleMovieDelete() {
        props.onMovieDelete(props.key_for_deletion)
    }

    return (
        <li className='saved_movies__card'
            onClick={() => {
                handleCardClick()
            }}>
            <div className='movie_card__info'>
                <h2 className='movie_title'>{props.movieTitle}</h2>
                <p className='movie_duration'>
                    {duration(props.duration)}
                </p>
                <img
                    className='movie_remove_from_list'
                    src={deleteBtn}
                    alt='Знак крест. Убрать из избранного'
                    onClick={(e) => {
                        e.stopPropagation()
                        handleMovieDelete()
                    }} />
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