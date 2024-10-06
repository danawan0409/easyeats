import React from 'react';
import './RecipeCard.css';
import mealImage from '../images/meal.jpg';  // Import the first meal image
import mealImage2 from '../images/meal2.jpg';  // Import the second meal image

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      {/* Dynamically display the correct meal image */}
      <img src={recipe.image} alt={recipe.name} className="meal-image" />
      <h3>{recipe.name}</h3>
      <p>{recipe.category}</p>
      <div className="recipe-info">
        <span>⏱ {recipe.time} min</span>
        <span>⭐ {recipe.rating}</span>
      </div>
    </div>
  );
}

export default RecipeCard;