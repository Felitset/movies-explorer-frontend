export const localStorageQueryAllMoviesKey = 'queryAllMovies'
export const localStorageQuerySavedMoviesKey = 'querySavedMovies'

export const filteredAllMoviesKey = 'filteredAllMovies'
export const filteredSavedMoviesKey = 'filteredSavedMovies'

export const allMoviesListKey = 'allMovies'
export const savedMoviesListKey = 'savedMovies'

export const toggleStateAllMoviesKey = 'toggleStateAllMovies'
export const toggleStateSavedMoviesKey = 'toggleStateSavedMovies'

export const jwtLSKey = 'jwt'

export const duration = (t) => {
    let hours = 0;
    let minutes = 0;
    if (t >= 60) {
        hours = ~~(t / 60);
        minutes = t % 60;
    }
    if (t < 60) {
        hours = 0;
        minutes = t;
    }
    return `${hours}ч ${minutes}м`;
}

export const pageStep = 7