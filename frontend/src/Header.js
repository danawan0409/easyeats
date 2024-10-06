import React from 'react';
import './Header.css'; 
import profileImage from '../images/profile.jpg'; // Import the image from the images folder

function Header() {
  return (
    <header className="header">
      <div className="user-info">
        {/* Use the imported profile image */}
        <img src={profileImage} alt="User Icon" className="user-icon" />
        <div className="greeting">
          <h2>Hello, Maya!</h2>
          <p>Every homemade meal helps the planet heal 🌍 <span className="highlight"> </span></p>
        </div>
      </div>
    </header>
  );
}

export default Header;
