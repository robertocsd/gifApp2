import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';
import { getGrid } from '../helpers/getGifs';

export const GiftGrid = ({category}) => {

  
 
    // const [images, setimages] = useState([]);
    const {data:images, loading} = useFetchGifs(category);
    return (
        <>
            <h3> {category} </h3>
        {loading && <p className= "animate__animated animate__bounce flash"> Loading </p>}
            <div className = 'cardGrid'>
          
               {images.map( img => (
                <> 
                 <GifItem
                 key = {img.key}
                {...img}></GifItem>
                 
                </> 
               ))}



        </div>
        </> 
    )
}
