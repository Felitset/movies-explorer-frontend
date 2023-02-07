import React from "react";
import './AboutMe.css';
import studentPhoto from '../../../images/vitalii_photo.png';
import Portfolio from "../Portfolio/Portfolio";

function AboutMe() {
    return (
        <div className='aboutme'>
            <div className='aboutme_title_block'>
                <h2 className='aboutme_title'>Студент</h2>
            </div>
            <img
                className='aboutme_photo'
                src={studentPhoto}
                alt='Фото студента' />
            <div className='aboutme_content'>
                <h3 className='aboutme_content_title'>Виталий</h3>
                <p className='aboutme_content_subtitle'>Фронтенд-разработчик, 30 лет</p>
                <p className='aboutme_content_text'>Я родился и живу в Саратове, закончил факультет экономики СГУ.
                    У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
                    С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
                    начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                <a href="https://github.com/Felitset" className='github_link'>Github</a>

            </div>
            <Portfolio />
        </div>
    )
}

export default AboutMe