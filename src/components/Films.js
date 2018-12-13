import React from "react"
import Film from "./Film"

export default ({films}) => (
    <div>

        {films.map((film) => {
            return <Film title ={film.name} imgUrl={film.image} date={film.date}/>
        })}

    </div>
)

