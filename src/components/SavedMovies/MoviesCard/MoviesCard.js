import React from "react";
import './MoviesCard.css';
import deleteBtn from '../../../images/close_btn.png';


function MoviesCard(props) {
    return (
        <div className='movie_card'>
            <div className='movie_card__info'>
                <h2 className='movie_title'>{props.movieTitle}</h2>
                <p className='movie_duration'>1ч 42м</p>
                <img
                    className='movie_remove_from_list'
                    src={deleteBtn}
                    alt='Знак крест. Убрать из избранного' />
            </div>
            <img
                className='movie_card__pic'
                src={props.moviePic}
                alt='Афиша фильма' />
        </div>
    )
}

export default MoviesCard