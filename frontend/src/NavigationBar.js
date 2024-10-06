import React from 'react';
import './NavigationBar.css';

function NavigationBar() {
  return (
    <nav className="navigation-bar">
      <div className="search-bar">
        <input type="text" placeholder="Search for recipe" />
        <button>🔍</button>
      </div>
      <ul>
        <li className="active">Popular</li>
        <li>Price</li>
        <li>Ethnic Dishes</li>
        <li>Quick Recipes</li>
        <li>Low Calories</li>
      </ul>
    </nav>
  );
}

export default NavigationBar;