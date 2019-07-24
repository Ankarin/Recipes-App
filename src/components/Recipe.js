import React, { useEffect, useState } from 'react';
import '../App.scss';
import './Recipe.scss';

export default function Recipe({ title, calories, image, ingredients }) {
  let Clrs = calories.toFixed(0);
  //  Toggler for recipes
  const [stateRecipe, setStateRecipe] = useState(false);
  const toggle = () => {
    setStateRecipe(stateRecipe === false ? true : false);
  };
  let showState = '';
  let arrowIcon = 'fas fa-chevron-down';
  if (stateRecipe) {
    showState = 'show';
    arrowIcon = 'fas fa-chevron-up';
    console.log(showState);
  }

  return (
    <div className="recipe-form">
      <div className="wrapper">
        <div>
          <h2>{title}</h2>
          <p>Calories: {Clrs}</p>
          <p className="toggler" onClick={toggle}>
            Recipe
            <i className={arrowIcon} />
          </p>
          <ul className="ingreds">
            {ingredients.map(ingredient => (
              <li className={showState}>{ingredient.text}</li>
            ))}
          </ul>
        </div>

        <div className="imgs">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
}
