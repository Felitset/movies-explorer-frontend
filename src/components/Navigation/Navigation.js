import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <div className='navigation'>
            <Link className='navigation__movies_link' to='/movies'>Фильмы</Link>
            <Link className='navigation__saved_movies_link' to='/saved-movies'>Сохранённые фильмы</Link>
        </div>
    )
}

export default Navigation