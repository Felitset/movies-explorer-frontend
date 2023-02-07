import React from 'react';
import './Techs.css';

function Techs() {
    return (
        <div className='techs'>
            <div className="techs__title">
                <h1 className="techs__title_block">Технологии</h1>
            </div>
            <div className='techs__content'>
                <h2 className='techs__content_title'>7 технологий</h2>
                <p className='techs__content_discription'>
                    На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
                </p>
            </div>
            <div className='techs__blocks'>
                <div className='techs__blocks_element'>HTML</div>
                <div className='techs__blocks_element'>CSS</div>
                <div className='techs__blocks_element'>JS</div>
                <div className='techs__blocks_element'>React</div>
                <div className='techs__blocks_element'>Git</div>
                <div className='techs__blocks_element'>Express.js</div>
                <div className='techs__blocks_element'>mongoDB</div>
            </div>
        </div>
    )
}

export default Techs