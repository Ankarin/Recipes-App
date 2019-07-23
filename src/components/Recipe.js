import React from 'react';
import '../App.scss';
export default function Recipe({ title, calories, image, ingredients }) {
  let Clrs = calories.toFixed(0);
  return (
    <div className="recipe-form">
      <div className="wrapper">
        <div>
          <h2>{title}</h2>
        </div>
        <div>
          {' '}
          <ul className="ingreds">
            {ingredients.map(ingredient => (
              <li>{ingredient.text}</li>
            ))}
          </ul>
        </div>
        <div className="imgs">
          <p>Calories: {Clrs}</p>
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
}
