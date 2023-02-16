import React, { useEffect } from "react";
import './MoviesCard.css';
// import { CurrentUserContext } from "../../../context/CurrentUserContext";

function MoviesCard(props) {
    // const currentUser = React.useContext(CurrentUserContext);

    function handlePicClick() {
        props.onMoviePicClick(props.movie);
    }

    function duration(t) {
        let hours = 0;
        let minutes = 0;
        if (t>=60) {
          hours = ~~(t/60) ;
          minutes = t%60 ;
        }
        if (t<60) {
          hours = 0;
          minutes = t ;
        }
        return `${hours}ч ${minutes}м`;
      }

    // const isOwn = props.movie.owner._id === currentUser._id;

    // const cardDeleteButtonClassName = (
    //     ` ${isOwn ? 'gallery__delete-item' : 'gallery__delete-item_hidden'}`
    // );

    // const isLiked = props.movie.likes.some(i => i._id === currentUser._id);
    const isSaved = props.savedMovies.some((m) => m.movieId === props.movie.movieId);
    const movieLikeButtonClassName = (
        `movie_like_btn ${isSaved ? 'movie_like_btn_status_active' : ''}`
    );

    function handleLikeClick() {
        props.onMovieLike(props.movie)
    }

    // function handleDeleteClick() {
    //     props.onCardDelete(props.card)
    // }

    return (
     
        <li key={props.movie.id} className='movie_card'>
            <div className='movie_card__info'>
                <h2 className='movie_title'>{props.movieTitle}</h2>
                <p className='movie_duration'>{duration(props.movie.duration)}</p>
                <button
                        className={movieLikeButtonClassName}
                        type="button"
                        onClick={() => {
                            handleLikeClick()
                        }} ></button>
            </div>
            <img
                className='movie_card__pic'
                src={props.moviePic}
                alt='Афиша фильма' 
                onClick={()=>{handlePicClick()}}/>
        </li>
         
    )
}

export default MoviesCard