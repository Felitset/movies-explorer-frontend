import React, { useState, useCallback } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Login.css';
import { useFormWithValidation } from '../FormValidator';

function Login({ isLoggedIn, onLogin }) {

    const validateInput = useFormWithValidation();
    const { email, password } = validateInput.errors;

    const errorClassName = !validateInput.isValid
        ? 'login__error login__error_active'
        : 'login__error';

    const buttonState = !validateInput.isValid
        ? 'login__button'
        : 'login__button_status_active';

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = validateInput.values;
        onLogin(email, password);
        validateInput.resetForm();
    };

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
            <form
                className="login__form" noValidate
                onSubmit={handleSubmit}>
                <label className="input__title">E-mail</label>
                <input
                    className="input login__email-input"
                    id="email"
                    type="email"
                    name="email"
                    pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'
                    onChange={validateInput.handleChange}
                    value={validateInput?.values?.email || ''}
                    required
                >

                </input>
                <span className={errorClassName}>{email}</span>
                <label className="input__title">Пароль</label>
                <input
                    className="input login__password-input"
                    id="password"
                    type="password"
                    name="password"
                    onChange={validateInput.handleChange}
                    value={validateInput?.values?.password || ''}
                    required
                ></input>
                <span className={errorClassName}>{password}</span>
            </form>
            <button
                className={buttonState}
                type="submit"
                onClick={handleSubmit}
                // disabled={!validateInput.isValid}
                >Войти</button>
            <div className="if-unregistered_line">
                <p className="non-registered_line">Ещё не зарегистрированы? </p>
                <Link to={'/signup'} className="login-to-register_link">Регистрация</Link>
            </div>
        </main>
    )
}

export default withRouter(Login);