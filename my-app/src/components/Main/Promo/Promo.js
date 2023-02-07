import React from "react";
import promoLogo from '../../../images/landing_logo.png';
import './Promo.css';

function Promo() {
    return (
        <div className='promo'>
        <img
className='promo_logo'
src={promoLogo}
alt='Логотип' />
<h1 className='promo_title'>Учебный проект студента факультета Веб-разработки.</h1>
<p className='promo_subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
<button className='promo_btn'>Узнать больше</button>

        </div>
    )
}

export default Promo