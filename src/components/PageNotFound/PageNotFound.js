import React from 'react';
import { useHistory } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
    const history = useHistory();

  const redirect = () => {
    history.push('/');
  }
    return (
        <main className="page_not_found page__page_not_found">
            <h1 className="page_not_found__error_code">404</h1>
            <p className="page_not_found__text_line">Страница не найдена</p>
            <button onClick={redirect} className="page_not_found__return_button">Назад</button>
        </main>
    )
}

export default PageNotFound;