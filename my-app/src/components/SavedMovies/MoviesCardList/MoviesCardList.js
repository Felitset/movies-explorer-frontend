import React from "react";
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import aboutDesign from '../../../images/33_words_about_design.png';
import hundredYears from '../../../images/100_years_of_design.png';
import catchingBanksy from '../../../images/catching_Banksy.png';

function MoviesCardList() {
    return (
        <>
            <ul className="movies_card_list">
                <li className='movies_card'>
                    <MoviesCard
                        movieTitle='33 слова о дизайне'
                        moviePic={aboutDesign} />
                </li>
                <li className='movies_card'>
                    <MoviesCard
                        movieTitle='Киноальманах «100 лет дизайна»'
                        moviePic={hundredYears} />
                </li>
                <li className='movies_card'>
                    <MoviesCard
                        movieTitle='В погоне за Бенкси'
                        moviePic={catchingBanksy} />
                </li>
            </ul>
            <div className="movies__blank_space"></div>
        </>
    )
}

export default MoviesCardList