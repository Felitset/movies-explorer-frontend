import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Register.css';

function Register() {
    return (
        <div className="register">
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
                ></input>
                <p className="input_title">E-mail</p>
                <input
                    className="input register_email-input"
                    id="email"
                    type="email"
                    name="email"
                ></input>
                <p className="input_title">Пароль</p>
                <input
                    className="input register_password-input"
                    id="password"
                    type="password"
                    name="password"
                ></input>
            </form>
            <button className="register__button"
                type="submit"
            >Зарегистрироваться</button>
            <div className="if-registered_line">
                <p className="registered_line">Уже зарегистрированы?</p>
                <Link to='/signin' className="register-to-login_link">Войти</Link>
            </div>
        </div>
    )
}

export default withRouter(Register);