import React from "react"
import Film from "./Film"

export default ({films}) => (
    <div>

        {films.map((film) => {
            return <Film title ={film.title} imgUrl={film.imgUrl} date={film.date}/>
        })}

    </div>
)