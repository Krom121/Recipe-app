import React, {useEffect, useState} from 'react';
import Recipe from "./Recipe";
import './App.css';

const App = () => {

  // API KEYS FORM EDAMAM
    const APP_ID = '7e08da89';
    const APP_KEY = "fa0638cc61c0f170f9fd98430f162b7a";

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState('chicken');

    useEffect( () =>{
      getRecipes();
    }, [query]);
    

    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      setRecipes(data.hits);
    }

    const updateSearch = e => {
      setSearch(e.target.value);
    }

    const getSearch = e => {
      e.preventDefault();
      setQuery(search);
      setSearch('');
    }


  return (
    <div className="App">
      <h1 className="app-title">Recipe App</h1>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" placeholder="Search for your recipes..." value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe =>(
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
  );
}

export default App;
