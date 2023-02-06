import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import profileBtn from '../../images/profile_btn.png';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header() {
    const { pathname } = useLocation();
    return (
        <>
            {pathname === '/movies' && 
            <header className="header" >

            <img
                className="header__logo"
                src={logo}
                alt="Логотип"
            />
                <Navigation />
                <img
                    className='profile_button'
                    src={profileBtn}
                    alt="Аккаунт" /></header>}

            {pathname === '/saved-movies' && 
            <header className="header" >

            <img
                className="header__logo"
                src={logo}
                alt="Логотип"
            />
                <Navigation />
                <img
                    className='profile_button'
                    src={profileBtn}
                    alt="Аккаунт" /></header>}

            {pathname === '/profile' && 
            <header className="header" >

            <img
                className="header__logo"
                src={logo}
                alt="Логотип"
            />
                <Navigation />
                <img
                    className='profile_button'
                    src={profileBtn}
                    alt="Аккаунт" /></header>}

            {pathname === '/' && 
            <header className="header header_main-page" >

            <img
                className="header__logo"
                src={logo}
                alt="Логотип"
            />
            <div className="header-btns">
                <Link to='/signup' className='registration-link'>Регистрация</Link>
                <button className="login_btn" >Войти</button>
            </div>
            </header>}
            </>
    )
}

export default Header