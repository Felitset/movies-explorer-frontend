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
                />
                <h1 className="register__title">Добро пожаловать!</h1>
            </div>
            <form className="register_form">
            <p className="input_title">Имя</p>
                <input
                    className="input register_name-input"
                    // placeholder='Имя'
                    id="name"
                    type="name"
                    name="name"
                >

                </input>
                <p className="input_title">E-mail</p>
                <input
                    className="input register_email-input"
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
                    className="input register_password-input"
                    id="password"
                    type="password"
                    name="password"
                    // placeholder='Пароль'
                // onChange={handleChange}
                // value={userData.password}
                ></input>

            </form>
            <button className="register_button"
                type="submit"
            // onClick={submitChange}
            >Зарегистрироваться</button>
            <div className="if-registered_line">
                <p className="registered_line">Уже зарегистрированы?</p>
                <Link to='/signin' className="register-to-login_link">Войти</Link>
            </div>
        </div>
    )
}

export default withRouter(Register);