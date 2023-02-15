import React from "react";
import promoLogo from '../../../images/landing_logo.png';
import './Promo.css';

function Promo() {
    return (
        <section className='promo main__promo'>
            <img
                className='promo__logo'
                src={promoLogo}
                alt='Логотип' />
            <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
            <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
            <button
                className='promo__btn'
                onClick={() => window.open("https://practicum.yandex.ru/")}>Узнать больше</button>

        </section>
    )
}

export default Promo