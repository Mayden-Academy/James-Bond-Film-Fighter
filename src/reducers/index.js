
const defaultstate = {
    randomFilms: [],
    title: ""
}

export default (state = defaultstate, {type, films}) => {
    switch (type) {
        case "LOAD_FILMS":
            return {...state, randomFilms: films}
        default:
            return state
    }
}


