import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header(props) {
    const { pathname } = useLocation();

    const headerBtns = props.isLoggedIn ? 'header__btns_hidden' : 'header__btns';
    const loggedHeader = props.isLoggedIn ? 'header__profile_button' : 'header__profile_button_hide';
    const loggedMenu = props.isLoggedIn ? 'header__menu_button' : 'header__menu_button_hide';

    return (
        <>

            {pathname === '/' &&
                <header className="page__header header header__main-page" >

                    <img
                        className="header__logo"
                        src={logo}
                        alt="Логотип"
                        onClick={() => window.open("/")}
                    />
                    <div className={headerBtns}>
                        <Link to='/signup' className='header__btns_registration-link'>Регистрация</Link>
                        <button
                            className="header__btns_login_btn"
                            onClick={() => window.open("/signin")}>Войти</button>
                    </div>
                        <Navigation isLoggedIn={props.isLoggedIn}/>
                        <Link
                            className={loggedHeader}
                            to="/profile" />
                        <button
                            className={loggedMenu}
                            onClick={props.onMenuOpen}
                        />
                </header>}

            {pathname === '/movies' &&
                <header className="page__header header" >

                    <img
                        className="header__logo"
                        src={logo}
                        alt="Логотип"
                        onClick={() => window.open("/")}
                    />
                        <Navigation />
                        <Link
                            className={loggedHeader}
                            to="/profile" />
                        <button
                            className='header__menu_button'
                            onClick={props.onMenuOpen}
                        />
                </header>}

            {pathname === '/saved-movies' &&
                <header className="page__header header" >

                    <img
                        className="header__logo"
                        src={logo}
                        alt="Логотип"
                        onClick={() => window.open("/")}
                    />
                    <Navigation />
                    <Link
                            className={loggedHeader}
                            to="/profile" />
                        <button
                            className='header__menu_button'
                            onClick={props.onMenuOpen}
                        />
                </header>}

            {pathname === '/profile' &&
                <header className="page__header header" >

                    <img
                        className="header__logo"
                        src={logo}
                        alt="Логотип"
                        onClick={() => window.open("/")}
                    />
                    <Navigation />
                    <Link
                            className={loggedHeader}
                            to="/profile" />
                        <button
                            className='header__menu_button'
                            onClick={props.onMenuOpen}
                        />
                </header>}
        </>
    )
}

export default Header