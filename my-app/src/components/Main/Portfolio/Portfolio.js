import React from "react";
import './Portfolio.css';
import arrowPict from '../../../images/arrow_pictogram.png';

function Portfolio() {
    return (
        <>
            <h3 className="portfolio_title">Портфолио</h3>
            <div className='portfolio_block'>
                <h4 className='portfolio_block_title'>Статичный сайт</h4>
                <img
                    className='forward_btn'
                    src={arrowPict}
                    alt='Стрелка для перехода на проект'
                    onClick={() => window.open("https://github.com/Felitset/how-to-learn")} />
            </div>
            <div className='portfolio_block'>
                <h4 className='portfolio_block_title'>Адаптивный сайт</h4>
                <img
                    className='forward_btn'
                    src={arrowPict}
                    alt='Стрелка для перехода на проект'
                    onClick={() => window.open("https://github.com/Felitset/russian-travel")} />
            </div>
            <div className='portfolio_block'>
                <h4 className='portfolio_block_title'>Одностраничное приложение</h4>
                <img
                    className='forward_btn'
                    src={arrowPict}
                    alt='Стрелка для перехода на проект'
                    onClick={() => window.open("https://github.com/Felitset/react-mesto-api-full")} />
            </div>
        </>
    )
}

export default Portfolio