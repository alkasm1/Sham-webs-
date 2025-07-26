import React from 'react';
import './StoreCard.css';

interface StoreCardProps {
  name: string;
  description: string;
  imageUrl: string;
}

const StoreCard: React.FC<StoreCardProps> = ({ name, description, imageUrl }) => {
  return (
    <div className="store-card">
      <img src={imageUrl} alt={name} className="store-image" />
      <div className="store-details">
        <h2 className="store-name">{name}</h2>
        <p className="store-description">{description}</p>
      </div>
    </div>
  );
};

export default StoreCard;
