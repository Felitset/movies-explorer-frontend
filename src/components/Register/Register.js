import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Register.css';
import { useFormWithValidation } from '../FormValidator';

function Register({ isLoggedIn, onRegister }) {

 const validateInput = useFormWithValidation();
    const { name, email, password } = validateInput.errors;

    const errorClassName = !validateInput.isValid
        ? 'register__error register__error_active'
        : 'register__error';

    const buttonState = !validateInput.isValid
        ? 'register__button'
        : 'register__button_status_active';

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, password } = validateInput.values;
        onRegister(name, email, password);
        validateInput.resetForm();
    };


    if (isLoggedIn) {
        return (<Redirect to="/movies" />)
    }

    return (
        <main className="page__register register">
            <div className="title">
                <img
                    className="header__logo"
                    src={logo}
                    alt="Логотип"
                    onClick={() => window.open("/")}
                />
                <h1 className="register__title">Добро пожаловать!</h1>
            </div>
            <form className="register__form">
                <p className="input_title">Имя</p>
                <input
                    className="input register_name-input"
                    id="name"
                    type="name"
                    name="name"
                    onChange={validateInput.handleChange}
                    value={validateInput?.values?.name || ''}
                    required
                    minLength="2"
                    maxLength="30"
                    pattern='^[A-Za-z А-Яа-я -]+$'
                ></input>
                <span className={errorClassName}>{name}</span>
                <p className="input_title">E-mail</p>
                <input
                    className="input register_email-input"
                    id="email"
                    type="email"
                    name="email"
                    onChange={validateInput.handleChange}
                    value={validateInput?.values?.email || ''}
                    required
                ></input>
                <span className={errorClassName}>{email}</span>
                <p className="input_title">Пароль</p>
                <input
                    className="input register_password-input"
                    id="password"
                    type="password"
                    name="password"
                    onChange={validateInput.handleChange}
                    value={validateInput?.values?.password || ''}
                    required
                    minLength='8'
                ></input>
                <span className={errorClassName}>{password}</span>
            </form>
            <button className={buttonState}
                type="submit"
                onClick={handleSubmit}
            >Зарегистрироваться</button>
            <div className="if-registered_line">
                <p className="registered_line">Уже зарегистрированы?</p>
                <Link to='/signin' className="register-to-login_link">Войти</Link>
            </div>
        </main>
    )
}

export default withRouter(Register);