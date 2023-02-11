import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import profileBtn from '../../images/profile_btn.png';
import menuBtn from '../../images/menu_pict.png';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header(props) {
    const { pathname } = useLocation();
    return (
        <>
            {pathname === '/movies' &&
                <header className="header" >

                    <img
                        className="header__logo"
                        src={logo}
                        alt="Логотип"
                        onClick={() => window.open("/")} 
                    />
                    <Navigation />
                    <img
                        className='header__profile_button'
                        src={profileBtn}
                        alt="Аккаунт"
                        onClick={() => window.open("/profile")} />
                    <img
                        className='header__menu_button'
                        src={menuBtn}
                        alt='Кнопка перехода в меню'
                        onClick={props.onMenuOpen} />
                </header>}

            {pathname === '/saved-movies' &&
                <header className="header" >

                    <img
                        className="header__logo"
                        src={logo}
                        alt="Логотип"
                        onClick={() => window.open("/")} 
                    />
                    <Navigation />
                    <img
                        className='header__profile_button'
                        src={profileBtn}
                        alt="Аккаунт"
                        onClick={() => window.open("/profile")} />
                    <img
                        className='header__menu_button'
                        src={menuBtn}
                        alt='Кнопка перехода в меню'
                        onClick={props.onMenuOpen} />
                </header>}

            {pathname === '/profile' &&
                <header className="header" >

                    <img
                        className="header__logo"
                        src={logo}
                        alt="Логотип"
                        onClick={() => window.open("/")} 
                    />
                    <Navigation />
                    <img
                        className='header__profile_button'
                        src={profileBtn}
                        alt="Аккаунт"
                        onClick={() => window.open("/profile")} />
                    <img
                        className='header__menu_button'
                        src={menuBtn}
                        alt='Кнопка перехода в меню'
                        onClick={props.onMenuOpen} />
                </header>}

            {pathname === '/' &&
                <header className="header header__main-page" >

                    <img
                        className="header__logo"
                        src={logo}
                        alt="Логотип"
                        onClick={() => window.open("/")} 
                    />
                    <div className="header__btns">
                        <Link to='/signup' className='header__btns_registration-link'>Регистрация</Link>
                        <button
                            className="header__btns_login_btn"
                            onClick={() => window.open("/signin")}>Войти</button>
                    </div>
                </header>}
        </>
    )
}

export default Header