import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import BgBlobs from '../../components/BgBlobs'
import UnitCard from '../../components/UnitCard'
import { feeeResources } from '../../data/subjects'
import styles from './FEEEPage.module.css'

/**
 * FEEEPage — Resources page for feee subject.
 *
 * To add links:
 *   Open src/data/subjects.js and update the feeeResources object.
 *
 * To duplicate this for another subject:
 *   Copy this file and its .module.css to src/pages/YourSubject/
 *   and create a matching data entry in subjects.js.
 */   
function FEEEPage() {
  const navigate = useNavigate()

  const handleTopLink = (item) => {
    if (!item.url || item.url.includes('your-')) {
      alert(
        `Link not set yet!\n\nTo add this link:\n1. Open src/data/subjects.js\n2. Find the topLinks array in feeeResources\n3. Paste your URL in the "${item.id}" entry`
      )
      return
    }
    window.open(item.url, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <BgBlobs />
      <Navbar />

      <div className="page">
        {/* ── PAGE HEADER ───────────────────────── */}
        <header className={styles.pageHeader}>
          <div className={`container ${styles.headerInner}`}>
            <button className={styles.backBtn} onClick={() => navigate('/')}>
              ← Back
            </button>

            <div className={styles.titleRow}>
              <span className={styles.subjectIcon}>🗄️</span>
              <div>
                <p className={styles.breadcrumb}>Core Subject</p>
                <h1 className={styles.pageTitle}>FEEE</h1>
                <p className={styles.pageSubtitle}>Fundamentals of Electrical and Electronics Engineering</p>
              </div>
            </div>
          </div>
        </header>

        {/* ── TOP RESOURCE CARDS ────────────────── */}
        <section className={styles.topSection}>
          <div className="container">
            <h2 className={styles.sectionLabel}>Quick Access</h2>
            <div className={styles.topGrid}>
              {feeeResources.topLinks.map((item) => (
                <button
                  key={item.id}
                  className={styles.topCard}
                  onClick={() => handleTopLink(item)}
                >
                  <span className={styles.topIcon}>{item.icon}</span>
                  <div className={styles.topInfo}>
                    <span className={styles.topLabel}>{item.label}</span>
                    <span className={styles.topDesc}>{item.description}</span>
                  </div>
                  <span className={styles.topArrow}>→</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── UNIT CARDS ────────────────────────── */}
        <section className={styles.unitsSection}>
          <div className="container">
            <h2 className={styles.sectionLabel}>Unit-wise Resources</h2>
            <div className={styles.unitsGrid}>
              {feeeResources.units.map((unit, i) => (
                <div
                  key={unit.id}
                  className="fade-up"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <UnitCard unit={unit} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOOTER ───────────────────────────── */}
        <footer className={styles.footer}>
          <div className="container">
            <p>Engineering Resource Hub · FEEE</p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default FEEEPage  
