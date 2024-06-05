import './style.css'
import './acessibilidade.css'

import ManagerRoutes from './helpers/route/ManagerRoutes'
import { AuthProvider } from './helpers/auth/AuthContext'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ManagerRoutes />
      </AuthProvider>
    </BrowserRouter>
  )
}