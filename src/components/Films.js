import React from "react"
import Film from "./Film"

const styleFilmSection = {
    width: "950px",
    margin: "0 auto"
}

export default ({films, refresh}) => (
    <div style={styleFilmSection}>

        {films.map((film) => {
            return <Film title={film.name} imgUrl={film.image} date={film.date} refresh={refresh}/>
        })}




    </div>
)

