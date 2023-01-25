import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import profileBtn from '../../images/profile_btn.png';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header() {
    const { pathname } = useLocation();
    return (
        <header className="header" >

            <img
                className="header__logo"
                src={logo}
                alt="Логотип"
            />

            {pathname === '/movies' && <>
                <Navigation />
                <img
                    className='profile_button'
                    src={profileBtn}
                    alt="Аккаунт" /></>}

            {pathname === '/saved-movies' && <>
                <Navigation />
                <img
                    className='profile_button'
                    src={profileBtn}
                    alt="Аккаунт" /></>}

            {pathname === '/profile' && <>
                <Navigation />
                <img
                    className='profile_button'
                    src={profileBtn}
                    alt="Аккаунт" /></>}

            {pathname === '/' && <div className="header-btns">
                <Link to='/signup' className='registration-link'>Регистрация</Link>
                <button className="login_btn" >Войти</button>
            </div>}

        </header>
    )
}

export default Header