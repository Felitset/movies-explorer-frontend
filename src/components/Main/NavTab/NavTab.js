import React from "react";
import './NavTab.css';
import { Link } from 'react-router-dom';
import closeBtn from '../../../images/close_btn.png';
import profileBtn from '../../../images/profile_btn.png';

function NavTab(props) {

    return (
        <div className={props.isOpen ? 'nav-tab_open' : 'nav-tab'}>
            <div className='nav-tab__body'>
                <div className='nav-tab__content'>
                    <img
                        className='nav-tab__close_btn'
                        src={closeBtn}
                        alt='Кнопка закрытия'
                        onClick={props.onClose} />
                    <div className="nav-tab__menu">
                        <Link
                            className='nav-tab__menu_link'
                            to="/"
                            onClick={props.onClose}>Главная</Link>
                        <Link
                            className='nav-tab__menu_link'
                            to="/movies"
                            onClick={props.onClose}>Фильмы</Link>
                        <Link
                            className='nav-tab__menu_link'
                            to="/saved-movies"
                            onClick={props.onClose}>Сораненные фильмы</Link>
                    </div>
                    <img
                        className='nav-tab__profile_btn'
                        src={profileBtn}
                        alt='Кнопка перехода на страцицу профиля' />
                </div>
            </div>
        </div>
    )
}

export default NavTab