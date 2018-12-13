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

export default ({title,imgUrl,date}) => (
    <div style={styleFilms}>
        <h3 style={filmTitle}>{title}</h3>
        <div style={imageWrap}>
            <img style={imageStyle} src={imgUrl} alt="Img"/>
        </div>
        <p>Date: {date}</p>
        <button style={button} id={"button"}> You like this? You can't have this.</button>
    </div>
)
