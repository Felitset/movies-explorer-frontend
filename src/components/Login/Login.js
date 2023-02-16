import React, { useState, useCallback } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Login.css';

function Login({ isLoggedIn, onLogin }) {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const handleChange = useCallback((event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value })
    }, [userData]);

    const submitChange = useCallback((event) => {
        event.preventDefault()
        try {
            onLogin(userData.email, userData.password)
        } catch (err) {
            console.log('Error')
        }
    }, [onLogin, userData])

    if (isLoggedIn) {
        return (<Redirect to="/movies" />)
    }

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
                    onChange={handleChange}
                    value={userData.email}
                    required
                >

                </input>
                <span className="input-error"></span>
                <label className="input__title">Пароль</label>
                <input
                    className="input login__password-input"
                    id="password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={userData.password}
                    required
                ></input>
                <span className="input-error"></span>
            </form>
            <button
                className="login__button"
                type="submit"
                onClick={submitChange}>Войти</button>
            <div className="if-unregistered_line">
                <p className="non-registered_line">Ещё не зарегистрированы? </p>
                <Link to={'/signup'} className="login-to-register_link">Регистрация</Link>
            </div>
        </main>
    )
}

export default withRouter(Login);