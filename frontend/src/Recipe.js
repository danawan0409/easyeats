import React from 'react';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import RecipeCard from './components/RecipeCard';
import './Recipe.css';
import mealImage from './images/meal.jpg';  
import mealImage2 from './images/meal2.jpg';
import mealImage3 from './images/meal3.jpg';
import mealImage4 from './images/meal4.jpg';

function Recipe() {
  const recipes = [
    {
      name: 'Chicken Bowl',
      category: 'Healthy',
      time: 16,
      rating: 4.8,
      image: mealImage,  
    },
    {
      name: 'Tofu and Noodles',
      category: 'Asian',
      time: 35,
      rating: 4.5,
      image: mealImage2,  
    },
    {
      name: 'Lentil Curry and Rice',
      category: 'Indian',
      time: 25,
      rating: 4.7,
      image: mealImage3,  
    },
    {
      name: 'Quesadilla',
      category: 'Mexican',
      time: 20,
      rating: 4.6,
      image: mealImage4,  
    },
  ];

  return (
    <div className="Recipe">
      <Header />
      <NavigationBar />
      <div className="recipe-list">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>

      {/* Home Button */}
      <div className="home-button-container">
        <button className="home-button">
          &#8962; {/* Unicode for home icon */}
        </button>
      </div>
    </div>
  );
}

export default Recipe;