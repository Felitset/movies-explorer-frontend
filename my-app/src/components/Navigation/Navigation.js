import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
return (
    <div className='navigation'>
                <Link className='movie_page_link' to='/movies'>Фильмы</Link>
                <Link className='saved_movies_page_link' to='/saved-movies'>Сохранённые фильмы</Link></div>
)
}

export default Navigation