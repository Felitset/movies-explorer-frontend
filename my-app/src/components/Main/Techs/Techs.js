import React from 'react';
import './Techs.css';

function Techs() {
    return (
<div className='techs'>
            <div className="techs_title-block">
                <h1 className="techs_title">Технологии</h1>
            </div>
            <div className='techs_content'>
                <h2 className='content_title'>7 технологий</h2>
                <p className='content_discription'>
                На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
                </p>
            </div>
            <div className='techs_blocks'>
            <div className='tech_block'>HTML</div>
            <div className='tech_block'>CSS</div>
            <div className='tech_block'>JS</div>
            <div className='tech_block'>React</div>
            <div className='tech_block'>Git</div>
            <div className='tech_block'>Express.js</div>
            <div className='tech_block'>mongoDB</div>
            </div>
        </div>
    )
}

export default Techs