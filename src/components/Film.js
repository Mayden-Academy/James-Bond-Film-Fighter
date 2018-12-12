import React from 'react'

export default ({title,imgUrl,date}) => (
    <div>
        <h3>{title}</h3>
        <img src={imgUrl} alt="Img"/>
        <p>Date: {date}</p>
    </div>
)
