import NavbarDashboard from '../../components/NavbarDashoard'
import NewsletterDashboard from '../../components/NewsletterDashboard'

const NewsletterAdmPage = () => {
  return (
   <>
   <div className="dashboard-container">
      <NavbarDashboard />
      
      <main className='main-dashboard-container-inicial'>
       <NewsletterDashboard />
      </main>
    </div>
   </>
  )
}

export default NewsletterAdmPage