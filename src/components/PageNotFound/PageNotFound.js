import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
    return (
        <main className="page_not_found page__page_not_found">
            <h1 className="page_not_found__error_code">404</h1>
            <p class="page_not_found__text_line">Страница не найдена</p>
            <Link to={'/signin'} className="page_not_found__return_link">Назад</Link>
        </main>
    )
}

export default withRouter(PageNotFound);