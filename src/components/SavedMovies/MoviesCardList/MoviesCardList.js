import React from "react";
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import aboutDesign from '../../../images/33_words_about_design.png';
import hundredYears from '../../../images/100_years_of_design.png';
import catchingBanksy from '../../../images/catching_Banksy.png';

function MoviesCardList() {
    return (
        <section className='main__saved_movies saved_movies'>
            <ul className="saved_movies__card_list">
                <li className='saved_movies__card'>
                    <MoviesCard
                        movieTitle='33 слова о дизайне'
                        moviePic={aboutDesign} />
                </li>
                <li className='saved_movies__card'>
                    <MoviesCard
                        movieTitle='Киноальманах «100 лет дизайна»'
                        moviePic={hundredYears} />
                </li>
                <li className='saved_movies__card'>
                    <MoviesCard
                        movieTitle='В погоне за Бенкси'
                        moviePic={catchingBanksy} />
                </li>
            </ul>
            <div className="saved_movies__blank_space"></div>
        </section>
    )
}

export default MoviesCardList