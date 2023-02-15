import React, { useState, useCallback } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Register.css';

function Register({ isLoggedIn, onRegister }) {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = useCallback((event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value })
    }, [formData]);

    const submitChange = useCallback((event) => {
        event.preventDefault()
        onRegister(formData.name, formData.email, formData.password)
    }, [onRegister, formData])

    if (isLoggedIn) {
        return (<Redirect to="/" />)
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
            <form className="register__form" onSubmit={submitChange}>
                <p className="input_title">Имя</p>
                <input
                    className="input register_name-input"
                    id="name"
                    type="name"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                ></input>
                <p className="input_title">E-mail</p>
                <input
                    className="input register_email-input"
                    id="email"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                ></input>
                <p className="input_title">Пароль</p>
                <input
                    className="input register_password-input"
                    id="password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                ></input>
            </form>
            <button className="register__button"
                type="submit"
                onClick={submitChange}
            >Зарегистрироваться</button>
            <div className="if-registered_line">
                <p className="registered_line">Уже зарегистрированы?</p>
                <Link to='/signin' className="register-to-login_link">Войти</Link>
            </div>
        </main>
    )
}

export default withRouter(Register);