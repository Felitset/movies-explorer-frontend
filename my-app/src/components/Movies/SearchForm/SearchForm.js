import React from "react";
import './SearchForm.css';
import smalltumbOn from '../../../images/smalltumb_on.png';

function SearchForm() {
    return (
        <div className='search_form'>

<div className="search_form_input">
    <input 
    className="search_input"
    type="search" 
    placeholder="Фильм">
    </input>
    <span className="search_btn"></span>
    </div>
    
    <div className="search_filter">
        <img
        className="filter"
        src={smalltumbOn}
        alt='кнопка включения фильтра поиска фильмов' />
        <span className="filter_name">Короткометражки</span>
    </div>

</div>
    )
}

export default SearchForm