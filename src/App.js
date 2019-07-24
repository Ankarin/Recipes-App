import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Recipe from './components/Recipe';

export default function App() {
  const APP_ID = '0154a983';
  const APP_KEY = 'd580a596c1ad03387869b7722b070aff';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('pork');
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };
  return (
    <div className="App">
      <div className="conteiner p-3">
        <form
          onSubmit={getSearch}
          className="row px-3
        mt-4"
        >
          <input
            className="search-bar form-control col-sm-9"
            type="text"
            value={search}
            onChange={updateSearch}
            placeholder="Type the dish you want"
          />
          <button
            className="search-button btn btn-dark btn-md  col-sm-3"
            type="submit"
          >
            Search
          </button>
        </form>
        <div className="recipes">
          {recipes.map(recipe => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
