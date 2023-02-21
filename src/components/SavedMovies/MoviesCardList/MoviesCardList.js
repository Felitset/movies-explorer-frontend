import React from "react";
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
    return (
        <section className='main__saved_movies saved_movies'>
            <ul className="saved_movies__card_list">
                {props.movies.map((movie) => <MoviesCard
                    key={movie._id}
                    key_for_deletion={movie._id}
                    duration={movie.duration}
                    movieTitle={movie.nameRU}
                    moviePic={movie.image}
                    onMoviePicClick={props.onMoviePicClick}
                    trailerLink={movie.trailerLink}
                    onMovieLike={props.onMovieLike}
                    onMovieDelete={props.onMovieDelete} 
                    />)}

            </ul>
            <div className="saved_movies__blank_space"></div>
        </section>
    )
}

export default MoviesCardList