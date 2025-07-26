import React from 'react';
import './Login.css';

const roles = [
  {
    id: 'guest',
    title: 'زائر',
    icon: '👤',
    description: 'استعرض المنتجات وتصفّح المتاجر بدون تسجيل دخول.',
    action: () => alert('تم اختيار الزائر'),
  },
  {
    id: 'seller',
    title: 'صاحب متجر',
    icon: '🛒',
    description: 'ادخل إلى لوحة التحكم الخاصة بمتجرك.',
    action: () => alert('نقلك إلى لوحة صاحب المتجر'),
  },
  {
    id: 'admin',
    title: 'مشرف نظام',
    icon: '🧑‍💼',
    description: 'تحكم بإدارة المنصة والمحتوى.',
    action: () => alert('مرحبا بالمشرف'),
  },
  {
    id: 'developer',
    title: 'مطوّر',
    icon: '⚙️',
    description: 'الوصول إلى أدوات التطوير والتحليل.',
    action: () => alert('بيئة المطوّر قيد التحضير'),
  },
];

function Login() {
  return (
    <div className="login-container">
      <h2>اختر نوع الدخول إلى المنصة</h2>
      <div className="role-grid">
        {roles.map((role) => (
          <div key={role.id} className="role-card" onClick={role.action}>
            <div className="role-icon">{role.icon}</div>
            <h3>{role.title}</h3>
            <p>{role.description}</p>
            <button className="role-button">دخول</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Login;
