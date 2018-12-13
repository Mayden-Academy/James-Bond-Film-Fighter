import React from "react"
import Film from "./Film"

const styleFilmSection = {
    width: "950px",
    margin: "0 auto"
}

export default ({films}) => (
    <div style={styleFilmSection}>

        {films.map((film) => {
            return <Film title ={film.title} imgUrl={film.imgUrl} date={film.date}/>
        })}



    </div>
)