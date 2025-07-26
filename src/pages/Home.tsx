import React from 'react';
import './Home.css';

const stores = [
  {
    id: 1,
    name: 'متجر الأنوار',
    city: 'باريس',
    image: 'https://via.placeholder.com/250x160?text=Store+1',
    description: 'أفضل متجر للإلكترونيات في باريس، بضمان وأسعار منافسة.',
  },
  {
    id: 2,
    name: 'زهرة الشرق',
    city: 'ليون',
    image: 'https://via.placeholder.com/250x160?text=Store+2',
    description: 'متخصص في المنتجات الطبيعية والعناية بالبشرة.',
  },
  {
    id: 3,
    name: 'أزياء شام',
    city: 'مارسيليا',
    image: 'https://via.placeholder.com/250x160?text=Store+3',
    description: 'أحدث صيحات الموضة الرجالية والنسائية.',
  },
];

function Home() {
  return (
    <div className="home-container">
      <h1 className="title">مرحباً بك يا شام 👋</h1>
      <p className="subtitle">اكتشف أفضل المتاجر حسب مدينتك</p>

      <div className="store-list">
        {stores.map((store) => (
          <div key={store.id} className="store-card">
            <img src={store.image} alt={store.name} />
            <div className="store-info">
              <h3>{store.name}</h3>
              <p><strong>المدينة:</strong> {store.city}</p>
              <p>{store.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
