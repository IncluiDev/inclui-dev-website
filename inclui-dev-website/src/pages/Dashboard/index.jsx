import './style.css'

import ContinuarAssistindo from "../../components/ContinuarAssistindo";
import CursosDashboard from "../../components/CursosDashboard";
import Navbar from "../../components/NavbarDashoard";
import TopoDashboard from "../../components/TopoDashboard";


export default function Dashboard() {
    return (
      <>
        <Navbar/>
        
        <main className='main-dashboard'>
          <TopoDashboard/>
          <ContinuarAssistindo/>
          <CursosDashboard/>
        </main>
      </>
    )
}