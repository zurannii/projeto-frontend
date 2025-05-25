import React from 'react';
import './ResidenceCard.css'; // We will create this CSS file next

const ResidenceCard = ({ image, price, title, description }) => {
  return (
    <div className="residence-card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-info">
        <span className="card-price">{price}</span>
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default ResidenceCard; 