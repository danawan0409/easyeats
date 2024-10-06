import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        Easy Eats {/* This is where the name is set */}
      </div>
      <nav className="nav">
      </nav>
      <div className="auth-cart">
        <a href="#"><span role="img" aria-label="login"></span>Log In</a>
      </div>
    </header>
  );
}

export default Header;
