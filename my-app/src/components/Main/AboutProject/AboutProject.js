import React from 'react';
import './AboutProject.css';

function AboutProject() {
    return (
        <div className='about_project'>
            <div className="about_project__title">
                <h1 className="about_project__title_block">О проекте</h1>
            </div>
            <div className="about_project__content">
                <ul className='about_project__content_block'>
                    <li className='block_item'>
                        <h2 className='block_item_subtitle'>Дипломный проект включал 5 этапов</h2>
                        <p className='block_item_subititle_discription'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </li>
                    <li className='block_item'>
                        <h2 className='block_item_subtitle'>На выполнение диплома ушло 5 недель</h2>
                        <p className='block_item_subititle_discription'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
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