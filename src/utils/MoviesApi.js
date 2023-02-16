export class MoviesApi {
    constructor(apiHost) {
        this.apiHost = apiHost;
    }

    getAllMovies() {
        return fetch(this.apiHost, {
            method: 'GET'
        })
            .then(this._checkResponse);
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

}