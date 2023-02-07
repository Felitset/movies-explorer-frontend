import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
    return (
        <div className="page-not-found">
            <h1 className="error-code">404</h1>
            <p class="text-line">Страница не найдена</p>
            <Link to={'/signin'} className="return-link">Назад</Link>
        </div>
    )
}

export default withRouter(PageNotFound);