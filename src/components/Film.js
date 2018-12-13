import React from 'react'

const styleFilms = {
    backgroundColor: "brown",
    display: "inline-block",
    width: "400px",
    margin: "20px",
    padding: "10px",
    borderRadius: "10px"
}

const imageWrap = {
    textAlign: "center",
    width: "100%"
}

const filmTitle = {
    textAlign: "center",
    margin: "0 auto",
}

const imageStyle = {
    backgroundSize: "cover",
    width: "300px"
}

const button = {
    width: "100%",
    height: "50px"
}



export default ({data, films, refreshSubmit}) => (
    <div style={styleFilms}>
        <h3 style={filmTitle}>{data.name}</h3>
        <img style={imageStyle} src={data.image} alt="Img"/>
        <p>Date: {data.release_date}</p>
        <p>Current Score: {(data.winCount/data.playedCount).toFixed(3)*1000} </p>
        <button onClick={() => refreshSubmit(data, films)} id={"button"}> You like this? You can't have this.</button>
    </div>
)
