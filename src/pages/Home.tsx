import React from 'react';
import './Home.css';

const stores = [
  {
    id: 1,
    name: 'ألبسة الشباب',
    city: 'دمشق',
    image: 'https://via.placeholder.com/250x160?text=Store+1',
    description: 'أحدث صيحات الألبسة الرجالية بأسعار مميزة.',
  },
  {
    id: 2,
    name: 'حلويات السعادة',
    city: 'حلب',
    image: 'https://via.placeholder.com/250x160?text=Store+2',
    description: 'أطيب الحلويات الشرقية والغربية منذ عام 1985.',
  },
];

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>منصة Sham Webs</h1>
        <a href="/login" className="login-button">تسجيل الدخول</a>
      </header>

      <p className="subtitle">🛍 اختر مدينتك لاكتشاف المتاجر المحلية</p>

      <div className="store-list">
        {stores.map((store) => (
          <div key={store.id} className="store-card">
            <img src={store.image} alt={store.name} />
            <div className="store-info">
              <h3>{store.name}</h3>
              <p><strong>المدينة:</strong> {store.city}</p>
              <p>{store.description}</p>
              <a href={`/store/${store.id}`} className="view-button">عرض المتجر</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
