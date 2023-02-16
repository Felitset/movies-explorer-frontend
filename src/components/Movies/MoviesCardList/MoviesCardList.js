import React from "react";
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';
// import aboutDesign from '../../../images/33_words_about_design.png';
// import hundredYears from '../../../images/100_years_of_design.png';
// import catchingBanksy from '../../../images/catching_Banksy.png';
// import baskiya from '../../../images/Baskiya_explosion_of_reality.png';
// import running from '../../../images/running_is_freedom.png';
// import booksellers from '../../../images/booksellers.png';
// import whenIThink from '../../../images/when_i_think_of_Germany_at_night.png';
// import likeDisabled from '../../../images/like_disabled.png';
// import likeEnabled from '../../../images/like_enabled.png';


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
                    // likePictogram={likeEnabled}
                        onMoviePicClick={props.onMoviePicClick}
                        onMovieLike={props.onMovieLike}
                        onMovieDislike={props.onMovieDislike} />)}

                {/* <MovieCard
                    movieTitle='33 слова о дизайне'
                    moviePic={aboutDesign}
                    likePictogram={likeEnabled} /> */}
  
                {/* <MoviesCard
                    movieTitle='Киноальманах «100 лет дизайна»'
                    moviePic={hundredYears}
                    likePictogram={likeEnabled} />

                <MoviesCard
                    movieTitle='В погоне за Бенкси'
                    moviePic={catchingBanksy}
                    likePictogram={likeDisabled} />

                <MoviesCard
                    movieTitle='Баския: Взрыв реальности'
                    moviePic={baskiya}
                    likePictogram={likeDisabled} />

                <MoviesCard
                    movieTitle='Бег это свобода'
                    moviePic={running}
                    likePictogram={likeEnabled} />

                <MoviesCard
                    movieTitle='Книготорговцы'
                    moviePic={booksellers}
                    likePictogram={likeDisabled} />

                <MoviesCard
                    movieTitle='Когда я думаю о Германии ночью'
                    moviePic={whenIThink}
                    likePictogram={likeDisabled} /> */}
   
        </ul>
        </section>
    )
}

export default MoviesCardList