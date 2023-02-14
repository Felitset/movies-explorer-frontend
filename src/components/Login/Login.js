import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Login.css';

function Login() {
    return (
        <main className="page__login login">
            <div className="login__page_title">
                <img
                    className="header__logo"
                    src={logo}
                    alt="Логотип"
                    onClick={() => window.open("/")} 
                />
                <h1 className="login__title">Рады видеть!</h1>
            </div>
            <form className="login__form">
                <label className="input__title">E-mail</label>
                <input
                    className="input login__email-input"
                    id="email"
                    type="email"
                    name="email"
                >

                </input>
                <label className="input__title">Пароль</label>
                <input
                    className="input login__password-input"
                    id="password"
                    type="password"
                    name="password"
                ></input>

            </form>
            <button
                className="login__button"
                type="submit">Войти</button>
            <div className="if-unregistered_line">
                <p className="non-registered_line">Ещё не зарегистрированы? </p>
                <Link to={'/signup'} className="login-to-register_link">Регистрация</Link>
            </div>
        </main>
    )
}

export default withRouter(Login);