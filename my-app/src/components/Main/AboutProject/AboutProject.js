import React from 'react';
import './AboutProject.css';

function AboutProject() {
    return (
        <div className='about_project'>
            <div className="about_project_title-block">
                <h1 className="about_project_title">О проекте</h1>
            </div>
            <div className="about_project_content">
                <ul className='content'>
                    <li className='content-item'>
                        <h2 className='subtitle'>Дипломный проект включал 5 этапов</h2>
                        <p className='subititle_discription'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </li>
                    <li className='content-item'>
                        <h2 className='subtitle'>На выполнение диплома ушло 5 недель</h2>
                        <p className='subititle_discription'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </li>
                </ul>
            </div>
            <div className='duration_scale'>
                <p className='backend_duration'>1 неделя</p>
                <p className='frontend_duration'>4 недели</p>
                <p className='backend_text'>Back-end</p>
                <p className='frontend_text'>Front-end</p>
            </div>
        </div>
    )
}

export default AboutProject