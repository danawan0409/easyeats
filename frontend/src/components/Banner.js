import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1>Welcome to Easy Eats</h1>
        <p>Find recipes to suit your needs!</p>
        <button className="quiz-btn">Take Quiz</button>
      </div>
    </section>
  );
}

export default Banner;
