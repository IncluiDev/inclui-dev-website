import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WebClient } from '../../../helpers/api/WebClient';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  function checkLogin() {
    if (localStorage.getItem('token')) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
      navigate("/login");
    }
  }
  
  async function handleLogin(email, senha) {
    try {
      await WebClient.exchange('/auth', "POST", { email, senha })
      .then(response => response.json())
      .then(response => {
        localStorage.setItem('token', response.token); 
        setAuthenticated(true)
      })

      navigate("/dashboard")
    } catch(error) {
      return false
    }
  }
    
  return { authenticated, handleLogin, checkLogin };
}