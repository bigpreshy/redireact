import React from 'react';

// import Meal from '../images/meal.jpg';
//import RecipeList from './recipeList';

import '../styles/main.scss';

const Recipe = props => {

    return (
      <div className="recipe">
        <div className="recipe-text-main">
          <h3 className="recipe-title">{props.title}</h3>
          <p>
            <i className="fa fa-history"></i>
            {props.min} minutes
          </p>
          <p>
            <i className="fa fa-male"></i>serves {props.servings}
          </p>
        </div>
        <div className="recipe-img-container">
          <img src={props.photo} alt="Meal" className="recipe-img" />
        </div>
        <a href={props.link} target="_blank" rel="noreferrer"><button className="recipe-btn">Full Recipe</button></a>
        <div className="recipe-outline"></div>
      </div>
    );
  }


export default Recipe;
