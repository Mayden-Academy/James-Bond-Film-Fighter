import {getRandom, sendPlay} from '../api'

export const GetFilms = () => (dispatch) => getRandom().then(films => dispatch(DisplayFilms(films)))

export const DisplayFilms = (films) => ({type: "LOAD_FILMS", films})

export const SendPlays = (data, films) => (dispatch) => sendPlay({played: films, won: data}).then(res => {
    console.log(res)
    dispatch(GetFilms)
})