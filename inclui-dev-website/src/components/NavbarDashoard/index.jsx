import styles from './style.css'

export default function Navbar(props) {
    return(
        <aside className={styles.aside}>

        <header className={styles.header}>
          <Image
          src={asideLogo}
          />
          <h1 className={styles.headerTitle}> BLACKOUT </h1>
        </header>

      <nav className={styles.nav}>

          <a className={`${props.linkDasboardColor} ${styles.navLink}`} href="/dashboard"> <Image src={props.imageDashboard}  /> <span className={styles.navText}>Dashboard</span> </a>
          <a className={`${props.linkTarifaColor} ${styles.navLink}`} href="/tarifa"> <Image src={props.imageTarifa}  /> <span className={styles.navText}>Tarifa</span> </a>
          <a className={`${props.linkNewsletterColor} ${styles.navLink}`} href="/newsletter"> <Image src={props.imageNewsletter}  /> <span className={styles.navText}>Newsletter</span> </a>

      </nav>

          <a className={`${styles.logoutLink}`} href="/"> <Image src={logOut}  /> <span className={styles.navText}>Sair</span> </a>

    </aside>
    )
}
