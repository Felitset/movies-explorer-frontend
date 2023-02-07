import React from "react";
import './Footer.css';

function Footer() {

    return (
        <div className='footer'>
            <div className='footer_content_block'>
                <p className='footer_content'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            </div>
            <div className='footer_block'>
                <p className='footer_year'>&#169; 2020</p>
                <div className='footer_links'>
                    <a href='https://practicum.yandex.ru/' className='footer_link'>Яндекс.Практикум</a>
                    <a href='https://github.com/' className='footer_link'>Github</a>
                </div>
            </div>
        </div>
    )
}

export default Footer