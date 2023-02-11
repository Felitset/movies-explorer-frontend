import React from "react";
import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
// import Preloader from './Preloader/Preloader';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies() {
    return (
        <>
            <main className="page__movies">
                <SearchForm />
                {/* <Preloader /> */}
                <MoviesCardList />
                <div className='expand_list'>
                    <button className='expand_list_btn'>Ещё</button>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Movies