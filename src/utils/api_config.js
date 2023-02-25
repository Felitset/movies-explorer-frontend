import { MoviesApi } from "./MoviesApi.js";

export const apiHost = 'https://api.nomoreparties.co/beatfilm-movies'

const api = new MoviesApi(apiHost);


export default api;
