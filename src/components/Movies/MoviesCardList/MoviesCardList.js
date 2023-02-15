import React from "react";
import './MoviesCardList.css';
import MovieCard from '../MoviesCard/MoviesCard';
import aboutDesign from '../../../images/33_words_about_design.png';
import hundredYears from '../../../images/100_years_of_design.png';
import catchingBanksy from '../../../images/catching_Banksy.png';
import baskiya from '../../../images/Baskiya_explosion_of_reality.png';
import running from '../../../images/running_is_freedom.png';
import booksellers from '../../../images/booksellers.png';
import whenIThink from '../../../images/when_i_think_of_Germany_at_night.png';
import likeDisabled from '../../../images/like_disabled.png';
import likeEnabled from '../../../images/like_enabled.png';


function MoviesCardList() {
    return (
        <section className='main__movies movies'>
        <ul className='movies__card_list'>
            <li className='movies__card'>
                <MovieCard
                    movieTitle='33 слова о дизайне'
                    moviePic={aboutDesign}
                    likePictogram={likeEnabled} />
            </li>
            <li className='movies__card'>
                <MovieCard
                    movieTitle='Киноальманах «100 лет дизайна»'
                    moviePic={hundredYears}
                    likePictogram={likeEnabled} />
            </li>
            <li className='movies__card'>
                <MovieCard
                    movieTitle='В погоне за Бенкси'
                    moviePic={catchingBanksy}
                    likePictogram={likeDisabled} />
            </li>
            <li className='movies__card'>
                <MovieCard
                    movieTitle='Баския: Взрыв реальности'
                    moviePic={baskiya}
                    likePictogram={likeDisabled} />
            </li>
            <li className='movies__card'>
                <MovieCard
                    movieTitle='Бег это свобода'
                    moviePic={running}
                    likePictogram={likeEnabled} />
            </li>
            <li className='movies__card'>
                <MovieCard
                    movieTitle='Книготорговцы'
                    moviePic={booksellers}
                    likePictogram={likeDisabled} />
            </li>
            <li className='movies__card'>
                <MovieCard
                    movieTitle='Когда я думаю о Германии ночью'
                    moviePic={whenIThink}
                    likePictogram={likeDisabled} />
            </li>
        </ul>
        </section>
    )
}

export default MoviesCardList