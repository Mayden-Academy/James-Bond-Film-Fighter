import React from "react"
import Film from "./Film"

const styleFilmSection = {
    width: "950px",
    margin: "0 auto"
}

export default ({films, refreshSubmit}) => (
    <div style={styleFilmSection}>
        {films.map((film) => {
            return <Film data={film} films={films} refreshSubmit={refreshSubmit}/>
        })}
    </div>
)