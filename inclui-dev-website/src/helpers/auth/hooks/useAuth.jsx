import { WebClient } from '../../../helpers/api/WebClient';

export default class Auth {
  static authenticated = false;

  static checkLogin() {
    return localStorage.getItem('token') ? true : false;
  }

  static async handleLogin(email, senha) {
    const response = await WebClient.exchange('/auth', "POST", { email, senha });
    const data = await response.json();

    if (data.token) {
      localStorage.setItem('token', data.token); 
      this.authenticated = true;
      this.findUser(email);
    } else {
      this.authenticated = false;
    }

    return this.authenticated;
  }

  static async findUser(email) {
    const response = await WebClient.exchange(`/usuario/record?email=${email}`, "GET");
    
    if(response.ok) {
      const data = await response.json();
      localStorage.setItem('usuario', JSON.stringify(data));
    } 
  }

  static getUser() {
    return JSON.parse(localStorage.getItem('usuario'));
  }

  static handleLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.authenticated = false;
  }
}

export function useAuth() {
  return {
    checkLogin: () => Auth.checkLogin(),
    handleLogin: (email, senha) => Auth.handleLogin(email, senha),
    getUser: () => Auth.getUser(),
    handleLogout: () => Auth.handleLogout()
  };
}