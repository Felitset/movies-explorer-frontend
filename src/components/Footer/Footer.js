import React from "react";
import './Footer.css';

function Footer() {

    return (
        <footer className='page__footer footer'>
            <div className='footer__content'>
                <p className='footer__content_block'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            </div>
            <div className='footer__block'>
                <p className='footer__block_year'>&#169; 2020</p>
                <div className='footer__links'>
                    <a href='https://practicum.yandex.ru/' className='footer__link' target="_blank">Яндекс.Практикум</a>
                    <a href='https://github.com/' className='footer__link' target="_blank">Github</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer