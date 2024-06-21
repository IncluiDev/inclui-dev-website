import './style.css'
import './acessibilidade.css'

import ManagerRoutes from './helpers/route/ManagerRoutes'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
        <ManagerRoutes />
    </BrowserRouter>
  )
}