import React from 'react';

import Recipe from './recipe';

import '../styles/main.scss';

function RecipeList({ recipes})  {
    return (
      <div className="recipe-list">
        <h2 className="recipe-list-head">Showing <span className="recipe-list-ul">'{recipes.query}'</span> recipes</h2>
        <div className="recipe-list-cards">
          {recipes.map(recipe => (
            <Recipe
              key={recipe.id}
              title={recipe.title}
              min={recipe.readyInMinutes}
              servings={recipe.servings}
              link={recipe.sourceUrl}
              photo={recipe.image}
            />
          ))}
        </div>
      </div>
    );
  
}

export default RecipeList;
