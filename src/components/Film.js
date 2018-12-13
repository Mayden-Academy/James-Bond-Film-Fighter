import React from 'react'


const styleFilms = {
    backgroundColor: "brown",
    display: "inline-block",
    width: "400px",
    margin: "20px",
    padding: "10px",
    borderRadius: "10px"

}

const filmTitle = {
    margin: "0 auto",
    width: "300px"
}

const imageStyle = {
    backgroundSize: "cover",
    height: "300px"
}

const button = {
    width: "100%",
    height: "50px"
}

const postInfo = {

}

export default ({title,imgUrl,date, refresh}) => (
    <div style={styleFilms}>
        <h3 style={filmTitle}>{title}</h3>
        <img style={imageStyle} src={imgUrl} alt="Img"/>
        <p>Date: {date}</p>
        <button onClick={refresh} id={"button"}> You like this? You can't have this.</button>
    </div>
)
