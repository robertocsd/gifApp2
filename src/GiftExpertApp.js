import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';


export const GifExpertApp = () => {

    

     const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {

    //     setCategories([...categories, 'nuevo']);
    // }
    return (
        <>
        <h2> Gif Expert App </h2>
        <AddCategory setCategories = { setCategories }  />
        <hr></hr>
        
        <ol>
            { 

                categories.map( category => (
                    <GiftGrid 
                    key = {category}
                    category = {category}/>
                 ) )
            
            }



        </ol>

      </>
    )
  }


