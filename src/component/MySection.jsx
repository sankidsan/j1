import React from 'react';
import './App.css'; // Import your custom CSS
import GoldRate from './GoldRate';

const MySection = () => {
  return (
    <div className="container">
      <div className="section-title">
        <h1>Sri Yoga Murugan Jewels</h1>
      </div>
      <p>
        Discover our exquisite collection of fine jewellery, crafted with precision and passion. Perfect for every occasion, our pieces add a touch of elegance and sophistication to your style.
      </p>
      
      {/* Animated text section */}
      <div className="animated-text-container">
        <div className="animated-text">
        916 Gold – Silver – Diamond Jewellery – Platinum – Custom-made Ornaments – Antique Jewellery
        </div>
      </div>

      <div className="section-title">
      </div>
      <p>
        From timeless classics to contemporary designs, our jewellery range is designed to impress and elevate your look. Explore our collection and find the perfect piece to complement your style.
      </p>
      <GoldRate />
    </div>
  );
};

export default MySection;
