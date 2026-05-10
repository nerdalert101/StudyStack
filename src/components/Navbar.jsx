import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <header className={styles.navbar}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoIcon}>⚡</span>
          <span className={styles.logoText}>StudyStack</span>
        </Link>

        <nav className={styles.nav}>
          <Link to="/" className={`${styles.navLink} ${isHome ? styles.active : ''}`}>
            Home
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navLink}
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
