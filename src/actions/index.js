import {getRandom} from '../api'

export const GetFilms = () => (dispatch) => getRandom().then(films => dispatch(DisplayFilms(films)))

export const DisplayFilms = (films) => ({type: "LOAD_FILMS", films})
