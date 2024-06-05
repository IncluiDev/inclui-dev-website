import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../../lib/axios/axios';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
      navigate("/login");
    }

    setLoading(false);
  }, [navigate]);
  
  async function handleLogin(email, senha) {
    try {
      const { data: { token } } = await api.post('/auth', { email, senha });
      localStorage.setItem('token', token); 
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  }
    
  return { authenticated, loading, handleLogin };
}