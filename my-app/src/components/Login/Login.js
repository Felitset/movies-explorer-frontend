import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Login.css';

function Login() {
    return (
        <div className="login">
            <div className="title">
                <img
                    className="header__logo"
                    src={logo}
                    alt="Логотип"
                />
                <h1 className="login__title">Рады видеть!</h1>
            </div>
            <form className="login_form">
                <p className="input_title">E-mail</p>
                <input
                    className="input login_email-input"
                    // placeholder='Email'
                    id="email"
                    type="email"
                    name="email"
                // onChange={handleChange}
                // value={userData.email}
                >

                </input>
                <p className="input_title">Пароль</p>
                <input
                    className="input login_password-input"
                    id="password"
                    type="password"
                    name="password"
                    // placeholder='Пароль'
                // onChange={handleChange}
                // value={userData.password}
                ></input>

            </form>
            <button className="login_button"
                type="submit"
            // onClick={submitChange}
            >Войти</button>
            <div className="if-unregistered_line">
                <p className="non-registered_line">Ещё не зарегистрированы? </p>
                <Link to={'/signup'} className="login-to-register_link">Регистрация</Link>
            </div>
        </div>
    )
}

export default withRouter(Login);