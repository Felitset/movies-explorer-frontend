import React, { useRef } from "react";
import './SearchSavedForm.css';

function SearchSavedForm(props) {
    const queryRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        let searchQuery = queryRef.current.value
        props.onFilterSavedMovies(searchQuery)
    }

    function shortFilmsToggleButton(e){
        e.preventDefault();
        props.shortFilmsToggleButton();
    }

    const shortFilmFilterButtonClassName = (
        `filter ${props.shortFilmFlag ? 'filter_state_active' : ''}`
    );

    return (

        <section className='search_form movies__search_form'>

            <div className="search_form__input">
                <input
                    className="search_input"
                    type="search"
                    placeholder="Фильм"
                    ref={queryRef}>
                </input>
                <button
                    type="submit"
                    className="search_btn"
                    onClick={handleSubmit}>

                </button>
            </div>

            <div className="search_filter">
                <button
                    type='submit'
                    className={shortFilmFilterButtonClassName}
                    onClick={shortFilmsToggleButton} />
                <span className="filter_name">Короткометражки</span>
            </div>

        </section>
    )
}

export default SearchSavedForm