import React from 'react';
import { LoginForm } from './components/LoginForm';

function App() {
  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div className="relative">
        <LoginForm />
      </div>
    </div>
  );
}

export default App;