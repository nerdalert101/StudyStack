import React from 'react'
import styles from './UnitCard.module.css'

/**
 * UnitCard — reusable card for each unit inside a subject page.
 *
 * Props:
 *   unit: object from the subject's data (see src/data/subjects.js)
 */
function UnitCard({ unit }) {
  const handleLink = (url, label) => {
    if (!url || url.includes('your-')) {
      alert(`Link not set yet!\n\nTo add this link:\n1. Open src/data/subjects.js\n2. Find "${unit.title}" under the units array\n3. Paste your URL in the "${label}" field`)
      return
    }
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className={styles.card}>
      <div className={styles.unitBadge}>
        <span className={styles.unitNumber}>{unit.title}</span>
      </div>

      <div className={styles.content}>
        <h4 className={styles.subtitle}>{unit.subtitle}</h4>
        <p className={styles.description}>{unit.description}</p>
      </div>

      <div className={styles.actions}>
        <button
          className={`${styles.btn} ${styles.btnNotes}`}
          onClick={() => handleLink(unit.notesUrl, 'notesUrl')}
        >
          <span>📄</span> Notes
        </button>
        
      </div>
    </div>
  )
}

export default UnitCard
