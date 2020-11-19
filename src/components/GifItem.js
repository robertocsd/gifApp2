import React from 'react'

export const GifItem = ( {id, title, url} ) => {
    console.log(id , title, url)
    return (
        <div className = "card animate__animated animate__bounceIn"  >
             <h1> {title} </h1>
            <img src={url} alt = { title }></img>
           
        </div>
    )
}
