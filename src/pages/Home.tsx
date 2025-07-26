// src/pages/Home.tsx
import React from 'react';
import StoreCard from '../components/StoreCard/StoreCard'; // عدّل المسار حسب موقع المكون

const Home = () => {
  return (
    <div className="home-container">
      <h2>📍 المتاجر المميزة</h2>

      {/* عرض مجموعة من البطاقات */}
      <StoreCard />
      <StoreCard />
      <StoreCard />
    </div>
  );
};

export default Home;
