import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title,calories,image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <img src={image} alt="" />
            <p>Calories:{calories}</p>
            <h3>What you will need</h3>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>   
        </div>
    );
}

export default Recipe;