// src/pages/Login.tsx
import React from 'react';

const Login: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/path/to/dripping-chocolate.jpg)' }}>
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl mb-4">Login</h2>
        <button className="w-full py-2 bg-blue-600 text-white mb-2">Sign in with Google</button>
        <button className="w-full py-2 bg-blue-800 text-white mb-2">Sign in with Facebook</button>
        <form>
          <input type="email" placeholder="Email" className="w-full mb-2 p-2 border" />
          <input type="password" placeholder="Password" className="w-full mb-4 p-2 border" />
          <button type="submit" className="w-full py-2 bg-green-600 text-white">Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
