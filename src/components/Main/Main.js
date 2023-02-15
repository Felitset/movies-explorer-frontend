import React from 'react';
import './Main.css';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Footer from '../Footer/Footer';

function Main() {
    return (
        <>
            <main className='main page__main'>
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
            </main>
            <Footer />
        </>
    )
}

export default Main