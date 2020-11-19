import React, { useState } from 'react'
import PropTypes from 'prop-types';
//* MANEJANDO INPUTS 
export const AddCategory = ({setCategories}) => { 


    const [input, setinput] = useState((' '));
    const handleInputChange = (e) => {
        setinput(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(input.trim().length > 2 ){
            setCategories(cats =>  [input,...cats,]);
            setinput(' ');
        }
        
    }

    return (
     
        <form onSubmit = { handleSubmit }>
            <h2> Add Category </h2>
            <h1> {input} </h1>
            <input 
                type = "text" 
                value = { input }
                onChange = { handleInputChange }
            
            />
        </form>

    )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired,
}
