import React from "react";
import './NavTab.css';
import { Link } from 'react-router-dom';
import closeBtn from '../../../images/close_btn.png';
import profileBtn from '../../../images/profile_btn.png';

function NavTab(props) {

    return (
        <div className={props.isOpen ? 'nav-tab_open' : 'nav-tab'}>
            <img
                className='nav-tab_close_btn'
                src={closeBtn}
                alt='Кнопка закрытия'
                onClick={props.onClose} />
            <div className="nav-tab_menu">
                <Link className='nav-tab_menu_link' to="/">Главная</Link>
                <Link className='nav-tab_menu_link' to="/movies">Фильмы</Link>
                <Link className='nav-tab_menu_link' to="/saved-movies">Сораненные фильмы</Link>
            </div>
            <img
                className='nav-tab_profile_btn'
                src={profileBtn}
                alt='Кнопка перехода на страцицу профиля' />
        </div>
    )
}

export default NavTab