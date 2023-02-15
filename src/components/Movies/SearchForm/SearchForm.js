import React from "react";
import './SearchForm.css';
import smalltumbOn from '../../../images/smalltumb_on.png';

function SearchForm() {
    return (
        <section className='search_form movies__search_form'>

            <div className="search_form__input">
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

        </section>
    )
}

export default SearchForm