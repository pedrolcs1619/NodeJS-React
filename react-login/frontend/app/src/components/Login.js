import axios from 'axios';
import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const response = await axios.post('http://localhost:3000/login', { email, password });
      console.log('Resposta do servidor:', response.data);
    } catch (error) {
      console.error('Erro no login:', error.response?.data || error.message);
    }
  };

  return (
    <div className='login-form-wrap'>
      <h2>Login</h2>
      <form className='login-form' onSubmit={handleLogin}>
        <input
          type='email'
          name='email'
          placeholder='Email'
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit' className='btn-login'>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
