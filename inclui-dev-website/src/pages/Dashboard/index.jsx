import ContinuarAssistindo from "../../components/ContinuarAssistindo";
import CursosDashboard from "../../components/CursosDashboard";
import Navbar from "../../components/NavbarDashoard";
import TopoDashboard from "../../components/TopoDashboard";


export default function Dashboard() {
    return (
      <>
        <Navbar/>
        <TopoDashboard/>
        <ContinuarAssistindo/>
        <CursosDashboard/>
      </>
    )
}