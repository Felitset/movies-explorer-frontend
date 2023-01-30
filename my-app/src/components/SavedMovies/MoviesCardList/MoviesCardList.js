import React from "react";
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import aboutDesign from '../../../images/33_words_about_design.png';
import hundredYears from '../../../images/100_years_of_design.png';
import catchingBanksy from '../../../images/catching_Banksy.png';

function MoviesCardList() {
    return (
<>
<MoviesCard 
movieTitle='33 слова о дизайне'
moviePic={aboutDesign}/>
<MoviesCard 
movieTitle='Киноальманах «100 лет дизайна»'
moviePic={hundredYears}/>
<MoviesCard 
movieTitle='В погоне за Бенкси'
moviePic={catchingBanksy}/>
</>
    )
}

export default MoviesCardList