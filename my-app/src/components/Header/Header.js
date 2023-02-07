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
                    />
                    <Navigation />
                    <img
                        className='profile_button'
                        src={profileBtn}
                        alt="Аккаунт"
                        onClick={() => window.open("/profile")} />
                    <img
                        className='menu_button'
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
                    />
                    <Navigation />
                    <img
                        className='profile_button'
                        src={profileBtn}
                        alt="Аккаунт"
                        onClick={() => window.open("/profile")} />
                    <img
                        className='menu_button'
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
                    />
                    <Navigation />
                    <img
                        className='profile_button'
                        src={profileBtn}
                        alt="Аккаунт"
                        onClick={() => window.open("/profile")} />
                    <img
                        className='menu_button'
                        src={menuBtn}
                        alt='Кнопка перехода в меню'
                        onClick={props.onMenuOpen} />
                </header>}

            {pathname === '/' &&
                <header className="header header_main-page" >

                    <img
                        className="header__logo"
                        src={logo}
                        alt="Логотип"
                    />
                    <div className="header-btns">
                        <Link to='/signup' className='registration-link'>Регистрация</Link>
                        <button
                            className="login_btn"
                            onClick={() => window.open("/signin")}>Войти</button>
                    </div>
                </header>}
        </>
    )
}

export default Header